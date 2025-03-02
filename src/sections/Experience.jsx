import { workExperiences } from "../constants/index.js";

const WorkExperience = () => {
    return (
        <section className="c-space my-20" id="work">
            <div className="w-full text-gray-400">
                {/* Heading */}
                <p className="head-text text-white mb-10">Technical Skills</p>

                {/* Work Experience Container */}
                <div className="w-full flex justify-center px-4">
                    <div className="work-content w-full max-w-3xl">

                        {workExperiences.map((item, index) => (
                            <div key={index}
                                 className="work-content_container group flex items-center p-5 border border-gray-700 rounded-lg transition-transform hover:scale-105 mb-6">

                                {/* Logo & Vertical Line */}
                                <div className="flex flex-col items-center mr-6">
                                    <div
                                        className="work-content_logo w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <img className="w-8 h-8 object-contain" src={item.icon} alt={item.name}/>
                                    </div>
                                    {index !== workExperiences.length - 1 && (
                                        <div className="work-content_line w-1 h-full bg-gray-600 my-2"></div>
                                    )}
                                </div>

                                {/* Experience Details */}
                                <div className="text-left">
                                    <p className="font-bold text-white text-lg">{item.name}</p>
                                    <p className="text-gray-500 mt-2">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
