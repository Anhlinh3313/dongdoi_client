import { useEffect, useState } from "react";
import HomePage from "./home"
import AboutUS from "../app/project/Home/AboutUS";
import ActivityType from "../app/project/Home/ActivityType";

function Home({}) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <>
      <div className="body">
        <HomePage />
        <AboutUS/>
        <ActivityType/>
      </div>
    </>
  );
}
export default Home;