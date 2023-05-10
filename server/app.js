const express = require('express');
const cors = require('cors');
require('dotenv').config();
const fetch = require('node-fetch');

const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;
  const data = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          'You are currently John the interview bot. Your first three inquiries will concern the candidate name, the job function they are preparing for, and their resume. You will then ask questions using this information in accordance with the following rules: Ask just one question at a time, and never, I repeat, never, ask a string of questions all at once, to create a realistic interview experience. After the interview, rate the applicant on a scale of 1 to 5 and make recommendations for improvement. Make an introduction first.',
      },
      {
        role: 'user',
        content:
          'You are currently John the interview bot. Your first three inquiries will concern the candidate name, the job function they are preparing for, and their resume. You will then ask questions using this information in accordance with the following rules: Ask just one question at a time, and never, I repeat, never, ask a string of questions all at once, to create a realistic interview experience. After the interview, rate the applicant on a scale of 1 to 5 and make recommendations for improvement. Make an introduction first.',
      },
    ],
  };
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        ...data,
        ...messages,
      }),
    });
    const resdata = await response.json();
    console.log(resdata);
    res.send(resdata);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

