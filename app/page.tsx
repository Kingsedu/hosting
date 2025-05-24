import Image from "next/image";
import Background from "@/components/Background";
import CompanyCarousel from "@/components/CompanyCarousel";
import ServiceCarousel from "@/components/ServiceCarousel";
import CoreValues from "@/components/CoreValues";

export default function Home() {
  return (
    <main>
      <Background />
      <CoreValues />
      <ServiceCarousel />
      <CompanyCarousel />
    </main>
  );
}
