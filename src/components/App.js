import { useState } from "react";
import Header from "./Header";
import Info from "./Info";
import Schedule from "./Schedule";


export default function App() {
  const [schedule, setSchedule] = useState(false);

  return (
    <div className="bg-gray-light">
      <Header setSchedule={setSchedule} />
      <Info />
      <Schedule open={schedule} setOpen={setSchedule} />
    </div>
  );
}
