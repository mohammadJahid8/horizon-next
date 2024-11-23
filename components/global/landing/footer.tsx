import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Linkedin, Youtube } from 'lucide-react';
import Container from '../container';
import Logo from '../logo';

export default function Footer() {
  const sections = [
    {
      title: 'Resources',
      links: [
        { name: 'About us', href: '#' },
        { name: 'Terms of use', href: '#' },
        { name: 'Privacy policy', href: '#' },
        { name: 'Cookie Setting', href: '#' },
        { name: 'Contact us', href: '#' },
      ],
    },
    {
      title: 'Quick Link',
      links: [
        { name: 'Sign up', href: '#' },
        { name: 'Login', href: '#' },
        { name: 'Account', href: '#' },
        { name: 'Become a Partner', href: '#' },
        { name: 'FAQs', href: '#' },
      ],
    },
    {
      title: 'Help and Support',
      links: [
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Help', href: '#' },
        { name: 'Cookies', href: '#' },
        { name: 'Community', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook className='h-6 w-6' />, name: 'Facebook', href: '#' },
    { icon: <Linkedin className='h-6 w-6' />, name: 'LinkedIn', href: '#' },
    { icon: <Youtube className='h-6 w-6' />, name: 'YouTube', href: '#' },
  ];

  const appLinks = [
    {
      src: '/appstore-outlined.svg',
      alt: 'Download on the App Store',
      href: '#',
    },
    {
      src: '/playstore-outlined.svg',
      alt: 'Get it on Google Play',
      href: '#',
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full bg-primary text-white'>
      <Container className='py-16 md:py-24'>
        <div className='grid grid-cols-1 gap-12 text-center md:text-left md:grid-cols-4'>
          <div>
            <Logo className='text-white' />
          </div>

          {sections.map((section, index) => (
            <div key={index} className='space-y-8'>
              <h3 className='text-lg md:text-xl font-semibold'>
                {section.title}
              </h3>
              <ul className='space-y-4 font-medium text-sm md:text-base'>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='mt-12 grid gap-8 text-center md:text-left md:grid-cols-4'>
          {/* <div></div> */}
          <div></div>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Follow us</h3>
            <div className='flex gap-4 justify-center md:justify-start'>
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className='hover:opacity-75'
                >
                  {social.icon}
                  <span className='sr-only'>{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Download our apps</h3>
            <div className='flex gap-4 justify-center md:justify-start'>
              {appLinks.map((app, index) => (
                <Link key={index} href={app.href} className='hover:opacity-75'>
                  <Image
                    src={app.src}
                    alt={app.alt}
                    width={120}
                    height={40}
                    className='h-10'
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-8 pt-8 text-sm text-center md:text-left grid grid-cols-1 md:grid-cols-4'>
          <div></div>
          <p>Horizzon © {currentYear} all rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
