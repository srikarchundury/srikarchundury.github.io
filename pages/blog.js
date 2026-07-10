
import Link from 'next/link';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PsychologyIcon from '@mui/icons-material/Psychology';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ChatIcon from '@mui/icons-material/Chat';
import { siteConfig } from '../utils/siteConfig';
import { useLinks } from '../components/LinksContext';
import { colors } from '../utils/colors';
import Box from '@mui/material/Box';
import SeoHead from '../components/SeoHead';

const iconMap = {
    MenuBook: <MenuBookIcon fontSize="medium" />,
    MusicNote: <MusicNoteIcon fontSize="medium" />,
    Psychology: <PsychologyIcon fontSize="medium" />,
    Instagram: <InstagramIcon fontSize="medium" />,
    Twitter: <TwitterIcon fontSize="medium" />,
    Chat: <ChatIcon fontSize="medium" />,
};

export default function BlogPage() {
        const { links } = useLinks();
        const blogSections = siteConfig.blogSections.map(section => ({
            ...section,
            href: section.href || links?.blogExternalLinks?.[section.linkKey] || links?.social?.[section.linkKey],
            icon: iconMap[section.icon] || null,
        }));

        return (
            <>
                <SeoHead
                    title="Blog"
                    description="Personal blog by Srikar Chundury covering books, music, and notes."
                    path="/blog"
                    noindex
                />
                <div>
                    <div style={{ marginBottom: 24 }}>
                        <h1 style={{ fontSize: 'clamp(1.55rem, 1.35rem + 1vw, 2rem)', fontWeight: 700, letterSpacing: 0.3, color: colors.primary, fontFamily: 'serif', margin: 0 }}>Blog</h1>
                          <div style={{ width: 60, height: 4, background: colors.blogUnderline, borderRadius: 2, marginTop: 8, marginBottom: 4 }} />
                          <span style={{ color: colors.mutedText, fontSize: '0.98rem', fontStyle: 'italic' }}>
                                                        Notes and external links
                        </span>
                    </div>
                    <ol style={{ paddingLeft: 0, margin: 0 }}>
                        {blogSections.map((section, idx) => (
                                        <li key={idx} style={{
                                            marginBottom: 'clamp(12px, 1.8vw, 18px)',
                                            listStyle: 'none',
                                            borderLeft: `3px solid ${colors.shadowBlue}`,
                                            paddingLeft: 'clamp(12px, 1.8vw, 18px)',
                                            boxShadow: 'none',
                                            background: colors.blogBg,
                                            borderRadius: 6,
                                            paddingTop: 9,
                                            paddingBottom: 9,
                                            transition: 'background 0.2s',
                                        }}>
                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                    {section.icon}
                                    {section.linkKey && section.href ? (
                                        <a href={section.href} target="_blank" rel="noopener noreferrer" style={{ color: colors.shadowBlue, fontWeight: 600, fontSize: '1rem', textDecoration: 'underline', fontFamily: 'serif' }}>{section.title}</a>
                                    ) : section.linkKey ? (
                                        <span style={{ color: colors.shadowBlue, fontWeight: 600, fontSize: '1rem', fontFamily: 'serif' }}>{section.title}</span>
                                    ) : (
                                        <Link href={section.href} style={{ color: colors.shadowBlue, fontWeight: 600, fontSize: '1rem', textDecoration: 'underline', fontFamily: 'serif' }}>{section.title}</Link>
                                    )}
                                </span>
                                  <div style={{ fontSize: '0.93rem', color: colors.mutedText, marginTop: 4, lineHeight: 1.5 }}>{section.description}</div>
                            </li>
                        ))}
                    </ol>
                </div>
            </>
        );
}