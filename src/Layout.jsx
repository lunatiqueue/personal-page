import { Navigation } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Suspense } from "react";
import { Outlet} from "react-router-dom";
import "./index.css";

export const Layout = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
        <header className="vh-10">
                <Navigation/>
            </header>
        <main className="vh-80 flex-grow-1">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        </main>
        <footer className="vh-10">
            <Footer />
        </footer>
        </div>
    );
};
