import { Hero } from "@/components/landing/hero";
import { Footer } from "@/components/landing/footer";
import { Content } from "@/components/landing/content";

export default function Home() {
  return (
    <div>
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}