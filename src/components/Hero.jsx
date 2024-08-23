import { HERO } from "../constants";
import mioImg from "../assets/mio.jpg";
import Typewriter from '../hooks/Typewriter';

const Hero = () => {
    return (
        <section className="flex min-h-screen flex-wrap items-center">
            <div className="w-full md:w-1/2">
                <h2 className="my-10 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
                    <Typewriter text={[HERO.name]} />
                </h2>
                <p className="p-2 text-3xl tracking-normal lg:text-3xl">
                    {HERO.greet}
                </p>
                <p className="mb-8 p-2 text-xl text-justify">
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