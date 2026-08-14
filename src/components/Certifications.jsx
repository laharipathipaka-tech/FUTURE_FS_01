import { motion } from 'framer-motion'
import { FiAward, FiCloud, FiDatabase, FiCode, FiStar } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'
import './Certifications.css'

const iconMap = {
  cloud: FiCloud,
  database: FiDatabase,
  code: FiCode,
  star: FiStar,
  default: FiAward,
}

export default function Certifications() {
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
    <section id="certifications" className="certifications alternate">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-center">Certifications</h2>

          <div className="certifications-grid grid grid-2">
            {portfolioData.certifications.map((cert, index) => {
              const IconComponent = iconMap[cert.icon] || iconMap.default
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="certification-card card"
                  whileHover={{ y: -8 }}
                >
                  <div className="cert-icon">
                    <IconComponent size={32} />
                  </div>

                  <h4>{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>

                  <div className="cert-badge">
                    <span>✓ Certified</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
