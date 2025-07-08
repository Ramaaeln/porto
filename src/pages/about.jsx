import { FaAward, FaLaptopCode, FaShieldAlt, FaUsers } from "react-icons/fa";
import SkillsHero from "../components/Fragments/SkillsHero";

export default function AboutPages() {
  return (
    <div
      className="bg-gradient-to-br from-white via-blue-50 to-white text-gray-800 pt-38 -mt-30 pb-20"
      id="about"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500">
          About Me
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base max-w-2xl mx-auto">
          Passionate 4th-semester Computer Science student at Universitas
          Pamulang, primarily focused on Full-Stack Web Development, with a
          foundational understanding of Cybersecurity concepts.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center md:text-left">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          Hello! I'm Rama 👋
        </h3>
        <p className="text-base leading-relaxed text-gray-700">
          I am a 4th-semester Computer Science student at Universitas Pamulang
          with a strong interest in Full-Stack Web Development. Since my 3rd
          semester, I’ve been actively building applications using technologies
          like React.js, Node.js, Express.js, and Supabase.
        </p>
        <p className="text-base leading-relaxed text-gray-700 mt-4">
          Recently, I joined the TalentHub Batch 17 Full Stack Web Developer
          program. My final project, a food ordering web app built with React,
          Express, and Supabase, was selected as the best project of the batch.
        </p>
        <p className="text-base leading-relaxed text-gray-700 mt-4">
          I also participated in a university hackathon where my team was
          awarded Best Team. In this project, I developed a secure backend and
          API system that was tested by cybersecurity experts using tools like
          Burp Suite to ensure protection against common vulnerabilities.
        </p>
        <p className="text-base leading-relaxed text-gray-700 mt-4">
          Additionally, I served as the PIC Leader in a Human-Computer
          Interaction course project, where I coordinated my team to meet our
          project objectives effectively.
        </p>
        <p className="text-base leading-relaxed text-gray-700 mt-4">
          I enjoy learning, sharing ideas, and receiving feedback to grow
          further as a developer. I’m always open to collaboration and excited
          to contribute to secure and impactful projects.
        </p>

        <a
          href="https://github.com/Ramaaeln"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-5 py-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 text-white rounded-full hover:scale-105 transition shadow-md"
        >
          View GitHub Profile →
        </a>
      </div>

      <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 rounded-full mx-auto my-16"></div>

      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 shadow hover:shadow-md transition text-center">
          <FaAward className="text-blue-500 text-2xl mx-auto mb-2" />
          <h4 className="font-semibold text-blue-700">Best Project</h4>
          <p className="text-sm text-gray-600">TalentHub Batch 17</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 shadow hover:shadow-md transition text-center">
          <FaShieldAlt className="text-blue-500 text-2xl mx-auto mb-2" />
          <h4 className="font-semibold text-blue-700">Backend Security</h4>
          <p className="text-sm text-gray-600">Resists SQLi & Burp Suite</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 shadow hover:shadow-md transition text-center">
          <FaLaptopCode className="text-blue-500 text-2xl mx-auto mb-2" />
          <h4 className="font-semibold text-blue-700">Tech Stack</h4>
          <p className="text-sm text-gray-600">React, Express, Supabase</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 shadow hover:shadow-md transition text-center">
          <FaUsers className="text-blue-500 text-2xl mx-auto mb-2" />
          <h4 className="font-semibold text-blue-700">Team Leader</h4>
          <p className="text-sm text-gray-600">HCI PIC Leader</p>
        </div>
      </div>


    </div>
  );
}
