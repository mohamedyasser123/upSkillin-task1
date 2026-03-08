import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import service1 from '../../assets/services1.jpg';
import service2 from '../../assets/services2.png';
import service3 from '../../assets/services3.png';

const SERVICES_DATA = [
    {
        id: 1,
        image: service1,
        title: "Lorem Ipsum",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
    },
    {
        id: 2,
        image: service2,
        title: "Lorem Ipsum",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
    },
    {
        id: 3,
        image: service3,
        title: "Lorem Ipsum",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
    }
];

const ServiceCard = ({ card }) => (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="h-56 bg-gray-200 overflow-hidden">
            <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
        </div>
        <div className="p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{card.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
                {card.description}
            </p>
        </div>
    </div>
);

const Services = () => {
    return (
        <section className="py-24 flex flex-col items-center">
            <SectionTitle title="Services" />

            <div className="w-full max-w-6xl mx-auto px-4 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                {SERVICES_DATA.map((card) => (
                    <ServiceCard key={card.id} card={card} />
                ))}
            </div>

            <Button className="bg-[#5180F6] text-[#374151] font-bold text-[16px] px-25 py-8 shadow-lg">
                Help Me
            </Button>
        </section>
    );
};

export default Services;
