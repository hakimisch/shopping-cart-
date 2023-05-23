import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import { SliderData } from "@/components/SliderData";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Misch Keyboard Builder</title>
      </Head>
      <Hero heading='Keyboard Station' message='A place for all'/>
      <Slider slides={SliderData} />
    </div>
    
  )
}
