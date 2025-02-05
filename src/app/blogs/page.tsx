import { baseApi } from "@/global-const/base-api";
import BlogCard from "./BlogCard";
import { Blog } from "@/global-const/blog";

export const revalidate = 120;

export default async function Blogs(){
    const response = await fetch(baseApi)
    if(!response.ok) throw new Error("Problem sa ucitavanjem podataka sa servera!")

    const blogs = await response.json();
    
    return (
        <main className="mb-[2rem] mt-[1rem] flex flex-col gap-[0.5rem] w-[70%] ml-[auto] mr-[auto] blog-list">
            <h1 className="text-[1.6rem]">Svi blogovi:</h1>
            {
                blogs.map((blog : Blog) => (
                    <BlogCard key = {blog.id} blogContent={blog.blogContent} blogName={blog.blogName} blogId={blog.id}/>
                ))

            }
    
        </main>
    );
}