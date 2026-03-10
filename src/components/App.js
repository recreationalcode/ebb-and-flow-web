import { useState, useEffect, useCallback } from 'react';
import Header from './Header';
import Info from './Info';
import Schedule from './Schedule';
import AboutMe from './AboutMe';
import ScheduleButton from '../ui/ScheduleButton';
import DropReveal from './DropReveal';
import ManualLymphaticDrainage from './ManualLymphaticDrainage';
import PrePostOperativeLymphatic from './PrePostOperativeLymphatic';
import FertilityPregnancyLymphatic from './FertilityPregnancyLymphatic';
import LymphedemaLipedema from './LymphedemaLipedema';
import OncologyMassage from './OncologyMassage';
import CraniosacralMassage from './CraniosacralMassage';

const ABOUT_PATH = '/about';
const LYMPH_MLD_PATH = '/services/lymphatic/manual-drainage';
const LYMPH_OPERATIVE_PATH = '/services/lymphatic/pre-post-operative';
const LYMPH_FERTILITY_PATH = '/services/lymphatic/fertility-pregnancy';
const LYMPH_EDEMA_PATH = '/services/lymphatic/lymphedema-lipedema';
const ONCOLOGY_PATH = '/services/oncology-massage';
const CRANIOSACRAL_PATH = '/services/craniosacral-massage';

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
    case LYMPH_EDEMA_PATH:
      return 'lymph-edema';
    case ONCOLOGY_PATH:
      return 'oncology';
    case CRANIOSACRAL_PATH:
      return 'craniosacral';
    // Legacy redirects
    case '/lymphatic-massage':
      return 'lymph-mld';
    case '/oncology-massage':
      return 'oncology';
    case '/craniosacral-massage':
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
  'lymph-edema': LYMPH_EDEMA_PATH,
  oncology: ONCOLOGY_PATH,
  craniosacral: CRANIOSACRAL_PATH,
};

