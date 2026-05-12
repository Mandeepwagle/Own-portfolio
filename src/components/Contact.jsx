import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "thanhtunwagle595@gmail.com" },
  { icon: Phone, label: "Phone", value: "09779727804" },
  { icon: MapPin, label: "Location", value: "Yangon, Myanmar" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs text-cyan-400 tracking-widest">GET IN TOUCH</span>
          <h2 className="font-display text-4xl md:text-6xl font-black mt-2">
            <span className="text-white">CONTACT </span>
            <span className="gradient-text">ME</span>
          </h2>
          <div className="w-24 h-px bg-cyan-400 mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Let us build something <span className="gradient-text">amazing</span> together
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I am always open to new opportunities, collaborations, and interesting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 cyber-card rounded-lg px-4 py-4">
                  <div className="w-10 h-10 rounded-lg border border-cyan-500/30 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(0,245,255,0.05)" }}>
                    <Icon size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-gray-500 tracking-widest">{label}</div>
                    <div className="text-gray-200 mt-0.5">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cyber-card rounded-xl p-6">
              <div className="font-mono text-xs text-cyan-400 tracking-widest mb-3">AVAILABILITY</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-gray-300 text-sm">Available for freelance and full-time roles</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-gray-300 text-sm">Response time: within 24 hours</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="cyber-card rounded-xl p-6">
              <h3 className="font-display text-sm tracking-widest text-cyan-400 mb-6">SEND A MESSAGE</h3>

              {sent && (
                <div className="flex items-center gap-2 text-green-400 font-mono text-xs mb-4 tracking-widest">
                  <CheckCircle size={16} />
                  MESSAGE SENT SUCCESSFULLY
                </div>
              )}

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs text-gray-500 tracking-widest block mb-1">YOUR NAME</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-black border border-cyan-500/20 rounded px-3 py-2.5 text-white text-sm focus:outline-none focus:border-cyan-400 placeholder-gray-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-gray-500 tracking-widest block mb-1">YOUR EMAIL</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@email.com"
                      className="w-full bg-black border border-cyan-500/20 rounded px-3 py-2.5 text-white text-sm focus:outline-none focus:border-cyan-400 placeholder-gray-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-gray-500 tracking-widest block mb-1">SUBJECT</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Project Inquiry"
                    className="w-full bg-black border border-cyan-500/20 rounded px-3 py-2.5 text-white text-sm focus:outline-none focus:border-cyan-400 placeholder-gray-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-gray-500 tracking-widest block mb-1">MESSAGE</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full bg-black border border-cyan-500/20 rounded px-3 py-2.5 text-white text-sm focus:outline-none focus:border-cyan-400 placeholder-gray-600 transition-colors resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="animated-border p-px rounded mt-2"
                >
                  <span className="flex items-center justify-center gap-2 bg-black px-6 py-3 rounded font-mono text-xs tracking-widest text-cyan-400 hover:bg-cyan-500/10 transition-colors w-full">
                    <Send size={14} />
                    SEND MESSAGE
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
