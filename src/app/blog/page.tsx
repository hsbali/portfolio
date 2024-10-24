import { BlogPosts } from "@/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <main className="app-container">
      <h1 className="font-semibold text-2xl mb-8">My Blog</h1>
      <BlogPosts />
    </main>
  );
}
