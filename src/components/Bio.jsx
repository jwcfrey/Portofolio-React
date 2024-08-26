import { BIO } from "../constants"

const Bio = () => {
    return (
        <div className="container mx-auto space-y-8 p-1 justify-center">
            <section className="mx-0 max-w-[100rem] flex flex-col rounded-3xl px-3 py-2 lg:px-20 gap-12 pt-10" id="bio">
                <h2 className="text-center text-3xl lg:text-4xl font-extrabold">
                    Bio
                </h2>
                <div className="rounded-xl border border-stone-50/30 bg-white/10 space-y-8 p-5 tracking-tight">
                    {BIO.map((bio, index) => (
                        <p key={index} className="mb-4 text-lg lg:text-xl">
                            {bio}
                        </p>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Bio