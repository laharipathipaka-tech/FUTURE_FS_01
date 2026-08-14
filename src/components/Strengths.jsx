import { motion } from 'framer-motion'
import { FiZap, FiCheckCircle, FiTrendingUp, FiRotateCcw } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'
import './Strengths.css'

const strengthIcons = {
  'Problem Solving': FiZap,
  'Logical Thinking': FiCheckCircle,
  'Quick Learning': FiTrendingUp,
  'Adaptability': FiRotateCcw,
}

export default function Strengths() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="strengths" className="strengths">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-center">My Strengths</h2>

          <div className="strengths-grid grid grid-4">
            {portfolioData.strengths.map((strength, index) => {
              const IconComponent = strengthIcons[strength]
              return (
                <motion.div
                  key={strength}
                  variants={itemVariants}
                  className="strength-card card"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="strength-icon">
                    {IconComponent && <IconComponent size={40} />}
                  </div>
                  <h4>{strength}</h4>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
