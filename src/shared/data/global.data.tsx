import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconChevronDown,
  IconRss,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'This template is made with Next.js 14 using the new App Router »',
    href: 'https://nextjs.org/blog/next-14',
  },
  callToAction2: {
    text: 'Follow @onWidget on Twitter',
    href: 'https://twitter.com/intent/user?screen_name=onwidget',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Services',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
    {
      label: 'FAQs',
      href: '/faqs',
    },
  ],
  actions: [
    {
      text: 'Get Quote',
      href: '/contact#form',
      targetBlank: false,
      btnType: 'primary',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  title: 'MetalKraft CNC',
  links: [],
  columns: [
    {
      title: 'Our Address',
      links: [
        {
          label: 'Plot 23, Industrial Area',
          href: '#',
        },
        {
          label: 'Sri City, Andhra Pradesh',
          href: '#',
        },
        {
          label: 'India',
          href: '#',
        },
      ],
    },
    {
      title: 'Contact',
      links: [
        {
          label: 'Mobile: +91 9876543210',
          href: 'tel:+919876543210',
        },
        {
          label: 'Email: metalkrft@gmail.com',
          href: 'mailto:metalkrft@gmail.com',
        },
      ],
    },
    {
      title: 'Working Hours',
      links: [
        {
          label: 'Monday - Saturday:',
          href: '#',
        },
        {
          label: '9:00 AM - 6:00 PM',
          href: '#',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5"> {new Date().getFullYear()}</span>
      <span>MetalKraft CNC. All rights reserved.</span>
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [],
  columns: [
    {
      title: 'Our Address',
      texts: [
        'MetalKraft CNC',
        'Plot 23, Industrial Area',
        'Sri City, Andhra Pradesh, India'
      ],
    },
    {
      title: 'Contact',
      texts: [
        'Mobile: +91 9876543210',
        'Email: metalkrft@gmail.com'
      ],
    },
    {
      title: 'Working Hours',
      texts: [
        'Monday - Saturday:',
        '9:00 AM - 6:00 PM'
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5"> {new Date().getFullYear()}</span>
      <span>MetalKraft CNC. All rights reserved.</span>
    </div>
  ),
};
