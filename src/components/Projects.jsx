const projects = [
  { title: "Project One", text: "Chhoti description likhein.", live: "#", github: "#" },
  { title: "Project Two", text: "Chhoti description likhein.", live: "#", github: "#" },
  { title: "Project Three", text: "Chhoti description likhein.", live: "#", github: "#" },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:-translate-y-1 hover:border-zinc-500 transition"
          >
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-zinc-400 mt-3">{p.text}</p>
            <div className="mt-6 flex gap-4 text-sm">
              <a href={p.live} target="_blank" rel="noreferrer" className="underline">Live</a>
              <a href={p.github} target="_blank" rel="noreferrer" className="underline">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;