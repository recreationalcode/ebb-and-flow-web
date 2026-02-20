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
    const titles = {
      home: "Ebb & Flow Massage Studio | Lymphatic Drainage, Oncology Massage & Craniosacral Therapy in Washington, DC",
      lymphatic: "Lymphatic Massage | Ebb & Flow Massage Studio \u2014 Washington, DC",
      oncology: "Oncology Massage | Ebb & Flow Massage Studio \u2014 Washington, DC",
      craniosacral: "Craniosacral Therapy | Ebb & Flow Massage Studio \u2014 Washington, DC",
    };
    document.title = titles[page] || titles.home;

    const canonicalPaths = {
      home: "https://ebbandflowmassagestudio.com/",
      lymphatic: "https://ebbandflowmassagestudio.com/lymphatic-massage",
      oncology: "https://ebbandflowmassagestudio.com/oncology-massage",
      craniosacral: "https://ebbandflowmassagestudio.com/craniosacral-massage",
    };
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.href = canonicalPaths[page] || canonicalPaths.home;
    }
  }, [page]);

  return (
    <main className="bg-gray-light">
      <Header setSchedule={setSchedule} page={page} navigate={navigate} bgColor="bg-blue" />
      <DropReveal open={page === "home"} onOpen={handleRevealComplete} wasObscured={revealedPage !== "home"} dismissed={page !== "home" && revealedPage !== "home"} colorClass="text-gray-light">
        <Info />
      </DropReveal>
      <DropReveal open={page === "lymphatic"} onOpen={handleRevealComplete} wasObscured={revealedPage !== "lymphatic"} dismissed={page !== "lymphatic" && revealedPage !== "lymphatic"} colorClass="text-blue">
        <LymphaticMassage />
      </DropReveal>
      <DropReveal open={page === "oncology"} onOpen={handleRevealComplete} wasObscured={revealedPage !== "oncology"} dismissed={page !== "oncology" && revealedPage !== "oncology"} colorClass="text-purple">
        <OncologyMassage />
      </DropReveal>
      <DropReveal open={page === "craniosacral"} onOpen={handleRevealComplete} wasObscured={revealedPage !== "craniosacral"} dismissed={page !== "craniosacral" && revealedPage !== "craniosacral"} colorClass="text-blue">
        <CraniosacralMassage />
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
