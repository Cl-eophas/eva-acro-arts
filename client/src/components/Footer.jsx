import { getImage } from '../data/images';
import { brand } from '../data/content';
import { whatsappUrl } from '../config/whatsapp';

const socialIcons = {
  instagram: (
    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zm0 2A2.5 2.5 0 119.5 12 2.5 2.5 0 0112 9.5zM17.5 6a1 1 0 100 2 1 1 0 000-2z" />
  ),
  facebook: (
    <path d="M13.5 21v-7h2.3l.35-2.7h-2.65V9.5c0-.78.22-1.32 1.34-1.32h1.43V5.77c-.25-.03-1.1-.1-2.1-.1-2.08 0-3.5 1.27-3.5 3.6v2.03H8v2.7h2.37V21z" />
  ),
  youtube: (
    <path d="M21.6 7.2s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C15.9 4 12 4 12 4h0s-3.9 0-6.8.3c-.4 0-1.2.1-2 .9-.6.6-.8 2-.8 2S2 8.9 2 10.6v1.8c0 1.7.2 3.4.2 3.4s.2 1.4.8 2c.8.8 1.8.8 2.3.9 1.7.2 6.7.3 6.7.3s3.9 0 6.8-.3c.4 0 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.7.2-3.4v-1.8c0-1.7-.2-3.4-.2-3.4zM9.9 14.6V8.9l5.4 2.9z" />
  ),
  tiktok: (
    <path d="M16.5 2h-3v13.2a2.6 2.6 0 11-2.6-2.6c.2 0 .5 0 .7.1V9.5a5.8 5.8 0 105 5.7V8.3a7.4 7.4 0 004.4 1.4V6.6A4.5 4.5 0 0116.5 2z" />
  ),
};

export default function Footer() {
  const logo = getImage('logo-transparent');
  const year = new Date().getFullYear();

  const socialLinks = Object.entries(brand.social).filter(([, url]) => url && !url.startsWith('['));

  return (
    <footer className="relative overflow-x-clip bg-ink-950 border-t border-white/10 px-5 py-16 sm:px-6" role="contentinfo">
      <div className="mx-auto grid w-full min-w-0 max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="min-w-0">
          <img src={logo.webp || logo.jpg} alt="EVA ACRODANCE AND ART logo" className="h-16 w-auto max-h-16 max-w-full" />
          <p className="mt-4 font-script text-2xl text-gold-300">{brand.tagline}</p>
        </div>

        <FooterCol title="Explore">
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#training">Training</FooterLink>
          <FooterLink href="#performances">Performances</FooterLink>
          <FooterLink href="#gallery">Gallery</FooterLink>
        </FooterCol>

        <FooterCol title="Connect">
          <FooterLink href="#book">Booking</FooterLink>
          <FooterLink href={whatsappUrl}>WhatsApp</FooterLink>
          <FooterLink href={`tel:${brand.phoneHref}`}>{brand.phone}</FooterLink>
          <FooterLink href="#book">{brand.location}</FooterLink>
          {brand.email && !brand.email.startsWith('[') && (
            <FooterLink href={`mailto:${brand.email}`}>{brand.email}</FooterLink>
          )}
        </FooterCol>

        <FooterCol title="Follow">
          {socialLinks.length === 0 ? (
            <p className="text-sm text-white/40">[ADD SOCIAL LINKS]</p>
          ) : (
            <div className="flex gap-3">
              {socialLinks.map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-gold-400 hover:text-gold-300"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    {socialIcons[key]}
                  </svg>
                </a>
              ))}
            </div>
          )}
        </FooterCol>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-white/40">
        &copy; {year} {brand.fullName}. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">{title}</h3>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <a href={href} className="text-sm text-white/70 hover:text-gold-300 transition w-fit max-w-full break-words">
      {children}
    </a>
  );
}
