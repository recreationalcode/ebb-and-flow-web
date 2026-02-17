import { useState, useEffect, useCallback } from "react";
import Header from "./Header";
import Info from "./Info";
import Schedule from "./Schedule";
import Button from "../ui/Button";
import DropReveal from "./DropReveal";
import LymphaticMassage from "./LymphaticMassage";

const LYMPHATIC_PATH = "/lymphatic-massage";

function pageFromPath(pathname) {
  return pathname === LYMPHATIC_PATH ? "lymphatic" : "home";
}

export default function App() {
  const [schedule, setSchedule] = useState(false);
  const [page, setPage] = useState(() => pageFromPath(window.location.pathname));

  const navigate = useCallback(
    (newPage) => {
      if (page !== newPage) {
        const path = newPage === "lymphatic" ? LYMPHATIC_PATH : "/";
        window.history.pushState({ page: newPage }, "", path);
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

  return (
    <div className="bg-gray-light">
      <Header setSchedule={setSchedule} page={page} navigate={navigate} bgColor="bg-blue" />
      <DropReveal open={page === "home"} colorClass="text-gray-light">
        <Info />
      </DropReveal>
      <DropReveal open={page === "lymphatic"} colorClass="text-blue">
        <LymphaticMassage />
      </DropReveal>
      <Schedule open={schedule} setOpen={setSchedule} />
      <div className="fixed bottom-6 inset-x-0 z-50 sm:hidden flex justify-center">
        <Button className="px-12 py-3 text-lg shadow-[0_4px_20px_rgba(0,0,0,0.3)]" onClick={() => setSchedule(true)}>
          Schedule
        </Button>
      </div>
    </div>
  );
}
