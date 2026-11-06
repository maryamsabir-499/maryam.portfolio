function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-zinc-400 max-w-3xl text-lg leading-relaxed">
        hi, i,m maryam tajammal.I am a python developer i bulid website 
      </p>
      <div className="mt-8 flex gap-10">
        <div>
          <h4 className="text-3xl font-bold">10+</h4>
          <p className="text-zinc-500">Projects</p>
        </div>
        <div>
          <h4 className="text-3xl font-bold">100%</h4>
          <p className="text-zinc-500">Client Satisfaction</p>
        </div>
      </div>
    </section>
  );
}

export default About;