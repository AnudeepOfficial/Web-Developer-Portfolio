import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// Initialize Gemini Client
// Note: In a real production app, API calls should be routed through a backend to protect the key.
// For this demo, we assume the environment variable is safely injected or restricted.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (message: string, history: { role: string, parts: { text: string }[] }[]) => {
  if (!apiKey) {
    return "I'm sorry, my brain (API Key) is missing right now. Please configure the API_KEY to chat with me!";
  }

  try {
    const model = ai.models;
    
    // We simply generate content here for a single turn, or we could use chat mode.
    // For a portfolio bot, a simple generateContent with system instruction usually suffices, 
    // but chat mode maintains history better.
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        maxOutputTokens: 300,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I encountered a temporary glitch in the matrix. Please try asking again.";
  }
};
