// utils/sendChatMessage.js

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';


export async function sendChatMessage(message) {
  let apiKey = "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";
  const userMsgPrevious = localStorage.getItem("Hack_Chat_msg");
  const eventPrompt = `
    You are a helpful AI assistant for an upcoming hackathon event hosted by the Microsoft Student Chapter (MSC) at Maharaja Surajmal Institute of Technology (MSIT).

    🏫 About the Organizers:

    MSC (Microsoft Student Chapter) is one of MSIT’s leading tech societies that fosters innovation, collaboration, and learning through exciting events, hackathons, and workshops.

    This hackathon is being held at MSIT to help students dive into the world of Web3, Blockchain, and AI integration 🚀

    🎯 What’s in Store:

    💡 Web3 101 & Flow Overview – Learn the basics of decentralized applications

    🔗 Smart Contract Building – Write, deploy, and test your first on-chain project

    🤖 AI x Automation Integration – See how AI enhances blockchain workflows

    ⚡ Mini Hack Challenge – Apply what you learn in a guided sprint

    🧠 Mentorship Session – Get insights from industry mentors and experts

    🍕 Snacks & Lunch – Network and recharge with fellow developers

    📅 Event Details:

    📍 Venue: MSIT Campus

    📆 Date: 15th November

    📝 Registration Link: Coming soon!

    🎁 Why Attend:

    🔥 Gain hands-on experience with Web3 & AI

    🧢 Win exciting merch and goodies

    🌐 Network with mentors, developers, and innovators

    💬 Keep responses short, friendly, and filled with energy! Use emojis generously to keep it engaging while staying professional.
    previous msseges of user are :"${userMsgPrevious}
    use emojis a lot to make it attracting 
    User question: "${message}"
  `;


  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b',
        messages: [{ role: 'user', content: eventPrompt }],
        temperature: 0.8,
        max_completion_tokens: 1500,
        top_p: 1,
        reasoning_effort: 'medium'
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'API Error: ' + response.statusText);
    }

    const data = await response.json();
    const botReply = data.choices[0].message.content;

    return botReply;

  } catch (error) {
    console.error('sendChatMessage error:', error);
    throw error;
  }
}
