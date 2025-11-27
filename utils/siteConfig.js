// Centralized site configuration for all user-specific and navigation data
// Usage: import { siteConfig } from '../utils/siteConfig';

export const siteConfig = {
  name: 'Srikar Chundury',
  email: 'schundu3@ncsu.edu',
  social: {
    github: 'https://github.com/srikarchundury',
    linkedin: 'https://www.linkedin.com/in/srikarchundury/',
    instagram: 'https://www.instagram.com/chundurysrikar',
    twitter: 'https://x.com/chundurysrikar',
    threads: 'https://www.threads.net/@chundurysrikar',
    orcid: 'https://orcid.org/0000-0002-1234-5678', // update as needed
    googleScholar: 'https://scholar.google.com/citations?user=FITobwkAAAAJ&hl=en&authuser=2', // update as needed
  },
  profileImages: {
    selfie: 'https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/image_data/me.jpeg.bin',
    me: 'https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/image_data/profile_pic.jpeg.bin',
  },
  images: [
    {
      url: 'https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/image_data/blue_lake_telluride.jpeg.bin',
      label: 'Blue Lake, Telluride, CO'
    },
    {
      url: 'https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/image_data/lake_raleigh.jpeg.bin',
      label: 'Lake Raleigh, Raleigh, NC'
    }
  ],
  // Remote data URLs hosted in the companion repo
  data: {
    bio: 'https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/json_data/bio.json.bin',
    experience: 'https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/json_data/experience.json.bin',
    projects: 'https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/json_data/projects.json.bin',
    publications: 'https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/json_data/publications.json.bin',
    honors: 'https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/json_data/honors.json.bin',
    education: 'https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/json_data/education.json.bin',
    books: 'https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/json_data/books.json.bin',
    life: 'https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/json_data/life.json.bin',
    songs: 'https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/json_data/songs.json.bin',
  },
  // Avatar / misc image links used by pages
  remoteImages: {
    meImg: 'https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/image_data/profile_pic.jpeg.bin',
  },
  // Additional files and people
  advisor: {
    name: 'Dr. Frank Mueller',
    url: 'https://arcb.csc.ncsu.edu/~mueller/'
  },
  // Add resume link (binary) hosted in companion data repo
  files: {
    resume: 'https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/pdf_data/resume.pdf.bin'
  },
  navSections: [
  { title: 'Home', href: '/home', icon: 'Home' },
    { title: 'Bio', href: '/bio', icon: 'Info' },
    { title: 'Education', href: '/education', icon: 'School' },
    { title: 'Experience', href: '/experience', icon: 'Work' },
    { title: 'Projects', href: '/projects', icon: 'Code' },
    { title: 'Honors', href: '/honors', icon: 'School' },
    { title: 'Publications', href: '/publications', icon: 'Description' },
    { title: 'Blog', href: '/blog', icon: 'MenuBook' },
  ],
  blogSections: [
    {
      title: 'Books I Love',
      description: 'Reflections, summaries, and recommendations of books I’ve read.',
      href: '/blog/books',
      icon: 'MenuBook',
    },
    {
      title: 'Songs & Music',
      description: 'Playlists, moods, and favorite artists—tunes that shape my life.',
      href: '/blog/songs',
      icon: 'MusicNote',
    },
    {
      title: 'Life & Thoughts',
      description: 'Personal insights, struggles, wins, and philosophical meanderings.',
      href: '/blog/life',
      icon: 'Psychology',
    },
    {
      title: 'Instagram',
      description: 'Snapshots and stories—visual highlights of my journey.',
      href: 'https://www.instagram.com/chundurysrikar',
      icon: 'Instagram',
    },
    {
      title: 'X',
      description: 'Quick takes, tech threads, and in-the-moment updates.',
      href: 'https://x.com/chundurysrikar',
      icon: 'Twitter',
    },
    {
      title: 'Threads',
      description: 'Ongoing conversations, community, and thought threads.',
      href: 'https://www.threads.net/@chundurysrikar',
      icon: 'Chat',
    },
  ],
};
