import { useEffect } from "react";
import Header from "../components/header";
import Slideshow from "../components/slideshow";
function Dashboard() {
  useEffect(() => {
    document.title = "Wear Forward";
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div>
        <Slideshow />
      </div>
    </div>
  );
}

export default Dashboard;
