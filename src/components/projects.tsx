// import Link from "next/link";
// import { getProjects } from "@/app/projects/utils";
import monkProjectCover from "@/assets/images/monk-project-cover.png";
import weshareProjectCover from "@/assets/images/weshare-project-cover.png";
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

export function Projects() {
  // let projects = getProjects();

  return (
    <div className="grid grid-cols-12 gap-6 mb-8">
      {PROJECTS.map((project, i) => (
        // <Link
        //   key={project.slug}
        //   className="flex flex-col space-y-1 mb-4"
        //   href={`/projects/${project.slug}`}
        // >
        <div key={i} className="col-span-12 md:col-span-6">
          <ProjectCard {...project} />
        </div>
        // </Link>
      ))}
    </div>
  );
}
