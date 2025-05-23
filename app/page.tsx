import Image from "next/image";
import Background from "@/components/Background";
import CompanyCarousel from "@/components/CompanyCarousel";
import ServiceCarousel from "@/components/ServiceCarousel";

export default function Home() {
  return (
    <div className="">
      <Background />
      <ServiceCarousel />
      <CompanyCarousel />
    </div>
  );
}
