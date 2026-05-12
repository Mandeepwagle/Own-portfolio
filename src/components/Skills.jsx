import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    color: "#00f5ff",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    color: "#bf00ff",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "REST APIs", level: 85 },
      { name: "PHP", level: 70 },
    ],
  },
  {
    category: "Database",
    color: "#ff006e",
    skills: [
      { name: "MySQL", level: 82 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "Firebase", level: 72 },
    ],
  },
  {
    category: "Tools",
    color: "#39ff14",
    skills: [
      { name: "Git/GitHub", level: 88 },
      { name: "WordPress", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Vercel", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs text-cyan-400 tracking-widest">WHAT I KNOW</span>
          <h2 className="font-display text-4xl md:text-6xl font-black mt-2">
            <span className="text-white">MY </span>
            <span className="gradient-text">SKILLS</span>
          </h2>
          <div className="w-24 h-px bg-cyan-400 mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="cyber-card rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: group.color, boxShadow: "0 0 10px " + group.color }} />
                <h3 className="font-display text-sm tracking-widest font-bold" style={{ color: group.color }}>
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-mono text-xs text-gray-300 tracking-wider">{skill.name}</span>
                      <span className="font-mono text-xs" style={{ color: group.color }}>{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level + "%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: si * 0.1 }}
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, " + group.color + ", #020408)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
