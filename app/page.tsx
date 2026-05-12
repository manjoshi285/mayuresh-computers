export default function Page() {
  const services = [
    "Computer & Laptop Sales",
    "Computer & Laptop Repair",
    "Networking Solutions",
    "Printer Sales & Service",
    "CCTV Installation & Maintenance",
    "Annual Maintenance Contracts",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-sky-600">
              Mayuresh Computers
            </h1>
            <p className="text-sm text-gray-500">
              Computers • Networking • CCTV • Printers
            </p>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-sky-600">Home</a>
            <a href="#services" className="hover:text-sky-600">Services</a>
            <a href="#about" className="hover:text-sky-600">About</a>
            <a href="#contact" className="hover:text-sky-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <div className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold mb-5">
            Trusted IT Sales & Service Provider
          </div>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Complete Computer & Networking Solutions
          </h2>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We provide professional sales, repair, networking, CCTV,
            printer and IT support services for homes, offices,
            schools and businesses.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+919850899585"
              className="px-6 py-3 rounded-2xl bg-sky-600 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919850899585"
              className="px-6 py-3 rounded-2xl border border-sky-600 text-sky-600 font-semibold hover:bg-sky-50 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="bg-sky-100 rounded-3xl p-8 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
              alt="Computer Service"
              className="rounded-2xl w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold mb-4">Our Services</h3>
            <p className="text-gray-600 text-lg">
              Reliable technology solutions for homes and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-sky-50 border border-sky-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-600 text-white flex items-center justify-center text-2xl font-bold mb-6">
                  {index + 1}
                </div>

                <h4 className="text-xl font-semibold mb-3">{service}</h4>

                <p className="text-gray-600 leading-relaxed">
                  Professional and affordable service with quick support
                  and trusted customer assistance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-sky-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop"
              alt="IT Services"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <h3 className="text-4xl font-bold mb-6">Why Choose Us?</h3>

            <p className="text-gray-700 leading-relaxed mb-5 text-lg">
              Mayuresh Computers provides trusted IT sales and support
              services with a focus on quality, reliability and customer
              satisfaction.
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                ✔ Experienced Technical Support
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                ✔ Fast On-Site Service
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                ✔ Genuine Products & Accessories
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                ✔ Networking & CCTV Experts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-sky-600 to-sky-500 rounded-[32px] p-10 text-white shadow-2xl">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-4xl font-bold mb-5">Contact Us</h3>
                <p className="text-sky-100 text-lg leading-relaxed">
                  Get in touch for computer sales, repairs, networking,
                  CCTV setup or business IT support.
                </p>
              </div>

              <div className="space-y-5 text-lg">
                <div className="bg-white/10 p-4 rounded-2xl">
                  <iframe
                    title="Mayuresh Computers Location"
                    src="https://www.google.com/maps?q=Shop+No+3,+Laxmi+Ganga+Apartment,+117,+Shukrawar+Peth,+Satara&output=embed"
                    width="100%"
                    height="220"
                    style={{ border: 0, borderRadius: '16px' }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div>
                  <span className="font-semibold">Owner:</span> Shri.
                  Shridhar Kirdat
                </div>

                <div>
                  <span className="font-semibold">Phone:</span>
                  <br />
                  +91 9850899585
                  <br />
                  +91 8459692385
                </div>

                <div>
                  <span className="font-semibold">Email:</span>
                  <br />
                  mayureshcomp2018@gmail.com
                </div>

                <div>
                  <span className="font-semibold">Address:</span>
                  <br />
                  Shop No 3, Laxmi Ganga Apartment,
                  <br />
                  117, Shukrawar Peth, Satara
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-[32px] shadow-2xl p-10">
            <h3 className="text-4xl font-bold mb-6 text-center text-sky-700">
              Send Enquiry
            </h3>

            <form className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="p-4 rounded-2xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="p-4 rounded-2xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="p-4 rounded-2xl border border-sky-200 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />

              <textarea
                rows={5}
                placeholder="Write your enquiry here..."
                className="p-4 rounded-2xl border border-sky-200 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              ></textarea>

              <button
                type="submit"
                className="md:col-span-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-4 rounded-2xl transition"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h4 className="text-xl font-semibold text-white">
              Mayuresh Computers
            </h4>
            <p className="text-sm text-gray-400">
              Professional IT Sales & Service Solutions
            </p>
          </div>

          <div className="text-sm text-gray-400 text-center md:text-right">
            © 2026 Mayuresh Computers. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919850899585"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl font-semibold hover:scale-110 transition"
      >
        WhatsApp
      </a>
    </div>
  );
}
