import SearchForm from "@/components/SearchForm";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  // search query
  const query = (await searchParams).query;

const posts = await client.fetch(POSTS_QUERY);

  // tempory post query
  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: { _id: 1, name: "අවිදු සම්පත්" },
  //     _id: 1,
  //     description: "ths is a description",
  //     image: "https://placehold.co/600x400",
  //     category: "Astronomy",
  //     title: "Neptune Planet Tour",
  //   },
  // ];
  return (
    <main>
      <section className="flex flex-col items-center border border-black border-solid p-10 bg-pink-300">
        <h1 className="text-5xl font-bold text-center m-10">Blog</h1>
        <SearchForm query={query} />
      </section>

      <section>
        <h2 className="text-4xl font-bold m-4">
          {query ? `Serch results for "${query}"` : "All Blog Posts"}
        </h2>

        <ul>
          {posts?.length > 0 ? (
            posts.map((post: BlogCardType, index: number) => (
              <BlogCard key={post?._id} post={post}/>
            ))
          ) : ( <p>No Blog Posts Found</p> )}
        </ul>
      </section>
    </main>
  );
}
