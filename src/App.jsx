import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 md:px-20 fixed w-full top-0 bg-black/90 backdrop-blur z-50">
        <h1 className="text-2xl font-bold">Maryam.</h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      <a href="/cv.pdf" download className="hidden md:block bg-white text-black px-5 py-2 rounded-full text-sm">Download CV</a>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </nav>

      {menuOpen && (
        <div className="md:hidden fixed top-20 w-full bg-zinc-900 p-6 flex flex-col gap-4 z-40">
          <a href="#home" onClick={()=>setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={()=>setMenuOpen(false)}>Services</a>
          <a href="#about" onClick={()=>setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20">
        <h1 className="text-5xl md:text-8xl font-bold leading-tight">
          I build <span className="text-zinc-500">modern websites</span><br/> with React & Tailwind.
        </h1>
        <p className="text-zinc-400 mt-6 text-lg">Frontend Developer from Pakistan.</p>
        <div className="mt-8 flex gap-4">
          <a href="#contact" className="bg-white text-black px-8 py-3 rounded-full">Hire Me</a>
          <a href="#services" className="border border-white px-8 py-3 rounded-full">My Services</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 md:px-20 bg-zinc-900">
        <h2 className="text-4xl font-bold mb-10">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black p-8 rounded-2xl border border-zinc-800">
            <h3 className="text-xl font-bold">Web Development</h3>
            <p className="text-zinc-400 mt-3">Modern, fast and responsive websites with React.</p>
          </div>
          <div className="bg-black p-8 rounded-2xl border border-zinc-800">
            <h3 className="text-xl font-bold">UI / UX Design</h3>
            <p className="text-zinc-400 mt-3">Clean and user-friendly designs with Tailwind CSS.</p>
          </div>
          <div className="bg-black p-8 rounded-2xl border border-zinc-800">
            <h3 className="text-xl font-bold">Portfolio Websites</h3>
            <p className="text-zinc-400 mt-3">Professional portfolio for students & freelancers.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-zinc-400 max-w-3xl text-lg leading-relaxed">
          Hi, I'm Maryam! I'm a passionate Frontend Developer from Pakistan. I love building beautiful and modern websites using React and Tailwind CSS. My goal is to help businesses and students get a professional online presence.
        </p>
        <div className="mt-8 flex gap-10">
          <div><h4 className="text-3xl font-bold">10+</h4><p className="text-zinc-500">Projects</p></div>
          <div><h4 className="text-3xl font-bold">100%</h4><p className="text-zinc-500">Client Satisfaction</p></div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-zinc-900">
        <h2 className="text-4xl font-bold mb-10">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-zinc-400 mb-4">Let's work together! Contact me for your next project.</p>
            <p className="mt-6">📧 maryam.dev@gmail.com</p>
            <p>📍 Lahore, Pakistan</p>
            <a href="https://wa.me/923000000000" className="inline-block mt-6 bg-green-500 text-white px-8 py-3 rounded-full">WhatsApp Me</a>
          </div>
          <form className="flex flex-col gap-4">
            <input placeholder="Your Name" className="bg-black border border-zinc-800 p-3 rounded-lg" />
            <input placeholder="Your Email" className="bg-black border border-zinc-800 p-3 rounded-lg" />
            <textarea placeholder="Your Message" rows="4" className="bg-black border border-zinc-800 p-3 rounded-lg"></textarea>
            <button className="bg-white text-black py-3 rounded-full font-bold">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="text-center py-6 text-zinc-600 text-sm border-t border-zinc-900">
        © 2026 Maryam. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
