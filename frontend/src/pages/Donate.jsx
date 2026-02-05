import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Donate = () => {
  const [amount, setAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@oceanrepair.io");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [step, setStep] = useState("donation"); // 'donation', 'payment', 'processing', 'success'

  const predefinedAmounts = [25, 50, 100, 500];

  const calculateValues = (amt) => {
    const co2Tons = (amt / 100) * 4.2;
    const coralArea = (amt / 100) * 12.5;
    return {
      co2Tons: co2Tons.toFixed(1),
      coralArea: coralArea.toFixed(1),
      coralUnits: Math.round((amt / 100) * 125),
      habitatRecovery: ((amt / 100) * 18.5).toFixed(1),
      treesEquivalent: Math.round((co2Tons / 4.2) * 180),
      biodiversity: ((amt / 100) * 0.8).toFixed(1)
    };
  };

  const values = calculateValues(amount);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setStep("processing");
    // Simulate network delay for the interactive payment animation
    setTimeout(() => {
      setStep("success");
    }, 3000);
  };

  const inputClass = "w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-200 transition-all";
  const labelClass = "block text-xs font-medium text-slate-500 mb-1 tracking-wider uppercase";

  return (
    <div className="pt-16 min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-blue-500/30">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: DONATION SELECTION */}
          {step === "donation" && (
            <motion.div
              key="donation"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid lg:grid-cols-5 gap-12"
            >
              <div className="lg:col-span-3">
                <h1 className="text-2xl text-white mb-2">Restoration Project</h1>
                <p className="text-slate-400 mb-8 leading-relaxed">Select your contribution level to begin the verification process.</p>
                
                <div className="space-y-8">
                  <div>
                    <label className={labelClass}>Select Amount</label>
                    <div className="grid grid-cols-4 gap-3">
                      {predefinedAmounts.map((val) => (
                        <button
                          key={val}
                          onClick={() => { setAmount(val); setCustomAmount(""); }}
                          className={`py-3 rounded-md text-sm transition-all border ${
                            amount === val && !customAmount 
                            ? "bg-blue-600 border-blue-500 text-white" 
                            : "bg-slate-800 border-slate-700 hover:border-slate-500"
                          }`}
                        >
                          ${val}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Custom Amount</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                      <input
                        type="number"
                        placeholder="0.00"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setAmount(Number(e.target.value));
                        }}
                        className={`${inputClass} pl-8`}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Full Name</label>
                      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
                    </div>
                  </div>

                  <button
                    onClick={() => setStep("payment")}
                    className="w-full bg-white text-slate-900 hover:bg-slate-200 py-4 rounded-md font-medium transition-colors"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>

              <div className="lg:col-span-2 bg-slate-800/50 border border-slate-800 rounded-lg p-8 h-fit">
                <h2 className={labelClass}>Environmental Impact</h2>
                <div className="mt-6 space-y-6">
                  <div>
                    <span className="text-3xl text-white block">${amount}</span>
                    <span className="text-xs text-slate-500 uppercase">Total Contribution</span>
                  </div>
                  <div className="h-px bg-slate-700" />
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-xl text-blue-400 block">{values.co2Tons} Tons</span>
                      <span className="text-xs text-slate-500 uppercase">CO2 Captured</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xl text-cyan-400 block">{values.coralArea}m²</span>
                      <span className="text-xs text-slate-500 uppercase">Coral Restored</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 2: PAYMENT FORM */}
          {step === "payment" && (
            <motion.div
              key="payment"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 shadow-xl">
                <h2 className="text-xl text-white mb-6">Secure Checkout</h2>
                <form onSubmit={handlePaymentSubmit} className="space-y-5">
                  <div>
                    <label className={labelClass}>Card Number</label>
                    <input 
                      type="text" 
                      placeholder="4242 4242 4242 4242" 
                      className={inputClass} 
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Expiry</label>
                      <input type="text" placeholder="MM/YY" className={inputClass} value={expiry} onChange={(e) => setExpiry(e.target.value)}/>
                    </div>
                    <div>
                      <label className={labelClass}>CVC</label>
                      <input type="text" placeholder="123" className={inputClass} value={cvc} onChange={(e) => setCvc(e.target.value)}/>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-md transition-all">
                      Pay ${amount}.00
                    </button>
                    <button type="button" onClick={() => setStep("donation")} className="w-full mt-3 text-slate-500 text-sm hover:text-slate-300">
                      Back to details
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}

          {/* STEP 3: PROCESSING ANIMATION */}
          {step === "processing" && (
            <motion.div
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <div className="relative w-16 h-16 mb-6">
                <motion.div
                  className="absolute inset-0 border-2 border-blue-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
                <motion.div
                  className="absolute inset-0 border-2 border-slate-700 rounded-full"
                />
              </div>
              <p className="text-slate-400 animate-pulse">Verifying transaction on ledger...</p>
            </motion.div>
          )}

          {/* STEP 4: SUCCESS */}
          {step === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl text-white mb-4">Transaction Confirmed</h1>
              <p className="text-slate-400 mb-12">Your contribution has been recorded. Impact certificate generated for {name}.</p>
              
              <div className="grid grid-cols-3 gap-1 border-y border-slate-800 py-8 mb-12">
                <div>
                  <div className="text-2xl text-white">{values.coralUnits}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-tighter">Units</div>
                </div>
                <div>
                  <div className="text-2xl text-white">{values.co2Tons}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-tighter">CO2 Tons</div>
                </div>
                <div>
                  <div className="text-2xl text-white">{values.habitatRecovery}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-tighter">Recovered m²</div>
                </div>
              </div>

              <button 
                onClick={() => setStep("donation")}
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-md transition-colors"
              >
                Return to Dashboard
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Donate;