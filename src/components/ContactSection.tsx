import { ArrowUpRight } from "lucide-react";
import { getImagePath } from "@/utils/imagePath";

const ContactSection = () => {
  const resumeUrl = getImagePath("/Resume_Aditi_Reddy_Doma.pdf");

  return (
    <section id="contact" className="portfolio-section bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="portfolio-divider pb-10">
          <p className="portfolio-label mb-3">04 · Contact</p>
          <h2 className="portfolio-title max-w-3xl">Let&apos;s connect.</h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-sm leading-7 text-[#4b5563]">
            <p>+1 (917) 337-7045</p>
            <p>ad7977@rit.edu</p>
            <p>aditidoma@gmail.com</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.linkedin.com/in/aditireddydoma/"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-button-primary"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/aditireddy-d"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-button-secondary"
            >
              GitHub
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-[#111827] hover:underline"
            >
              Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
