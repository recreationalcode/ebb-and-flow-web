import { useState, useEffect, useCallback } from "react";
import Header from "./Header";
import Info from "./Info";
import Schedule from "./Schedule";
import Button from "../ui/Button";
import DropReveal from "./DropReveal";
import LymphaticMassage from "./LymphaticMassage";
import OncologyMassage from "./OncologyMassage";
import CraniosacralMassage from "./CraniosacralMassage";

const LYMPHATIC_PATH = "/lymphatic-massage";
const ONCOLOGY_PATH = "/oncology-massage";
const CRANIOSACRAL_PATH = "/craniosacral-massage";

function pageFromPath(pathname) {
  switch (pathname) {
    case LYMPHATIC_PATH:
      return "lymphatic";
    case ONCOLOGY_PATH:
      return "oncology";
    case CRANIOSACRAL_PATH:
      return "craniosacral";
    default:
      return "home";
  }
}

const pagePaths = {
  home: "/",
  lymphatic: LYMPHATIC_PATH,
  oncology: ONCOLOGY_PATH,
  craniosacral: CRANIOSACRAL_PATH,
};

export default function App() {
  const [schedule, setSchedule] = useState(false);
  const [page, setPage] = useState(() => pageFromPath(window.location.pathname));
  const [revealedPage, setRevealedPage] = useState(() => pageFromPath(window.location.pathname));

  const handleRevealComplete = useCallback(() => {
    setRevealedPage(page);
  }, [page]);

  const navigate = useCallback(
    (newPage) => {
      if (page !== newPage) {
        window.history.pushState({ page: newPage }, "", pagePaths[newPage] || "/");
        setPage(newPage);
      }
    },
    [page]
  );

  useEffect(() => {
    const onPopState = () => setPage(pageFromPath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const seo = {
      home: {
        title: "Ebb & Flow Massage Studio | Lymphatic Drainage, Oncology Massage & Craniosacral Therapy in Washington, DC",
        description: "Ebb & Flow Massage Studio in Washington, DC specializing in Lymphatic Drainage, Oncology Massage, and Craniosacral Therapy. Book with Natalie Gamble, LMT, CMLDT, MMP.",
        url: "https://ebbandflowmassagestudio.com/",
      },
      lymphatic: {
        title: "Lymphatic Massage | Ebb & Flow Massage Studio — Washington, DC",
        description: "Manual lymphatic drainage massage in Washington, DC. Natalie Gamble, LMT, CMLDT, specializes in gentle techniques to support your lymphatic system. 60-minute sessions for $150.",
        url: "https://ebbandflowmassagestudio.com/lymphatic-massage",
      },
      oncology: {
        title: "Oncology Massage | Ebb & Flow Massage Studio — Washington, DC",
        description: "Oncology massage therapy in Washington, DC. Gentle, specialized massage for cancer patients and survivors by Natalie Gamble, LMT, MMP. 60-minute sessions for $130.",
        url: "https://ebbandflowmassagestudio.com/oncology-massage",
      },
      craniosacral: {
        title: "Craniosacral Therapy | Ebb & Flow Massage Studio — Washington, DC",
        description: "Craniosacral therapy in Washington, DC. Light-touch therapy supporting natural healing by Natalie Gamble, LMT. 60-minute sessions for $150.",
        url: "https://ebbandflowmassagestudio.com/craniosacral-massage",
      },
    };
    const { title, description, url } = seo[page] || seo.home;

    document.title = title;

    const setMeta = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
  }, [page]);

  return (
    <main className="bg-gray-light">
      <Header setSchedule={setSchedule} page={page} navigate={navigate} bgColor="bg-blue" />
      <DropReveal open={page === "home"} onOpen={handleRevealComplete} wasObscured={revealedPage !== "home"} dismissed={page !== "home" && revealedPage !== "home"} colorClass="text-gray-light">
        <Info navigate={navigate} setSchedule={setSchedule} />
      </DropReveal>
      <DropReveal open={page === "lymphatic"} onOpen={handleRevealComplete} wasObscured={revealedPage !== "lymphatic"} dismissed={page !== "lymphatic" && revealedPage !== "lymphatic"} colorClass="text-blue">
        <LymphaticMassage setSchedule={setSchedule} />
      </DropReveal>
      <DropReveal open={page === "oncology"} onOpen={handleRevealComplete} wasObscured={revealedPage !== "oncology"} dismissed={page !== "oncology" && revealedPage !== "oncology"} colorClass="text-purple">
        <OncologyMassage setSchedule={setSchedule} />
      </DropReveal>
      <DropReveal open={page === "craniosacral"} onOpen={handleRevealComplete} wasObscured={revealedPage !== "craniosacral"} dismissed={page !== "craniosacral" && revealedPage !== "craniosacral"} colorClass="text-gray-light">
        <CraniosacralMassage setSchedule={setSchedule} />
      </DropReveal>
      <Schedule open={schedule} setOpen={setSchedule} />
      <div className="fixed bottom-6 inset-x-0 z-50 sm:hidden flex justify-center">
        <Button className="px-12 py-3 text-lg shadow-[0_4px_20px_rgba(0,0,0,0.3)]" onClick={() => setSchedule(true)}>
          Schedule
        </Button>
      </div>
    </main>
  );
}
