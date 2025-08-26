import Image from "next/image";
import Link from "next/link";

type BlogInfo = {
    Text: string;
    Date: string;
    Read: string;
};

type blogColumnProp = {
    image?: string;
    ques?: string;
    ans?: string;
    info?: BlogInfo[];
};

const BlogColumn = ({
    image = "",
    ques = "",
    ans = "",
    info = [],
}: blogColumnProp) => {
    return (

        <div className="w-full h-auto flex justify-center">
            <main className="flex flex-col gap-15 items-center justify-center  py-10 pb-0 lg:flex-row  max-w-sm w-full pr-3 md:max-w-3xl lg:max-w-5xl
            ">
                <div
                    className="relative w-60 h-60 md:w-80 border-0 
                    object-cover
                    "
                >
                    <Image
                        src={`/assets/${image}`}
                        alt={`${image}`}
                        fill
                        className="object-cover hover:border-4 hover:border-[#12f7d6] transition-all duration-200  overflow-hidden
                    ease-in-out hover:scale-105 hover:object-cover"
                    />
                </div>
                <div className="flex flex-col gap-5 font-ubuntu 

                ">
                    <Link href='/' className="
                        text-2xl md:text-3xl
                       text-[#12F7D6]
                    ">
                        <p>{ques}</p>
                    </Link>
                    <p className="
                        text-[16px] 
                    ">{ans}</p>

                    <div className="flex flex-col  items-start gap-4 ">

                    <Link href="/" className="
                    flex gap-2  underline underline-offset-6 text-[#12f7d6]
                      text-[16px]
                    ">
                            Read More
                            <Image
                                src={`/assets/icon-chevrons-right.svg`}
                                alt={`${image}`}
                                width={19}
                                height={18}
                            />
                    </Link>
                    <div className="flex flex-col sm:flex-row  gap-4">
                            <p className="bg-[#43454D] rounded-full text-[14px] w-fit flex items-center px-2">Web Developer</p>
                            <span>
                                {info.map((item, idx) => (
                                    <span key={idx} className="flex gap-2 text-[14px] ">
                                        <span className="gap-1">Text: {item.Text}</span>
                                        <span className="gap-1">Date: {item.Date}</span>
                                        <span className="gap-1">Read: {item.Read}</span>
                                    </span>
                                ))}
                            </span>
                    </div>
                    </div>

                </div>
            </main>
        </div>

    );
};

export default BlogColumn;