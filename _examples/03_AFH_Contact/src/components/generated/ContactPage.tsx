import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
type ContactPageProps = Record<string, never>;
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 0.5
  }
};

// @component: ContactPage
export const ContactPage = (_props: ContactPageProps) => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  // @return
  return <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">AFabHome</div>
            <nav className="flex gap-8">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </a>
              <a href="/work" className="text-gray-600 hover:text-gray-900 transition-colors">
                Our Work
              </a>
              <a href="/contact" className="text-gray-900 font-medium">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <motion.div className="max-w-4xl mx-auto" initial="initial" animate="animate" variants={fadeInUp}>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Whether you have a question about our services, need a consultation, or just want to say hello, feel free to reach out.
            </p>
          </div>

          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="p-3 bg-blue-50 rounded-lg w-fit mb-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">Email</h3>
                  <a href="mailto:contact@company.com" className="text-blue-600 hover:text-blue-700 transition-colors break-all">
                    contact@company.com
                  </a>
                </div>

                <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="p-3 bg-green-50 rounded-lg w-fit mb-4">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">Phone</h3>
                  <a href="tel:+1234567890" className="text-green-600 hover:text-green-700 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>

                <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="p-3 bg-purple-50 rounded-lg w-fit mb-4">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">Address</h3>
                  <p className="text-gray-600 text-sm">
                    <span>123 Business Street</span><br />
                    <span>Suite 100</span><br />
                    <span>New York, NY 10001</span>
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <motion.a href="https://maps.google.com/?q=123+Business+Street+New+York+NY" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors" whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }}>
                  <MapPin className="w-5 h-5" />
                  Open in Google Maps
                </motion.a>
              </div>

              <div className="mt-12 flex justify-center">
                <div className="calendly-inline-widget w-full" data-url="https://calendly.com/radu-sighencea/30min" style={{
              width: '100%',
              height: '700px'
            }}></div>
              </div>
            </motion.div>
        </motion.div>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50 mt-16">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-4">AFabHome</div>
              <p className="text-gray-600">
                Building exceptional digital experiences for forward-thinking businesses.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
              <nav className="flex flex-col gap-2">
                <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Home
                </a>
                <a href="/work" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Our Work
                </a>
                <a href="/contact" className="text-gray-900 font-medium">
                  Contact
                </a>
              </nav>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <a href="mailto:contact@company.com" className="hover:text-gray-900 transition-colors">
                    contact@company.com
                  </a>
                </p>
                <p>
                  <a href="tel:+1234567890" className="hover:text-gray-900 transition-colors">
                    +1 (234) 567-890
                  </a>
                </p>
                <p>
                  123 Business Street<br />
                  Suite 100<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>© 2025 AFabHome. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};