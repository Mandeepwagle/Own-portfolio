import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Plus, X, Save, Trash2 } from "lucide-react";

const githubProfile = "https://github.com/Mandeepwagle";

const defaultProjects = [
  {
    id: 1,
    title: "Medical Inventory System",
    description: "A full-stack medical inventory management system with real-time tracking, stock alerts, supplier management, and detailed reporting for healthcare facilities.",
    tags: ["React", "Node.js", "MySQL", "Express"],
    color: "#00f5ff",
    category: "Healthcare",
    github: githubProfile,
  },
  {
    id: 2,
    title: "HR Payroll System",
    description: "Enterprise HR and payroll management platform with employee records, attendance tracking, automated salary calculation, tax deductions, and payslip generation.",
    tags: ["React", "PHP", "MySQL", "REST API"],
    color: "#bf00ff",
    category: "Enterprise",
    github: githubProfile,
  },
  {
    id: 3,
    title: "Learning Management Platform",
    description: "A comprehensive LMS with course creation, student enrollment, video lessons, quizzes, progress tracking, certificates, and instructor dashboards.",
    tags: ["React", "Node.js", "MongoDB", "Firebase"],
    color: "#ff006e",
    category: "Education",
    github: githubProfile,
  },
  {
    id: 4,
    title: "CMS Banking System",
    description: "Secure banking content management system with transaction management, account handling, loan processing, and real-time financial reporting dashboards.",
    tags: ["React", "Node.js", "PostgreSQL", "JWT"],
    color: "#39ff14",
    category: "Finance",
    github: githubProfile,
  },
];

const emptyForm = {
  title: "",
  description: "",
  tags: "",
  color: "#00f5ff",
  category: "",
  github: githubProfile,
};

