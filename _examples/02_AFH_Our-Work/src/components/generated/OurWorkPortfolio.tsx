import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
type OurWorkPortfolioProps = Record<string, never>;
type Project = {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
};
const projects: Project[] = [{
  id: 1,
  title: 'Modern Office Renovation',
  category: 'Commercial',
  imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
  description: 'Complete office transformation with modern design elements and sustainable materials.'
}, {
  id: 2,
  title: 'Luxury Villa Construction',
  category: 'Residential',
  imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
  description: 'Custom-built luxury villa featuring contemporary architecture and smart home integration.'
}, {
  id: 3,
  title: 'Retail Store Design',
  category: 'Commercial',
  imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
  description: 'High-end retail space with innovative lighting and customer flow optimization.'
}, {
  id: 4,
  title: 'Restaurant Interior',
  category: 'Hospitality',
  imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
  description: 'Elegant restaurant interior with open kitchen concept and ambient lighting.'
}, {
  id: 5,
  title: 'Apartment Complex',
  category: 'Residential',
  imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
  description: 'Multi-unit residential building with modern amenities and green spaces.'
}, {
  id: 6,
  title: 'Corporate Headquarters',
  category: 'Commercial',
  imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
  description: 'State-of-the-art corporate building with energy-efficient systems.'
}, {
  id: 7,
  title: 'Boutique Hotel',
  category: 'Hospitality',
  imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
  description: 'Intimate boutique hotel with personalized service and luxury finishes.'
}, {
  id: 8,
  title: 'Contemporary Home',
  category: 'Residential',
  imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
  description: 'Minimalist home design with emphasis on natural light and open spaces.'
}, {
  id: 9,
  title: 'Shopping Center',
  category: 'Commercial',
  imageUrl: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&h=600&fit=crop',
  description: 'Modern shopping complex with mixed-use spaces and community areas.'
}];
const navLinks = [{
  label: 'Home',
  href: '#home'
}, {
  label: 'Our Work',
  href: '#our-work'
}, {
  label: 'Contact',
  href: '#contact'
}];

// @component: OurWorkPortfolio
export const OurWorkPortfolio = (props: OurWorkPortfolioProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };
  const closeLightbox = () => {
    setSelectedProject(null);
  };

  // @return
  return <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">AFabHome</h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              {navLinks.map(link => <a key={link.label} href={link.href} className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium">
                  {link.label}
                </a>)}
            </nav>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors" aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} transition={{
          duration: 0.2
        }} className="md:hidden border-t border-gray-200 bg-white">
              <nav className="px-4 py-4 space-y-3">
                {navLinks.map(link => <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors font-medium">
                    {link.label}
                  </a>)}
              </nav>
            </motion.div>}
        </AnimatePresence>
      </header>

      <main>
        <section id="our-work" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Work</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our portfolio of exceptional projects that showcase our commitment to quality craftsmanship, 
                innovative design, and attention to detail. Each project represents our dedication to exceeding 
                client expectations and creating spaces that inspire.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h3 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Project Gallery
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => <motion.div key={project.id} initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="group cursor-pointer" onClick={() => handleProjectClick(project)}>
                  <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-sm font-medium mb-1">{project.category}</p>
                        <h4 className="text-xl font-bold">{project.title}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-1">{project.category}</p>
                    <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's bring your vision to life. Our team is ready to collaborate with you on your next 
                residential, commercial, or hospitality project. Get in touch today for a free consultation.
              </p>
              <motion.a href="#contact" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Request a Quote
                <ExternalLink size={20} />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">AFabHome</h4>
              <p className="text-gray-600">
                Building excellence through quality craftsmanship and innovative design solutions.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-4">Navigation</h5>
              <nav className="space-y-2">
                {navLinks.map(link => <a key={link.label} href={link.href} className="block text-gray-600 hover:text-gray-900 transition-colors">
                    {link.label}
                  </a>)}
              </nav>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-4">Contact Us</h5>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail size={18} className="flex-shrink-0" />
                  <span>info@buildcraft.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone size={18} className="flex-shrink-0" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin size={18} className="flex-shrink-0" />
                  <span>123 Builder Street, Construction City, CC 12345</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>© 2025 AFabHome. All rights reserved.© 2025 AFabHome. All rights reserved.© 2025 AFabHome. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProject && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 0.3
      }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={closeLightbox}>
            <motion.div initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.9,
          opacity: 0
        }} transition={{
          duration: 0.3
        }} className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full overflow-hidden" onClick={e => e.stopPropagation()}>
              <button onClick={closeLightbox} className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg" aria-label="Close">
                <X size={24} className="text-gray-900" />
              </button>

              <div className="aspect-[16/10] overflow-hidden">
                <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6 md:p-8">
                <p className="text-sm font-medium text-gray-500 mb-2">{selectedProject.category}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 text-lg">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </div>;
};