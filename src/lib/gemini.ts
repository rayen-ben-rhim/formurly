import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error('Missing Gemini API key');
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-001' });

interface FormulaResult {
  excel: string;
  sheets: string;
  explanation: string;
}

export async function generateFormula(prompt: string): Promise<FormulaResult> {
  const systemPrompt = `You are a spreadsheet formula expert. Generate formulas for both Excel and Google Sheets.
Format your response as JSON with the following structure:
{
  "excel": "Excel formula here",
  "sheets": "Google Sheets formula here",
  "explanation": "Clear explanation of how the formula works"
}
Make the formulas as efficient as possible and ensure they work in both Excel and Google Sheets.`;

  const fullPrompt = `${systemPrompt}\n\nUser request: ${prompt}`;

  try {
    const result = await model.generateContent(fullPrompt);
    const response = result.response;
    const text = response.text();
    
    // Extract JSON from the response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Invalid response format');
    }
    
    const parsed = JSON.parse(jsonMatch[0]);
    return {
      excel: parsed.excel,
      sheets: parsed.sheets,
      explanation: parsed.explanation
    };
  } catch (error) {
    console.error('Error generating formula:', error);
    throw new Error('Failed to generate formula. Please try again.');
  }
}
