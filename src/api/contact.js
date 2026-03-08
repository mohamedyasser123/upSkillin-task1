
import axios from 'axios';

export const submitContactRequest = async (contactData) => {
    try {
        const response = await axios.post('http://upskilling-egypt.com:3001/contact', contactData);
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        const errorMessage = error.response?.data?.message || error.message || 'Failed to submit contact request';
        throw new Error(errorMessage);
    }
};
