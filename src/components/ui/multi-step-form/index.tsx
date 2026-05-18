import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  User,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../../../constants/animations";

type FormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
  pin: string;
  mobile: string;
  agreedToTerms: boolean;
};

const INITIAL_DATA: FormData = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  address: "",
  pin: "",
  mobile: "",
  agreedToTerms: false,
};

export function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const updateFields = (fields: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) return next();

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
    }, 2000);
  };

  const stepVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -20 : 20,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    next();
  };

  const handleBack = () => {
    setDirection(-1);
    back();
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-2 py-24 md:py-32">
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl space-y-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
          {/* Sidebar */}
          <motion.div variants={itemVariants}>
            <Link
              to="/ui"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group italic font-serif text-lg"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              UI
            </Link>
          </motion.div>

          {/* Content */}
          <div className="space-y-12">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-white font-medium text-2xl tracking-tight">
                Progressive Onboarding
              </h1>
              <p className="text-white/40 text-base">April 2026</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl text-[15px]"
            >
              <p>
                A <span className="text-white">multi-step authentication</span>{" "}
                flow designed to reduce cognitive load. By breaking complex data
                entry into logical chunks, we maintain high completion rates and
                a premium user experience.
              </p>
            </motion.div>

            {/* Preview Area */}
            <motion.div
              variants={itemVariants}
              className="relative w-full min-h-110 bg-[#0A0A0A] border border-white/5 rounded-4xl flex items-center justify-center p-4 md:p-8 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isComplete ? (
                  <motion.div
                    key="form-container"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    className="w-full max-w-sm bg-[#111] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6"
                  >
                    {/* Progress Header */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <div className="space-y-1">
                          <p className="text-white/20 text-[9px] font-bold uppercase tracking-[0.2em]">
                            Step {step} of 3
                          </p>
                          <h2 className="text-white font-medium text-lg">
                            {step === 1 && "Create Account"}
                            {step === 2 && "Personal Details"}
                            {step === 3 && "Final Review"}
                          </h2>
                        </div>
                        <div className="flex gap-1 mb-1">
                          {[1, 2, 3].map((s) => (
                            <div
                              key={s}
                              className={`h-1 rounded-full transition-all duration-500 ${
                                s <= step
                                  ? "w-4 bg-blue-500"
                                  : "w-1 bg-white/10"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="relative min-h-56">
                        <AnimatePresence mode="wait" custom={direction}>
                          <motion.div
                            key={step}
                            custom={direction}
                            variants={stepVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{
                              type: "spring",
                              damping: 20,
                              stiffness: 100,
                            }}
                            className="space-y-3.5"
                          >
                            {step === 1 && (
                              <>
                                <div className="space-y-1.5">
                                  <label className="text-white/40 text-[10px] uppercase tracking-wider font-semibold ml-1">
                                    Full Name
                                  </label>
                                  <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
                                    <input
                                      required
                                      type="text"
                                      placeholder="Alex Rivera"
                                      value={formData.fullName}
                                      onChange={(e) =>
                                        updateFields({
                                          fullName: e.target.value,
                                        })
                                      }
                                      className="w-full h-10.5 bg-white/3 border border-white/10 rounded-xl pl-10.5 pr-4 text-white text-[13px] outline-none focus:border-blue-500/50 transition-all placeholder:text-white/10"
                                    />
                                  </div>
                                </div>
                                <div className="space-y-1.5">
                                  <label className="text-white/40 text-[10px] uppercase tracking-wider font-semibold ml-1">
                                    Email Address
                                  </label>
                                  <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
                                    <input
                                      required
                                      type="email"
                                      placeholder="alex@example.com"
                                      value={formData.email}
                                      onChange={(e) =>
                                        updateFields({ email: e.target.value })
                                      }
                                      className="w-full h-10.5 bg-white/3 border border-white/10 rounded-xl pl-10.5 pr-4 text-white text-[13px] outline-none focus:border-blue-500/50 transition-all placeholder:text-white/10"
                                    />
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="space-y-1.5">
                                    <label className="text-white/40 text-[10px] uppercase tracking-wider font-semibold ml-1">
                                      Password
                                    </label>
                                    <input
                                      required
                                      type="password"
                                      placeholder="••••••••"
                                      value={formData.password}
                                      onChange={(e) =>
                                        updateFields({
                                          password: e.target.value,
                                        })
                                      }
                                      className="w-full h-10.5 bg-white/3 border border-white/10 rounded-xl px-4 text-white text-[13px] outline-none focus:border-blue-500/50 transition-all placeholder:text-white/10"
                                    />
                                  </div>
                                  <div className="space-y-1.5">
                                    <label className="text-white/40 text-[10px] uppercase tracking-wider font-semibold ml-1">
                                      Confirm
                                    </label>
                                    <input
                                      required
                                      type="password"
                                      placeholder="••••••••"
                                      value={formData.confirmPassword}
                                      onChange={(e) =>
                                        updateFields({
                                          confirmPassword: e.target.value,
                                        })
                                      }
                                      className="w-full h-10.5 bg-white/3 border border-white/10 rounded-xl px-4 text-white text-[13px] outline-none focus:border-blue-500/50 transition-all placeholder:text-white/10"
                                    />
                                  </div>
                                </div>
                              </>
                            )}

                            {step === 2 && (
                              <>
                                <div className="space-y-1.5">
                                  <label className="text-white/40 text-[10px] uppercase tracking-wider font-semibold ml-1">
                                    Residential Address
                                  </label>
                                  <div className="relative">
                                    <MapPin className="absolute left-4 top-3.5 w-3.5 h-3.5 text-white/20" />
                                    <textarea
                                      required
                                      placeholder="Street address, City, State"
                                      value={formData.address}
                                      onChange={(e) =>
                                        updateFields({
                                          address: e.target.value,
                                        })
                                      }
                                      className="w-full min-h-20 bg-white/3 border border-white/10 rounded-xl pl-10.5 pr-4 py-2.5 text-white text-[13px] outline-none focus:border-blue-500/50 transition-all placeholder:text-white/10 resize-none"
                                    />
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="space-y-1.5">
                                    <label className="text-white/40 text-[10px] uppercase tracking-wider font-semibold ml-1">
                                      Pin Code
                                    </label>
                                    <input
                                      required
                                      type="text"
                                      placeholder="123456"
                                      value={formData.pin}
                                      onChange={(e) =>
                                        updateFields({ pin: e.target.value })
                                      }
                                      className="w-full h-10.5 bg-white/3 border border-white/10 rounded-xl px-4 text-white text-[13px] outline-none focus:border-blue-500/50 transition-all placeholder:text-white/10"
                                    />
                                  </div>
                                  <div className="space-y-1.5">
                                    <label className="text-white/40 text-[10px] uppercase tracking-wider font-semibold ml-1">
                                      Mobile Number
                                    </label>
                                    <div className="relative">
                                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
                                      <input
                                        required
                                        type="tel"
                                        placeholder="+1 234..."
                                        value={formData.mobile}
                                        onChange={(e) =>
                                          updateFields({
                                            mobile: e.target.value,
                                          })
                                        }
                                        className="w-full h-10.5 bg-white/3 border border-white/10 rounded-xl pl-10.5 pr-4 text-white text-[13px] outline-none focus:border-blue-500/50 transition-all placeholder:text-white/10"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}

                            {step === 3 && (
                              <div className="space-y-5 py-2">
                                <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl space-y-2.5">
                                  <div className="flex items-center gap-2.5">
                                    <ShieldCheck className="w-4.5 h-4.5 text-blue-500" />
                                    <span className="text-white font-medium text-[13px]">
                                      Terms of Service
                                    </span>
                                  </div>
                                  <p className="text-white/40 text-[11px] leading-relaxed">
                                    By completing this registration, you agree
                                    to our Terms of Service and Privacy Policy.
                                    We'll use your data to provide a
                                    personalized experience.
                                  </p>
                                </div>
                                <label className="flex items-start gap-3 cursor-pointer group">
                                  <div className="relative flex items-center justify-center mt-0.5">
                                    <input
                                      type="checkbox"
                                      required
                                      className="peer sr-only"
                                      checked={formData.agreedToTerms}
                                      onChange={(e) =>
                                        updateFields({
                                          agreedToTerms: e.target.checked,
                                        })
                                      }
                                    />
                                    <div className="w-4.5 h-4.5 border border-white/10 rounded bg-white/5 peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-all" />
                                    <CheckCircle2 className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                                  </div>
                                  <span className="text-[12px] text-white/40 group-hover:text-white/60 transition-colors leading-snug">
                                    I have read and agree to the terms and
                                    conditions of the service.
                                  </span>
                                </label>
                              </div>
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      <div className="flex gap-3 pt-2">
                        {step > 1 && (
                          <button
                            type="button"
                            onClick={handleBack}
                            className="flex-1 h-10.5 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-2 text-white/60 hover:text-white hover:bg-white/10 transition-all text-[13px] font-medium"
                          >
                            <ChevronLeft className="w-3.5 h-3.5" />
                            Back
                          </button>
                        )}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-2 h-10.5 bg-white text-black rounded-xl font-semibold text-[13px] overflow-hidden group disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <div className="w-3.5 h-3.5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                          ) : (
                            <>
                              {step === 3
                                ? "Complete Registration"
                                : "Continue"}
                              {step < 3 && (
                                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                              )}
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-blue-500" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-white text-2xl font-medium">
                        Account created
                      </h2>
                      <p className="text-white/40 max-w-xs">
                        Welcome aboard, {formData.fullName.split(" ")[0]}! Your
                        account is now active and ready to use.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setIsComplete(false);
                        setStep(1);
                        setFormData(INITIAL_DATA);
                      }}
                      className="h-12 px-8 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-colors"
                    >
                      Go to dashboard
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                The form utilizes{" "}
                <span className="text-white">directional animations</span> to
                provide spatial context during navigation. Each step is
                validated before progression, and the final state provides
                immediate positive reinforcement through a success animation.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
