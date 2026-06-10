// Centralized site configuration for all user-specific and navigation data
// Usage: import { siteConfig } from '../utils/siteConfig';

export const siteConfig = {
  name: 'Srikar Chundury',
  email: 'schundu3@ncsu.edu',
  linksUrl: 'https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/json_data/links.json.bin',
  navSections: [
    { title: 'Home', href: '/', icon: 'Home' },
    { title: 'Publications', href: '/publications', icon: 'Description' },
    { title: 'Projects', href: '/projects', icon: 'Code' },
    { title: 'Bio', href: '/bio', icon: 'Info' },
    { title: 'Education', href: '/education', icon: 'School' },
    { title: 'Experience', href: '/experience', icon: 'Work' },
    { title: 'Honors', href: '/honors', icon: 'School' },
    // { title: 'Blog', href: '/blog', icon: 'MenuBook' },
  ],
  blogSections: [
    {
      title: 'Books',
      description: 'Notes and summaries from books I have read.',
      href: '/blog/books',
      icon: 'MenuBook',
    },
    {
      title: 'Songs & Music',
      description: 'Selected tracks and playlists.',
      href: '/blog/songs',
      icon: 'MusicNote',
    },
    {
      title: 'Notes',
      description: 'Short personal notes.',
      href: '/blog/life',
      icon: 'Psychology',
    },
    {
      title: 'Instagram',
      description: 'Photos and updates.',
      linkKey: 'instagram',
      icon: 'Instagram',
    },
    {
      title: 'X',
      description: 'Short posts and updates.',
      linkKey: 'twitter',
      icon: 'Twitter',
    },
    {
      title: 'Threads',
      description: 'Posts and discussions.',
      linkKey: 'threads',
      icon: 'Chat',
    },
  ],
};
