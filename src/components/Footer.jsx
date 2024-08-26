import logo from "../assets/logo.png"
import { SOCIAL_MEDIA_LINKS } from "../constants"

const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    setMenuAnimation("fade-out-left");
    setTimeout(() => {
        setIsMobileMenuOpen(false);
    }, 300);
};

const Footer = () => {
    return (
        <div className="mb-8 mt-20">
            <div className="flex items-center justify-center">
                <a href="#hero" onClick={handleLogoClick}>
                    <div className="line__footer">
                        <span className="line__footer__left"></span>
                        <span className="line__footer__right"></span>
                    </div>
                    <img src={logo} alt="logo" className="my-14" width={200} />
                </a>
            </div>
            <div className="flex items-center justify-center gap-8 social__media">
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" >
                        {link.icon}
                    </a>
                ))}
            </div>
            <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
                &copy;CompileTab. All rights reserved.
            </p>
        </div>
    )
}

export default Footer