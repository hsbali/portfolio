import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <>
      <section className="app-container my-36">
        <p className="text-xl mb-2">
          Ready to make something great together? Let&apos;s chat!
        </p>
        <Button
          variant="link"
          className="text-cta font-bold p-0 h-auto"
          asChild
        >
          <a href="mailto:hsbaliwork@gmail.com">me@harmeetcodes.com</a>
        </Button>
      </section>
      <footer className="app-container mb-16">
        <ul className="mt-8 flex items-center gap-4">
          <li>
            <Button variant="link" className="p-0" asChild>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/hsbali/"
              >
                <span className="mr-0.5">linkedin</span>
                <ArrowUpRight />
              </a>
            </Button>
          </li>
          <li>
            <Button variant="link" className="p-0" asChild>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.github.com/hsbali/"
              >
                <span className="mr-0.5">github</span>
                <ArrowUpRight />
              </a>
            </Button>
          </li>
        </ul>
        <p className="mt-8 text-sm text-slate-600 dark:text-slate-300">
          © {new Date().getFullYear()} Harmeet Singh
        </p>
      </footer>
    </>
  );
}
