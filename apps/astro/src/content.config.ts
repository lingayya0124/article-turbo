// // Your custom fetch function for Strapi
// import { defineCollection, z } from "astro:content";
// import type Article from "./interfaces/article";
// import fetchApi from "./lib/strapi";

// const blog = defineCollection({
//   // Fetch articles from Strapi using an API request
//   async loader() {
//     const articles = await fetchApi<Article[]>({
//       endpoint: "articles",
//       query: {
//         populate: "*",
//       },
//       wrappedByKey: "data", // Assuming your Strapi response is wrapped with a `data` key
//     });
//     return articles;
//     // return articles.map((article: Article) => ({
//     //   id: article.id.toString(), // Convert id to string
//     //   slug: article.slug, // Assuming each article has a `slug` key
//     //   title: article.title,
//     //   description: article.description,
//     //   createdAt: new Date(article.createdAt),
//     //   updatedAt: article.updatedAt ? new Date(article.updatedAt) : null,
//     //   image: article.image.url || null, // Assuming there's an optional hero image
//     //   content: article.content, // Assuming `content` is in HTML or Markdown format
//     // }));
//   },
//   // Optionally type-check frontmatter if needed
//   //   schema: z.object({
//   //     title: z.string(),
//   //     description: z.string(),
//   //     createdAt: z.coerce.date(),
//   //     updatedAt: z.coerce.date().optional(),
//   //     image: z.string().optional(),
//   //   }),
// });

// export const collections = { blog };
