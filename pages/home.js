import Head from 'next/head';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { readImage } from '../utils/readRaw';
import { colors } from '../utils/colors';
import { siteConfig } from '../utils/siteConfig';
import MainContainer from '../components/MainContainer';

const images = siteConfig.images;

export default function HomePage() {
  const [imgSrcs, setImgSrcs] = useState([null, null]);
  const [imgLoaded, setImgLoaded] = useState([false, false]);

  useEffect(() => {
    let isMounted = true;
    setImgLoaded([false, false]);
    Promise.all(images.map(img => readImage(img.url))).then(srcs => {
      if (isMounted) setImgSrcs(srcs);
    });
    return () => { isMounted = false; };
  }, []);

  return (
    <>
      <Head>
        <title>Home | Srikar Chundury</title>
      </Head>
      {/* Images moved above Sections */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: 20, justifyContent: 'flex-start', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: 28 }}>
        {imgSrcs.map((src, i) => (
          <figure key={i} style={{
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            borderRadius: 7,
            border: `1.5px solid ${colors.cardBorder}`,
            background: colors.cardBg,
            width: 270,
            maxWidth: '90vw',
            overflow: 'hidden',
            minHeight: 170,
            boxShadow: `0 1px 8px ${colors.cardShadow}`,
            position: 'relative'
          }}>
            <div style={{ width: '100%', height: 150, position: 'relative', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', background: colors.imageBg }}>
              {src && (
                <img
                  src={src}
                  alt={images[i].label}
                  style={{ width: '100%', height: 150, objectFit: 'cover', display: imgLoaded[i] ? 'block' : 'none', borderRadius: 0, border: 'none', position: 'absolute', top: 0, left: 0 }}
                  onLoad={() => setImgLoaded(l => {
                    const arr = [...l];
                    arr[i] = true;
                    return arr;
                  })}
                />
              )}
              {(!src || !imgLoaded[i]) && (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: 150 }}>
                  <CircularProgress />
                </Box>
              )}
            </div>
            <figcaption style={{ padding: '7px 0 2px 10px', color: colors.primary, fontWeight: 500, background: 'none', width: '100%', textAlign: 'left' }}>{images[i].label}</figcaption>
          </figure>
        ))}
      </div>
      <h1 style={{ fontWeight: 700, letterSpacing: 0.5, color: colors.sectionTitle, margin: 0, marginBottom: 6 }} className="main-heading">Sections</h1>
      <div style={{ width: 54, height: 3, background: colors.shadowBlue, borderRadius: 2, marginTop: 6, marginBottom: 18 }} />
      <div style={{ marginBottom: 18, marginTop: 8 }}>
        <ol style={{ paddingLeft: 0, margin: 0 }}>
          <li style={{ marginBottom: 15, listStyle: 'none', borderLeft: `3px solid ${colors.shadowBlue}`, paddingLeft: 18 }}><Link href="/bio" style={{ color: colors.primary, fontWeight: 500, textDecoration: 'underline' }}>Bio</Link></li>
          <li style={{ marginBottom: 15, listStyle: 'none', borderLeft: `3px solid ${colors.shadowBlue}`, paddingLeft: 18 }}><Link href="/education" style={{ color: colors.primary, fontWeight: 500, textDecoration: 'underline' }}>Education</Link></li>
          <li style={{ marginBottom: 15, listStyle: 'none', borderLeft: `3px solid ${colors.shadowBlue}`, paddingLeft: 18 }}><Link href="/experience" style={{ color: colors.primary, fontWeight: 500, textDecoration: 'underline' }}>Experience</Link></li>
          <li style={{ marginBottom: 15, listStyle: 'none', borderLeft: `3px solid ${colors.shadowBlue}`, paddingLeft: 18 }}><Link href="/projects" style={{ color: colors.primary, fontWeight: 500, textDecoration: 'underline' }}>Projects</Link></li>
          <li style={{ marginBottom: 15, listStyle: 'none', borderLeft: `3px solid ${colors.shadowBlue}`, paddingLeft: 18 }}><Link href="/honors" style={{ color: colors.primary, fontWeight: 500, textDecoration: 'underline' }}>Honors</Link></li>
          <li style={{ marginBottom: 15, listStyle: 'none', borderLeft: `3px solid ${colors.shadowBlue}`, paddingLeft: 18 }}><Link href="/publications" style={{ color: colors.primary, fontWeight: 500, textDecoration: 'underline' }}>Publications</Link></li>
          <li style={{ marginBottom: 15, listStyle: 'none', borderLeft: `3px solid ${colors.shadowBlue}`, paddingLeft: 18 }}><Link href="/blog" style={{ color: colors.primary, fontWeight: 500, textDecoration: 'underline' }}>Blog</Link></li>
        </ol>
      </div>
    </>
  );
}
