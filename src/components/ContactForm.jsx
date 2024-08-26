import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";

const INITIAL_FORM_DATA = {
    name: "",
    email: "",
    message: "",
};

const ContactForm = () => {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const validationErrors = {};
        if (!formData.name) validationErrors.name = "Name is required";
        if (!formData.email) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email is invalid";
        }
        if (!formData.message) validationErrors.message = "Message is required";
        return validationErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setIsSending(true);

        emailjs
            .send(
                "service_bpunobh",
                "template_w6uu9p7",
                formData,
                "DpRNOXin9vpPIjuYE"
            )
            .then(() => {
                toast.success("Message sent successfully");
                setFormData(INITIAL_FORM_DATA);
            })
            .catch((error) => {
                console.error("FAILED...", error);
                toast.error("Failed to send message. Please try again later.");
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <div className="p-4 lg:w-3/4" id="contact">
            <Toaster />
            <h2 className="my-8 text-center text-4xl font-extrabold tracking-tighter">
                Let's Connect
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 flex space-x-4">
                    <div className="lg:w-1/2">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            placeholder="Name"
                            onChange={handleChange}
                            className="mb-4 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-purple-500 focus:text-white hover:text-white focus:outline-none button__contact"
                        />
                        {errors.name && (
                            <p className="text-sm text-red-400">{errors.name}</p>
                        )}
                    </div>
                    <div className="lg:w-1/2">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            placeholder="Email"
                            onChange={handleChange}
                            className="mb-4 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-purple-500 focus:text-white hover:text-white focus:outline-none button__contact"
                        />
                        {errors.email && (
                            <p className="text-sm text-red-400">{errors.email}</p>
                        )}
                    </div>
                </div>
                <div className="mb-4">
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        placeholder="Message"
                        onChange={handleChange}
                        className="mb-4 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-purple-500 focus:text-white hover:text-white focus:outline-none button__contact"
                        rows="5"
                    />
                    {errors.message && (
                        <p className="text-sm text-red-400">{errors.message}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className={`group relative mb-8 w-full rounded border border-stone-50/30 hover:border-[#8c4df7] focus:border-[#8c4df7] bg-transparent px-4 py-2 text-sm font-semibold overflow-hidden transition-all duration-500 ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
                    disabled={isSending}
                >
                    <span className="absolute inset-0 bg-[#8c4df7] focus:border-[#8c4df7] bg-span transform -translate-x-full"></span>
                    <div className="relative flex items-center justify-center gap-2 z-10 transition-colors duration-500 text-div font-semibold">
                        {isSending ? "Sending..." : "Send"}
                        <FiSend />
                    </div>
                </button>
            </form>
        </div>
    );
};

export default ContactForm