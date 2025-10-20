import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Ruler, Hammer, Wrench, ChevronRight } from 'lucide-react';
type HomeExtensionLandingProps = Record<string, never>;
const projects = [{
  id: 1,
  title: 'Modern Kitchen Extension',
  image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop'
}, {
  id: 2,
  title: 'Two-Storey Addition',
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
}, {
  id: 3,
  title: 'Garden Room Extension',
  image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'
}, {
  id: 4,
  title: 'Loft Conversion',
  image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop'
}] as any[];
const testimonials = [{
  id: 1,
  quote: 'The team transformed our home beyond our expectations. Professional, punctual, and a pleasure to work with.',
  author: 'Sarah Johnson',
  location: 'London'
}, {
  id: 2,
  quote: 'Outstanding craftsmanship and attention to detail. Our extension has added tremendous value to our property.',
  author: 'Michael Chen',
  location: 'Manchester'
}] as any[];

// @component: HomeExtensionLanding
export const HomeExtensionLanding = (props: HomeExtensionLandingProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  // @return
  return <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <Hammer className="h-8 w-8 text-amber-600" />
                <span className="text-2xl font-bold text-gray-900">AFabHome</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('work')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Our Work
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Contact
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-amber-600 text-white px-6 py-2.5 rounded-lg hover:bg-amber-700 transition-colors font-medium">
                Book a Consultation
              </button>
            </nav>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                Home
              </button>
              <button onClick={() => scrollToSection('work')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                Our Work
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                Contact
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full bg-amber-600 text-white px-4 py-2.5 rounded-lg hover:bg-amber-700 transition-colors font-medium">
                Book a Consultation
              </button>
            </div>
          </motion.div>}
      </header>

      <main>
        <section id="home" className="relative pt-20 min-h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&h=1080&fit=crop" alt="Home Extension" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Premier Home Extension Company
              </h1>
              <p className="text-2xl md:text-3xl text-gray-200 mb-10">
                Over Twenty Years' Experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('contact')} className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-all font-semibold text-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl">
                  Book a Consultation
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button onClick={() => scrollToSection('work')} className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl">
                  View Our Work
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">About Us</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    With over two decades of experience in the home extension industry, we've helped hundreds of families expand their living spaces and realize their dream homes. Our commitment to quality craftsmanship, attention to detail, and customer satisfaction has made us the trusted choice for homeowners across the region.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    From initial design concepts to final completion, our expert team guides you through every step of the process, ensuring your project is delivered on time, within budget, and exceeds your expectations.
                  </p>
                  <button onClick={() => scrollToSection('work')} className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold text-lg">
                    View Our Work
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=600&fit=crop" alt="Our Team" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">Services Overview</h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Comprehensive solutions for all your home extension needs
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div whileHover={{
                y: -8
              }} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                  <div className="bg-amber-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Ruler className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Design</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our expert architects work closely with you to create innovative designs that maximize space, enhance functionality, and complement your home's existing style. We handle all planning permissions and building regulations.
                  </p>
                </motion.div>

                <motion.div whileHover={{
                y: -8
              }} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                  <div className="bg-amber-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Hammer className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Build</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our skilled construction teams deliver exceptional quality at every stage. Using premium materials and proven techniques, we build extensions that stand the test of time while maintaining the highest safety standards.
                  </p>
                </motion.div>

                <motion.div whileHover={{
                y: -8
              }} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                  <div className="bg-amber-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Wrench className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Renovate</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Transform existing spaces with our comprehensive renovation services. From kitchen and bathroom upgrades to complete interior remodeling, we breathe new life into every corner of your home.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="work" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">Featured Projects</h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Explore our portfolio of stunning home extensions and transformations
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => <motion.div key={project.id} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} whileHover={{
                y: -8
              }} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <span className="inline-flex items-center gap-2 text-amber-400 font-semibold">
                        View Project
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Testimonials</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => <motion.div key={testimonial.id} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} className="bg-gray-50 p-8 rounded-2xl shadow-md">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map(star => <svg key={star} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>)}
                    </div>
                    <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.location}</p>
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-amber-50 mb-10 max-w-2xl mx-auto">
                Let's bring your vision to life. Contact us today for a free consultation and quote.
              </p>
              <button onClick={() => scrollToSection('contact')} className="bg-white text-amber-600 px-10 py-4 rounded-lg hover:bg-gray-100 transition-all font-bold text-lg shadow-xl hover:shadow-2xl inline-flex items-center gap-2">
                Get Started Today
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Hammer className="h-8 w-8 text-amber-500" />
                <span className="text-2xl font-bold" style={{
                fontWeight: "400",
                fontSize: "22px",
                lineHeight: "1.6"
              }}>AFabHome</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Premier home extension specialists with over 20 years of experience transforming homes across the UK.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-amber-500 transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('work')} className="text-gray-400 hover:text-amber-500 transition-colors">
                    Our Work
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-amber-500 transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Home Extensions</li>
                <li>Loft Conversions</li>
                <li>Kitchen Extensions</li>
                <li>Renovation Services</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">info@buildright.co.uk</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">020 1234 5678</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">123 Builder Street<br />London, UK SW1A 1AA</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 AFabHome. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};