import { Outlet } from "react-router-dom";
import { useUIStore } from "../../store/useUIStore";
import Header from "./Header";
import Footer from "./Footer";

const ContentShell = () => {
  const isCollapsed = useUIStore((state) => state.isCollapsed);

  return (
    <main
      className={`h-full flex-1 transition-all duration-300 p-2 overflow-hidden bg-neutral-900 flex flex-col gap-2 ${isCollapsed ? "ml-0" : "ml-72"}`}
    >
      <Header />
      <section className="flex-1 w-full h-full overflow-hidden border border-neutral-800 bg-neutral-800/10 rounded-md">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default ContentShell;
