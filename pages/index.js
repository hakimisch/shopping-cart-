import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Posts from "@/components/Posts";
import Slider from "@/components/Slider";
import { SliderData } from "@/components/SliderData";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Misch Keyboard Builder</title>
      </Head>
      <Hero heading='Welcome to Misch Keyboard Builder' message='An exciting place for keyboard enthusiast'/>
      <Slider slides={SliderData} />
      <Info />
      <Posts />
      <Footer />
    </div>
    
  )
}
