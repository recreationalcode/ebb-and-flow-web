import { useState, useEffect, useCallback } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './Header';
import Info from './Info';
import Schedule from './Schedule';
import AboutMe from './AboutMe';
import { MobileScheduleButton } from '../ui/ScheduleButton';
import DropReveal from './DropReveal';
import ManualLymphaticDrainage from './ManualLymphaticDrainage';
import PrePostOperativeLymphatic from './PrePostOperativeLymphatic';
import FertilityIVFSupport from './FertilityIVFSupport';
import PregnancyPostpartumLymphatic from './PregnancyPostpartumLymphatic';
import LymphedemaLipedema from './LymphedemaLipedema';
import OncologyMassage from './OncologyMassage';
import CraniosacralMassage from './CraniosacralMassage';
import FAQ from './FAQ';
import THEMES from '../config/themes';

const ABOUT_PATH = '/about';
const LYMPH_MLD_PATH = '/services/lymphatic/manual-lymphatic-drainage';
const LYMPH_OPERATIVE_PATH = '/services/lymphatic/pre-post-op-lymphatic-massage';
const LYMPH_FERTILITY_PATH = '/services/lymphatic/fertility-ivf-support-massage';
const LYMPH_PREGNANCY_PATH = '/services/lymphatic/pregnancy-postpartum-lymphatic-massage';
const LYMPH_EDEMA_PATH = '/services/lymphatic/lymphedema-lipedema-management';
const ONCOLOGY_PATH = '/services/oncology-massage';
const CRANIOSACRAL_PATH = '/services/craniosacral-therapy';
const FAQ_PATH = '/faq';

function pageFromPath(pathname) {
  switch (pathname) {
    case ABOUT_PATH:
      return 'about';
    case LYMPH_MLD_PATH:
      return 'lymph-mld';
    case LYMPH_OPERATIVE_PATH:
      return 'lymph-operative';
    case LYMPH_FERTILITY_PATH:
      return 'lymph-fertility';
    case LYMPH_PREGNANCY_PATH:
      return 'lymph-pregnancy';
    case LYMPH_EDEMA_PATH:
      return 'lymph-edema';
    case ONCOLOGY_PATH:
      return 'oncology';
    case CRANIOSACRAL_PATH:
      return 'craniosacral';
    case FAQ_PATH:
      return 'faq';
    // Legacy redirects
    case '/lymphatic-massage':
    case '/services/lymphatic/manual-drainage':
      return 'lymph-mld';
    case '/services/lymphatic/pre-post-operative':
      return 'lymph-operative';
    case '/services/lymphatic/fertility-pregnancy':
      return 'lymph-pregnancy';
    case '/services/lymphatic/lymphedema-lipedema':
      return 'lymph-edema';
    case '/oncology-massage':
      return 'oncology';
    case '/craniosacral-massage':
    case '/services/craniosacral-massage':
      return 'craniosacral';
    default:
      return 'home';
  }
}

const pagePaths = {
  home: '/',
  about: ABOUT_PATH,
  'lymph-mld': LYMPH_MLD_PATH,
  'lymph-operative': LYMPH_OPERATIVE_PATH,
  'lymph-fertility': LYMPH_FERTILITY_PATH,
  'lymph-pregnancy': LYMPH_PREGNANCY_PATH,
  'lymph-edema': LYMPH_EDEMA_PATH,
  oncology: ONCOLOGY_PATH,
  craniosacral: CRANIOSACRAL_PATH,
  faq: FAQ_PATH,
};

const bookingUrls = {
  'lymph-mld': 'https://ebbnflow.janeapp.com/#/manual-lymphatic-drainage-mld',
  'lymph-operative':
    'https://ebbnflow.janeapp.com/#/pre-post-operative-lymphatic-massage',
  'lymph-fertility':
    'https://ebbnflow.janeapp.com/#/fertility-and-ivf-support-lymphatic-massage',
  'lymph-pregnancy':
    'https://ebbnflow.janeapp.com/#/pregnancy-postpartum-lymphatic-massage',
  'lymph-edema':
    'https://ebbnflow.janeapp.com/#/lymphedema-and-lipedema-management',
  oncology: 'https://ebbnflow.janeapp.com/#/oncology-massage',
  craniosacral: 'https://ebbnflow.janeapp.com/#/craniosacral-therapy-cst',
};

