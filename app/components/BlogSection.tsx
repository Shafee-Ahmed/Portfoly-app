import BlogColumn from "./BlogColumn"
import Button from "./Button"
import ModuleTitle from "./ModuleTitle"

const blogInfo = [
    {
        Text: "Sinan",
        Date: "10.Oct 2023",
        Read: "1 Min"
    }
]

const BlogSection = () => {
    return (
        <section className="flex flex-col items-center px-4 py-8 gap-8 font-mono
        border-t-1 border-[#43454D]
        ">
            <ModuleTitle
                title="Blog"
                Para="My thoughts on technology and business, welcome to subscribe
      </p>"
                className="text-center flex flex-col items-center gap-6"
            />
         
            <BlogColumn
                image="pc-image.svg"
                ques="What does it take to become a web developer?"
                ans="Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet..."
                info={blogInfo}
            />
            <div className="flex items-center gap-4">
                <Button
                    className="bg-[#12F7D6] text-xl"
                >View More</Button>
                <Button
                    className="bg-[#292F36] border-2 border-[#12F7D6] text-white text-xl"
                >Subscribe</Button>
            </div>

            <div className="w-full border-b border-[#43454D] my-4"></div>

        </section>
    )
}

export default BlogSection