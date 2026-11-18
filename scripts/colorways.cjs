// One build, then screenshot the homepage once per palette by swapping data-palette at runtime.
// Usage: npm run build && node scripts/colorways.cjs
const path = require('path')
const fs = require('fs')
const http = require('http')
const { chromium } = require(process.env.PW_CORE || 'C:/Users/husai/Desktop/Construction website/structure1-construction/node_modules/playwright-core')

const palettes = {
  'navy-gold': 'A · Navy + Gold (from logo)',
  'charcoal-brass': 'B · Charcoal + Brass (architectural)',
  'forest-sand': 'C · Forest + Sand (warm, natural)',
  'slate-terracotta': 'D · Slate + Terracotta (modern, bold)',
}
const OUT = path.resolve(__dirname, '..', 'out')
const DEST = path.resolve(__dirname, '..', '..', 'website-shots', 'colorways')
fs.mkdirSync(DEST, { recursive: true })
const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.jpg': 'image/jpeg', '.png': 'image/png', '.woff2': 'font/woff2' }
const server = http.createServer((req, res) => {
  let file = path.join(OUT, decodeURIComponent(req.url.split('?')[0]))
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html')
  if (!fs.existsSync(file)) { res.writeHead(404); return res.end() }
  res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' })
  fs.createReadStream(file).pipe(res)
})

;(async () => {
  await new Promise((r) => server.listen(0, '127.0.0.1', r))
  const base = `http://127.0.0.1:${server.address().port}`
  const browser = await chromium.launch({ channel: 'chrome' }).catch(() => chromium.launch())
  for (const [name, vp] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
    const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1, isMobile: name === 'mobile' })
    const page = await ctx.newPage()
    await page.goto(base + '/', { waitUntil: 'networkidle' })
    await page.evaluate(async () => {
      document.querySelectorAll('img').forEach((i) => (i.loading = 'eager'))
      for (let y = 0; y < document.documentElement.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 50)) }
      window.scrollTo(0, 0)
    })
    await page.waitForFunction(() => [...document.images].every((i) => i.complete && i.naturalWidth > 0), null, { timeout: 15000 })
    for (const key of Object.keys(palettes)) {
      await page.evaluate((k) => document.documentElement.setAttribute('data-palette', k), key)
      await page.waitForTimeout(250)
      const navy = await page.evaluate(() => getComputedStyle(document.querySelector('header > div')).backgroundColor)
      await page.screenshot({ path: path.join(DEST, `${key}-${name}-home.jpg`), fullPage: true, type: 'jpeg', quality: 82 })
      console.log(name, key, 'topbar bg =', navy)
    }
    await ctx.close()
  }
  await browser.close(); server.close()
  fs.writeFileSync(path.join(DEST, 'labels.json'), JSON.stringify(palettes, null, 1))
})().catch((e) => { console.error(e); process.exit(1) })
