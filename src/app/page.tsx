import About from "@/components/Home/About";
import BannerHome from "@/components/Home/Banner";
import { TrainingSuggestions } from "@/components/Home/TrainingSuggestions";

export default function Home() {
  return (
    <>
      <BannerHome />
      <About />
      <TrainingSuggestions />
    </>
  )
}