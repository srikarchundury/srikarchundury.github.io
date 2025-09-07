import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import CircularProgress from '@mui/material/CircularProgress';
import { readJSON } from '../../utils/readRaw';
import { colors } from '../../utils/colors';

export default function SongsBlogPage() {
  const [songs, setSongs] = useState(null);
  useEffect(() => {
    readJSON('https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/json_data/songs.json.bin')
      .then(setSongs)
      .catch(() => setSongs([]));
  }, []);

  if (!songs) return (
    <div style={{ padding: 32, textAlign: 'center' }}><CircularProgress /></div>
  );

  return (
    <>
      <Head>
        <title>Songs | Blog | Srikar Chundury</title>
      </Head>
  <div>
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: 0.5, color: colors.primary, fontFamily: 'serif', margin: 0 }}>Songs & Vibes</h1>
          <div style={{ width: 60, height: 4, background: colors.shadowBlue, borderRadius: 2, marginTop: 8, marginBottom: 4 }} />
        </div>
        <ol style={{ paddingLeft: 0, margin: 0 }}>
          {songs.map((song, i) => (
            <li key={i} style={{ marginBottom: 24, listStyle: 'none', borderLeft: `3px solid ${colors.shadowBlue}`, paddingLeft: 18 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ fontWeight: 600, fontSize: '1.08rem', color: colors.bodyText, fontFamily: 'serif' }}>{song.title}</span>
              </div>
              {song.comment && (
                <div style={{ fontSize: '0.97rem', color: colors.text, marginTop: 2, fontStyle: 'italic' }}>{song.comment}</div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
