function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-zinc-900">
      <h2 className="text-4xl font-bold mb-10">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-zinc-400 mb-4">Let's work together! Contact me for your next project.</p>
          <p className="mt-6">📧 maryamsabir499@gmail.com</p>
          <p>📍 Lahore, Pakistan</p>
          <a
            href="https://wa.me/923084149230"
            className="inline-block mt-6 bg-green-500 text-white px-8 py-3 rounded-full"
          >
            WhatsApp Me
          </a>
        </div>
        <form className="flex flex-col gap-4">
          <input placeholder="Your Name" className="bg-black border border-zinc-800 p-3 rounded-lg" />
          <input placeholder="Your Email" className="bg-black border border-zinc-800 p-3 rounded-lg" />
          <textarea placeholder="Your Message" rows="4" className="bg-black border border-zinc-800 p-3 rounded-lg"></textarea>
          <button className="bg-white text-black py-3 rounded-full font-bold">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;