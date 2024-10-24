// import { getBlogPosts } from "@/blog/utils";

export const baseUrl = "https://harmeetsinghbali.com";

export default async function sitemap() {
  //   let blogs = getBlogPosts().map((post) => ({
  //     url: `${baseUrl}/blog/${post.slug}`,
  //     lastModified: post.metadata.publishedAt,
  //   }));

  let routes = ["", "/about", "/projects", "/work"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [
    ...routes,
    //  ...blogs
  ];
}
