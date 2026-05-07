import { GoogleGenAI, Type } from "@google/genai";
import { UNIVERSITIES, SCHOLARSHIPS } from "../mockData";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function getUniversityRecommendation(preferences: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Based on the following student preferences: "${preferences}", recommend 3 universities from our list: ${JSON.stringify(UNIVERSITIES)}. Provide reasons for each.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              universityId: { type: Type.STRING },
              reason: { type: Type.STRING },
              matchScore: { type: Type.NUMBER }
            },
            required: ["universityId", "reason", "matchScore"]
          }
        }
      }
    });

    return JSON.parse(response.text || '[]');
  } catch (error) {
    console.error("Gemini Error:", error);
    return [];
  }
}

export async function getScholarshipMatch(studentProfile: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Match this student profile: "${studentProfile}" with these scholarships: ${JSON.stringify(SCHOLARSHIPS)}. Return matches.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              scholarshipId: { type: Type.STRING },
              tips: { type: Type.STRING }
            },
            required: ["scholarshipId", "tips"]
          }
        }
      }
    });

    return JSON.parse(response.text || '[]');
  } catch (error) {
    console.error("Gemini Error:", error);
    return [];
  }
}
