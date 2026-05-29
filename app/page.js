"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { TypeAnimation } from "react-type-animation";

import {
  Shield,
  X,
  Menu,
} from "lucide-react";

export default function Portfolio() {

  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, {
    stiffness: 500,
    damping: 28,
  });

  const springY = useSpring(cursorY, {
    stiffness: 500,
    damping: 28,
  });

  // Particle Init
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  // Scroll Progress
  useEffect(() => {

    const updateScroll = () => {

      const current =
        window.scrollY /
        (document.body.scrollHeight - window.innerHeight);

      setScrollProgress(current * 100);
    };

    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };

  }, []);

  // Cursor Movement
  useEffect(() => {

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, [cursorX, cursorY]);

  // Loading Screen
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);

  }, []);

  // Projects
  const projects = [

    {
      title: "Customer Behavior Prediction System",

      description:
        "Developed an advanced customer buying behavior prediction system using Apache PySpark and Multilayer Perceptron neural networks.",

      details: `
Built a scalable machine learning pipeline capable of analyzing customer purchasing patterns with exceptionally high prediction accuracy.

Implemented end-to-end workflows including data preprocessing, feature engineering, model training, evaluation, and deployment.

Integrated interactive analytical dashboards and visualization systems to generate customer insights and business intelligence.
      `,

      tech: [
        "PySpark",
        "Machine Learning",
        "Neural Networks",
        "Apache Spark",
        "Graphviz",
      ],
    },

    {
      title: "RFID Smart Attendance System",

      description:
        "Designed and developed an IoT-based attendance management system using RFID and Arduino technologies.",

      details: `
Created an automated attendance solution capable of identifying users through RFID-enabled ID cards.

Combined embedded systems, sensors, and microcontroller programming to improve efficiency and reduce manual attendance tracking.
      `,

      tech: [
        "Arduino",
        "RFID",
        "IoT",
        "Embedded Systems",
      ],
    },

    {
      title: "Object Detection System",

      description:
        "Real-time object detection application powered by Python and computer vision technologies.",

      details: `
Developed an interactive desktop-based object detection system with image processing and real-time visualization capabilities.

Focused on detection accuracy, user interaction, and optimized performance using OpenCV and Python.
      `,

      tech: [
        "Python",
        "OpenCV",
        "Tkinter",
        "Computer Vision",
      ],
    },

    {
      title: "VulnScan Security Analyzer",

      description:
        "Built a cybersecurity vulnerability assessment tool based on OWASP Top 10 security principles.",

      details: `
Designed a website vulnerability testing solution capable of identifying common web security weaknesses and misconfigurations.

Focused on cybersecurity analysis, vulnerability discovery, and security assessment methodologies.
      `,

      tech: [
        "Cybersecurity",
        "OWASP",
        "Python",
        "Security Testing",
      ],
    },

  ];

  // Loading Screen
  if (loading) {

    return (

      <div className="h-screen bg-black flex items-center justify-center overflow-hidden relative">

        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,255,200,0.15),_transparent_60%)]"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-10 text-left font-mono text-green-400 text-lg"
        >

          <TypeAnimation
            sequence={[
              "> booting neural interface...",
              700,
              "> bypassing security...",
              700,
              "> decrypting assets...",
              700,
              "> opening aswin's portfolio...",
              700,
              "> access granted",
              1000,
            ]}
            wrapper="div"
            speed={70}
            repeat={0}
            cursor={true}
          />

        </motion.div>

      </div>

    );
  }

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden relative cursor-none">

      {/* Scroll Progress */}
      <div
        className="fixed top-0 left-0 h-1 bg-cyan-400 z-[9999]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999]"
        style={{
          translateX: springX,
          translateY: springY,
          background:
            "radial-gradient(circle, rgba(0,255,255,0.9) 0%, rgba(0,255,255,0.15) 60%, transparent 100%)",
          boxShadow: "0 0 30px rgba(0,255,255,0.8)",
        }}
      />

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },

          fpsLimit: 60,

          particles: {
            color: {
              value: "#00ffff",
            },

            links: {
              color: "#00ffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },

            move: {
              enable: true,
              speed: 1,
            },

            number: {
              value: 50,
            },

            opacity: {
              value: 0.3,
            },

            size: {
              value: {
                min: 1,
                max: 3,
              },
            },
          },

          detectRetina: true,
        }}
      />

      {/* Matrix Background */}
      <div className="absolute inset-0 opacity-[0.05] text-green-500 text-[10px] leading-[10px] overflow-hidden font-mono whitespace-pre-wrap pointer-events-none z-0">
        {Array(400)
          .fill("010101101010101001010101010101011010")
          .join(" ")}
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-cyan-500/10 bg-black/20">

        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-cyan-400 text-xl font-bold tracking-widest">
            ASWIN.EXE
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>

          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>

      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pt-32 relative z-10">

        {/* Hero */}
        <section className="min-h-screen flex flex-col justify-center">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-black mb-6"
          >

            <span className="text-white">
              ASWIN HARI A
            </span>

            <br />

            <span className="text-cyan-400">
              TECH ENTHUSIAST
            </span>

          </motion.h1>

          <div className="text-cyan-400 text-xl font-mono mb-10">

            <TypeAnimation
              sequence={[
                "Backend Developer",
                1000,
                "Cybersecurity Enthusiast",
                1000,
                "AI & ML Explorer",
                1000,
                "Creative Technologist",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          <p className="max-w-3xl text-gray-400 text-lg leading-relaxed">
            Graduated with a Bachelor of Computer Applications (BCA)
            degree from Yenepoya University, Bangalore in 2026.
            Passionate about backend systems, artificial intelligence,
            cybersecurity, and modern software technologies with a strong
            interest in building impactful digital solutions.
          </p>

        </section>

        {/* Projects */}
        <section id="projects" className="py-32">

          <h2 className="text-5xl font-bold mb-16 text-cyan-400">
            PROJECTS
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {projects.map((project, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-3xl p-8 cursor-pointer hover:border-cyan-400 transition"
              >

                <Shield className="text-cyan-400 mb-6" />

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">

                  {project.tech.map((item, i) => (

                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </motion.div>

            ))}

          </div>

        </section>

        {/* GitHub */}
        <section className="py-32">

          <h2 className="text-5xl font-bold text-cyan-400 mb-12">
            GITHUB
          </h2>

          <div className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-3xl p-10">

            <div className="text-cyan-400 text-5xl mb-6">
              ⚡
            </div>

            <p className="text-gray-400 text-lg mb-4">
              Explore my development projects, repositories,
              and technical experiments on GitHub.
            </p>

            <a
              href="https://github.com/aswinhari2005"
              target="_blank"
              className="text-cyan-400 hover:text-cyan-300 transition"
            >
              github.com/aswinhari2005
            </a>

          </div>

        </section>

        {/* Contact */}
        <section id="contact" className="py-32">

          <h2 className="text-5xl font-bold text-cyan-400 mb-12">
            CONTACT
          </h2>

          <div className="space-y-4 text-lg text-gray-400">

            <p>Phone : 7558839548</p>

            <p>Email : aswinhariofficial@gmail.com</p>

            <p>
              LinkedIn :
              {" "}
              <a
                href="https://www.linkedin.com/in/aswinhari"
                target="_blank"
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                linkedin.com/in/aswinhari
              </a>
            </p>

          </div>

        </section>

      </div>

      {/* Modal */}
      <AnimatePresence>

        {selectedProject && (

          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-[#071018] border border-cyan-500/20 rounded-3xl p-10 max-w-xl w-full relative"
            >

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6"
              >
                <X />
              </button>

              <h2 className="text-4xl font-bold mb-6 text-cyan-400">
                {selectedProject.title}
              </h2>

              <p className="text-gray-400 mb-6">
                {selectedProject.description}
              </p>

              <p className="text-gray-500 whitespace-pre-line leading-relaxed mb-6">
                {selectedProject.details}
              </p>

              <div className="flex flex-wrap gap-2">

                {selectedProject.tech.map((item, i) => (

                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}