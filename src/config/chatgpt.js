import axios from 'axios';


// Create an instance of axios with default configuration
const openaiConfig = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_CHAT_API}`,
  },
});


// Function to get a response from the OpenAI API
export const getChatCompletion = async (messages) => {
  try {
    const response = await openaiConfig.post('/chat/completions', {
      model: 'gpt-4',  // Replace with the model you are using
      messages: messages,
    });
    const content = response.data.choices[0].message.content;
    return content;
    console.log(content)
  } catch (error) {
    console.error('Error fetching response from OpenAI:', error);
    throw error;
  }
};



export default openaiConfig;