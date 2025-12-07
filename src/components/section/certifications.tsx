import Link from "next/link";
import Image from "next/image";
import { RevealSection } from "../reveal";
import { CertType } from "@/types/certfication";

export default function Certifications({ certifications }: { certifications?: CertType[] }) {
  return (
    <section id="certifications" className="p-8 mx-auto max-w-screen-xl grid gap-4 text-foreground">
      <RevealSection>
        <h2 className="text-3xl md:text-5xl font-bold">CERTIFICATIONS</h2>
      </RevealSection>
      <div className="grid grid-cols-3 gap-2">
        {certifications?.map((cert, index) => (
          <RevealSection key={index}>
            <div className="py-2 px-6 h-full border border-gray-300 hover:shadow-lg transition-all rounded-lg items-center text-center gap-2">
              <Image
                className="mx-auto"
                src={cert.image}
                alt={cert.title}
                width={300}
                height={300}
              />
              <h3 className="font-semibold">{cert.title}</h3>
              <span className="text-sm text-gray-400">{cert.issuer}</span>
              <p className="mt-2">{cert.date}</p>
            </div>
          </RevealSection>
        ))}
      </div>
      <RevealSection>
        <Link href="/certifications" className="text-corn-flower hover:underline">View All Certifications</Link>
      </RevealSection>
    </section>
  );
}