import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="app-container">
      <h1 className="text-2xl font-semibold mb-8">404 - Page Not Found</h1>
      <p className="mb-4">
        The page you are looking for does not exist. Go to{" "}
        <Button variant="link" className="p-0" asChild>
          <Link href="/" className="prose anchor">
            home
          </Link>
        </Button>
        .
      </p>
    </section>
  );
}
