import { motion } from 'framer-motion'
import { FiCode, FiGlobe, FiDatabase, FiCpu, FiTool, FiMonitor } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'
import './Skills.css'

const skillIcons = {
  'Programming Languages': FiCode,
  'Web Technologies': FiGlobe,
  'Database Technologies': FiDatabase,
  'Computer Science': FiCpu,
  'Productivity Tools': FiTool,
  'Development Tools': FiMonitor,
}

export default function Skills() {
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
    <section id="skills" className="skills alternate">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-center">Technical Skills</h2>

          <div className="skills-grid grid grid-2">
            {Object.entries(portfolioData.skills).map(([category, skills]) => {
              const IconComponent = skillIcons[category]
              return (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  className="skill-category card"
                >
                  <div className="category-header">
                    <div className="category-icon">
                      {IconComponent && <IconComponent size={28} />}
                    </div>
                    <h3>{category}</h3>
                  </div>

                  <div className="skills-list">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        className="skill-item"
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: { delay: index * 0.05 },
                          },
                        }}
                      >
                        <span className="skill-dot"></span>
                        {skill}
                      </motion.div>
                    ))}
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
