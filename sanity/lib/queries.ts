import { groq } from "next-sanity";

// Get all posts
export const fetchAllPostsQuery = groq`
  *[_type == "post" && defined(slug.current)]{
    _id, 
    title, 
    slug, 
    publishedAt, 
    tags,
    "slug": slug.current,
    "categories": categories[]->{
      title,
      description
    }
  }`;

// Get a single post by its slug
export const queryForSingleBlogPostBySlug = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title, 
    mainImage, 
    body, 
    publishedAt, 
    tags,
    "slug": slug.current,
    "author": author->{
        name,
        slug,
        image
    }
  }`;

// Query to get all blog post slugs for dynamic routing
export const queryForBlogPostSlugs = groq`
  *[_type == "post" && defined(slug.current)][] {
    "params": { "slug": slug.current }
  }`;

// Query to get all post slugs as simple string array
export const queryForBlogPostSlugStrings = groq`
  *[_type == "post" && slug.current != null].slug.current
`;

// Get all projects
export const fetchAllProjectsQuery = groq`
  *[_type == "project" && defined(slug.current)] | order(publishedAt desc){
    _id, 
    title,
    excerpt,
    mainImage,
    slug, 
    publishedAt, 
    tags,
    "slug": slug.current,
    "author": author->{
        name,
        "slug": slug.current,
        image
    },
    "categories": projectCategory[]->{
      title,
      description
    }
  }`;

// Get a single Project by its slug
export const queryForSingleProjectPostBySlug = groq`
  *[_type == "project" && slug.current == $slug][0] {
     _id, 
    title,
    excerpt,
    body, 
    mainImage,
    slug, 
    publishedAt, 
    tags,
    "slug": slug.current,
    "author": author->{
        name,
        "slug": slug.current,
        image
    },
    "categories": projectCategory[]->{
      title,
      description
    }
  }`;

// Query to get all project slugs as simple string array
export const queryForProjectPostSlugStrings = groq`
  *[_type == "project" && slug.current != null].slug.current
`;
