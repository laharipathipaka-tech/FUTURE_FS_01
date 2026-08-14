import { motion } from 'framer-motion'
import { FiBookOpen, FiAward } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'
import './Education.css'

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="education" className="education">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-center">Education</h2>

          <motion.div
            variants={itemVariants}
            className="education-card card"
          >
            <div className="education-header">
              <div className="education-icon">
                <FiBookOpen size={32} />
              </div>
              <div>
                <h3>{portfolioData.education.degree}</h3>
                <p className="education-branch">{portfolioData.education.branch}</p>
                <p className="education-institution">
                  {portfolioData.education.institution}
                </p>
              </div>
            </div>

            <div className="cgpa-highlight">
              <FiAward size={24} />
              <div>
                <p className="cgpa-label">CGPA</p>
                <p className="cgpa-value">{portfolioData.education.cgpa}</p>
              </div>
            </div>

            <div className="coursework">
              <h4>Relevant Coursework</h4>
              <div className="coursework-list">
                {portfolioData.education.coursework.map((course, index) => (
                  <motion.div
                    key={index}
                    className="coursework-item"
                    variants={itemVariants}
                  >
                    <span className="course-dot">•</span>
                    {course}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
