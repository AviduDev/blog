import SearchForm from "@/components/SearchForm";
import Image from "next/image";
import BlogCard, { BlogCardType } from "@/components/BlogCard";
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
