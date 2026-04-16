import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ChevronDown,
  CheckCircle2,
  Lock,
  Apple,
} from "lucide-react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../../constants/animations";

function CheckoutComponent({
  isProcessing,
  isComplete,
  handlePayment,
  setIsComplete,
}: {
  isProcessing: boolean;
  isComplete: boolean;
  handlePayment: () => void;
  setIsComplete: (val: boolean) => void;
}) {
  return (
    <AnimatePresence mode="wait">
      {!isComplete ? (
        <motion.div
          key="checkout-form"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/6 rounded-[28px] overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_32px_64px_-16px_rgba(0,0,0,0.8)]"
        >
          {/* Left: Order Summary */}
          <div className="bg-[#0C0C0E] p-8 flex flex-col gap-8">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-black text-sm tracking-tighter">
                    P
                  </span>
                </div>
                <div>
                  <p className="text-white/90 text-sm font-semibold tracking-tight">
                    Pay Powdur
                  </p>
                  <p className="text-white/30 text-[11px] mt-0.5">
                    Secure checkout
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-bold tracking-[0.15em] text-amber-400/80 bg-amber-400/8 border border-amber-400/15 px-2.5 py-1 rounded-md uppercase">
                Test
              </span>
            </div>

            {/* Amount */}
            <div>
              <p className="text-white/30 text-xs tracking-[0.15em] uppercase font-semibold mb-2">
                Total due
              </p>
              <p className="text-white text-[42px] font-black tracking-[-0.03em] leading-none">
                $134
              </p>
              <p className="text-white/20 text-sm mt-1.5">.00 USD</p>
            </div>

            {/* Line Items */}
            <div className="flex flex-col gap-4">
              {[
                {
                  name: "Pure set",
                  qty: "Qty 1",
                  price: "$65.00",
                  from: "from-[#6366f1]/30",
                  to: "to-[#8b5cf6]/20",
                },
                {
                  name: "Pure glow cream",
                  qty: "Qty 2 · $32.00 each",
                  price: "$64.00",
                  from: "from-[#06b6d4]/30",
                  to: "to-[#0ea5e9]/20",
                },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${item.from} ${item.to} border border-white/8 shrink-0`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-white/80 text-sm font-medium truncate">
                      {item.name}
                    </p>
                    <p className="text-white/30 text-xs mt-0.5">{item.qty}</p>
                  </div>
                  <p className="text-white/70 text-sm font-semibold tabular-nums">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="mt-auto border-t border-white/6 pt-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/30">Subtotal</span>
                <span className="text-white/50 tabular-nums">$129.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <div>
                  <span className="text-white/30">Shipping</span>
                  <span className="text-white/15 text-[11px] ml-2">
                    Ground · 3–5 days
                  </span>
                </div>
                <span className="text-white/50 tabular-nums">$5.00</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-white/6">
                <span className="text-white font-bold text-sm">Total</span>
                <span className="text-white font-black text-sm tabular-nums">
                  $134.00
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center gap-3 text-white/20 text-[10px] font-medium">
              <span>
                Powered by <strong className="text-white/35">stripe</strong>
              </span>
              <span className="w-px h-3 bg-white/10" />
              <span className="hover:text-white/40 cursor-pointer transition-colors">
                Terms
              </span>
              <span className="hover:text-white/40 cursor-pointer transition-colors">
                Privacy
              </span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#0E0E11] p-8 flex flex-col gap-6">
            {/* Apple Pay */}
            <button className="w-full h-11 bg-white hover:bg-white/90 active:scale-[0.98] text-black rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all">
              <Apple className="w-4 h-4" />
              Pay
            </button>

            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-white/6" />
              <span className="text-white/20 text-[10px] font-bold tracking-[0.2em] uppercase">
                or pay with card
              </span>
              <div className="flex-1 h-px bg-white/6" />
            </div>

            {/* Shipping */}
            <div className="space-y-4">
              <p className="text-white/70 text-sm font-bold tracking-tight">
                Shipping
              </p>

              <FieldGroup>
                <Field placeholder="Email address" type="email" />
                <Field placeholder="Full name" />
                <SelectField />
                <Field placeholder="Street address" isLast />
              </FieldGroup>

              <button className="text-[11px] text-blue-400/70 hover:text-blue-400 transition-colors font-semibold">
                + Enter address manually
              </button>
            </div>

            {/* Payment */}
            <div className="space-y-4">
              <p className="text-white/70 text-sm font-bold tracking-tight">
                Payment
              </p>

              <FieldGroup>
                <div className="relative">
                  <Field placeholder="Card number" />
                  <div className="absolute right-3 top-3 flex items-center gap-1">
                    <div className="w-7 h-4.5 bg-white/8 border border-white/8 rounded-[3px]" />
                    <div className="w-7 h-4.5 bg-white/8 border border-white/8 rounded-[3px]" />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <input
                    type="text"
                    placeholder="MM / YY"
                    className="h-11 bg-white/3 border-r border-white/[0.07] px-4 text-white/80 text-sm outline-none placeholder:text-white/20 focus:bg-white/5 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="h-11 bg-white/3 rounded-b-xl px-4 text-white/80 text-sm outline-none placeholder:text-white/20 focus:bg-white/5 transition-colors"
                  />
                </div>
              </FieldGroup>

              <label className="flex items-center gap-2.5 cursor-pointer group">
                <div className="relative w-4 h-4 shrink-0">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    defaultChecked
                  />
                  <div className="w-4 h-4 rounded bg-white/5 border border-white/15 peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-all" />
                  <svg
                    className="absolute inset-0 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3.5 8L6.5 11L12.5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[12px] text-white/35 group-hover:text-white/50 transition-colors">
                  Billing address same as shipping
                </span>
              </label>
            </div>

            {/* Pay Button */}
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="mt-auto w-full h-12 relative overflow-hidden rounded-xl font-bold text-sm tracking-wide transition-all disabled:cursor-not-allowed group"
              style={{
                background: isProcessing
                  ? "rgba(255,255,255,0.05)"
                  : "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.07) 100%)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <AnimatePresence mode="wait">
                {isProcessing ? (
                  <motion.div
                    key="processing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-2.5 text-white/50"
                  >
                    <div className="w-4 h-4 border-2 border-white/15 border-t-white/60 rounded-full animate-spin" />
                    Processing…
                  </motion.div>
                ) : (
                  <motion.div
                    key="pay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-2 text-white/80 group-hover:text-white transition-colors"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    Pay $134.00
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center gap-5 py-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.15,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center"
          >
            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
          </motion.div>
          <div>
            <h2 className="text-white text-xl font-bold tracking-tight">
              Payment successful
            </h2>
            <p className="text-white/35 text-sm mt-2 max-w-xs leading-relaxed">
              Receipt sent to alex@example.com. Your order is confirmed.
            </p>
          </div>
          <button
            onClick={() => setIsComplete(false)}
            className="mt-2 h-10 px-6 bg-white/5 border border-white/8 rounded-xl text-white/60 hover:text-white hover:bg-white/8 transition-all text-sm font-medium"
          >
            Back to dashboard
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Helper components
function FieldGroup({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.07] divide-y divide-white/[0.07]">
      {children}
    </div>
  );
}

function Field({
  placeholder,
  type = "text",
  isLast,
}: {
  placeholder: string;
  type?: string;
  isLast?: boolean;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full h-11 bg-white/3 px-4 text-white/80 text-sm outline-none placeholder:text-white/20 focus:bg-white/5 transition-colors ${isLast ? "rounded-b-xl" : ""}`}
    />
  );
}

function SelectField() {
  return (
    <div className="relative">
      <select className="w-full h-11 bg-white/3 px-4 text-white/50 text-sm outline-none appearance-none cursor-pointer focus:bg-white/5 transition-colors">
        <option>Afghanistan</option>
        <option>Albania</option>
        <option>Algeria</option>
        <option>Andorra</option>
        <option>Angola</option>
        <option>Argentina</option>
        <option>Armenia</option>
        <option>Australia</option>
        <option>Austria</option>
        <option>Azerbaijan</option>
        <option>Bahamas</option>
        <option>Bahrain</option>
        <option>Bangladesh</option>
        <option>Barbados</option>
        <option>Belgium</option>
        <option>Belize</option>
        <option>Benin</option>
        <option>Bhutan</option>
        <option>Bolivia</option>
        <option>Bosnia and Herzegovina</option>
        <option>Botswana</option>
        <option>Brazil</option>
        <option>Bulgaria</option>
        <option>Cambodia</option>
        <option>Cameroon</option>
        <option>Canada</option>
        <option>Chile</option>
        <option>China</option>
        <option>Colombia</option>
        <option>Costa Rica</option>
        <option>Croatia</option>
        <option>Cuba</option>
        <option>Cyprus</option>
        <option>Czech Republic</option>
        <option>Denmark</option>
        <option>Dominican Republic</option>
        <option>Ecuador</option>
        <option>Egypt</option>
        <option>Estonia</option>
        <option>Ethiopia</option>
        <option>Fiji</option>
        <option>Finland</option>
        <option>France</option>
        <option>Georgia</option>
        <option>Germany</option>
        <option>Ghana</option>
        <option>Greece</option>
        <option>Hungary</option>
        <option>Iceland</option>
        <option>India</option>
        <option>Indonesia</option>
        <option>Ireland</option>
        <option>Israel</option>
        <option>Italy</option>
        <option>Jamaica</option>
        <option>Japan</option>
        <option>Jordan</option>
        <option>Kazakhstan</option>
        <option>Kenya</option>
        <option>Malaysia</option>
        <option>Mexico</option>
        <option>Netherlands</option>
        <option>New Zealand</option>
        <option>Norway</option>
        <option>Philippines</option>
        <option>Portugal</option>
        <option>Singapore</option>
        <option>South Africa</option>
        <option>South Korea</option>
        <option>Spain</option>
        <option>Sweden</option>
        <option>Switzerland</option>
        <option>Thailand</option>
        <option>Turkey</option>
        <option>United Arab Emirates</option>
        <option>United Kingdom</option>
        <option>United States</option>
        <option>Vietnam</option>
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20 pointer-events-none" />
    </div>
  );
}

export function Checkout() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 2500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-2 py-24 md:py-32">
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl space-y-16"
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
              <h1 className="text-white font-medium text-3xl tracking-tight">
                Checkout Flow
              </h1>
              <p className="text-white/40 text-lg">April 2026</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                A <span className="text-white">Stripe-inspired</span> checkout
                experience. Minimalist inputs, clear hierarchy, and smooth state
                transitions that build trust through clarity and speed.
              </p>
            </motion.div>

            {/* Preview Area */}
            <motion.div
              variants={itemVariants}
              className="relative w-full min-h-150 md:min-h-125 bg-[#0A0A0A] border border-white/5 rounded-3xl flex items-center justify-center p-4 md:p-8 overflow-hidden"
            >
              <div className="w-full max-w-4xl origin-center scale-[0.85] md:scale-[0.8]">
                <CheckoutComponent
                  isProcessing={isProcessing}
                  isComplete={isComplete}
                  handlePayment={handlePayment}
                  setIsComplete={setIsComplete}
                />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-white/60 leading-relaxed max-w-2xl"
            >
              <p>
                The interface uses a{" "}
                <span className="text-white">split-pane layout</span> inspired
                by Stripe's checkout. The left side establishes context with a
                clear order summary and branding, while the right side provides
                a focused, low-friction path to completion with integrated
                shipping and payment details.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
