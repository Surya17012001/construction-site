import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="app">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />

      <a
        href="#top"
        className="back-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        ↑
      </a>
    </div>
  );
}