import { EDUCATION } from "../constants"

const EducationSection = () => {
    return (
        <section className="container mx-auto space-y-8 py-10 p-2 justify-center" id="education">
            <h2 className="mb-4 text-center text-4xl font-extrabold">
                Education
            </h2>
            {EDUCATION.map((edu, index) => (
                <div key={index} className="mb-6 rounded-xl border border-stone-50/30 bg-white/10 p-5">
                    <h3 className="text-xl font-semibold">
                        {edu.degree}
                    </h3>
                    <p className="text-lg">
                        {edu.institution}
                    </p>
                    <p className="text-sm text-stone-300">
                        {edu.duration}
                    </p>
                    <p className="mt-2">
                        {edu.description}
                    </p>
                </div>
            ))}
        </section>
    )
}

export default EducationSection