import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Code2, Briefcase, GraduationCap, Award, ExternalLink, Star, Heart } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const skills = [
    { name: 'React & Next.js', level: 90 },
    { name: 'JavaScript/TypeScript', level: 88 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Node.js', level: 80 },
    { name: 'Cybersecurity Basics', level: 75 },
    { name: 'Web Development', level: 95 }
  ];

  const projects = [
    {
      title: 'Explore Bandipora',
      description: 'Cinematic travel website showcasing the authentic beauty and culture of Bandipora, Kashmir with stunning visuals.',
      tech: ['React', 'Tailwind CSS', 'Motion', 'Unsplash API'],
      image: 'https://images.unsplash.com/photo-1723579038258-2a9c9e777509?w=800&q=80',
      link: 'https://bandipora-com.vercel.app'
    },
    {
      title: 'Personal Portfolio',
      description: 'Modern and elegant portfolio website showcasing my skills, projects, and professional journey.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      link: 'https://muzamil-introduction.vercel.app'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with modern UI, product catalog, and seamless user experience.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      link: 'https://e-commerce-nxtz.vercel.app/'
    }
  ];

  const experience = [
    {
      role: 'BCA Student',
      company: 'CASET College - Computer Science',
      period: '2023 - Present',
      description: 'Pursuing Bachelor of Computer Applications with focus on Web Development, Cybersecurity, and Modern Software Engineering practices.'
    },
    {
      role: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: '2022 - Present',
      description: 'Building modern, responsive websites and web applications for clients. Specializing in React, Next.js, and full-stack development.'
    },
    {
      role: 'Cybersecurity Learner',
      company: 'Self-Study & Online Courses',
      period: '2023 - Present',
      description: 'Exploring cybersecurity concepts, ethical hacking, and secure coding practices through online platforms and hands-on projects.'
    }
  ];

  return (
    <div className="size-full overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.h1>
          <div className="flex gap-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-blue-600 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              className="text-6xl md:text-7xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Muzamil Ahmad
            </motion.h1>
            <motion.p
              className="text-2xl text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Web Developer & Cybersecurity Enthusiast
            </motion.p>
            <motion.p
              className="text-lg text-gray-500 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              BCA Student at CASET College, Computer Science. Passionate about building
              secure web applications and exploring the world of cybersecurity.
              I love creating innovative solutions that make a difference.
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="https://wa.me/919103594759"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </motion.a>
              <motion.a
                href="mailto:muzamilmeer598@gmail.com"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.a>
            </motion.div>
            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { icon: Github, link: 'https://github.com/muzamilmeerdev' },
                { icon: Linkedin, link: 'https://www.linkedin.com/in/muzamilmeerdev' },
                { icon: Mail, link: 'mailto:muzamilmeer598@gmail.com' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-lg transition-all"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative w-full aspect-square"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl opacity-30"></div>
              <img
                src="https://res.cloudinary.com/dxjkbpmgm/image/upload/v1778400212/IMG_20260506_210239_f2wwv8.png"
                alt="Muzamil Ahmad"
                className="relative rounded-full w-full h-full object-cover border-8 border-white shadow-2xl"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">10+ Projects</p>
                  <p className="text-sm text-gray-500">Completed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600">Technologies I work with</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">{skill.name}</span>
                  <span className="text-blue-600">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Some of my recent work</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 right-4">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <p className="text-xl text-gray-600">My professional journey</p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 relative overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full -mr-16 -mt-16 opacity-30"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                      <p className="text-lg text-blue-600">{exp.company}</p>
                    </div>
                    <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-600">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl mb-8 text-blue-100">
              Have a project in mind? I'd love to hear about it.
            </p>
            <motion.a
              href="https://wa.me/919103594759"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-12 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-shadow"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center gap-6 mb-6">
            {[
              { Icon: Github, link: 'https://github.com/muzamilmeerdev' },
              { Icon: Linkedin, link: 'https://www.linkedin.com/in/muzamilmeerdev' },
              { Icon: Mail, link: 'mailto:muzamilmeer598@gmail.com' }
            ].map(({ Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                whileHover={{ y: -5 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
          <p className="text-gray-400">© 2026 Muzamil Ahmad. Made with <Heart className="inline w-4 h-4 text-red-500" /> and lots of code.</p>
        </div>
      </footer>
    </div>
  );
}