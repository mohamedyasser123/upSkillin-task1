import React from 'react';
import Button from '../ui/Button';
import aboutImage from "../../assets/about.jpg";
import about1Image from "../../assets/about1.png";

const About = () => {
    return (
        <section
            className="relative  min-h-[600px] bg-cover bg-center overflow-hidden flex items-center mx-30"
            style={{ backgroundImage: `url(${aboutImage})` }}
        >
            <div className="absolute inset-0 z-0">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M 0 0 L 55 0 C 40 20, 35 60, 20 100 L 0 100 Z" fill="#84A1FA" fillOpacity="0.6" />
                    <path d="M 55 0 C 40 20, 35 60, 20 100 L 100 100 L 100 0 Z" fill="#6D91EE" />
                </svg>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20">
                <div className="flex flex-col md:flex-row items-stretch">
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start pr-0 md:pr-10 mb-12 md:mb-0 relative z-10">
                        <div className="max-w-[400px]">
                            <h2 className="text-white text-[48px] md:text-[56px] font-black tracking-tighter mb-4 text-center md:text-left drop-shadow-md">
                                About Us
                            </h2>

                            <p className="text-white text-[13px] font-medium leading-relaxed mb-8 text-center md:text-left">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            </p>

                            <img
                                src={about1Image}
                                alt="Trash bags"
                                className="w-full h-auto max-h-[250px] object-cover rounded-[20px] shadow-2xl bg-gray-300"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-end pl-0 md:pl-10 text-right mt-4 md:mt-20">
                        <div className="w-full max-w-[450px] flex flex-col items-center md:items-end">
                            <h2 className="text-white text-[48px] md:text-[56px] font-black tracking-tighter mb-6 drop-shadow-md text-center md:text-right">
                                Where
                            </h2>

                            <p className="text-white text-[13px] font-medium leading-loose mb-12 text-center md:text-right">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative z-20 w-full flex justify-center mt-12">
                    <Button className="bg-[#F1C440] hover:bg-[#E5B530] text-[#374151] font-bold text-[16px] px-14 py-3 shadow-lg">
                        Help Me
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default About;
