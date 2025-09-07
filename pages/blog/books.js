import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import CircularProgress from '@mui/material/CircularProgress';
import { readJSON } from '../../utils/readRaw';
import { colors } from '../../utils/colors';

export default function BooksBlogPage() {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    readJSON('https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/json_data/books.json.bin')
      .then(setBooks)
      .catch(() => setBooks([]));
  }, []);

  if (!books) return (
    <div style={{ padding: 32, textAlign: 'center' }}><CircularProgress /></div>
  );

  return (
    <>
      <Head>
        <title>Books | Blog | Srikar Chundury</title>
      </Head>
  <div>
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: 0.5, color: colors.primary, fontFamily: 'serif', margin: 0 }}>Books</h1>
          <div style={{ width: 60, height: 4, background: colors.shadowBlue, borderRadius: 2, marginTop: 8, marginBottom: 4 }} />
        </div>
        <ol style={{ paddingLeft: 0, margin: 0 }}>
          {books.map((book, i) => (
            <li key={i} style={{ marginBottom: 24, listStyle: 'none', borderLeft: `3px solid ${colors.shadowBlue}`, paddingLeft: 18 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ fontWeight: 600, fontSize: '1.08rem', color: colors.bodyText, fontFamily: 'serif' }}>{book.title}</span>
              </div>
              {book.review && (
                <div style={{ fontSize: '0.97rem', color: colors.text, marginTop: 2, fontStyle: 'italic' }}>{book.review}</div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
