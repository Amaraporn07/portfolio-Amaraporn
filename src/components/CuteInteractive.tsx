import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Heart, Sparkles, Cpu, RefreshCw, Zap, Bug, Send } from 'lucide-react';

type MoodState = 'HAPPY' | 'OVERLOADED' | 'COOL' | 'SLEEPING' | 'BUGGY';

export default function CuteInteractive() {
  const [mood, setMood] = useState<MoodState>('HAPPY');
  const [serverLoad, setServerLoad] = useState<number>(30);
  const [clicks, setClicks] = useState<number>(0);
  const [bubbleText, setBubbleText] = useState<string>('Hello! Welcome to my server!');
  const [logs, setLogs] = useState<string[]>([
    'SYSTEM: Server booted successfully.',
    'DB: Connection established on port 5432.',
    'STATUS: Cute backend pet is online!'
  ]);

  const addLog = (msg: string) => {
    setLogs((prev) => [msg, ...prev.slice(0, 4)]);
  };

  const handleFeedCode = () => {
    setClicks((c) => c + 1);
    const newLoad = Math.min(100, serverLoad + 15);
    setServerLoad(newLoad);
    addLog(`POST /api/v1/feed-code HTTP/1.1 - 200 OK - Load increased to ${newLoad}%`);

    if (newLoad > 85) {
      setMood('OVERLOADED');
      setBubbleText('Ahhh! Too much code! The server is going to explode!');
    } else {
      setMood('HAPPY');
      setBubbleText('Yum! Code is delicious! Thanks for the new features!');
    }
  };

  const handleCacheDb = () => {
    setClicks((c) => c + 1);
    const newLoad = Math.max(10, serverLoad - 25);
    setServerLoad(newLoad);
    setMood('COOL');
    setBubbleText('Phew! Cached data with Redis, load is way down!');
    addLog(`PUT /api/v1/redis-cache HTTP/1.1 - 200 OK - Load reduced to ${newLoad}%`);
  };

  const handleFixBugs = () => {
    setClicks((c) => c + 1);
    setMood('HAPPY');
    setBubbleText('Yay! Bugs removed! Code is squeaky clean!');
    addLog('DELETE /api/v1/bugs HTTP/1.1 - 204 No Content - Bugs cleared!');
  };

  const handleDeploy = () => {
    setClicks((c) => c + 1);
    setMood('COOL');
    setBubbleText('Boom! Deployed to production!');
    addLog('SYSTEM: Production deployment complete. Server is STABLE.');
    
    // Trigger temporary bounce particle
    setTimeout(() => {
      setMood('HAPPY');
    }, 1500);
  };

  const handleReset = () => {
    setServerLoad(30);
    setMood('HAPPY');
    setBubbleText('Server reset! Everything is back to normal!');
    addLog('SYSTEM: Warm reboot complete.');
  };

  const getPetFace = () => {
    switch (mood) {
      case 'HAPPY':
        return {
          eyes: '(◕‿◕)',
          mouth: '▲',
          color: 'bg-[#33CC66]', // vibrant green
          animation: 'animate-bounce',
        };
      case 'OVERLOADED':
        return {
          eyes: '(✖╭╮✖)',
          mouth: '■',
          color: 'bg-[#FF3333]', // vibrant red
          animation: 'animate-ping',
        };
      case 'COOL':
        return {
          eyes: '(🕶️_🕶️)',
          mouth: '▼',
          color: 'bg-[#3366FF]', // vibrant blue
          animation: 'animate-pulse',
        };
      case 'BUGGY':
        return {
          eyes: '(⊙_⊙)',
          mouth: 'O',
          color: 'bg-[#FFD600]', // vibrant yellow
          animation: 'animate-bounce',
        };
      default:
        return {
          eyes: '(◡_◡)',
          mouth: 'zZ',
          color: 'bg-[#FFFDF5]',
          animation: 'animate-pulse',
        };
    }
  };

  const face = getPetFace();

  return (
    <section id="playground" className="py-16 px-4 bg-[#FFFDF5] border-t-4 border-black relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title Block */}
        <div className="space-y-3 text-left">
          <div className="inline-block bg-purple-500 text-white font-mono text-xs font-black px-3 py-1 border-2 border-black uppercase tracking-wider">
            INTERACTIVE PLAYGROUND
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-black">
            Pet Server Lab <span className="text-purple-500">//</span> PLAYGROUND
          </h2>
          <p className="section-sub text-center max-w-2xl mx-auto mb-12">
            This is a cute virtual server simulating code execution and backend load. Try feeding it code, clearing cache, or fixing bugs to see its mood change!
          </p>
        </div>

        {/* Playboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-amber-50/50 p-6 md:p-10 border-4 border-black shadow-[8px_8px_0px_0px_#000]">
          
          {/* Left Side: Server Pet & Speech Bubble */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center space-y-6">
            
            {/* Speach bubble */}
            <motion.div 
              key={bubbleText}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="bg-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_#000] relative max-w-xs text-left"
            >
              <p className="text-xs font-black text-black leading-relaxed">
                {bubbleText}
              </p>
              {/* Bubble Triangle Arrow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-4 border-r-4 border-black transform rotate-45" />
            </motion.div>

            {/* Server Pet Body Graphic (Neo-Brutalist design) */}
            <div className="relative mt-4">
              <motion.div
                animate={{ 
                  y: mood === 'OVERLOADED' ? [0, -4, 0, 4, 0] : [0, -10, 0],
                  rotate: mood === 'OVERLOADED' ? [-2, 2, -2, 2, 0] : [0, 1, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: mood === 'OVERLOADED' ? 0.2 : 2.5,
                  type: 'tween'
                }}
                className={`w-48 h-48 border-4 border-black ${face.color} p-4 shadow-[8px_8px_0px_0px_#000] flex flex-col justify-between items-center relative z-10`}
              >
                {/* Server rack handles on top */}
                <div className="absolute -top-3 left-6 right-6 h-2 bg-black flex justify-between">
                  <div className="w-4 h-2 bg-black" />
                  <div className="w-4 h-2 bg-black" />
                </div>

                {/* Status LED Lights */}
                <div className="w-full flex justify-between items-center px-1">
                  <div className="flex gap-1.5">
                    <div className={`w-3 h-3 rounded-full border border-black ${mood === 'OVERLOADED' ? 'bg-red-500 animate-ping' : 'bg-[#FF3333]'}`} />
                    <div className="w-3 h-3 rounded-full border border-black bg-[#FFD600]" />
                    <div className="w-3 h-3 rounded-full border border-black bg-[#33CC66] animate-pulse" />
                  </div>
                  <span className="font-mono text-[10px] font-black text-black bg-white px-1.5 border border-black">
                    SRV-200
                  </span>
                </div>

                {/* Cute Face Screen */}
                <div className="bg-black text-green-400 p-3 font-mono text-xl border-2 border-black w-full flex flex-col items-center justify-center rounded-none shadow-inner">
                  <div className="text-xl font-black tracking-widest">{face.eyes}</div>
                  <div className="text-xs font-bold text-neutral-400 mt-1">{face.mouth}</div>
                </div>

                {/* Micro-Controller Board details inside server pet */}
                <div className="w-full grid grid-cols-4 gap-1.5 mt-2">
                  <div className="h-2 bg-black opacity-30" />
                  <div className="h-2 bg-black opacity-30" />
                  <div className="h-2 bg-black opacity-30" />
                  <div className="h-2 bg-black opacity-30" />
                </div>
              </motion.div>

              {/* Backside Server shadow offset */}
              <div className="absolute inset-0 bg-neutral-900 border-4 border-black -z-10 translate-x-3 translate-y-3" />
            </div>

            {/* Load Capacity Bar */}
            <div className="w-64 space-y-1">
              <div className="flex justify-between items-center text-xs font-mono font-black text-black">
                <span>CPU LOADING STATUS</span>
                <span className={serverLoad > 80 ? 'text-red-500 animate-pulse' : 'text-zinc-600'}>
                  {serverLoad}%
                </span>
              </div>
              <div className="w-full h-6 border-4 border-black bg-white p-0.5 relative overflow-hidden">
                <div 
                  className={`h-full transition-all duration-300 ${serverLoad > 80 ? 'bg-[#FF3333]' : serverLoad > 50 ? 'bg-[#FFD600]' : 'bg-[#33CC66]'}`}
                  style={{ width: `${serverLoad}%` }}
                />
              </div>
            </div>

          </div>

          {/* Right Side: Interactive Controls & Real-time logs panel */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Quick Actions Panel */}
            <div className="bg-white p-5 border-4 border-black shadow-[4px_4px_0px_0px_#000] space-y-3">
              <h3 className="font-black text-lg text-black font-mono flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#3366FF]" />
                Pet System Controller / HARDWARE TRIGGERS
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleFeedCode}
                  className="px-3 py-2.5 bg-[#FF3333] hover:bg-red-600 text-white font-black text-xs border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer text-center"
                >
                  Feed with CODE (+LOAD)
                </button>
                <button
                  onClick={handleCacheDb}
                  className="px-3 py-2.5 bg-[#3366FF] hover:bg-blue-600 text-white font-black text-xs border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer text-center"
                >
                  Cache REDIS (-LOAD)
                </button>
                <button
                  onClick={handleFixBugs}
                  className="px-3 py-2.5 bg-[#33CC66] hover:bg-green-600 text-black font-black text-xs border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer text-center"
                >
                  Fix backend BUGS
                </button>
                <button
                  onClick={handleDeploy}
                  className="px-3 py-2.5 bg-[#FFD600] hover:bg-yellow-400 text-black font-black text-xs border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer text-center"
                >
                  Deploy to production
                </button>
              </div>

              {serverLoad > 50 && (
                <div className="pt-2 text-center">
                  <button
                    onClick={handleReset}
                    className="text-xs font-bold text-[#FF3333] underline hover:text-red-700 font-mono transition-colors cursor-pointer"
                  >
                    // FORCE SYSTEMS REBOOT (RESET)
                  </button>
                </div>
              )}
            </div>

            {/* Micro logs print screen */}
            <div className="bg-neutral-900 border-4 border-black p-4 text-white font-mono text-[10px] space-y-2">
              <span className="text-zinc-500 block border-b border-neutral-800 pb-1.5 uppercase">// REAL-TIME SYSTEM ACTIVITY MONITOR</span>
              <div className="space-y-1.5 min-h-[90px]">
                {logs.map((log, index) => (
                  <p key={index} className="truncate">
                    <span className="text-[#33CC66]">{`>`}</span> {log}
                  </p>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
