import { getMDXData } from "@/lib/mdx-utils";

export type Metadata = {
  title: string;
  summary: string;
  image?: string;
};

export function getProjects() {
  return getMDXData<Metadata>("app", "projects", "posts");
}
