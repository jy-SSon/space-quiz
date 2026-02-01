
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const askSpaceAssistant = async (question: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `사용자는 대한민국 우주 기술에 관심이 많은 학생입니다. 
      다음 질문에 대해 친절하고 격려하는 말투로, 초등학생이나 중학생이 이해하기 쉽게 설명해주세요.
      대한민국의 초소형 군집위성 사업(NEONSAT)과 누리호에 대한 지식을 바탕으로 답변하세요.
      
      질문: ${question}`,
      config: {
        systemInstruction: "당신은 대한민국의 우주 과학 교육 전문가입니다.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "우주 기지에 일시적인 통신 장애가 발생했습니다. 잠시 후 다시 시도해주세요!";
  }
};
