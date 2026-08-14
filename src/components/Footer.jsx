import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="footer-section">
            <h4>{portfolioData.personal.name}</h4>
            <p>{portfolioData.personal.title}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="footer-section">
            <h4>Connect</h4>
            <div className="footer-socials">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="footer-social-link"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="footer-divider"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        ></motion.div>

        <motion.div
          className="footer-bottom"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="footer-credit">
            Built with <FiHeart size={16} /> using React + Vite
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
