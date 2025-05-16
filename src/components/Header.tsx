import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Paintbrush } from "lucide-react";

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
                scrolled
                    ? "py-3 bg-black/80 backdrop-blur-md shadow-md"
                    : "py-6 bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2">
                    <Paintbrush size={24} className="text-white" />
                    <h1 className="text-xl font-semibold text-white tracking-wide">
                        Art Dome
                    </h1>
                </Link>

                <nav className="hidden md:flex space-x-8">
                    <NavLink to="/" active={location.pathname === "/"}>
                        Gallery
                    </NavLink>
                    <NavLink
                        to="/artists"
                        active={location.pathname === "/artists"}
                    >
                        Artists
                    </NavLink>
                </nav>

                <button className="md:hidden text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
        </header>
    );
};

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
    active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, active }) => {
    return (
        <Link
            to={to}
            className={`relative px-1 py-2 text-sm transition-colors duration-300 ${
                active ? "text-white" : "text-white/70 hover:text-white"
            }`}
        >
            {children}
            {active && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/50 rounded-full" />
            )}
        </Link>
    );
};

export default Header;
