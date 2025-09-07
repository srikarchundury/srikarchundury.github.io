
import Link from 'next/link';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PsychologyIcon from '@mui/icons-material/Psychology';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ChatIcon from '@mui/icons-material/Chat';
import { siteConfig } from '../utils/siteConfig';
import { colors } from '../utils/colors';
import Box from '@mui/material/Box';
import Head from 'next/head';

const iconMap = {
    MenuBook: <MenuBookIcon fontSize="large" />,
    MusicNote: <MusicNoteIcon fontSize="large" />,
    Psychology: <PsychologyIcon fontSize="large" />,
    Instagram: <InstagramIcon fontSize="large" />,
    Twitter: <TwitterIcon fontSize="large" />,
    Chat: <ChatIcon fontSize="large" />,
};

const blogSections = siteConfig.blogSections.map(section => ({
    ...section,
    icon: iconMap[section.icon] || null,
}));

export default function BlogPage() {
        return (
            <>
                <Head>
                    <title>Blog | Srikar Chundury</title>
                </Head>
                <div>
                    <div style={{ marginBottom: 24 }}>
                        <h1 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: 0.5, color: colors.primary, fontFamily: 'serif', margin: 0 }}>Blog</h1>
                          <div style={{ width: 60, height: 4, background: colors.blogUnderline, borderRadius: 2, marginTop: 8, marginBottom: 4 }} />
                          <span style={{ color: colors.mutedText, fontSize: '1rem', fontStyle: 'italic' }}>
                            Personal writing, music, and social links
                        </span>
                    </div>
                    <ol style={{ paddingLeft: 0, margin: 0 }}>
                        {blogSections.map((section, idx) => (
                                        <li key={idx} style={{
                                            marginBottom: 18,
                                            listStyle: 'none',
                                            borderLeft: `3px solid ${colors.shadowBlue}`,
                                            paddingLeft: 18,
                                            boxShadow: 'none',
                                            background: colors.blogBg,
                                            borderRadius: 6,
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            transition: 'background 0.2s',
                                        }}>
                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                    {section.icon}
                                    {(section.title === 'X' || section.title === 'Threads' || section.title === 'Instagram') ? (
                                        <a href={section.href} target="_blank" rel="noopener noreferrer" style={{ color: colors.shadowBlue, fontWeight: 600, fontSize: '1.08em', textDecoration: 'underline', fontFamily: 'serif' }}>{section.title}</a>
                                    ) : (
                                        <Link href={section.href} style={{ color: colors.shadowBlue, fontWeight: 600, fontSize: '1.08em', textDecoration: 'underline', fontFamily: 'serif' }}>{section.title}</Link>
                                    )}
                                </span>
                                  <div style={{ fontSize: '0.97rem', color: colors.mutedText, marginTop: 4 }}>{section.description}</div>
                            </li>
                        ))}
                    </ol>
                </div>
            </>
        );
}