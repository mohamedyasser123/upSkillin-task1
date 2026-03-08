import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { submitContactRequest } from '../../api/contact';
import emailIcon from '../../assets/Email.svg';
import callIcon from '../../assets/call.svg';

const inputClass = "w-full sm:w-80 bg-[#CEDCFF] text-[#000000] placeholder-[#000000] rounded-[61px] px-6 py-3 border-none focus:ring-2 focus:ring-[#6D91EE] focus:outline-none mb-4 transition-all";

const InfoItem = ({ icon, text }) => (
    <div className="flex items-center gap-4 text-gray-700 hover:text-[#6D91EE] transition-colors cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
            <img src={icon} alt="icon" className="w-5 h-5" />
        </div>
        <span className="font-medium">{text}</span>
    </div>
);

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [status, setStatus] = useState({ loading: false, success: null, error: null });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: null, error: null });
        try {
            const response = await submitContactRequest(formData);
            setStatus({ loading: false, success: response.message || 'Email sent successfully!', error: null });
            setFormData({ name: '', email: '', phone: '' });
        } catch (error) {
            setStatus({ loading: false, success: null, error: error.message || 'An error occurred. Please try again.' });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className={inputClass} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className={inputClass} />
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required className={inputClass} />

            <button
                type="submit"
                disabled={status.loading}
                className="mt-4 px-10 py-2 border-2 border-[#6D91EE] text-[#6D91EE] hover:bg-[#6D91EE] hover:text-white rounded-full font-semibold transition-colors disabled:opacity-50"
            >
                {status.loading ? 'Sending...' : 'Send'}
            </button>

            {status.success && <p className="mt-4 text-green-600 text-sm font-medium">{status.success}</p>}
            {status.error && <p className="mt-4 text-red-500 text-sm font-medium">{status.error}</p>}
        </form>
    );
};

const ContactUs = () => {
    return (
        <section className="py-24 bg-white flex flex-col items-center">
            <SectionTitle title="Contact Us" />

            <div className="w-full max-w-4xl mx-auto px-4">
                <div className="p-12 md:p-16 flex flex-col md:flex-row justify-between relative">

                    <div className="w-full md:w-1/2 flex flex-col justify-center border-r-0 md:border-r border-gray-100 pr-0 md:pr-12 mb-10 md:mb-0">
                        <ContactForm />
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-center pl-0 md:pl-16 mt-2 md:mt-0 gap-6">
                        <InfoItem icon={emailIcon} text="upskilling.eg1@gmail.com" />
                        <InfoItem icon={callIcon} text="+20 115 493 2137" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactUs;

