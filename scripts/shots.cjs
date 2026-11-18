// Full-page screenshots of the static export (out/) at desktop + mobile.
// Usage: node scripts/shots.cjs  (serves ./out on a random port, writes ../website-shots/*.jpg)
const path = require('path')
const fs = require('fs')
const http = require('http')
const { chromium } = require(path.join(process.env.PW_CORE || 'C:/Users/husai/Desktop/Construction website/structure1-construction/node_modules/playwright-core'))

const OUT = path.resolve(__dirname, '..', 'out')
const SHOTS = path.resolve(__dirname, '..', '..', 'website-shots')
fs.mkdirSync(SHOTS, { recursive: true })

const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.jpg': 'image/jpeg', '.png': 'image/png', '.txt': 'text/plain', '.xml': 'application/xml', '.woff2': 'font/woff2' }
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0])
  let file = path.join(OUT, p)
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html')
  if (!fs.existsSync(file)) { res.writeHead(404); return res.end('nf') }
  res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' })
  fs.createReadStream(file).pipe(res)
})

;(async () => {
  await new Promise((r) => server.listen(0, '127.0.0.1', r))
  const base = `http://127.0.0.1:${server.address().port}`
  const browser = await chromium.launch({ channel: 'chrome' }).catch(() => chromium.launch())
  const report = {}
  for (const [name, vp] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
    const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1, isMobile: name === 'mobile' })
    const page = await ctx.newPage()
    for (const route of ['/', '/gallery/', '/contact/']) {
      await page.goto(base + route, { waitUntil: 'networkidle' })
      await page.evaluate(async () => {
        document.querySelectorAll('img').forEach((i) => (i.loading = 'eager'))
        for (let y = 0; y < document.documentElement.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)) }
        window.scrollTo(0, 0)
      })
      await page.waitForFunction(() => [...document.images].every((i) => i.complete && i.naturalWidth > 0), null, { timeout: 15000 })
      await page.waitForTimeout(500)
      const file = path.join(SHOTS, `${name}-${route.replace(/\//g, '') || 'home'}.jpg`)
      await page.screenshot({ path: file, fullPage: true, type: 'jpeg', quality: 82 })
      report[`${name}${route}`] = { file, images: await page.evaluate(() => document.images.length), broken: await page.evaluate(() => [...document.images].filter((i) => i.naturalWidth === 0).map((i) => i.src)) }
    }
    if (name === 'mobile') {
      await page.goto(base + '/', { waitUntil: 'networkidle' })
      await page.click('button[aria-controls=mobile-menu]')
      await page.waitForTimeout(300)
      await page.screenshot({ path: path.join(SHOTS, 'mobile-menu.jpg'), type: 'jpeg', quality: 82 })
    }
    await ctx.close()
  }
  await browser.close(); server.close()
  console.log(JSON.stringify(report, null, 1))
})().catch((e) => { console.error(e); process.exit(1) })
