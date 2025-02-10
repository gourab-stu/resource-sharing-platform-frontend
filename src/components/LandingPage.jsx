import { Button } from "./ui/Button.jsx";
import { motion } from "framer-motion";
import { landingPage } from "../constants/index.jsx";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-700 text-white p-6">
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Empower Your Learning Journey</h1>
        <p className="md:text-xl max-w-2xl mx-auto">Access and share educational resources like previous year questions, exam patterns, syllabi, books, lecture notes, and research papers.</p>
        <div className="mt-8">
          <Button className="px-8 py-4 text-lg text-white">Get Started</Button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {landingPage.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white text-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </section>

      <footer className="text-xs text-center mt-16 text-gray-300">
        <p>&copy; {new Date().getFullYear()} ResourceHub. All rights reserved.</p>
      </footer>
    </div>
  );
}
