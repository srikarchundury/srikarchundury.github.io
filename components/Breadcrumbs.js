// Breadcrumbs.js
import React from 'react';
import Link from 'next/link';
import { Box, Typography, Breadcrumbs as MUIBreadcrumbs, useMediaQuery } from '@mui/material';
import { siteConfig } from '../utils/siteConfig';



// Build route map from siteConfig
const routeMap = {};
siteConfig.navSections.forEach(section => {
  routeMap[section.href] = section.title;
});
siteConfig.blogSections.forEach(section => {
  if (section.href) {
    routeMap[section.href] = section.title;
  }
});
routeMap['/cv'] = 'CV';

function getBreadcrumbs(pathname) {
  if (pathname === '/' || pathname === '/home') {
    return [{ href: '/', label: 'Home' }];
  }
  // Split and accumulate path
  const segments = pathname.split('/').filter(Boolean);
  let path = '';
  const crumbs = segments.map((seg, idx) => {
    path += '/' + seg;
    // For /blog/books, /blog/songs, etc.
    const fullPath = path;
    return {
      href: fullPath,
      label: routeMap[fullPath] || seg.charAt(0).toUpperCase() + seg.slice(1),
    };
  });
  // Always start with Home
  return [
    { href: '/', label: 'Home' },
    ...crumbs,
  ];
}

export default function Breadcrumbs({ pathname }) {
  const crumbs = getBreadcrumbs(pathname);
  const isCompact = useMediaQuery('(max-width:900px)');
  const compactCrumbs = isCompact && crumbs.length > 2
    ? [crumbs[0], crumbs[crumbs.length - 1]]
    : crumbs;

  return (
    <Box sx={{ ml: { xs: 0.5, sm: 1 }, mr: { xs: 0.6, sm: 1.2 }, display: 'flex', alignItems: 'center', minWidth: 0, overflow: 'hidden' }}>
      <MUIBreadcrumbs separator="→" aria-label="breadcrumb" sx={{ color: 'inherit', fontFamily: 'serif', fontSize: { xs: '0.9rem', sm: '0.98rem', md: '1.02rem' }, minWidth: 0, overflow: 'hidden', whiteSpace: 'nowrap' }}>
        {compactCrumbs.map((crumb, idx) =>
          idx === compactCrumbs.length - 1 ? (
            <Typography key={idx} color="text.primary" sx={{ fontWeight: 600, color: 'inherit', fontFamily: 'serif', textDecoration: 'underline' }}>
              {crumb.label}
            </Typography>
          ) : (
            <Link key={idx} href={crumb.href} style={{ color: 'inherit', textDecoration: 'underline', fontWeight: 500 }}>
              {crumb.label}
            </Link>
          )
        )}
      </MUIBreadcrumbs>
    </Box>
  );
}
