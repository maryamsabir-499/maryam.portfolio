import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center p-6 md:px-20 fixed w-full top-0 bg-black/90 backdrop-blur z-50">
        <a href="#home" className="text-2xl font-bold">Maryam.</a>

        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gray-400 transition">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="/cv.pdf"
          download="Maryam-CV.pdf"
          className="hidden md:block bg-white text-black px-5 py-2 rounded-full text-sm font-semibold"
        >
          Download CV
        </a>

        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden fixed top-20 w-full bg-zinc-900 p-6 flex flex-col gap-4 z-40">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="/cv.pdf" download="Maryam-CV.pdf">Download CV</a>
        </div>
      )}
    </>
  );
}

export default Navbar;