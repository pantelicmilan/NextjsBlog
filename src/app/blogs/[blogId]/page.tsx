import { baseApi } from "@/global-const/base-api";

export default async function BlogPage({
    params,
}: { params:{blogId: string}}){
    const blogId = (await params).blogId
    const response = await fetch(baseApi+"/"+blogId)
    const blog = await response.json()
    return (
        <article className="w-[auto] ml-[auto] mr-[auto] max-w-[80%] mb-[2]">
            <h1 className="text-[2rem]">{blog.blogName}</h1>
            <p className = "text-[1.4rem]">{blog.blogContent}</p>
        </article>
    )
}