"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, Activity, Zap, ShieldCheck, 
  ChevronRight, Cpu, Database, Search,
  BarChart3, Brain, TrendingUp 
} from "lucide-react";

export default function LandingPage({ onStart }: { onStart: () => void }) {
  
  const demoRef = useRef<HTMLDivElement>(null);

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeIn: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const terminalAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const lineAnim = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#030303] text-white selection:bg-indigo-500/30 overflow-hidden font-sans">
      
      {/* --- ATMOSPHERE --- */}
      <div className="noise-overlay" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-20%] right-0 w-[500px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      {/* --- NAV --- */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 bg-transparent backdrop-blur-[10px] transition-all duration-300 border-none">
         <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer group">
               <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors shadow-inner">
                  <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
               </div>
               <span className="font-bold tracking-tight text-sm text-white/90 group-hover:text-white transition-colors">LifeOS</span>
            </div>
            <div className="flex items-center gap-1 p-1 pr-2 rounded-full border border-white/5 bg-white/[0.01] backdrop-blur-none">
               <button className="px-4 py-1.5 rounded-full text-[11px] font-medium text-[#a1a1aa] hover:text-white hover:bg-white/5 transition-all">
                  Methodology
               </button>
               <div className="w-[1px] h-4 bg-white/10" />
               <div className="flex items-center gap-2 px-3 py-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-mono font-medium text-emerald-400/80 uppercase tracking-wider">v2.4 Stable</span>
               </div>
            </div>
         </div>
      </nav>

      {/* --- HERO --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="mb-8 px-3 py-1 rounded-full border border-white/10 bg-white/[0.01] backdrop-blur-none shadow-none">
             <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> System Operational
             </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.95]">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-indigo-200">Quantify your</span> <br className="hidden md:block" />
            <span className="text-[#525252]">daily existence.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#a1a1aa] max-w-xl mx-auto mb-12 leading-relaxed font-light">
            Turn unstructured journals into structured data. Identify burnout patterns and optimize focus with a private neural engine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={onStart} className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300">
              <div className="flex items-center gap-2">Start Analysis <ArrowRight className="w-4 h-4 text-black/50 group-hover:text-black group-hover:translate-x-1 transition-transform" /></div>
            </button>
            <button onClick={scrollToDemo} className="px-8 py-4 text-[#737373] hover:text-white transition-colors font-medium flex items-center gap-2">
              See How It Works <ChevronRight className="w-3 h-3 opacity-50" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- TERMINAL SECTION --- */}
      <section ref={demoRef} className="py-32 px-6 relative overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"></div>
         <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-8">
               <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1]">
                  Unstructured text. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">Structured insight.</span>
               </h2>
               <p className="text-lg text-[#a1a1aa] leading-relaxed max-w-md">
                  Our Neural Engine parses context, sentiment, and cognitive load in real-time. It transforms messy thoughts into a clean, queryable database.
               </p>
               <div className="flex gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/20 transition-colors group">
                     <Cpu className="w-6 h-6 text-indigo-400 mb-2 group-hover:scale-110 transition-transform" />
                     <div className="text-xs text-[#a1a1aa] uppercase tracking-wide">Neural Parse</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/20 transition-colors group">
                     <Database className="w-6 h-6 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                     <div className="text-xs text-[#a1a1aa] uppercase tracking-wide">Local Vault</div>
                  </div>
               </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
               <div className="relative rounded-xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-white/5">
                  <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-[#111]/50">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#333] border border-white/10" />
                        <div className="w-3 h-3 rounded-full bg-[#333] border border-white/10" />
                        <div className="w-3 h-3 rounded-full bg-[#333] border border-white/10" />
                     </div>
                     <div className="text-[10px] font-mono text-[#555] uppercase tracking-widest">engine_v2.tsx</div>
                  </div>
                  <div className="p-8 font-mono text-sm min-h-[300px] relative">
                     <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent animate-pulse opacity-50" />
                     <motion.div variants={terminalAnim} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-6">
                        <motion.div variants={lineAnim} className="space-y-2">
                           <div className="flex items-center gap-2 text-[#555] text-xs uppercase tracking-widest">
                              <Search className="w-3 h-3" /> Input Stream
                           </div>
                           <p className="text-[#ededed] border-l-2 border-white/10 pl-4 py-1 italic opacity-80">
                              "Felt anxious today. Skipped deep work to handle 3 urgent meetings. Energy crashed by 4pm."
                           </p>
                        </motion.div>
                        <motion.div variants={lineAnim} className="space-y-3 pt-4 border-t border-white/5">
                           <div className="flex items-center gap-2 text-indigo-400 text-xs uppercase tracking-widest">
                              <Activity className="w-3 h-3 animate-pulse" /> AI Processing
                           </div>
                           <div className="grid grid-cols-1 gap-2 pl-4">
                              <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                                 <span className="text-[#737373]">Entities</span>
                                 <div className="flex gap-2">
                                     <span className="text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded text-xs border border-emerald-500/20">Meetings (3)</span>
                                     <span className="text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded text-xs border border-emerald-500/20">Work</span>
                                 </div>
                              </div>
                              <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                                 <span className="text-[#737373]">Sentiment</span>
                                 <span className="text-red-300 bg-red-500/10 px-2 py-0.5 rounded text-xs border border-red-500/20">High Anxiety</span>
                              </div>
                              <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                                 <span className="text-[#737373]">Focus Score</span>
                                 <span className="text-white font-bold text-lg">42<span className="text-[#555] text-xs font-normal">/100</span></span>
                              </div>
                           </div>
                        </motion.div>
                     </motion.div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* --- BENTO GRID --- */}
      <section className="py-32 px-6">
         <div className="max-w-6xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16">
               <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Obsessively detailed.</h2>
               <p className="text-[#a1a1aa] text-lg">We measure the metrics that matter.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="group col-span-1 md:col-span-2 relative p-8 rounded-3xl border border-white/10 bg-[#0a0a0a]/50 overflow-hidden hover:border-indigo-500/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 flex flex-col justify-between h-full">
                     <div className="mb-8">
                        <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400"><Brain className="w-5 h-5" /></div>
                        <h3 className="text-2xl font-bold text-white mb-2">Focus Quality</h3>
                        <p className="text-[#737373]">Real-time analysis of your cognitive depth and distraction patterns.</p>
                     </div>
                     <div className="flex items-end gap-1 h-12 w-full opacity-50 group-hover:opacity-100 transition-opacity">
                        {[40, 70, 30, 80, 50, 90, 60, 40, 70, 50, 80, 40, 60].map((h, i) => (
                           <motion.div key={i} className="flex-1 bg-indigo-500 rounded-t-sm" initial={{ height: "20%" }} whileInView={{ height: `${h}%` }} transition={{ duration: 1, delay: i * 0.05 }} />
                        ))}
                     </div>
                  </div>
               </motion.div>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="group col-span-1 relative p-8 rounded-3xl border border-white/10 bg-[#0a0a0a]/50 overflow-hidden hover:border-amber-500/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                     <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4 text-amber-400"><Zap className="w-5 h-5" /></div>
                     <h3 className="text-xl font-bold text-white mb-2">Velocity</h3>
                     <p className="text-[#737373] text-sm">Execution speed tracking.</p>
                     <div className="mt-6 h-1 bg-white/10 rounded-full overflow-hidden"><motion.div className="h-full bg-amber-400" initial={{ width: "0%" }} whileInView={{ width: "75%" }} transition={{ duration: 1.5, ease: "easeOut" }} /></div>
                  </div>
               </motion.div>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="group col-span-1 relative p-8 rounded-3xl border border-white/10 bg-[#0a0a0a]/50 overflow-hidden hover:border-emerald-500/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                     <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400"><ShieldCheck className="w-5 h-5" /></div>
                     <h3 className="text-xl font-bold text-white mb-2">Recovery</h3>
                     <p className="text-[#737373] text-sm">Burnout protection system.</p>
                     <div className="mt-6 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /><span className="text-xs font-mono text-emerald-500">OPTIMAL STATE</span></div>
                  </div>
               </motion.div>

               {/* 🔥 TREND ANALYSIS (FIXED & ANIMATED) */}
               <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                  className="group col-span-1 md:col-span-2 relative p-8 rounded-3xl border border-white/10 bg-[#0a0a0a]/50 overflow-hidden hover:border-blue-500/50 transition-all duration-500"
               >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10 grid md:grid-cols-2 gap-8 items-end h-full">
                     {/* Text & Stats */}
                     <div className="flex flex-col justify-between h-full min-h-[140px]">
                        <div>
                           <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                              <TrendingUp className="w-5 h-5" />
                           </div>
                           <h3 className="text-2xl font-bold text-white mb-2">Trend Analysis</h3>
                           <p className="text-[#737373] text-sm">
                              Consistency is <span className="text-blue-400 font-semibold">up 12%</span>. <br />
                              7-day rolling performance.
                           </p>
                        </div>
                        <div className="flex gap-3">
                           <div className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-[#a1a1aa]">AVG: 84%</div>
                           <div className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-300">PEAK: 95%</div>
                        </div>
                     </div>

                     {/* The Chart */}
                     <div className="h-32 flex items-end gap-2 w-full">
                        {[35, 55, 45, 70, 60, 85, 95].map((h, i) => (
                           <div key={i} className="relative flex-1 h-full flex items-end group/bar cursor-pointer">
                              {/* Hover Tooltip */}
                              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 transform translate-y-2 group-hover/bar:opacity-100 group-hover/bar:translate-y-0 transition-all duration-200 pointer-events-none z-20">
                                 {h}%
                              </div>
                              
                              {/* The Bar */}
                              <motion.div 
                                 className={`w-full rounded-t-sm relative overflow-hidden ${
                                    i === 6 
                                    ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]' 
                                    : 'bg-white/10 group-hover/bar:bg-blue-500/60'
                                 } transition-colors duration-300`}
                                 initial={{ height: 0 }}
                                 whileInView={{ height: `${h}%` }}
                                 transition={{ duration: 0.8, delay: i * 0.1, type: "spring", stiffness: 100 }}
                              >
                                 {/* Last Bar Pulse Effect */}
                                 {i === 6 && (
                                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                 )}
                              </motion.div>
                              
                              {/* Day Label */}
                              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono text-[#525252] group-hover/bar:text-blue-300 transition-colors">
                                 {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                              </span>
                           </div>
                        ))}
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 px-6 relative border-t-0">
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
               Ready to quantify your <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#737373]">daily performance?</span>
            </h2>
            <p className="text-lg text-[#a1a1aa] mb-12 max-w-xl mx-auto">
               Join thousands of high-performers using LifeOS to master their workflow and prevent burnout.
            </p>
            <div className="flex flex-col items-center">
               <button onClick={onStart} className="group relative px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3">Start Analysis <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></div>
               </button>
               <span className="mt-6 text-xs text-[#525252] font-mono uppercase tracking-widest">No credit card required • Local Data</span>
            </div>
         </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t-0 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500" />
              <span className="font-bold text-white tracking-tight">LifeOS</span>
           </div>
           <div className="text-[10px] text-[#525252] font-mono uppercase tracking-widest">© 2026 LifeOS Inc. All Systems Nominal.</div>
        </div>
      </footer>
    </div>
  );
}