import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'
import './Hero.css'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }



  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="text-gradient">
              PATHIPAKA LAHARI
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-title">
              ECE Final-Year Student — Aspiring Software Developer
            </motion.p>

            <motion.p variants={itemVariants} className="hero-description">
              Passionate about solving complex problems and building scalable software solutions.
              Strong foundation in Data Structures, Algorithms, and Web Development.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-badge">
              <span>✨ Open to Software Opportunities</span>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                <FiMail /> Contact Me
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-socials">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="social-link"
                aria-label="Email"
              >
                <FiMail size={24} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="visual-container">
              <div className="visual-element element-1"></div>
              <div className="visual-element element-2"></div>
              <div className="visual-element element-3"></div>
              <div className="code-illustration">
                <div className="code-line">
                  <span className="code-tag">const</span>
                  <span className="code-var">developer</span>
                  <span className="code-op">=</span>
                  <span className="code-str">{`{}`}</span>
                </div>
                <div className="code-line">
                  <span className="code-tag">function</span>
                  <span className="code-func">buildSolutions</span>
                  <span className="code-op">()</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
