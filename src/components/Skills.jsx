const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git & GitHub"];

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-zinc-900">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <span
            key={s}
            className="bg-black border border-zinc-800 px-6 py-2 rounded-full hover:border-zinc-500 transition"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;