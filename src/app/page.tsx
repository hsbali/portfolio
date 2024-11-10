import Image from "next/image";
import me from "@/assets/images/me.jpg";
import monkProjectCover from "@/assets/images/monk-project-cover.png";
import weshareProjectCover from "@/assets/images/weshare-project-cover.png";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";

const PROJECTS = [
  {
    imgSrc: monkProjectCover,
    title: "Monk Cart Upsell & Free Gift - Monk Commerce (Shopify App)",
    description:
      "As a Founding member of the Development Team, contributed significantly to the creation and enhancement of a Shopify App trusted by 1000+ merchants. Led core feature development including Volume Discounts and Custom Discount Codes, enhancing sales. Proficient in SaaS development, implemented backward compatibility and Agile methodologies. Ensured smooth integration with Shopify storefronts, collaborated closely with team members, and improved user experience through custom CSS support. Prioritized scalable architecture adhering to SOLID principles and conducted POCs for innovative feature integration, ensuring competitiveness.",
  },
  {
    imgSrc: weshareProjectCover,
    title: "Marketplace for Travellers and Agents - WeShare",
    description:
      "As Lead Frontend Developer at WeShare, spearheaded critical feature development, including Explore/Book Activities and Itinerary Planner. Transitioned app from React.js to Next.js, boosting SEO and web vitals for increased organic traffic. Enhanced performance through data-fetching and image optimization, achieving high Lighthouse scores. Integrated OpenAI, Stripe, and Google APIs for enriched functionality and guided UI/UX enhancements, improving usability and design.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="app-container grid grid-cols-12 gap-6 mb-36">
        <div className="col-span-12 md:col-span-4">
          <div className="w-1/2 mx-auto md:w-full">
            <Image src={me} className="rounded-lg" alt="Harmeet Singh" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 md:py-4">
          <div className="flex flex-col h-full">
            <div className="grow text-center md:text-left mb-12">
              <p className="mb-2">Hi, I&apos;m Harmeet 👋</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                I specialize in building Frontend-heavy Full Stack applications.
              </h1>
              <Button size="lg" asChild>
                <a href="mailto:hsbaliwork@gmail.com">Let&apos;s Talk</a>
              </Button>
            </div>
            <div className="flex items-start justify-center md:justify-start gap-2 md:gap-4">
              <div className="text-center md:text-left pr-4">
                <p className="text-lg font-medium">4+ years</p>
                <small className="text-muted-foreground text-sm">
                  Experience in Web Development
                </small>
              </div>
              <div className="h-full border-r border-slate-600"></div>
              <div className="text-center md:text-left pl-4">
                <p className="text-lg font-medium">Key contributor</p>
                <small className="text-muted-foreground text-sm">
                  Contributed to successful apps.
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="app-container -mt-4 my-36">
        <h2 className="text-[40px] md:text-7xl font-bold text-center">
          <span className="inline-block line-through text-3xl md:text-4xl font-semibold text-muted-foreground">
            Writing Code
          </span>
          <br />
          Building Products
        </h2>
      </section>
      <section className="app-container px-4 mx-auto my-36">
        <h2 className="text-4xl font-semibold text-center mb-12">
          Featured Work
        </h2>
        <div className="grid grid-cols-12 gap-6 mb-8">
          {PROJECTS.map((project, i) => (
            <div key={i} className="col-span-12 md:col-span-6">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>
      <section className="app-container my-36">
        <h2 className="text-4xl font-semibold text-center mb-12">
          What peaple say about me
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col p-6 border rounded-lg">
            <p className="grow text-lg mb-6">
              &quot;Harmeet was our first hire. Without his input and efforts,
              we wouldn’t have achieved our current accomplishments.&quot;
            </p>
            <div className="flex items-center">
              {/* <Image
                className="rounded-full w-14 h-14 mr-2"
                src={testimonial1}
                alt="testimonial-1"
              /> */}
              <div>
                <p className="font-semibold">Murtuza Merchant</p>
                <span className="text-sm text-muted-foreground">
                  Co-founder, Monk Commerce
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-6 border rounded-lg">
            <p className="grow text-lg mb-6">
              &quot;Harmeet’s performance in developing the project exceeded my
              expectations. A true testament to his quick learning abilities and
              effective project management skills.&quot;
            </p>
            <div className="flex items-center">
              {/* <Image
                className="rounded-full w-14 h-14 mr-2"
                src={testimonial2}
                alt="testimonial-1"
              /> */}
              <div>
                <p className="font-semibold">Sunmeet Singh</p>
                <span className="text-sm text-muted-foreground">
                  Founder, Newlime Tech
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
