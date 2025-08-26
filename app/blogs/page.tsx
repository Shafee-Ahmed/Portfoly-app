import React from 'react'
import ModuleTitle from '../components/ModuleTitle'
import Header from '../components/Header'
import BlogColumn from '../components/BlogColumn'
const blogInfo = [
    {
        Text: "Sinan",
        Date: "10.Oct 2023",
        Read: "1 Min"
    }
]
const BlogPage = () => {
    return (
        <>
            <Header />

            <ModuleTitle
                title="Blog"
                Para="My thoughts on technology and business, welcome to subscribe
      </p>"
                className="text-center flex flex-col items-center gap-6 mt-10"
            />
            <div className='pb-10 pt-10 '>
                <BlogColumn
                    image="pc-image.svg"
                    ques="What does it take to become a web developer?"
                    ans="Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet..."
                    info={blogInfo}
                />
                <BlogColumn
                    image="pc-image.svg"
                    ques="What does it take to become a web developer?"
                    ans="Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet..."
                    info={blogInfo}
                />
                <BlogColumn
                    image="pc-image.svg"
                    ques="What does it take to become a web developer?"
                    ans="Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet..."
                    info={blogInfo}
                />
                <BlogColumn
                    image="pc-image.svg"
                    ques="What does it take to become a web developer?"
                    ans="Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet..."
                    info={blogInfo}
                />

            </div>

        </>
    )
}

export default BlogPage
