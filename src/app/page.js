import Image from "next/image";
import Body from "./components/Body";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll bg-gradient-to-b from-slate-800 to-slate-600">
        <Header/>

        <Body/>

        <Experience/>

        <Skills/>

        <Skill/>
    </main>
  );
}
