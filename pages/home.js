import SeoHead from '../components/SeoHead';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { readImage, readJSON } from '../utils/readRaw';
import { colors } from '../utils/colors';
import { useLinks } from '../components/LinksContext';

function parseYear(input, fallback = 0) {
  const match = String(input || '').match(/(19|20)\d{2}/g);
  if (!match || match.length === 0) return fallback;
  return Number(match[match.length - 1]);
}

function sortByYearDesc(items, key) {
  return [...(items || [])].sort((a, b) => parseYear(b[key], -1) - parseYear(a[key], -1));
}

function landingSectionTitle(landing, sectionKey, fallbackTitle) {
  return landing?.sectionLabels?.[sectionKey] || fallbackTitle;
}

export default function HomePage() {
  const [heroImage, setHeroImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [landing, setLanding] = useState(null);
  const [bio, setBio] = useState(null);
  const [publications, setPublications] = useState([]);
  const [projects, setProjects] = useState([]);
  const [honors, setHonors] = useState([]);
  const [newsVisibleCount, setNewsVisibleCount] = useState(4);
  const { links } = useLinks();

  const loadLandingData = React.useCallback(() => {
    if (!links?.data) return () => {};
    let isMounted = true;
    setLoading(true);
    setError('');

    Promise.all([
      readJSON(links.data.landing).catch(() => ({})),
      readJSON(links.data.bio),
      readJSON(links.data.publications),
      readJSON(links.data.projects).catch(() => []),
      readJSON(links.data.honors),
    ])
      .then(([landingData, bioData, publicationsData, projectsData, honorsData]) => {
        if (!isMounted) return;
        setLanding(landingData || {});
        setBio(bioData || {});
        setPublications(Array.isArray(publicationsData) ? publicationsData : []);
        setProjects(Array.isArray(projectsData) ? projectsData : []);
        setHonors(Array.isArray(honorsData) ? honorsData : []);
        setLoading(false);
      })
      .catch((err) => {
        if (!isMounted) return;
        console.error('Failed to load landing data', err);
        setError('Unable to load landing content. Please try again.');
        setLoading(false);
      });

    return () => { isMounted = false; };
  }, [links]);

  useEffect(() => {
    loadLandingData();
  }, [loadLandingData]);

  useEffect(() => {
    const heroUrl = links?.images?.[0]?.url;
    if (!heroUrl) return;
    let isMounted = true;
    readImage(heroUrl)
      .then((src) => { if (isMounted) setHeroImage(src); })
      .catch(() => {});
    return () => { isMounted = false; };
  }, [links]);

  const counts = landing?.highlights || {};

  const selectedPublications = useMemo(
    () => sortByYearDesc(publications, 'year').slice(0, Math.min(Number(counts.publicationsCount) || 4, 4)),
    [publications, counts.publicationsCount]
  );

  const selectedProjects = useMemo(
    () => sortByYearDesc(projects, 'duration').slice(0, Math.min(Number(counts.projectsCount) || 4, 2)),
    [projects, counts.projectsCount]
  );

  const selectedHonors = useMemo(
    () => sortByYearDesc(honors, 'year').slice(0, Math.min(Number(counts.honorsCount) || 3, 2)),
    [honors, counts.honorsCount]
  );

  const sectionBlocks = {
    publications: (
      <Paper id="selected-publications" elevation={0} sx={sectionCardSx}>
        <SectionHeading title={landingSectionTitle(landing, 'publications', 'Selected Publications')} href="/publications" linkText="All publications" />
        <Stack spacing={1.2}>
          {selectedPublications.map((pub, idx) => (
            <Box key={`${pub.title}-${idx}`}>
              <Typography sx={itemTitleSx}>{pub.title}</Typography>
              <Typography sx={itemSubtleSx}>{pub.venue} {pub.year ? `(${pub.year})` : ''}</Typography>
            </Box>
          ))}
        </Stack>
      </Paper>
    ),
    projects: (
      <Paper elevation={0} sx={sectionCardSx}>
        <SectionHeading title={landingSectionTitle(landing, 'projects', 'Selected Projects')} href="/projects" />
        <Stack spacing={1.1}>
          {selectedProjects.map((project, idx) => (
            <Box key={`${project.title}-${idx}`}>
              <Typography sx={itemTitleSx}>{project.title}</Typography>
              <Typography sx={itemSubtleSx}>{project.duration}</Typography>
            </Box>
          ))}
        </Stack>
      </Paper>
    ),
    honors: (
      <Paper elevation={0} sx={sectionCardSx}>
        <SectionHeading title={landingSectionTitle(landing, 'honors', 'Recent Honors')} href="/honors" linkText="See all" />
        <Stack spacing={1.1}>
          {selectedHonors.map((honor, idx) => (
            <Box key={`${honor.title}-${idx}`}>
              <Typography sx={itemTitleSx}>{honor.title}</Typography>
              <Typography sx={itemSubtleSx}>{honor.year}</Typography>
            </Box>
          ))}
        </Stack>
      </Paper>
    ),
    news: (
      <Paper elevation={0} sx={sectionCardSx}>
        <SectionHeading title={landingSectionTitle(landing, 'news', 'Updates')} />
        <Stack spacing={1.1}>
          {(landing?.news || []).slice(0, newsVisibleCount).map((item, idx) => (
            <Box key={`${item.title}-${idx}`}>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: colors.bodyText, fontWeight: 600, textDecoration: 'underline', lineHeight: 1.35 }}>
                  {item.title}
                </a>
              ) : (
                <Typography sx={itemTitleSx}>{item.title}</Typography>
              )}
              <Typography sx={itemSubtleSx}>{item.date}</Typography>
            </Box>
          ))}
        </Stack>
        {(landing?.news || []).length > newsVisibleCount ? (
          <Box sx={{ textAlign: 'right', mt: 1.2 }}>
            <Box
              component="button"
              type="button"
              onClick={() => setNewsVisibleCount((count) => count + 4)}
              sx={{
                color: colors.highlight,
                fontWeight: 600,
                textDecoration: 'underline',
                fontSize: '0.95rem',
                background: 'transparent',
                border: 0,
                p: 0,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Show more
            </Box>
          </Box>
        ) : null}
      </Paper>
    ),
  };

  const homeSectionPriority = ['publications', 'news'];
  const configuredOrder = Array.isArray(landing?.sectionsOrder) && landing.sectionsOrder.length > 0
    ? landing.sectionsOrder
    : homeSectionPriority;
  const orderedSectionKeys = homeSectionPriority
    .filter((sectionKey) => configuredOrder.includes(sectionKey) && Boolean(sectionBlocks[sectionKey]));

  if (loading) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'grid', placeItems: 'center', minHeight: '60vh' }}>
        <Paper elevation={0} sx={{ ...sectionCardSx, maxWidth: 560 }}>
          <Typography sx={{ color: colors.bodyText, mb: 2 }}>{error}</Typography>
          <Button variant="outlined" onClick={loadLandingData}>Retry</Button>
        </Paper>
      </Box>
    );
  }

  return (
    <>
      <SeoHead
        title="Home"
        description="Srikar Chundury — PhD student at NC State working on HPC, quantum simulation, and ML compilation. Publications, projects, and academic background."
        path="/"
      />
      <Box sx={{ display: 'grid', gap: { xs: 2, sm: 2.5, md: 3 } }}>
        <Paper elevation={0} sx={{ ...sectionCardSx, p: { xs: 2, sm: 2.5, md: 3 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.3fr 0.7fr' }, gap: 2.5, alignItems: 'stretch' }}>
            <Box>
              <Typography sx={{ color: colors.highlight, fontWeight: 600, letterSpacing: 0.2, mb: 0.7 }}>
                {landing?.intro?.eyebrow || 'Research Overview'}
              </Typography>
              <Typography sx={{ color: colors.heading, fontSize: { xs: '1.45rem', sm: '1.75rem', md: '1.95rem' }, lineHeight: 1.2, fontWeight: 700, mb: 1 }}>
                {landing?.intro?.headline || bio?.research_statement || bio?.summary}
              </Typography>
              <Typography sx={{ color: colors.subText, fontSize: { xs: '1rem', sm: '1.05rem' }, mb: 1.6 }}>
                {landing?.intro?.subheadline || bio?.summary}
              </Typography>
              <Typography sx={{ color: colors.bodyText, fontWeight: 600 }}>{bio?.name}</Typography>
              <Typography sx={{ color: colors.mutedText, mb: 1.1 }}>
                {bio?.title || 'Computer Science Researcher'} {bio?.current_affiliation ? ` - ${bio.current_affiliation}` : ''}
              </Typography>

              {(bio?.interests || []).length ? (
                <Typography sx={{ color: colors.secondaryText, fontSize: '0.95rem', lineHeight: 1.55, mb: 1.6 }}>
                  <Box component="span" sx={{ color: colors.bodyText, fontWeight: 600 }}>
                    Areas:
                  </Box>{' '}
                  {(bio?.interests || []).slice(0, 5).join(' • ')}
                </Typography>
              ) : null}

              <Box>
                <Button component={Link} href="/bio" variant="outlined" sx={{ borderColor: colors.border, color: colors.primary, borderRadius: '8px', '&:hover': { borderColor: colors.primary, background: colors.activeNavBg, color: colors.primary } }}>
                  Bio
                </Button>
              </Box>
            </Box>

            <Paper elevation={0} sx={{ ...sectionCardSx, p: 0, overflow: 'hidden', minHeight: { xs: 180, md: 240 } }}>
              {heroImage ? (
                <img
                  src={heroImage}
                  alt={links?.images?.[0]?.label || 'Research and travel'}
                  style={{ width: '100%', height: '100%', minHeight: 180, objectFit: 'cover' }}
                />
              ) : (
                <Box sx={{ minHeight: 180, display: 'grid', placeItems: 'center', background: colors.imageBg }}>
                  <CircularProgress size={28} />
                </Box>
              )}
            </Paper>
          </Box>
        </Paper>

        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: 1.2 }}>
          {orderedSectionKeys.map((key) => (
            <Box key={key}>{sectionBlocks[key]}</Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

function SectionHeading({ title, href, linkText = 'View' }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.2 }}>
      <Typography sx={{ color: colors.sectionTitle, fontWeight: 700, fontSize: '1.05rem' }}>{title}</Typography>
      {href ? (
        <Link href={href} style={{ color: colors.highlight, fontWeight: 600, textDecoration: 'underline', fontSize: '0.95rem' }}>
          {linkText}
        </Link>
      ) : null}
    </Box>
  );
}

const sectionCardSx = {
  border: `1px solid ${colors.cardBorder}`,
  borderRadius: 1.5,
  background: colors.cardBg,
  p: { xs: 1.6, sm: 1.8, md: 2 },
  boxShadow: `0 2px 10px ${colors.cardShadow}`,
};

const itemTitleSx = {
  color: colors.bodyText,
  fontWeight: 600,
  fontSize: '0.98rem',
  lineHeight: 1.35,
};

const itemSubtleSx = {
  color: colors.secondaryText,
  fontSize: '0.88rem',
};
