import { company } from './content'

const icons = {
  instagram: 'M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.9-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 2.2c2.7 0 3 0 4 .1 2.4.1 3.6 1.3 3.7 3.7.1 1 .1 1.3.1 4s0 3-.1 4c-.1 2.4-1.3 3.6-3.7 3.7-1 .1-1.3.1-4 .1s-3 0-4-.1c-2.4-.1-3.6-1.3-3.7-3.7-.1-1-.1-1.3-.1-4s0-3 .1-4C4.4 3.6 5.6 2.4 8 2.3c1-.1 1.3-.1 4-.1ZM12 .5C9.3.5 9 .5 7.9.6 4.3.7.7 2.6.6 7.9.5 9 .5 9.3.5 12s0 3 .1 4.1c.1 3.6 2 5.3 7.3 5.4C9 21.5 9.3 21.5 12 21.5s3 0 4.1-.1c3.6-.1 5.3-2 5.4-7.3.1-1.1.1-1.4.1-4.1s0-3-.1-4.1C21.3 2.6 19.4.7 16.1.6 15 .5 14.7.5 12 .5Z',
  facebook: 'M13.5 21.5v-8h2.7l.4-3.2h-3.1V8.3c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.7v3.2h2.7v8h3.1Z',
} as const

export default function SocialLinks({ className = '', iconClass = 'h-5 w-5' }: { className?: string; iconClass?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {company.social.map(({ name, href, icon }) => (
        <li key={name}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`UB Design and Construction on ${name}`} className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] hover:text-gold">
            <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true" focusable="false"><path d={icons[icon]} /></svg>
          </a>
        </li>
      ))}
    </ul>
  )
}
