import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import CircularProgress from '@mui/material/CircularProgress';
import { readJSON } from '../../utils/readRaw';
import { colors } from '../../utils/colors';
import { siteConfig } from '../../utils/siteConfig';

export default function LifeBlogPage() {
  const [life, setLife] = useState(null);
  useEffect(() => {
    readJSON(siteConfig.data.life)
      .then(setLife)
      .catch(() => setLife([]));
  }, []);

  if (!life) return (
    <div style={{ padding: 32, textAlign: 'center' }}><CircularProgress /></div>
  );

  return (
    <>
      <Head>
        <title>Life | Blog | Srikar Chundury</title>
      </Head>
  <div>
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: 0.5, color: colors.primary, fontFamily: 'serif', margin: 0 }}>Life & Thoughts</h1>
          <div style={{ width: 60, height: 4, background: colors.shadowBlue, borderRadius: 2, marginTop: 8, marginBottom: 4 }} />
        </div>
        <ol style={{ paddingLeft: 0, margin: 0 }}>
          {life.map((item, i) => (
            <li key={i} style={{ marginBottom: 24, listStyle: 'none', borderLeft: `3px solid ${colors.shadowBlue}`, paddingLeft: 18 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ fontWeight: 600, fontSize: '1.08rem', color: colors.bodyText, fontFamily: 'serif' }}>{item.topic}</span>
              </div>
              {item.thought && (
                <div style={{ fontSize: '0.97rem', color: colors.text, marginTop: 2, fontStyle: 'italic' }}>{item.thought}</div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
