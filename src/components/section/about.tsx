import { RevealSection } from "../reveal";

export default function About({ bio }: { bio?: string | null }) {
  return (
    <section id="about" className="p-8 mx-auto max-w-screen-xl text-foreground">
      <RevealSection>
        <h2 className="text-3xl md:text-5xl font-bold">ABOUT ME</h2>
        <div className="mt-4 md:text-lg">
          <div dangerouslySetInnerHTML={{ __html: bio || "No bio available." }} />
        </div>
      </RevealSection>
    </section>
  );
}