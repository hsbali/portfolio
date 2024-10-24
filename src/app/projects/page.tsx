import { Projects } from "@/components/projects";

export const metadata = {
  title: "Project",
  description: "Checkout my projects.",
};

export default function Page() {
  return (
    <main className="app-container">
      <h1 className="font-semibold text-2xl mb-8">My Projects</h1>
      <Projects />
    </main>
  );
}
