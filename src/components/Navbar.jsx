import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setIsMobileMenuOpen(false);
    }

    const handleLogoClick = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setIsMobileMenuOpen(false);
    }

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isMobileMenuOpen]);

    return (
        <div>
            <nav className="fixed left-0 right-0 top-2 z-50">
                {/* Desktop Menu */}
                <div className="w-full mx-auto hidden max-w-3xl items-center py-3 mt-1 justify-center rounded-lg border border-stone-500 bg-black/90 backdrop-blur-lg lg:flex">
                    <div className="flex items-center justify-beetween w-full gap-6">
                        <div>
                            <a href="#" onClick={handleLogoClick}>
                                <img src={logo} width={150} alt="logo" className="image" />
                            </a>
                        </div>
                        <div>
                            <ul className="flex items-center font-medium gap-6">
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a className="link-underline"
                                            href={item.href}
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className="rounded-lg backdrop-blur-none lg:hidden font-mono -m-2.5 p-3">
                    <div className="flex items-center justify-between">
                        <div>
                            <a href="#" onClick={handleLogoClick}>
                                <img src={logo} alt="logo" width={90} className="m-2" />
                            </a>
                        </div>
                        <div className="flex items-center">
                            <button
                                className={`focus:outline-none lg:hidden ${isMobileMenuOpen ? 'menu-open' : 'menu-close'}`}
                                onClick={toggleMobileMenu}
                            >
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </button>
                        </div>
                    </div>
                    {isMobileMenuOpen && (
                        <ul className="ml-4 mt-10 flex flex-col gap-4 backdrop-blur-sm font-sans">
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="block w-full text-xl font-medium p-1" onClick={(e) => handleLinkClick(e, item.href)}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
            {/* Fullscreen Blur Background */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg 
                transition-opacity duration-500 ease-in-out z-40 
                ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} 
                lg:hidden`}
            ></div>
        </div>
    )
}

export default Navbar;