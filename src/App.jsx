function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Maryam.</h1>
        <a href="/cv.pdf" download="Maryam-CV.pdf" className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold">
          Download CV
        </a>
      </nav>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          I build modern <span className="text-zinc-500">websites</span> <br /> with React & Tailwind.
        </h1>
        <p className="text-zinc-400 mt-6 text-lg">Frontend Developer from Pakistan.</p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#cv-section" className="bg-white text-black px-8 py-3 rounded-full font-bold">View My CV</a>
          <a href="/cv.pdf" download className="border border-zinc-700 px-8 py-3 rounded-full">Download CV</a>
        </div>
      </div>

      {/* CV Section - NAYA SECTION */}
      <div id="cv-section" className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-zinc-900 rounded-3xl p-8 md:p-10 border border-zinc-800">
          <h2 className="text-3xl font-bold mb-8">My CV</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white">Maryam tajammal</h3>
              <p className="text-zinc-400">Frontend Developer | React Developer</p>
              <p className="text-zinc-500 text-sm mt-2">Lahore, Pakistan | maryamsabir499@gmail.com | 0308-4149230</p>
            </div>
            <div>
              <h4 className="font-bold text-white border-b border-zinc-800 pb-2 mb-3">Education</h4>
              <p className="text-zinc-300">B.A  - punjab University (2014-2015)</p>
            </div>
            <div>
              <h4 className="font-bold text-white border-b border-zinc-800 pb-2 mb-3">Skills</h4>
              <p className="text-zinc-300">React, Vite, Tailwind CSS, JavaScript, WordPress, HTML/CSS</p>
            </div>
            <div>
              <h4 className="font-bold text-white border-b border-zinc-800 pb-2 mb-3">Experience / Projects</h4>
              <p className="text-zinc-300">• Labelsaymine - E-commerce Website</p>
              <p className="text-zinc-300">• Portfolio Website with React</p>
            </div>
            <div className="pt-6 flex gap-4">
              <a href="/cv.pdf" download className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm">Download PDF</a>
              <a href="https://wa.me/923084149230" className="bg-green-600 text-white px-6 py-3 rounded-full font-bold text-sm">WhatsApp Me</a>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center py-10 text-zinc-600 text-sm">
        Made by Maryam - 2025
      </footer>
    </div>
  )
}
export default App