import { useState, useEffect, useCallback, useRef } from "react";
import Header from "./Header";
import Info from "./Info";
import Schedule from "./Schedule";
import DropReveal from "./DropReveal";
import LymphaticMassage from "./LymphaticMassage";

const LYMPHATIC_PATH = "/lymphatic-massage";

function pageFromPath(pathname) {
  return pathname === LYMPHATIC_PATH ? "lymphatic" : "home";
}

export default function App() {
  const [schedule, setSchedule] = useState(false);
  const [page, setPage] = useState(() => pageFromPath(window.location.pathname));
  const [prevPage, setPrevPage] = useState(null);
  const isInitial = useRef(true);

  const navigate = useCallback(
    (newPage) => {
      if (page !== newPage) {
        const path = newPage === "lymphatic" ? LYMPHATIC_PATH : "/";
        window.history.pushState({ page: newPage }, "", path);
        setPrevPage(page);
        setPage(newPage);
      }
    },
    [page]
  );

  useEffect(() => {
    const onPopState = () => {
      const newPage = pageFromPath(window.location.pathname);
      if (newPage !== page) {
        setPrevPage(page);
        setPage(newPage);
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [page]);

  // Skip animation on initial load
  useEffect(() => {
    isInitial.current = false;
  }, []);

  const handleRevealDone = useCallback(() => {
    setPrevPage(null);
  }, []);

  const pageContent = (p) =>
    p === "home" ? <Info /> : <LymphaticMassage />;

  return (
    <div className="bg-gray-light">
      <Header setSchedule={setSchedule} page={page} navigate={navigate} bgColor="bg-blue" />
      {/* Old page stays visible underneath until the new reveal covers it */}
      {prevPage && (
        <div className="fixed inset-0 z-30 overflow-y-auto">
          {pageContent(prevPage)}
        </div>
      )}
      <DropReveal
        open={page === "home"}
        onOpen={handleRevealDone}
        colorClass="text-gray-light"
      >
        <Info />
      </DropReveal>
      <DropReveal
        open={page === "lymphatic"}
        onOpen={handleRevealDone}
        colorClass="text-blue"
      >
        <LymphaticMassage />
      </DropReveal>
      <Schedule open={schedule} setOpen={setSchedule} />
    </div>
  );
}
