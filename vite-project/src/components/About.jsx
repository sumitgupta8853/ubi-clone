export const About = () => {
    return (
        <div className="w-full h-[90vh] bg-indigo-300 relative">
            <div className="absolute top-40 ml-24">
                <img
                    className="animate-bounce"
                    src="ubiii.avif"
                    alt=""
                    height="75%"
                    width="55%"
                />
            </div>
            <div className="absolute top-20 right-0 bg-white border border-gray-400 p-6 w-1/2 h-[350px] rounded-l-full flex items-center justify-center">
                <p className="text-center">
                    I am a software engineer with a passion for building scalable and efficient systems. I have experience with
                    a variety of programming languages and technologies, including Java, Python, and JavaScript. I am excited
                    to continue learning and growing as a developer.
                </p>
            </div>
        </div>
    );
};
