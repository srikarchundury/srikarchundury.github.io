// Breadcrumbs.js
import React from 'react';
import Link from 'next/link';
import { Box, Typography, Breadcrumbs as MUIBreadcrumbs } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { siteConfig } from '../utils/siteConfig';



// Build route map from siteConfig
const routeMap = {};
siteConfig.navSections.forEach(section => {
  routeMap[section.href] = section.title;
});
siteConfig.blogSections.forEach(section => {
  routeMap[section.href] = section.title;
});

function getBreadcrumbs(pathname) {
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
    { href: '/', label: <HomeIcon sx={{ fontSize: 18, mb: '-2px' }} /> },
    ...crumbs,
  ];
}

export default function Breadcrumbs({ pathname }) {
  const crumbs = getBreadcrumbs(pathname);
  return (
    <Box sx={{ ml: 2, mr: 2, display: 'flex', alignItems: 'center', minWidth: 0 }}>
      <MUIBreadcrumbs separator="→" aria-label="breadcrumb" sx={{ color: 'inherit', fontFamily: 'serif', fontSize: '1.05rem' }}>
        {crumbs.map((crumb, idx) =>
          idx === crumbs.length - 1 ? (
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
