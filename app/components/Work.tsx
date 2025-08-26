import ModuleTitle from "./ModuleTitle"
import Image from "next/image"
import Link from "next/link"

const Work = () => (
    <section className="flex flex-col items-center px-4 py-8 gap-8 font-mono
       border-t-1 border-[#43454D]
    ">
        <ModuleTitle
            title="Works"
            Para="I had the pleasure of working with these awesome projects"
            className="mb-2"
        />
        <div className="flex flex-col items-center gap-4 mt-4
        md:w-full
        ">
            <Image
                src="/assets/dual-screen.svg"
                alt="Dual Screen Project"
                width={220}
                height={140}
                className="rounded-lg shadow-lg"
            />
            <Link
                href="#"
                className="text-[#12F7D6] text-lg font-bold mt-2 flex items-center gap-2"
            >
                View Website
                <Image
                    src={`/assets/icon-chevrons-right.svg`}
                    alt=''
                    width={19}
                    height={18}
                />
            </Link>
        </div>
    </section>
)
export default Work