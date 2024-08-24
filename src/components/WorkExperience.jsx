import { EXPERIENCES } from "../constants"

const WorkExperience = () => {
    return (
        <section className="pt-20" id="work">
            <h2 className="text-center text-4xl font-semibold tracking-tighter">
                Work Experience
            </h2>
            <div className="space-y-8 p-10 text-justify justify-center">
                {EXPERIENCES.map((
                    experience, index
                ) => (
                    <div key={index} className="rounded-xl border border-stone-50/30 bg-white/10 p-4">
                        <h3 className="text-2xl font-semibold">
                            {experience.title}
                        </h3>
                        <p className="text-xl">
                            {experience.company}
                        </p>
                        <p className="text-sm text-stone-300">
                            {experience.duration}
                        </p>
                        <p className="mt-2 text-base">
                            {experience.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WorkExperience