export default function App() {
  const [schedule, setSchedule] = useState(false);
  const [page, setPage] = useState(() =>
    pageFromPath(window.location.pathname),
  );
  const [revealedPage, setRevealedPage] = useState(() =>
    pageFromPath(window.location.pathname),
  );

  const handleRevealComplete = useCallback(() => {
    setRevealedPage(page);
  }, [page]);

  const navigate = useCallback(
    (newPage, hash = '') => {
      if (page !== newPage) {
        window.history.pushState(
          { page: newPage },
          '',
          (pagePaths[newPage] || '/') + hash,
        );
        setPage(newPage);
      }
    },
    [page],
  );

  // Redirect legacy URLs to new paths
  useEffect(() => {
    const legacyMap = {
      '/lymphatic-massage': LYMPH_MLD_PATH,
      '/services/lymphatic/manual-drainage': LYMPH_MLD_PATH,
      '/services/lymphatic/pre-post-operative': LYMPH_OPERATIVE_PATH,
      '/services/lymphatic/fertility-pregnancy': LYMPH_PREGNANCY_PATH,
      '/services/lymphatic/lymphedema-lipedema': LYMPH_EDEMA_PATH,
      '/oncology-massage': ONCOLOGY_PATH,
      '/craniosacral-massage': CRANIOSACRAL_PATH,
      '/services/craniosacral-massage': CRANIOSACRAL_PATH,
    };
    const newPath = legacyMap[window.location.pathname];
    if (newPath) {
      window.history.replaceState(null, '', newPath);
    }
  }, []);

  useEffect(() => {
    const onPopState = () => setPage(pageFromPath(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const seo = {
      home: {
        title:
          'Ebb & Flow Massage Studio | Lymphatic Drainage, Oncology Massage & Craniosacral Therapy in Washington, DC',
        description:
          'Ebb & Flow Massage Studio in Washington, DC specializing in Lymphatic Drainage, Oncology Massage, and Craniosacral Therapy. Book with Natalie Gamble, LMT, CMLDT, MMP, CST.',
        url: 'https://ebbandflowmassagestudio.com/',
      },
      about: {
        title:
          'About Natalie Gamble | Ebb & Flow Massage Studio — Washington, DC',
        description:
          'Meet Natalie Gamble, LMT, CMLDT, MMP, CST — massage therapist in Washington, DC specializing in lymphatic drainage and oncology massage at Ebb & Flow Massage Studio.',
        url: 'https://ebbandflowmassagestudio.com/about',
      },
      'lymph-mld': {
        title:
          'Manual Lymphatic Drainage in Washington, DC | Ebb & Flow Massage Studio',
        description:
          'Gentle manual lymphatic drainage in Washington, DC for swelling, fluid retention, recovery support, and lymphatic maintenance.',
        url: 'https://ebbandflowmassagestudio.com/services/lymphatic/manual-lymphatic-drainage',
      },
      'lymph-operative': {
        title:
          'Pre/Post-Op Lymphatic Massage in Washington, DC | Ebb & Flow Massage Studio',
        description:
          'Gentle pre and post-op lymphatic massage in Washington, DC to support swelling, comfort, scar healing, and recovery with provider-approved care.',
        url: 'https://ebbandflowmassagestudio.com/services/lymphatic/pre-post-op-lymphatic-massage',
      },
      'lymph-fertility': {
        title:
          'Fertility and IVF Support Massage in Washington, DC | Ebb & Flow Massage Studio',
        description:
          'Gentle fertility and IVF support massage in Washington, DC for bloating, tenderness, grounding, and comfort during treatment.',
        url: 'https://ebbandflowmassagestudio.com/services/lymphatic/fertility-ivf-support-massage',
      },
      'lymph-pregnancy': {
        title:
          'Pregnancy and Postpartum Lymphatic Massage in Washington, DC | Ebb & Flow Massage Studio',
        description:
          'Gentle pregnancy and postpartum lymphatic massage in Washington, DC for swelling, comfort, recovery support, and provider-approved scar tissue work.',
        url: 'https://ebbandflowmassagestudio.com/services/lymphatic/pregnancy-postpartum-lymphatic-massage',
      },
      'lymph-edema': {
        title:
          'Lymphedema and Lipedema Massage Support in Washington, DC | Ebb & Flow Massage Studio',
        description:
          'Gentle massage support for lymphedema and lipedema in Washington, DC to help with heaviness, swelling, tenderness, and comfort.',
        url: 'https://ebbandflowmassagestudio.com/services/lymphatic/lymphedema-lipedema-management',
      },
      oncology: {
        title:
          'Oncology Massage in Washington, DC | Ebb & Flow Massage Studio',
        description:
          'Safe, gentle oncology massage in Washington, DC for people in treatment, recovery, or survivorship who want supportive care.',
        url: 'https://ebbandflowmassagestudio.com/services/oncology-massage',
      },
      craniosacral: {
        title:
          'Craniosacral Therapy in Washington, DC | Ebb & Flow Massage Studio',
        description:
          'Gentle craniosacral therapy in Washington, DC to support relaxation, nervous system regulation, and relief from tension patterns.',
        url: 'https://ebbandflowmassagestudio.com/services/craniosacral-therapy',
      },
      faq: {
        title:
          'FAQ | Ebb & Flow Massage Studio — Washington, DC',
        description:
          'Frequently asked questions about lymphatic drainage, oncology massage, craniosacral therapy, booking, and more at Ebb & Flow Massage Studio in Washington, DC.',
        url: 'https://ebbandflowmassagestudio.com/faq',
      },
    };
    const { title, description, url } = seo[page] || seo.home;

    document.title = title;

    const setMeta = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
  }, [page]);

  return (
    <main className="bg-gray-200">
      <Header
        setSchedule={setSchedule}
        page={page}
        navigate={navigate}
        bgColor="bg-blue"
      />
      <DropReveal
        open={page === 'home'}
        onOpen={handleRevealComplete}
        wasObscured={revealedPage !== 'home'}
        dismissed={page !== 'home' && revealedPage !== 'home'}
        color="gray">
        <Info navigate={navigate} setSchedule={setSchedule} />
      </DropReveal>
      <DropReveal
        open={page === 'about'}
        onOpen={handleRevealComplete}
        wasObscured={revealedPage !== 'about'}
        dismissed={page !== 'about' && revealedPage !== 'about'}
        color="gray">
        <AboutMe setSchedule={setSchedule} />
      </DropReveal>
      <DropReveal
        open={page === 'lymph-mld'}
        onOpen={handleRevealComplete}
        wasObscured={revealedPage !== 'lymph-mld'}
        dismissed={page !== 'lymph-mld' && revealedPage !== 'lymph-mld'}
        color={THEMES['lymph-mld'].dropReveal}>
        <ManualLymphaticDrainage setSchedule={setSchedule} navigate={navigate} />
      </DropReveal>
      <DropReveal
        open={page === 'lymph-operative'}
        onOpen={handleRevealComplete}
        wasObscured={revealedPage !== 'lymph-operative'}
        dismissed={
          page !== 'lymph-operative' && revealedPage !== 'lymph-operative'
        }
        color={THEMES['lymph-operative'].dropReveal}>
        <PrePostOperativeLymphatic setSchedule={setSchedule} navigate={navigate} />
      </DropReveal>
      <DropReveal
        open={page === 'lymph-fertility'}
        onOpen={handleRevealComplete}
        wasObscured={revealedPage !== 'lymph-fertility'}
        dismissed={
          page !== 'lymph-fertility' && revealedPage !== 'lymph-fertility'
        }
        color={THEMES['lymph-fertility'].dropReveal}>
        <FertilityIVFSupport setSchedule={setSchedule} navigate={navigate} />
      </DropReveal>
      <DropReveal
        open={page === 'lymph-pregnancy'}
        onOpen={handleRevealComplete}
        wasObscured={revealedPage !== 'lymph-pregnancy'}
        dismissed={
          page !== 'lymph-pregnancy' && revealedPage !== 'lymph-pregnancy'
        }
        color={THEMES['lymph-pregnancy'].dropReveal}>
        <PregnancyPostpartumLymphatic setSchedule={setSchedule} navigate={navigate} />
      </DropReveal>
      <DropReveal
        open={page === 'lymph-edema'}
        onOpen={handleRevealComplete}
        wasObscured={revealedPage !== 'lymph-edema'}
        dismissed={page !== 'lymph-edema' && revealedPage !== 'lymph-edema'}
        color={THEMES['lymph-edema'].dropReveal}>
        <LymphedemaLipedema setSchedule={setSchedule} navigate={navigate} />
      </DropReveal>
      <DropReveal
        open={page === 'oncology'}
        onOpen={handleRevealComplete}
        wasObscured={revealedPage !== 'oncology'}
        dismissed={page !== 'oncology' && revealedPage !== 'oncology'}
        color={THEMES['oncology'].dropReveal}>
        <OncologyMassage setSchedule={setSchedule} navigate={navigate} />
      </DropReveal>
      <DropReveal
        open={page === 'craniosacral'}
        onOpen={handleRevealComplete}
        wasObscured={revealedPage !== 'craniosacral'}
        dismissed={page !== 'craniosacral' && revealedPage !== 'craniosacral'}
        color={THEMES['craniosacral'].dropReveal}>
        <CraniosacralMassage setSchedule={setSchedule} navigate={navigate} />
      </DropReveal>
      <DropReveal
        open={page === 'faq'}
        onOpen={handleRevealComplete}
        wasObscured={revealedPage !== 'faq'}
        dismissed={page !== 'faq' && revealedPage !== 'faq'}
        color="gray">
        <FAQ />
      </DropReveal>
      <Schedule
        open={schedule}
        setOpen={setSchedule}
        bookingUrl={bookingUrls[page]}
      />
      <MobileScheduleButton setSchedule={setSchedule} />
      <Analytics />
    </main>
  );
}
