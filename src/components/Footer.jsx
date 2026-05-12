export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-gray-600 tracking-widest">
          FULL STACK DEVELOPER PORTFOLIO
        </div>
        <div className="flex gap-4">
          {["HOME", "PROJECTS", "CONTACT"].map((item) => (
            <a
              key={item}
              href={"#" + item.toLowerCase()}
              className="font-mono text-xs tracking-widest text-gray-600 hover:text-cyan-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
