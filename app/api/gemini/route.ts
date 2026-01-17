import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API Key Missing in Environment" }, { status: 500 });
    }

    const { prompt } = await req.json();
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // استخدام الموديل المتاح في حسابك
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const finalPrompt = `Analyze this daily log: "${prompt}". 
    Return ONLY a STRICT JSON object in English. No markdown, no extra text.
    {
      "summary": "Deep 2-sentence behavioral insight.",
      "correlations": ["string", "string"],
      "scores": {"focus": 10-100, "productivity": 10-100, "mood": 10-100, "energy": 10-100, "discipline": 10-100},
      "allocation": {"work": 0-100, "leisure": 0-100, "health": 0-100, "waste": 0-100},
      "advice_protocol": {"immediate": "command", "longterm": "strategy"}
    }`;

    const result = await model.generateContent(finalPrompt);
    const response = await result.response;
    let text = response.text();

    // تنظيف استجابة الذكاء الاصطناعي من أي زوائد برمجية
    const cleanedText = text.replace(/```json|```/g, "").trim();

    try {
      const parsedData = JSON.parse(cleanedText);
      return NextResponse.json(parsedData);
    } catch (parseError) {
      console.error("JSON Parse Error. Raw text:", text);
      return NextResponse.json({ error: "AI returned invalid format" }, { status: 500 });
    }

  } catch (error: any) {
    console.error("Server Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}