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
                "service_bpunobh", // Your EmailJS service ID
                "template_w6uu9p7", // Your EmailJS template ID
                formData, // The form data (name, email, message)
                "DpRNOXin9vpPIjuYE" // Your EmailJS public key
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
            <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
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
                            className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
                        />
                        {errors.name && (
                            <p className="text-sm text-rose-800">{errors.name}</p>
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
                            className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
                        />
                        {errors.email && (
                            <p className="text-sm text-rose-800">{errors.email}</p>
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
                        className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
                        rows="5"
                    />
                    {errors.message && (
                        <p className="text-sm text-rose-800">{errors.message}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${
                        isSending ? "cursor-not-allowed opacity-50" : ""
                    }`}
                    disabled={isSending}
                >
                    <div className="flex items-center justify-center gap-2">
                        {isSending ? "Sending..." : "Send"}
                        <FiSend />
                    </div>
                </button>
            </form>
        </div>
    );
};

export default ContactForm;