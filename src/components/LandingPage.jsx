import { Button } from "./ui/Button.jsx";
import { motion } from "framer-motion";
import LandingPageContent from "../constants/LandingPage.constants.jsx";
import Typewritter from "./animations/Typewritter.jsx";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-600 to-slate-950 text-white">
      <header className="text-center py-20 p-6">
        <div className="text-3xl md:text-5xl font-extrabold pb-8">
          <h1 className="mb-5">Want educational resources on </h1>
          <Typewritter className="rounded-2xl px-3 border-2 border-gray-500 text-green-500/70 text-2xl md:text-5xl" /> ?
        </div>
        <p className="text-sm md:text-xl mx-auto max-w-2xl text-gray-300">Access and share educational resources like previous year questions, exam patterns, syllabus, books, lecture notes, and research papers.</p>
        <div className="md:max-w-sm mx-auto mt-8 space-x-6 flex justify-evenly md:justify-between">
          <Button className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg text-white bg-teal-700/80 hover:bg-teal-600/80">Get Started</Button>
          <Button className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg text-white bg-inherit border md:border-2 border-teal-700/80 hover:bg-teal-700/80">Sign Up</Button>
        </div>
      </header>
      <h1 className="text-xl md:text-3xl text-center font-bold px-3 md:px-10 md:mt-8">Explore resources like</h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-10 pb-28">
        {LandingPageContent.cards.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-inherit hover:bg-teal-700 text-white border md:border-2 border-teal-600 rounded-xl shadow-xl p-4 md:p-6 hover:shadow-2xl hover:cursor-pointer transition duration-100 md:duration-200 ease-out">
            <img src="" alt="" />
            <h3 className="md:text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-200">{item.desc}</p>
          </motion.div>
        ))}
      </section>
      <footer className="text-xs bg-slate-950 text-center pt-8 pb-8 text-gray-400 tracking-tighter md:tracking-normal">
        <p>&copy; {new Date().getFullYear()} ResourceHub. All rights reserved.</p>
      </footer>
    </div>
  );
}
