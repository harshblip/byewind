import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import RightPanel from "../components/RightPanel/RightPanel";
import Header from "../components/Header";
import { useEffect, useState } from "react";

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [rightPanelOpen, setRightPanelOpen] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
        setRightPanelOpen(false);
      } else {
        setIsSidebarOpen(true);
        setRightPanelOpen(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleRightPanel = () => {
    setRightPanelOpen(!rightPanelOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const closeRightPanel = () => {
    setRightPanelOpen(false);
  };
  return (
    <>
      <div className="flex fade-in dark:bg-[#1C1C1C] dark:text-white">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <div className="w-full flex flex-col fade-in delay-1">
          <Header
            onToggleSidebar={toggleSidebar}
            onToggleRightPanel={toggleRightPanel}
          />
          <Outlet />
        </div>
        <RightPanel isOpen={rightPanelOpen} onClose={closeRightPanel} />
      </div>
    </>
  );
}