export default function Projects() {
  const [projects, setProjects] = useState(defaultProjects);
  const [showDashboard, setShowDashboard] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  function handleSave() {
    if (!form.title || !form.description) return;
    const tagsArray = form.tags.split(",").map((t) => t.trim()).filter(Boolean);
    if (editId !== null) {
      setProjects(projects.map((p) => p.id === editId ? { ...form, id: editId, tags: tagsArray } : p));
      setEditId(null);
    } else {
      const newProject = { ...form, id: Date.now(), tags: tagsArray };
      setProjects([...projects, newProject]);
    }
    setForm(emptyForm);
  }

  function handleEdit(project) {
    setForm({ ...project, tags: project.tags.join(", ") });
    setEditId(project.id);
    setShowDashboard(true);
  }

  function handleDelete(id) {
    setProjects(projects.filter((p) => p.id !== id));
  }

  function handleCancel() {
    setForm(emptyForm);
    setEditId(null);
  }

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs text-cyan-400 tracking-widest">WHAT I BUILT</span>
          <h2 className="font-display text-4xl md:text-6xl font-black mt-2">
            <span className="text-white">MY </span>
            <span className="gradient-text">PROJECTS</span>
          </h2>
          <div className="w-24 h-px bg-cyan-400 mx-auto mt-4" />
        </motion.div>

        {/* Filter + Add Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="font-mono text-xs tracking-widest px-4 py-2 rounded border transition-all"
                style={filter === cat
                  ? { borderColor: "#00f5ff", color: "#00f5ff", backgroundColor: "rgba(0,245,255,0.1)" }
                  : { borderColor: "rgba(0,245,255,0.2)", color: "#6b7280" }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowDashboard(!showDashboard)}
            className="animated-border p-px rounded"
          >
            <span className="flex items-center gap-2 bg-black px-4 py-2 rounded font-mono text-xs tracking-widest text-cyan-400 hover:bg-cyan-500/10 transition-colors">
              <Plus size={14} />
              ADD PROJECT
            </span>
          </button>
        </div>

        {/* Dashboard Panel */}
        {showDashboard && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="cyber-card rounded-xl p-6 mb-10"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-sm tracking-widest text-cyan-400">
                {editId ? "EDIT PROJECT" : "ADD NEW PROJECT"}
              </h3>
              <button onClick={() => { setShowDashboard(false); handleCancel(); }} className="text-gray-500 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs text-gray-500 tracking-widest block mb-1">PROJECT TITLE *</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="e.g. E-Commerce Platform"
                  className="w-full bg-black border border-cyan-500/20 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-cyan-400 placeholder-gray-600"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-gray-500 tracking-widest block mb-1">CATEGORY *</label>
                <input
                  type="text"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  placeholder="e.g. Finance, Healthcare"
                  className="w-full bg-black border border-cyan-500/20 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-cyan-400 placeholder-gray-600"
                />
              </div>

              <div className="md:col-span-2">
                <label className="font-mono text-xs text-gray-500 tracking-widest block mb-1">DESCRIPTION *</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Describe what this project does..."
                  rows={3}
                  className="w-full bg-black border border-cyan-500/20 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-cyan-400 placeholder-gray-600 resize-none"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-gray-500 tracking-widest block mb-1">TECH TAGS (comma separated)</label>
                <input
                  type="text"
                  value={form.tags}
                  onChange={(e) => setForm({ ...form, tags: e.target.value })}
                  placeholder="React, Node.js, MySQL"
                  className="w-full bg-black border border-cyan-500/20 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-cyan-400 placeholder-gray-600"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-gray-500 tracking-widest block mb-1">CARD COLOR</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={form.color}
                    onChange={(e) => setForm({ ...form, color: e.target.value })}
                    className="w-10 h-10 rounded cursor-pointer bg-transparent border border-cyan-500/20"
                  />
                  <span className="font-mono text-xs text-gray-400">{form.color}</span>
                </div>
              </div>

              <div>
                <label className="font-mono text-xs text-gray-500 tracking-widest block mb-1">GITHUB LINK</label>
                <input
                  type="text"
                  value={form.github}
                  onChange={(e) => setForm({ ...form, github: e.target.value })}
                  placeholder="https://github.com/you/project"
                  className="w-full bg-black border border-cyan-500/20 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-cyan-400 placeholder-gray-600"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 animated-border p-px rounded"
              >
                <span className="flex items-center gap-2 bg-black px-5 py-2 rounded font-mono text-xs tracking-widest text-cyan-400 hover:bg-cyan-500/10 transition-colors">
                  <Save size={13} />
                  {editId ? "UPDATE" : "SAVE PROJECT"}
                </span>
              </button>
              <button
                onClick={handleCancel}
                className="font-mono text-xs tracking-widest text-gray-500 hover:text-white px-4 py-2 border border-gray-700 rounded hover:border-gray-500 transition-all"
              >
                CANCEL
              </button>
            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="cyber-card rounded-xl p-6 flex flex-col gap-4 group relative"
            >
              {/* Top bar */}
              <div className="flex items-start justify-between">
                <div>
                  <span
                    className="font-mono text-xs tracking-widest px-2 py-1 rounded mb-2 inline-block"
                    style={{ backgroundColor: project.color + "20", color: project.color }}
                  >
                    {project.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: project.color + "20", border: "1px solid " + project.color + "40" }}
                >
                  <Code size={18} style={{ color: project.color }} />
                </div>
              </div>

              {/* Glow line */}
              <div className="w-full h-px" style={{ background: "linear-gradient(90deg, " + project.color + ", transparent)" }} />

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-1 rounded"
                    style={{ backgroundColor: "#0a1628", color: project.color, border: "1px solid " + project.color + "30" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-cyan-500/10">
                <div className="flex gap-3">
                  <a
                    href={githubProfile}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 font-mono text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Code size={13} />
                    Code
                  </a>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="font-mono text-xs text-gray-500 hover:text-cyan-400 transition-colors px-2 py-1 border border-gray-700 rounded hover:border-cyan-500/40"
                  >
                    EDIT
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="text-gray-500 hover:text-red-400 transition-colors p-1"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-600 font-mono text-sm tracking-widest">
            NO PROJECTS IN THIS CATEGORY
          </div>
        )}
      </div>
    </section>
  );
}
