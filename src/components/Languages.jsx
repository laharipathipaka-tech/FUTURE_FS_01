import { motion } from 'framer-motion'
import { FiGlobe } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'
import './Languages.css'

export default function Languages() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="languages" className="languages alternate">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-center">Languages</h2>

          <div className="languages-content">
            <div className="languages-grid grid grid-3">
              {portfolioData.languages.map((language) => (
                <motion.div
                  key={language}
                  variants={itemVariants}
                  className="language-card card"
                  whileHover={{ y: -5 }}
                >
                  <div className="language-icon">
                    <FiGlobe size={32} />
                  </div>
                  <h4>{language}</h4>
                  <p className="language-level">Fluent</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
