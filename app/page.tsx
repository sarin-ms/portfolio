"use client"

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload, FaEnvelope, FaMoon } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const skills = ["React", "Next.js", "TypeScript", "AI/ML", "Node.js", "Tailwind CSS", "Python", "MySQL", "Discord.js"];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 scroll-smooth dark:bg-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-400">
                Portfolio
              </h1>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center space-x-8"
            >
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium dark:text-gray-300 dark:hover:text-white">Home</Link>
              <Link href="#about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium dark:text-gray-300 dark:hover:text-white">About</Link>
              <Link href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors font-medium dark:text-gray-300 dark:hover:text-white">Projects</Link>
              <Link href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors font-medium dark:text-gray-300 dark:hover:text-white">Contact</Link>
              <ThemeToggle />
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse opacity-20"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl dark:border-gray-700 dark:bg-gray-800 dark:shadow-2xl dark:shadow-gray-700">
                <Image
                  src="/avatar.webp"
                  alt="Sarin M S"
                  width={192}
                  height={192}
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent dark:from-white dark:via-gray-300 dark:to-white">
              Sarin M S
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed dark:text-gray-400 dark:bg-gray-900">
              Front End Developer passionate about creating beautiful and functional web experiences with{" "}
              <span className="text-blue-600 font-semibold">AI & ML</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button size="lg" asChild className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 dark:bg-gray-700 dark:hover:bg-gray-600">
              <a href="/SarinMsResume.pdf" download="SarinMsResume.pdf" aria-label="Download CV">
                <FaDownload className="mr-2 group-hover:animate-bounce" />
                Download CV
              </a>
            </Button>
            <Button size="lg" variant="outline" className="group px-8 py-3" asChild>
              <Link href="mailto:sarinms7@hotmail.com">
                <FaEnvelope className="mr-2 group-hover:animate-pulse" />
                Contact Me
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center gap-6"
          >
            <Link 
              href="https://github.com/sarin-ms" 
              className="text-gray-500 hover:text-gray-900 transition-all duration-300 hover:scale-110 dark:text-gray-400 dark:hover:text-white"
            >
              <FaGithub size={32} />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/sarin-ms" 
              className="text-gray-500 hover:text-blue-600 transition-all duration-300 hover:scale-110 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <FaLinkedin size={32} />
            </Link>
            <Link 
              href="https://instagram.com/sarinn.ms" 
              className="text-gray-500 hover:text-pink-600 transition-all duration-300 hover:scale-110 dark:text-gray-400 dark:hover:text-pink-400"
            >
              <FaInstagram size={32} />
            </Link>
          </motion.div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float dark:bg-blue-900"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-float-delayed dark:bg-purple-900"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent dark:from-white dark:via-gray-300 dark:to-white">
              About Me
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                <CardContent className="p-0">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 dark:text-gray-300">
                    Hey there! I'm Sarin M S, a Computer Science (AI & ML) student at the College of Engineering, Chengannur. 
                    I genuinely enjoy building cool stuff on the internet.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 dark:text-gray-300">
                    Whether it's a personal website, a Discord bot, or just experimenting with a new framework, 
                    I'm always excited to learn and create something new.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed dark:text-gray-300">
                    Right now, I'm diving deep into Next.js and React, and I'm currently looking for 
                    internship opportunities in the field of AI & ML.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg dark:from-blue-900 dark:to-purple-900">
                  <h4 className="font-semibold text-gray-900 mb-2 dark:text-white">Currently Learning</h4>
                  <p className="text-gray-700 dark:text-gray-300">Advanced React patterns, AI/ML algorithms, and modern web development practices</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
                Sarin M S
              </h3>
              <p className="text-gray-400 mt-2 dark:text-gray-400">Front End Developer & AI/ML</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">Home</Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">About</Link>
              <Link href="/projects" className="text-gray-400 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">Projects</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">Contact</Link>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 dark:text-gray-400 ">© 2025 Sarin M S. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
