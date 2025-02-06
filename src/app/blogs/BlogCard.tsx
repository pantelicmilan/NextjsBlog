import Link from "next/link"

export default function BlogCard({blogName, blogContent, blogId}: {blogName:string, blogContent:string, blogId: string}){
    return (
        <article className="bg-gray-50 p-[1rem] rounded-[1rem] transition-transform duration-300 ease-in-out transform hover:scale-105 touch:scale-105">
            <Link href={"/blogs/"+blogId}>
                <h1 className= "text-sky-700 text-[1rem] ">{blogName}</h1>
  
            <p className="text-[1rem]">{blogContent.length > 7 ? blogContent.slice(0, 7) + "..." : blogContent}</p>
            </Link>
        </article>
       
    )
}