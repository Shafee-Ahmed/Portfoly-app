import Image from "next/image"
import ModuleTitle from "./ModuleTitle"


const Skills = () => {
    return (
        <section className="flex flex-col items-center px-4 py-8 gap-6 font-mono
        border-t-1 border-[#43454D]
        ">
            <ModuleTitle
                title="Skills"
                Para="I am striving to never stop learning and improving"
                className="text-center flex flex-col items-center"
            ></ModuleTitle>

            <p className="text-white text-center mb-4 text-[15px]">

            </p>
            <div className="flex flex-col gap-4 w-full max-w-xs 
            md:flex-row
            md:max-w-3xl
            md:gap-20
            md:justify-center
            
            ">
                <div className="bg-[#98FAEC] rounded-lg px-4 py-3 flex flex-col items-center shadow    border-l-10 border-[#0C73B8]">
                    <Image src="/assets/icon-monitor.svg" alt="Web" width={32} height={32} />
                    <span className="text-[#23272f] text-xl font-bold mt-2">Web Developement</span>
                    <span className="text-[#23272f] text-sm mt-1">HTML · CSS · JS · REACT</span>
                </div>
                <div className="bg-[#98FAEC] rounded-lg px-4 py-3 flex flex-col items-center 
                 border-l-10 border-[#0C73B8]
                 
                ">
                    <Image src="/assets/shape.svg" alt="App" width={32} height={32}

                        className=""
                    />
                    <span className="text-[#23272f] text-xl font-bold mt-2">App Developement</span>
                    <span className="text-[#23272f] text-sm mt-1">iOS · Android</span>
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-6
            md:flex-row
            md:w-full
            md:justify-around
            md:max-w-2xl
            ">
                <div className="flex flex-row justify-center gap-8">
                    <div className="flex flex-col items-center">
                        <div className="bg-[#F16529] rounded-full  h-28 w-28 flex items-center justify-center mb-2">
                            <Image src="/assets/html.svg" alt="HTML" width={40} height={40} />
                        </div>

                    </div>
                    <div className="flex items-center">
                        <div className="bg-[#2965F1] rounded-full  h-28 w-28 flex items-center justify-center mb-2">
                            <Image src="/assets/css.svg" alt="CSS" width={40} height={40} />
                        </div>

                    </div>
                </div>
                <div className="flex flex-row justify-center gap-8">
                    <div className="flex flex-col items-center">
                        <div className="bg-[#F7DF1E] h-28 w-28  rounded-full flex items-center justify-center mb-2">
                            <Image src="/assets/js.svg" alt="JS" width={40} height={40} />
                        </div>

                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-[#12F7D6] h-28 w-28 rounded-full flex items-center justify-center mb-2">
                            <Image src="/assets/react.svg" alt="React" width={40} height={40} />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