const bookingUrls = {
  'lymph-mld': 'https://ebbnflow.janeapp.com/#/manual-lymphatic-drainage-mld',
  'lymph-operative':
    'https://ebbnflow.janeapp.com/#/pre-post-operative-lymphatic-massage',
  'lymph-fertility':
    'https://ebbnflow.janeapp.com/#/fertility-pregnancy-postpartum-lymphatic-massage',
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
    (newPage) => {
      if (page !== newPage) {
        window.history.pushState(
          { page: newPage },
          '',
          pagePaths[newPage] || '/',
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
      '/oncology-massage': ONCOLOGY_PATH,
      '/craniosacral-massage': CRANIOSACRAL_PATH,
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
          'Manual Lymphatic Drainage | Ebb & Flow Massage Studio — Washington, DC',
        description:
          'Manual lymphatic drainage massage in Washington, DC. Natalie Gamble, LMT, CMLDT, specializes in gentle techniques to support your lymphatic system. 60-minute sessions for $150.',
        url: 'https://ebbandflowmassagestudio.com/services/lymphatic/manual-drainage',
      },
      'lymph-operative': {
        title:
          'Pre/Post Operative Lymphatic Massage | Ebb & Flow Massage Studio — Washington, DC',
        description:
          'Pre and post operative lymphatic massage in Washington, DC. Specialized drainage techniques to support surgical recovery. 60-minute sessions for $150.',
        url: 'https://ebbandflowmassagestudio.com/services/lymphatic/pre-post-operative',
      },
      'lymph-fertility': {
        title:
          'Fertility/Pregnancy/Postpartum Lymphatic Massage | Ebb & Flow Massage Studio — Washington, DC',
        description:
          'Lymphatic drainage for fertility, pregnancy, and postpartum in Washington, DC. Gentle support for your changing body. 60-minute sessions for $150.',
        url: 'https://ebbandflowmassagestudio.com/services/lymphatic/fertility-pregnancy',
      },
      'lymph-edema': {
        title:
          'Lymphedema or Lipedema Management | Ebb & Flow Massage Studio — Washington, DC',
        description:
          'Specialized lymphatic drainage for lymphedema and lipedema management in Washington, DC. Certified manual lymphatic drainage by Natalie Gamble, LMT, CMLDT. 60-minute sessions for $150.',
        url: 'https://ebbandflowmassagestudio.com/services/lymphatic/lymphedema-lipedema',
      },
      oncology: {
        title: 'Oncology Massage | Ebb & Flow Massage Studio — Washington, DC',
        description:
          'Oncology massage therapy in Washington, DC. Gentle, specialized massage for cancer patients and survivors by Natalie Gamble, LMT, MMP. 60-minute sessions for $130.',
        url: 'https://ebbandflowmassagestudio.com/services/oncology-massage',
      },
      craniosacral: {
        title:
          'Craniosacral Therapy | Ebb & Flow Massage Studio — Washington, DC',
        description:
          'Craniosacral therapy in Washington, DC. Light-touch therapy supporting natural healing by Natalie Gamble, LMT. 60-minute sessions for $150.',
        url: 'https://ebbandflowmassagestudio.com/services/craniosacral-massage',
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
        colorClass="text-gray-200">
        <Info navigate={navigate} setSchedule={setSchedule} />
      </DropReveal>
      <DropReveal
        open={page === 'about'}
        onOpen={handleRevealComplete}
        wasObscured={revealedPage !== 'about'}
        dismissed={page !== 'about' && revealedPage !== 'about'}
        colorClass="text-gray-200">
        <AboutMe setSchedule={setSchedule} />
      </DropReveal>
      <DropReveal
        open={page === 'lymph-mld'}
        onOpen={handleRevealComplete}
        wasObscured={revealedPage !== 'lymph-mld'}
        dismissed={page !== 'lymph-mld' && revealedPage !== 'lymph-mld'}
        colorClass="text-blue">
        <ManualLymphaticDrainage setSchedule={setSchedule} />
      </DropReveal>
      <DropReveal
        open={page === 'lymph-operative'}
        onOpen={handleRevealComplete}
        wasObscured={revealedPage !== 'lymph-operative'}
        dismissed={
          page !== 'lymph-operative' && revealedPage !== 'lymph-operative'
        }
        colorClass="text-purple">
        <PrePostOperativeLymphatic setSchedule={setSchedule} />
      </DropReveal>
      <DropReveal
        open={page === 'lymph-fertility'}
        onOpen={handleRevealComplete}
        wasObscured={revealedPage !== 'lymph-fertility'}
        dismissed={
          page !== 'lymph-fertility' && revealedPage !== 'lymph-fertility'
        }
        colorClass="text-gray-200">
        <FertilityPregnancyLymphatic setSchedule={setSchedule} />
      </DropReveal>
      <DropReveal
        open={page === 'lymph-edema'}
        onOpen={handleRevealComplete}
        wasObscured={revealedPage !== 'lymph-edema'}
        dismissed={page !== 'lymph-edema' && revealedPage !== 'lymph-edema'}
        colorClass="text-blue">
        <LymphedemaLipedema setSchedule={setSchedule} />
      </DropReveal>
      <DropReveal
        open={page === 'oncology'}
        onOpen={handleRevealComplete}
        wasObscured={revealedPage !== 'oncology'}
        dismissed={page !== 'oncology' && revealedPage !== 'oncology'}
        colorClass="text-purple">
        <OncologyMassage setSchedule={setSchedule} />
      </DropReveal>
      <DropReveal
        open={page === 'craniosacral'}
        onOpen={handleRevealComplete}
        wasObscured={revealedPage !== 'craniosacral'}
        dismissed={page !== 'craniosacral' && revealedPage !== 'craniosacral'}
        colorClass="text-gray-200">
        <CraniosacralMassage setSchedule={setSchedule} />
      </DropReveal>
      <Schedule
        open={schedule}
        setOpen={setSchedule}
        bookingUrl={bookingUrls[page]}
      />
      <div className="fixed bottom-6 inset-x-0 z-50 sm:hidden flex justify-center">
        <div className="rounded-md shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
          <ScheduleButton
            setSchedule={setSchedule}
            className="px-12 py-3 text-lg"
          />
        </div>
      </div>
    </main>
  );
}
