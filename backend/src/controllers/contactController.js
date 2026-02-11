const contactSubmissions = []

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validatePhone = (phone) => {
  if (!phone) return true
  const phoneRegex = /^[\d\s\-\(\)]+$/
  return phoneRegex.test(phone)
}

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body

    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Name is required',
      })
    }

    if (!email || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Email is required',
      })
    }

    if (!validateEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address',
      })
    }

    if (phone && !validatePhone(phone)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid phone number',
      })
    }

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Message is required',
      })
    }

    const submission = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : null,
      message: message.trim(),
      timestamp: new Date().toISOString(),
    }

    contactSubmissions.push(submission)

    console.log('=== NEW CONTACT FORM SUBMISSION ===')
    console.log('ID:', submission.id)
    console.log('Name:', submission.name)
    console.log('Email:', submission.email)
    console.log('Phone:', submission.phone || 'N/A')
    console.log('Message:', submission.message)
    console.log('Timestamp:', submission.timestamp)
    console.log('===================================')

    const emailData = {
      to: process.env.CONTACT_EMAIL || 'info@greenscapepro.com',
      from: submission.email,
      subject: `New Contact Form Submission from ${submission.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${submission.name}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        <p><strong>Phone:</strong> ${submission.phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${submission.message.replace(/\n/g, '<br>')}</p>
        <p><strong>Submitted:</strong> ${submission.timestamp}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${submission.name}
        Email: ${submission.email}
        Phone: ${submission.phone || 'Not provided'}
        
        Message:
        ${submission.message}
        
        Submitted: ${submission.timestamp}
      `,
    }

    console.log('\n=== EMAIL DATA (Ready for Email Service) ===')
    console.log(JSON.stringify(emailData, null, 2))
    console.log('============================================\n')

    res.status(200).json({
      success: true,
      message: 'Message received successfully',
    })
  } catch (error) {
    next(error)
  }
}
