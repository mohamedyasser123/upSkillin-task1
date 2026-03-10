import Button from '../ui/Button';
import heroImg from '../../assets/hero.jpg';
import logoImg from '../../assets/logo.svg';

const Hero = () => {
    return (
        <section
            className="relative w-full h-screen min-h-[650px] overflow-hidden bg-no-repeat bg-center bg-[length:80%] my-10"
            style={{ backgroundImage: `url(${heroImg})` }}
        >
            <div
                className="absolute inset-y-0 right-0 w-full bg-white z-0"
                style={{ clipPath: 'polygon(100% 0, 100% 100%, 45% 100%, 75% 0)' }}
            />

            <div className="relative z-10 w-full h-full max-w-7xl mx-auto flex items-center justify-end px-4 sm:px-8">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center">

                    <div className="flex items-center gap-3 mb-10 md:-translate-x-12">
                        <div className="border border-[#6D91EE] rounded p-1.5 bg-white">
                            <img src={logoImg} alt="logo" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-[#6D91EE] text-[28px] font-thin leading-none tracking-wide">Round Rock</span>
                            <span className="text-[#6D91EE] text-[10px] font-bold tracking-[0.4em] uppercase mt-1">Trash Hauling</span>
                        </div>
                    </div>

                    <Button className="z-10 shadow-lg px-10 py-3 mb-16 text-white bg-[#6D91EE] text-[24px]">
                        Experts
                    </Button>

                    <div className="relative flex flex-col items-center justify-center w-full mb-6">
                        <h2 className="text-[5rem] text-gray-500 font-thin tracking-widest leading-none absolute -top-12 z-0 opacity-20">
                            Lorem
                        </h2>
                        <h1 className="text-[6rem] font-black text-gray-800 leading-none tracking-tight z-10 mt-5">
                            Lorem lorem
                        </h1>
                    </div>

                    <p className="text-gray-700 text-[13px] font-medium mb-10 max-w-[320px] text-center leading-relaxed z-10">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    </p>

                    <Button className="z-10 shadow-lg px-14 py-4 text-sm bg-[#5180F6]">
                        Help Me
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
