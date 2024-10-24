import Image from "next/image";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getProjects } from "@/app/projects/utils";
import { baseUrl } from "@/app/sitemap";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  let projects = getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: Props) {
  let post = getProjects().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let { title, summary: description, image } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${baseUrl}/projects/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }: Props) {
  let post = getProjects().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="app-container">
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      {post.metadata.image && (
        <Image src={post.metadata.image} alt={post.metadata.title} />
      )}
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </main>
  );
}
