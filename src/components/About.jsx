import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import './About.css'

export default function About() {
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
    <section id="about" className="about alternate">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-center">About Me</h2>

          <motion.div variants={itemVariants} className="about-content">
            <p className="about-description">
              {portfolioData.professional_summary}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="about-highlights grid grid-3"
          >
            <motion.div variants={itemVariants} className="highlight-card">
              <div className="highlight-icon">🎓</div>
              <h4>Education</h4>
              <p>
                {portfolioData.education.degree} in {portfolioData.education.branch}
              </p>
              <p className="highlight-value">CGPA: {portfolioData.education.cgpa}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="highlight-card">
              <div className="highlight-icon">💻</div>
              <h4>Focus Areas</h4>
              <p>Data Structures, Algorithms, Web Development</p>
            </motion.div>

            <motion.div variants={itemVariants} className="highlight-card">
              <div className="highlight-icon">🚀</div>
              <h4>Aspiration</h4>
              <p>Building scalable software solutions</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
