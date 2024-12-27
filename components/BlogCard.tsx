import React from "react";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type BlogCardType = {
  _createdAt: string;
  views: number;
  _id: number;
  author: any;
  title: string;
  category: string;
  image: SanityImageSource;
  description: string;
};

const BlogCard = ({ post }: { post: BlogCardType }) => {
  const {
    _createdAt,
    views,
    _id,
    author,
    title,
    category,
    image,
    description,
  } = post;

  return (
    <li
      key={_id}
      className="flex flex-col w-fit m-5 p-5 border border-solid border-black"
    >
      <p>{formatDate(_createdAt)}</p>
      <span className="flex flex-row">
        {views}
        <EyeIcon />
      </span>

      {/* authors details */}
      <Link href={`/user/${author?._id}`}>
        {author?.name}
        <Image
          src={urlFor(author.image).url()}
          alt={author.name}
          width={60}
          height={60}
          placeholder="blur"
          blurDataURL={urlFor(image).width(24).height(24).blur(10).url()}
          className="rounded-full"
        />
      </Link>

      {/* post details */}
      <Link href={`/posts/${_id}`}>
        <h3 className="font-bold">{title}</h3>
      </Link>
      <p>{description}</p>
      <Image
        src={urlFor(image).url()}
        alt={title}
        width={300}
        height={300}
        placeholder="blur"
        blurDataURL={urlFor(image).width(24).height(24).blur(10).url()}
      />
      <Link href={`/?query=${category?.toLowerCase()}`}>
        <p>{category}</p>
      </Link>
    </li>
  );
};

export default BlogCard;
