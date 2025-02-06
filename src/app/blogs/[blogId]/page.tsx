import { baseApi } from "@/global-const/base-api";
import { Blog } from "@/global-const/blog";
import { Metadata } from "next";
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
export const revalidate = 3600;

export async function generateMetadata({ params }: {params: Params}) : Promise<Metadata> {
    const response = await fetch(baseApi+"/"+(await params).blogId);
    if(!response.ok) notFound()
    const blog: Blog = await response.json();
    return {
      title: blog.blogName.length > 7 ? blog.blogName.slice(0, 7) + "..." : blog.blogName,
      description: blog.blogName
    }
  }


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
        <article className="w-[auto] mt-[1rem] ml-[auto] mr-[auto] max-w-[80%] mb-[2]">
            <h1 className="text-[2rem]">{blog.blogName}</h1>
            <p className = "text-[1.4rem]">{blog.blogContent}</p>
        </article>
    )
}