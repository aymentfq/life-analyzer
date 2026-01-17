import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) return NextResponse.json({ error: "API Key Missing" }, { status: 500 });

    const { prompt } = await req.json();
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const finalPrompt = `Analyze this daily log: "${prompt}". 
    Return a STRICT JSON in English:
    {
      "summary": "Deep 2-sentence behavioral insight.",
      "correlations": ["Activity X influenced Metric Y", "Pattern Z detected"],
      "scores": {"focus": 10-100, "productivity": 10-100, "mood": 10-100, "energy": 10-100, "discipline": 10-100},
      "allocation": {"work": 0-100, "leisure": 0-100, "health": 0-100, "waste": 0-100},
      "advice_protocol": {"immediate": "Short tactical command", "longterm": "Detailed weekly strategy"}
    }
    LOGIC: Avoid scores below 10% if activity is present.`;

    const result = await model.generateContent(finalPrompt);
    const text = result.response.text().replace(/```json|```/g, "").trim();
    return NextResponse.json(JSON.parse(text));
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}