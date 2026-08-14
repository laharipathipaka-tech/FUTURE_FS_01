import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import './DSA.css'

const topicIcons = {
  'Searching': '🔍',
  'Sorting': '📊',
  'Arrays': '📦',
  'Strings': '📝',
  'Recursion': '🔄',
  'Binary Search': '⚖️',
}

export default function DSA() {
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
    <section id="dsa" className="dsa">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-center">Problem Solving & DSA</h2>

          <motion.div variants={itemVariants} className="dsa-description">
            {portfolioData.dsa.description.map((desc, index) => (
              <p key={index} className="dsa-point">
                ✓ {desc}
              </p>
            ))}
          </motion.div>

          <div className="dsa-topics grid grid-3">
            {portfolioData.dsa.topics.map((topic, index) => (
              <motion.div
                key={topic}
                className="topic-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="topic-icon">
                  {topicIcons[topic] || '⚡'}
                </div>
                <h4>{topic}</h4>
                <div className="topic-bar">
                  <div className="topic-progress"></div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="dsa-note">
            <p>
              Continuously improving problem-solving skills through consistent practice of
              algorithmic challenges focusing on time and space complexity optimization.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
