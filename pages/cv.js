import SeoHead from '../components/SeoHead';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { readRaw } from '../utils/readRaw';
import { colors } from '../utils/colors';
import { useLinks } from '../components/LinksContext';

export default function CvPage() {
  const [pdfUrl, setPdfUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { links } = useLinks();
  const resumeUrl = links?.files?.resume;

  useEffect(() => {
    if (!resumeUrl) return;
    let objectUrl = '';
    let isMounted = true;

    async function loadPdf() {
      try {
        const bytes = await readRaw(resumeUrl);
        const blob = new Blob([bytes], { type: 'application/pdf' });
        objectUrl = URL.createObjectURL(blob);
        if (isMounted) {
          setPdfUrl(objectUrl);
          setLoading(false);
        }
      } catch (err) {
        console.error('Failed to load CV PDF', err);
        if (isMounted) {
          setError('Unable to load the CV right now.');
          setLoading(false);
        }
      }
    }

    loadPdf();

    return () => {
      isMounted = false;
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [resumeUrl]);

  return (
    <>
      <SeoHead
        title="CV"
        description="Curriculum vitae of Srikar Chundury."
        path="/cv"
        noindex
      />
      <Box sx={{ minHeight: 'calc(100vh - 96px)', display: 'grid', gap: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1.5, flexWrap: 'wrap' }}>
          <Typography sx={{ color: colors.heading, fontSize: { xs: '1.2rem', sm: '1.35rem' }, fontWeight: 700 }}>
            Curriculum Vitae
          </Typography>
          {pdfUrl ? (
            <Button
              component="a"
              href={pdfUrl}
              download="srikarChundury_cv.pdf"
              variant="outlined"
              sx={{ borderColor: colors.border, color: colors.primary, borderRadius: '8px', '&:hover': { borderColor: colors.primary, background: colors.activeNavBg, color: colors.primary } }}
            >
              Download PDF
            </Button>
          ) : null}
        </Box>

        <Box sx={{ border: `1px solid ${colors.cardBorder}`, borderRadius: 2, background: colors.cardBg, overflow: 'hidden', minHeight: 'calc(100vh - 180px)' }}>
          {loading ? (
            <Box sx={{ minHeight: 'calc(100vh - 180px)', display: 'grid', placeItems: 'center' }}>
              <CircularProgress />
            </Box>
          ) : error ? (
            <Box sx={{ minHeight: 'calc(100vh - 180px)', display: 'grid', placeItems: 'center', p: 3 }}>
              <Typography sx={{ color: colors.bodyText, mb: 1.2 }}>{error}</Typography>
              {resumeUrl ? (
              <Button component="a" href={resumeUrl} target="_blank" rel="noopener noreferrer" variant="outlined">
                Open Source File
              </Button>
              ) : null}
            </Box>
          ) : (
            <Box
              component="iframe"
              src={pdfUrl}
              title="Srikar Chundury CV"
              sx={{ width: '100%', height: 'calc(100vh - 180px)', border: 0, background: colors.white }}
            />
          )}
        </Box>
      </Box>
    </>
  );
}
