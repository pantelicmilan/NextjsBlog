import { baseApi } from "@/global-const/base-api";
import { Blog } from "@/global-const/blog";
import { notFound } from "next/navigation";

type Params = Promise<{ blogId: string }>;

export async function generateStaticParams() {
    const response = await fetch(baseApi)
    const blogs : Blog[] = await response.json()
    return blogs.map((blog)=>{
        return {
            blogId: blog.id
        }
    }) 
}
export const dynamicParams = true
const oneHourInSeconds:number = 60*60; 
export const revalidate = oneHourInSeconds;

export default async function BlogPage({
    params,
}: {
    params: Params;
}){
    const blogId = (await params).blogId
    const response = await fetch(baseApi+"/"+blogId)
    const blog = await response.json()

    if(!blog) notFound()
    return (
        <article className="w-[auto] ml-[auto] mr-[auto] max-w-[80%] mb-[2]">
            <h1 className="text-[2rem]">{blog.blogName}</h1>
            <p className = "text-[1.4rem]">{blog.blogContent}</p>
        </article>
    )
}