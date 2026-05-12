import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { User, MapPin, Briefcase, GraduationCap } from "lucide-react";
import AdminLogin from "./AdminLogin";
import { useAdminAuth } from "../hooks/useAdminAuth";

const stats = [
  { number: "10+", label: "Projects Built" },
  { number: "4+", label: "Enterprise Systems" },
  { number: "2+", label: "Years Experience" },
  { number: "100%", label: "Dedication" },
];

const info = [
  { icon: User, label: "Name", value: "Mon Tee" },
  { icon: MapPin, label: "Location", value: "Yangon, Myanmar" },
  { icon: Briefcase, label: "Role", value: "Full-Stack Developer" },
  { icon: GraduationCap, label: "Education", value: "BSc in Computing" },
];

export default function About() {
  const { isAdmin } = useAdminAuth();
  const [cvFile, setCvFile] = useState(null);
  const [showCvLogin, setShowCvLogin] = useState(false);
  const cvUrl = useMemo(() => (cvFile ? URL.createObjectURL(cvFile) : ""), [cvFile]);

  useEffect(() => {
    if (!cvUrl) {
      return undefined;
    }

    return () => URL.revokeObjectURL(cvUrl);
  }, [cvUrl]);

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs text-cyan-400 tracking-widest">WHO I AM</span>
          <h2 className="font-display text-4xl md:text-6xl font-black mt-2">
            <span className="text-white">ABOUT </span>
            <span className="gradient-text">ME</span>
          </h2>
          <div className="w-24 h-px bg-cyan-400 mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-10"
          >
            <div className="relative">
              <div style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", background: "linear-gradient(135deg, #00f5ff, #bf00ff)", padding: "3px", width: "220px", height: "220px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img
                  src="/profile.jpg"
                  alt="Mon Tee"
                  className="h-full w-full object-cover"
                  style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-400 animate-pulse border-2 border-black" />
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
              {stats.map((stat) => (
                <div key={stat.label} className="cyber-card rounded-lg p-4 text-center">
                  <div className="font-display text-3xl font-black neon-text">{stat.number}</div>
                  <div className="font-mono text-xs text-gray-400 tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a passionate Full-Stack Developer who specializes in building large-scale enterprise applications.
              From healthcare to banking, HR systems to education platforms, I bring complex ideas to life with clean code and modern design.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I love working with React, Node.js, and modern web technologies to create systems that are not only functional
              but also beautiful and easy to use. Every project I build is crafted with performance, scalability, and user experience in mind.
            </p>

            <div className="flex flex-col gap-3 mt-4">
              {info.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 cyber-card rounded-lg px-4 py-3">
                  <div className="w-8 h-8 rounded border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-cyan-400" />
                  </div>
                  <span className="font-mono text-xs text-gray-500 tracking-widest w-24">{label}</span>
                  <span className="text-gray-200">{value}</span>
                </div>
              ))}
            </div>

            {!isAdmin && showCvLogin && (
              <AdminLogin onSuccess={() => setShowCvLogin(false)} />
            )}

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              {isAdmin ? (
                <label className="cursor-pointer border border-cyan-500/40 rounded px-6 py-3 font-mono text-xs tracking-widest text-cyan-400 hover:bg-cyan-500/10 transition-colors">
                  UPLOAD CV
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(event) => setCvFile(event.target.files?.[0] ?? null)}
                    className="sr-only"
                  />
                </label>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowCvLogin(true)}
                  className="border border-cyan-500/40 rounded px-6 py-3 font-mono text-xs tracking-widest text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                >
                  UPLOAD CV
                </button>
              )}

              <a
                href={cvUrl || "#"}
                download={cvFile?.name || "Mon-Tee-CV"}
                className={`animated-border p-px rounded ${cvUrl ? "" : "pointer-events-none opacity-50"}`}
              >
                <span className="block bg-black px-6 py-3 rounded font-mono text-xs tracking-widest text-cyan-400 hover:bg-cyan-500/10 transition-colors">
                  DOWNLOAD CV
                </span>
              </a>
            </div>

            {cvFile && (
              <p className="font-mono text-xs text-gray-500">
                Selected: <span className="text-gray-300">{cvFile.name}</span>
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
