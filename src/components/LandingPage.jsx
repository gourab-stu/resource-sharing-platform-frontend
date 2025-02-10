import { Button } from "./ui/Button.jsx";
import { motion } from "framer-motion";
import LandingPageContent from "../constants/LandingPage.constants.jsx";
import Typewritter from "./animations/Typewritter.jsx";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-600 to-slate-950 text-white">
      <header className="lg:grid lg:grid-cols-2">
        <div className="py-[25vh] lg:py-[25vh] px-[10%]">
          <div className="text-center lg:text-start text-4xl lg:text-5xl font-extrabold pb-5 tracking-tight">
            <h1 className="mb-6">Want educational resources on </h1>
            <Typewritter className="rounded-2xl px-3 border-2 border-gray-500 text-green-500/70 text-3xl lg:text-5xl" /> ?
          </div>
          <p className="lg:text-xl max-w-2xl mt-4 text-gray-300">Access and share educational resources like previous year questions, exam patterns, syllabus, books, lecture notes, and research papers.</p>
          <div className="mt-8 space-x-6 flex justify-evenly lg:justify-between">
            <Button className="px-8 py-4 text-lg text-white bg-teal-700/80 hover:bg-teal-600/80">Get Started</Button>
            <Button className="px-8 py-4 text-lg text-white bg-inherit border-2 border-teal-700/80 hover:bg-teal-700/80">Sign Up</Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={LandingPageContent.imageSrc} alt="Students sharing resources" className="h-screen rounded-md ml-auto shadow-lg" />
        </div>
      </header>
      <h1 className="text-3xl text-center font-bold px-3 py-20 lg:px-10 lg:mt-8">Explore resources like</h1>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 px-10 pb-28">
        {LandingPageContent.cards.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-inherit hover:bg-teal-700 text-white border-2 border-teal-600 rounded-xl shadow-xl p-6 hover:shadow-2xl hover:cursor-pointer transition duration-200 ease-out">
            <img src="" alt="" />
            <h3 className="text-xl lg:text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-200">{item.desc}</p>
          </motion.div>
        ))}
      </section>
      <footer className="text-xs bg-slate-950 text-center pt-8 pb-8 text-gray-400">
        <p>&copy; {new Date().getFullYear()} ResourceHub. All rights reserved.</p>
      </footer>
    </div>
  );
}
