import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import { useUIStore } from "../../store/useUIStore";

const MainLayout = () => {
  const isCollapsed = useUIStore((state) => state.isCollapsed);

  return (
    <div className="w-full h-dvh flex overflow-hidden relative">
      <Sidebar />
      <main
        className={`h-full flex-1 transition-all duration-300 p-2 overflow-hidden bg-neutral-900 flex flex-col gap-2 ${isCollapsed ? "ml-0" : "ml-80"}`}
      >
        <header className="w-full h-12 bg-neutral-800/10 border border-neutral-800 rounded-md flex items-center justify-end p-2 shadow-lg">
          <button className="text-sm bg-neutral-800 px-2 py-1 rounded">
            Comment
          </button>
        </header>
        <section className="flex-1 w-full h-full overflow-hidden border border-neutral-800 bg-neutral-800/10 rounded-md">
          <Outlet />
        </section>
        <footer className="w-full h-fit bg-neutral-800/10 border border-neutral-800 rounded-md">
          <p className="text-xs text-center text-neutral-400 subpixel-antialiased py-2">
            © 2026 Twin Lists — Crafted with ❤️ by{" "}
            <strong className="text-neutral-100">Mehdi Jeyrani</strong>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default MainLayout;
