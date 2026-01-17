"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Send, Cpu, Sparkles, MessageSquare, Shield, Zap, AlertCircle, 
  Activity, Target, TrendingUp, Battery, Brain, Clock, ChevronRight, ListChecks 
} from "lucide-react";

export default function Dashboard({ onBack }: { onBack: () => void }) {
  const [input, setInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysisData, setAnalysisData] = useState<any>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleGeminiAnalysis = async () => {
    if (input.trim().length < 20) {
      setError("Please provide more context (min 20 chars).");
      return;
    }
    setError(null);
    setIsAnalyzing(true);
    setAnalysisData(null);

    try {
      const response = await fetch("/api/gemini", { 
        method: "POST", 
        body: JSON.stringify({ prompt: input }) 
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      
      setAnalysisData(data);
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white p-6 font-sans">
      
      {/* HEADER */}
      <header className="max-w-4xl mx-auto flex justify-between items-center mb-20 border-b border-white/5 pb-6">
        <button onClick={onBack} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/70">
          <ArrowLeft className="w-3.5 h-3.5" /> Disconnect
        </button>
        <div className="flex items-center gap-3">
          <Cpu className="w-5 h-5 text-indigo-500" />
          <h1 className="text-xs font-black uppercase tracking-[0.4em]">LifeOS <span className="opacity-20 text-indigo-400">Elite</span></h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto space-y-16 pb-20">
        
        {/* CENTRAL INPUT SECTION */}
        <section className="flex flex-col space-y-10 py-10">
          <div className="text-center space-y-3">
            <h2 className="text-4xl font-black tracking-tighter">DECRYPT YOUR DAY</h2>
            <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em]">Behavioral Input Stream</p>
          </div>

          <div className="relative group rounded-[2.5rem] border border-white/10 bg-white/[0.02] overflow-hidden focus-within:border-indigo-500/50 transition-all shadow-2xl">
            <textarea 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="// Type your activities, wins, nutrition, and mental states..." 
              className="w-full h-80 p-10 bg-transparent outline-none resize-none text-xl leading-relaxed text-indigo-50/90 placeholder:text-white/5" 
            />
            <div className="absolute bottom-8 right-10 flex items-center gap-8">
              <button 
                onClick={handleGeminiAnalysis} 
                disabled={isAnalyzing || !input} 
                className="flex items-center gap-4 px-12 py-5 rounded-2xl bg-indigo-600 font-black text-[11px] uppercase tracking-[0.2em] hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-500/20 disabled:opacity-20"
              >
                {isAnalyzing ? "Processing..." : "Sync Neural Data"} <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* OUTPUT SECTION */}
        <AnimatePresence>
          {analysisData && (
            <motion.section ref={resultsRef} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="space-y-12 pt-20 border-t border-white/5">
              
              {/* Insight Card */}
              <div className="p-10 rounded-[2.5rem] bg-indigo-500/5 border border-indigo-500/10 flex gap-6 items-start shadow-inner">
                <Brain className="w-8 h-8 text-indigo-400 shrink-0" />
                <p className="text-2xl font-bold leading-snug opacity-95 italic text-indigo-50/90 tracking-tight">{analysisData.summary}</p>
              </div>

              {/* Correlations Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {analysisData.correlations?.map((cor: string, i: number) => (
                  <div key={i} className="p-6 rounded-[1.5rem] border border-white/5 bg-white/[0.01] flex items-start gap-4 hover:border-white/10 transition-all">
                    <TrendingUp className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                    <p className="text-xs font-bold text-white/60 leading-relaxed">{cor}</p>
                  </div>
                ))}
              </div>

              {/* Metrics Matrix */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {Object.entries(analysisData.scores || {}).map(([key, val]: any) => (
                  <div key={key} className="p-6 rounded-[2rem] border border-white/5 bg-white/[0.02] text-center space-y-4 group">
                    <span className="text-[9px] font-black uppercase text-white/20 tracking-[0.2em] block">{key}</span>
                    <span className="text-3xl font-mono font-bold text-indigo-400">{val}%</span>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} animate={{ width: `${val}%` }} transition={{ duration: 1.5 }} className="h-full bg-indigo-500" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Strategic Advice Protocol */}
              <div className="p-10 md:p-14 rounded-[3.5rem] bg-indigo-600 text-white relative overflow-hidden shadow-[0_0_80px_rgba(99,102,241,0.3)] border border-indigo-400/30">
                <Zap className="absolute -top-10 -right-10 w-64 h-64 opacity-10 rotate-12" />
                <div className="relative z-10 space-y-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/20 pb-8">
                     <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/20 rounded-2xl"><ListChecks className="w-6 h-6 fill-white" /></div>
                        <div>
                           <h3 className="text-lg font-black uppercase tracking-[0.3em]">OPTIMIZATION BLUEPRINT</h3>
                           <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest italic">Strategic Action Protocol v2.5</span>
                        </div>
                     </div>
                  </div>

                  <div className="grid md:grid-cols-1 gap-6">
                    <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 space-y-4">
                       <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Immediate Protocol</span>
                       <div className="flex gap-4 items-start leading-relaxed font-bold italic text-lg opacity-95">
                          <ChevronRight className="w-5 h-5 mt-1 text-indigo-300 shrink-0" />
                          <p>{analysisData.advice_protocol?.immediate}</p>
                       </div>
                    </div>
                    <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 space-y-4">
                       <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Strategic Protocol</span>
                       <div className="flex gap-4 items-start leading-relaxed font-bold text-lg">
                          <ChevronRight className="w-5 h-5 mt-1 text-indigo-300 shrink-0" />
                          <p>{analysisData.advice_protocol?.longterm}</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}