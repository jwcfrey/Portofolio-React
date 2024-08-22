import { HERO } from "../constants";
import mioImg from "../assets/mio.jpg";
import useTypewriter from "../hooks/useTypewriter";

const Hero = () => {
    const typedName = useTypewriter([HERO.name], 150, 2000);

    return (
        <section className="flex min-h-screen flex-wrap items-center">
            <div className="w-full md:w-1/2">
                <h2 className="my-10 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
                    {typedName}
                </h2>
                <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
                    {HERO.greet}
                </p>
                <p className="mb-8 p-2 text-xl text-justify">
                    {HERO.description}
                </p>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center lg:p-8">
                <img src={mioImg} width={600} height={600} alt="こんにちは、秋山澪です。" className="rounded-3xl" />
            </div>
        </section>
    );
};

export default Hero;