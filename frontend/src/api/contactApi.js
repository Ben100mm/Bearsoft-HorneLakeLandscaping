import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001'

const contactApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const submitContactForm = async (formData) => {
  try {
    const response = await contactApi.post('/api/contact', formData)
    return response.data
  } catch (error) {
    throw error.response?.data || { message: 'Failed to submit contact form' }
  }
}
