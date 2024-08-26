import { HERO } from "../constants";
import mioImg from "../assets/hero_mio.gif";
import Typewriter from '../hooks/Typewriter';

const Hero = () => {
    return (
        <section className="flex min-h-screen flex-wrap items-center">
            <div className="w-full md:w-1/2 p-9">
                <h1 className="mt-19 mb-4 pl-2 text-2xl font-extrabold sm:text-5xl md:text-5xl lg:text-[3.1rem] xl:text-[5.2rem] title__text">
                    {HERO.introduce}
                    <div className="text-[#8c4df7] pt-2 title__name">
                        {HERO.name}
                    </div>
                </h1>
                <p className="p-2 font-semibold text-3xl tracking-normal lg:text-3xl align__text">
                    <Typewriter text={[HERO.greet]} />
                </p>
                <p className="mb-8 p-1 mt-3 pl-2 text-xl font-thin text-justify align__text">
                    {HERO.description}
                </p>
                <button className="relative pl-1 button__hero justify-center">
                    <a href="#contact" className="relative inline-block text-[#101011] font-bold text-[1.1rem] py-2 px-4 rounded border border-[#8c4df7] transition-all duration-500 overflow-hidden group">
                        <span className="absolute inset-0 bg-[#8c4df7] transition-transform duration-500 group-hover:translate-x-full"></span>
                        <span className="relative z-10 transition-colors duration-500 group-hover:text-[#8c4df7]">Contact Me</span>
                    </a>
                </button>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center max-sm:pt-7 lg:p-8 relative group cursor-target">
                <img
                    src={mioImg}
                    width={600}
                    height={600}
                    alt="こんにちは、秋山澪です。"
                    className="rounded-3xl transition-transform duration-500 group-hover:scale-99"
                />
            </div>
        </section>
    );
};

export default Hero;