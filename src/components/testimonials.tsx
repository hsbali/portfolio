import Image from "next/image";
import testimonial1 from "@/assets/images/testimonial-1.png";
import testimonial2 from "@/assets/images/testimonial-2.png";

export default function Testimonials() {
  return (
    <section className="my-16">
      <h2 className="text-4xl font-semibold text-center mb-8">
        What peaple say about me
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col p-6 border rounded-lg">
          <p className="grow mb-6">
            &quot;Harmeet was our first hire. Without his input and efforts, we
            wouldn’t have achieved our current accomplishments.&quot;
          </p>

          <div className="flex items-center">
            <Image
              className="rounded-full w-14 h-14 mr-2"
              src={testimonial1}
              alt="testimonial-1"
            />

            <div className="mx-2">
              <p className="font-semibold">Robert</p>
              <span className="text-sm text-slate-500">
                Co-founder, Monk Commerce
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-6 border rounded-lg">
          <p className="grow mb-6">
            &quot;Harmeet’s performance in developing the project exceeded my
            expectations. A true testament to his quick learning abilities and
            effective project management skills.&quot;
          </p>

          <div className="flex items-center">
            <Image
              className="rounded-full w-14 h-14 mr-2"
              src={testimonial2}
              alt="testimonial-1"
            />

            <div className="mx-2">
              <p className="font-semibold">Robert</p>
              <span className="text-sm text-slate-500">
                Founder, Newlime Tech
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
