import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, ExternalLink, Code, User } from "lucide-react";

const roles = [
  "Full-Stack Developer",
  "React Specialist",
  "UI/UX Engineer",
  "System Architect",
  "Problem Solver",
];

function TypeWriter({ texts }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    let timeout;
    if (!deleting && display.length < current.length) {
      timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), 80);
    } else if (!deleting && display.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && display.length > 0) {
      timeout = setTimeout(() => setDisplay(display.slice(0, -1)), 40);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % texts.length);
      }, 40);
    }
    return () => clearTimeout(timeout);
  }, [display, deleting, index, texts]);

  return (
    <span>
      <span className="gradient-text">{display}</span>
      <span className="text-cyan-400 animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6">

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(0,245,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.04) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-xs text-cyan-400 tracking-widest">AVAILABLE FOR WORK</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-mono text-sm md:text-base text-gray-300 tracking-[0.35em] mb-4"
        >
          MON TEE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-black leading-none mb-6"
          style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
        >
          <span className="neon-text">FULL</span>
          <br />
          <span className="text-white">STACK</span>
          <br />
          <span className="gradient-text">DEVELOPER</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-mono text-xl md:text-2xl mb-8 h-10"
        >
          <TypeWriter texts={roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building enterprise-grade systems. Medical Inventory, HR Payroll,
          Banking CMS, and Learning Management Platforms. I craft digital
          experiences that scale and perform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a href="#projects" className="animated-border p-px rounded">
            <span className="block bg-black px-8 py-4 rounded font-display text-sm tracking-widest text-cyan-400 hover:bg-cyan-500/10 transition-colors font-bold">
              VIEW PROJECTS
            </span>
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 font-display text-sm tracking-widest font-bold text-cyan-400 border border-cyan-500/40 rounded hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
          >
            CONTACT ME
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-4"
        >
          {[
            { icon: Code, href: "https://github.com/Mandeepwagle", label: "GitHub" },
            { icon: User, href: "https://www.linkedin.com/in/mon-tee-wagle-2ab872203/", label: "LinkedIn" },
            { icon: Mail, href: "#contact", label: "Email" },
            { icon: ExternalLink, href: "#projects", label: "Projects" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="w-11 h-11 rounded border border-cyan-500/30 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cyan-500/50"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL DOWN</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>

    </section>
  );
}
