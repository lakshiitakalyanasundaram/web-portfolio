import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);


    const handleCopy = () => {
        navigator.clipboard.writeText(' lakshiitakalyanasundaram@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (

            <section className="c-space my-20" id="about">
                <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                    <div className="col-span-1 xl:row-span-3">
                        <div className="grid-container">
                            <img src="/assets/27263abb-df79-42eb-93e2-67588c109b2e-removebg-preview.png" alt="grid-1"
                                 className="w-full sm:h-[276px] h-fit object-contain"/>

                            <div>
                                <p className="grid-headtext">Hi, I’m K.Lakshiita </p>
                                <p className="grid-subtext">
                                    Passionate about Machine Learning and a problem-solving enthusiast, always eager to
                                    tackle challenges and create innovative solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 xl:row-span-3">
                        <div className="grid-container">
                            <img src="assets/grid2.png" alt="grid-2"
                                 className="w-full sm:h-[310px] h-fit object-contain"/>

                            <div>
                                <p className="grid-headtext">Tech Stack</p>
                                <p className="grid-subtext">
                                    I specialize in a variety of languages, frameworks, and tools that allow me to build
                                    robust and scalable
                                    applications
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 xl:row-span-4">
                        <div className="grid-container">
                            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                                <Globe
                                    height={326}
                                    width={326}
                                    backgroundColor="rgba(0, 0, 0, 0)"
                                    backgroundImageOpacity={0.5}
                                    showAtmosphere
                                    showGraticules
                                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                    labelsData={[{
                                        lat: 12.9716,
                                        lng: 77.5946,
                                        text: 'Bengaluru, India',
                                        color: 'white',
                                        size: 20
                                    }]}
                                />
                            </div>
                            <div>
                                <p className="grid-headtext">I’m very flexible with time zone communications &
                                    locations</p>
                                <p className="grid-subtext">I&apos;m based in Bengaluru, India and open to both remote
                                    opportunities worldwide and on-site roles, ready to collaborate and contribute
                                    wherever
                                    needed.</p>
                                <a href="/assets/K.Lakshiita.pdf" target="_blank" rel="noopener noreferrer">
                                    <Button name="Click here for Resume" isBeam containerClass="w-full mt-10"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                            <img src="assets/grid3.png" alt="grid-3"
                                 className="w-full sm:h-[266px] h-fit object-contain"/>

                            <div>
                                <p className="grid-headtext">My Passion for Problem Solving </p>
                                <p className="grid-subtext">
                                    I love solving problems and building things through an innovative and unique
                                    approach,
                                    leveraging the power of machine learning and coding to bring ideas to life.
                                    I enjoy exploring new technologies, and enhancing my skills.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="xl:col-span-1 xl:row-span-2">
                        <div className="grid-container">
                            <img
                                src="assets/grid4.png"
                                alt="grid-4"
                                className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                            />

                            <div className="space-y-2">
                                <p className="grid-subtext text-center">Contact me</p>
                                <div className="copy-container" onClick={handleCopy}>
                                    <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                                    <p className="lg:text-[18px] md:text-xl font-medium text-gray_gradient text-white">lakshiitakalyanasundaram@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    );
};

export default About;