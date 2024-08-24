import { BIO } from "../constants"

const Bio = () => {
    return (
        <div className="flex justify-center items-center text-justify">
            <section className="flex max-w-8xl flex-col gap-12 pt-20" id="bio">
                <h2 className="text-center text-3xl lg:text-4xl">
                    Bio
                </h2>
                <div className="rounded-xl border border-stone-50/30 bg-white/10 space-y-8 p-10">
                    {BIO.map((bio, index) => (
                        <p key={index} className="mb-4 text-lg lg:text-xl text-justify">
                            {bio}
                        </p>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Bio