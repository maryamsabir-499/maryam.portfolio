const services = [
  { title: "Web Development", text: "Modern, fast and responsive websites with React." },
  { title: "UI / UX Design", text: "Clean and user-friendly designs with Tailwind CSS." },
  { title: "Portfolio Websites", text: "Professional portfolio for students & freelancers." },
];

function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-20 bg-zinc-900">
      <h2 className="text-4xl font-bold mb-10">Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-black p-8 rounded-2xl border border-zinc-800 hover:-translate-y-1 hover:border-zinc-500 transition"
          >
            <h3 className="text-xl font-bold">{s.title}</h3>
            <p className="text-zinc-400 mt-3">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;