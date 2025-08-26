import Header from "./Header"
import Image from "next/image"
import AboutmeDetails from './AboutmeDetails'
import Button from "./Button"
import HeroIntro from "./HeroIntro"
const Hero = () => {
    return (
        <main className="flex flex-col items-center justify-center 
            
        ">
            <Header />
            <div className="flex text-center 
            md:flex-col
            ">
                <p className="font-ubuntu text-[117px] hidden text-[#98FAEC] lg:inline">Developer</p>
                <section
                    className="flex flex-col items-center my-20 border-3 py-10 font-mono rounded-tl-[249px] rounded-br-[249px] shadow-[-12px_-12px_12px_2px_rgba(18,247,214,0.95)]
                    "
                >
                    <Image
                        src='/assets/Profile-photo.svg'
                        alt=''
                        width={140}
                        height={140}
                        className=''
                    />
                    <span className="text-2xl">Shafee</span>
                    <span>Full-stack Developer</span>
                    <AboutmeDetails />
                    <div className="pr-30 flex items-start justify-end">
                        <Button icon="icon-download.svg"
                            className="bg-white"
                        > Download CV</Button>
                    </div>

                </section>
            </div>
            <HeroIntro />
        </main>
    )
}

export default Hero
