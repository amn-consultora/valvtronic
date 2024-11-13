
import { BrayClipMask } from "@/components/homepage/BrayClipMask";
import { Discover } from "@/components/homepage/Discover";
import { Explore } from "@/components/homepage/Explore";
import { Galery } from "@/components/homepage/Galery";
import { Hero } from "@/components/homepage/Hero";
import { VxClipMask } from "@/components/homepage/VxClipMask";
import { Welcome } from "@/components/homepage/Welcome";

export default function Home() {
  return (
    <div className="relative">
      <Welcome />
      <Hero />
      <Explore />
      <VxClipMask />
      <Galery />
      <Discover />
      <BrayClipMask />
  </div>
  )
}