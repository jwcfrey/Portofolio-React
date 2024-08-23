import { HERO } from "../constants";
import mioImg from "../assets/mio.jpg";
import Typewriter from '../hooks/Typewriter';

const Hero = () => {
    return (
        <section className="flex min-h-screen flex-wrap items-center">
            <div className="w-full md:w-1/2 text-justify p-9">
            <h2 className="mt-10 mb-4 p-0 text-2xl font-bold sm:text-5xl md:text-4xl lg:text-[3.1rem] xl:text-[4.2rem] title__text">
                    <Typewriter text={[HERO.name]} />
                </h2>
                <p className="p-2 text-3xl tracking-normal lg:text-3xl align__text">
                    {HERO.greet}
                </p>
                <p className="mb-8 p-2 mt-3 text-xl align__text">
                    {HERO.description}
                </p>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center lg:p-8 relative group">
                <img
                    src={mioImg}
                    width={600}
                    height={600}
                    alt="こんにちは、秋山澪です。"
                    className="rounded-3xl transition-transform duration-500 group-hover:scale-95"
                />
            </div>
        </section>
    );
};

export default Hero;