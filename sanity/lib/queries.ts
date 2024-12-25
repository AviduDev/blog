import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`
    *[_type == 'post' && defined(slug.current)] | order(_createdAt desc){
  title,
  slug,
  category,
  _id,
  views,
  image,
  author -> {
    name,
    image,
    _id
  }
}
    `);
