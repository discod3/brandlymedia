import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode, FaInstagram, FaPalette, FaRocket, FaHeart, FaLightbulb, FaArrowUp } from 'react-icons/fa';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "Minimalist Portfolio",
      category: "Nettside Design",
      description: "Elegant og minimalistisk portefølje for en digital kunstner",
      image: "https://cdn.dribbble.com/userupload/10196651/file/original-a60a519fc1d2e8bc0ac16c0d6d5d2920.png?resize=1024x768",
      tags: ["React", "Framer Motion", "Tailwind CSS"]
    },
    {
      title: "Eco Store",
      category: "E-commerce",
      description: "Moderne nettbutikk for bærekraftige produkter",
      image: "https://cdn.dribbble.com/userupload/10196650/file/original-f0f6c7f8b2c0e184b5da1bd3e8629d6b.png?resize=1024x768",
      tags: ["Next.js", "Shopify", "Custom Design"]
    },
    {
      title: "Tech Conference",
      category: "Event Nettside",
      description: "Dynamisk landingsside for teknologi-konferanse",
      image: "https://cdn.dribbble.com/userupload/10196649/file/original-a0b557c65e3fa71eb8fac01afb4d4c7c.png?resize=1024x768",
      tags: ["Vue.js", "3D Animation", "WebGL"]
    },
    {
      title: "Restaurant Booking",
      category: "Web App",
      description: "Intuitivt reservasjonssystem for restaurant",
      image: "https://cdn.dribbble.com/userupload/10196648/file/original-7a26c2e8b21080db0dd46f095a3fb657.png?resize=1024x768",
      tags: ["React Native", "Node.js", "UI/UX"]
    },
    {
      title: "Creative Agency",
      category: "Nettside Design",
      description: "Kreativ og interaktiv nettside for designbyrå",
      image: "https://cdn.dribbble.com/userupload/10196647/file/original-a60a519fc1d2e8bc0ac16c0d6d5d2920.png?resize=1024x768",
      tags: ["Gatsby", "GSAP", "Custom Animations"]
    },
    {
      title: "Health Tech",
      category: "SaaS Platform",
      description: "Moderne dashboard for helsedata-analyse",
      image: "https://cdn.dribbble.com/userupload/10196646/file/original-f0f6c7f8b2c0e184b5da1bd3e8629d6b.png?resize=1024x768",
      tags: ["React", "D3.js", "Material UI"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="h-screen relative flex items-center justify-center overflow-hidden">
        {/* Dynamic background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <div className="absolute inset-0 backdrop-blur-[100px]" />
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-8"
            >
              <div className="text-sm font-medium tracking-wider text-blue-400 uppercase mb-4">
                Din digitale suksesspartner
              </div>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Brandly Media
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Vi transformerer virksomheter gjennom strategisk design og digital innovasjon. 
              La oss skape din neste suksesshistorie sammen.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start din reise
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-lg font-medium hover:bg-white/20 transition-all duration-300"
              >
                Se våre prosjekter
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </header>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Våre tjenester</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Vi leverer skreddersydde løsninger som driver vekst og skaper verdi for din virksomhet
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLaptopCode className="text-5xl mb-6 text-blue-400" />,
                title: "Nettsider",
                description: "Moderne, responsive nettsider skreddersydd for din bedrift. Vi fokuserer på brukeropplevelse, hastighet og konvertering for å sikre at din nettside blir et effektivt verktøy for vekst."
              },
              {
                icon: <FaInstagram className="text-5xl mb-6 text-purple-400" />,
                title: "Sosiale Medier",
                description: "Strategisk innholdsproduksjon og administrasjon av sosiale medier. Vi hjelper deg med å bygge en sterk tilstedeværelse på relevante plattformer og engasjere ditt målpublikum."
              },
              {
                icon: <FaPalette className="text-5xl mb-6 text-pink-400" />,
                title: "Logo Design",
                description: "Tidløse og minneverdige logoer som formidler din merkevares essens. Vi skaper visuelle identiteter som skiller seg ut i markedet og resonerer med din målgruppe."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm border border-white/10"
              >
                {service.icon}
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Våre Prosjekter</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Se et utvalg av våre beste arbeider og hvordan vi har hjulpet våre kunder med å nå sine mål
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative rounded-2xl overflow-hidden aspect-[4/3]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-sm font-medium text-blue-400 mb-2">{project.category}</div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Om Brandly Media</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Vi er et team av kreative sjeler og tekniske eksperter som brenner for å skape digitale opplevelser som gjør en forskjell
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <FaRocket className="text-4xl text-blue-400" />,
                title: "Vår Visjon",
                description: "Å drive digital innovasjon som setter standarden i bransjen og skaper målbare resultater for våre kunder."
              },
              {
                icon: <FaHeart className="text-4xl text-purple-400" />,
                title: "Vår Lidenskap",
                description: "Vi elsker å utforske nye muligheter og pushe grensene for hva som er mulig i den digitale verden."
              },
              {
                icon: <FaLightbulb className="text-4xl text-pink-400" />,
                title: "Vår Tilnærming",
                description: "Vi kombinerer kreativitet med strategisk tenkning for å skape løsninger som ikke bare ser bra ut, men også leverer resultater."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-8 rounded-2xl bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm border border-white/10 h-full"
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-4 rounded-full bg-white/5">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
                  <p className="text-gray-400 text-center">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10">
              <p className="text-xl text-gray-300">
                "Vi tror på kraften av god design og teknologi for å skape meningsfulle forbindelser mellom merkevarer og deres målgrupper."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Klar for å ta neste steg?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            La oss sammen skape digitale opplevelser som overgår forventninger og driver resultater
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Kontakt oss i dag
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2023 Brandly Media. Alle rettigheter reservert.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;