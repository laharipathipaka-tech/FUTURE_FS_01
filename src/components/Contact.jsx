import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState(null) // 'success', 'error', or null
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus('error')
      return false
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error')
      return false
    }
    if (!formData.subject.trim()) {
      setStatus('error')
      return false
    }
    if (!formData.message.trim()) {
      setStatus('error')
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // EmailJS integration point
      // To use EmailJS:
      // 1. Install: npm install @emailjs/browser
      // 2. Get your service ID, template ID, and public key from emailjs.com
      // 3. Uncomment the code below and add your credentials
      
      // import emailjs from '@emailjs/browser'
      // emailjs.init('YOUR_PUBLIC_KEY')
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   {
      //     to_email: portfolioData.personal.email,
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     subject: formData.subject,
      //     message: formData.message,
      //   }
      // )

      // For now, show success message
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => {
        setStatus(null)
      }, 5000)
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

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
    <section id="contact" className="contact alternate">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-center">Get In Touch</h2>

          <div className="contact-content grid grid-2">
            <motion.div variants={itemVariants} className="contact-info">
              <h3>Contact Information</h3>

              <div className="contact-item">
                <div className="contact-icon">
                  <FiMail size={24} />
                </div>
                <div>
                  <p className="contact-label">Email</p>
                  <a href={`mailto:${portfolioData.personal.email}`}>
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FiPhone size={24} />
                </div>
                <div>
                  <p className="contact-label">Phone</p>
                  <a href={`tel:${portfolioData.personal.phone}`}>
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <p className="contact-label">LinkedIn</p>
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Profile
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <p className="contact-label">GitHub</p>
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Repository
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    aria-label="Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    aria-label="Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    aria-label="Subject"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows="5"
                    required
                    aria-label="Message"
                  ></textarea>
                </div>

                {status === 'success' && (
                  <motion.div
                    className="form-status success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <FiCheck size={20} />
                    <span>Thank you! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    className="form-status error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <FiAlertCircle size={20} />
                    <span>Please fill in all fields correctly.</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isLoading}
                  style={{ width: '100%' }}
                >
                  {isLoading ? (
                    <>
                      <span className="loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </button>

                <p className="form-note">
                  * All fields are required. Email integration can be configured with EmailJS
                  or your preferred service.
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
