import SectionTitle from '../ui/SectionTitle';
import testImage from '../../assets/test1.png';

const REVIEWS_DATA = Array(4).fill({
    name: "Courtney Henry",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: testImage
});

const StarRating = () => (
    <div className="flex gap-1">
        {Array(5).fill(0).map((_, i) => (
            <svg key={i} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                <path d="M14.4067 5.00626L9.94357 4.35762L7.94845 0.312897C7.89396 0.202155 7.80431 0.112506 7.69357 0.0580143C7.41583 -0.0790951 7.07833 0.0351628 6.93947 0.312897L4.94435 4.35762L0.481262 5.00626C0.358215 5.02383 0.245715 5.08184 0.159582 5.16973C0.0554521 5.27676 -0.00192816 5.42075 4.94753e-05 5.57006C0.00202711 5.71937 0.0632008 5.86179 0.170129 5.96602L3.39923 9.11426L2.63634 13.5598C2.61845 13.6632 2.62989 13.7695 2.66937 13.8668C2.70885 13.964 2.77479 14.0483 2.8597 14.1099C2.94462 14.1716 3.04511 14.2082 3.1498 14.2157C3.25448 14.2232 3.35916 14.2012 3.45197 14.1522L7.44396 12.0533L11.436 14.1522C11.5449 14.2102 11.6715 14.2295 11.7928 14.2084C12.0986 14.1557 12.3043 13.8656 12.2516 13.5598L11.4887 9.11426L14.7178 5.96602C14.8057 5.87989 14.8637 5.76739 14.8813 5.64434C14.9287 5.33672 14.7143 5.05196 14.4067 5.00626Z" fill="#6D91EE" />
            </svg>
        ))}
    </div>
);

const TestimonialCard = ({ review }) => (
    <div className="bg-white rounded-[40px] p-8 border border-[#6D91EE] shadow-sm flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow">
        <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-[#6D91EE]/20">
            <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col flex-grow">
            <h4 className="text-[#6D91EE] font-bold text-lg mb-2">{review.name}</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {review.text}
            </p>
            <StarRating />
        </div>
    </div>
);

const Testimonials = () => {
    return (
        <section className="py-24 bg-white flex flex-col items-center">
            <SectionTitle title="Testimonials" />

            <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {REVIEWS_DATA.map((review, idx) => (
                    <TestimonialCard key={idx} review={review} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
