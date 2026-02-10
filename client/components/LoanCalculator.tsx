import { useState } from "react";
import { Calculator } from "lucide-react";

export default function LoanCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [annualRate, setAnnualRate] = useState(12);
  const [months, setMonths] = useState(12);

  const monthlyRate = annualRate / 100 / 12;
  const monthlyPayment =
    monthlyRate === 0
      ? principal / months
      : (principal * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
        (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = monthlyPayment * months;
  const totalInterest = totalPayment - principal;

  const formatPHP = (value: number) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-slide-up">
            <div className="flex items-center justify-center gap-3">
              <Calculator className="h-8 w-8 text-primary" />
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                Loan Calculator
              </h2>
            </div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Calculate your loan payments in Philippine Peso
            </p>
          </div>

          {/* Calculator Card */}
          <div className="max-w-2xl mx-auto animate-fade-in">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl border border-slate-200 shadow-lg">
              {/* Input Fields */}
              <div className="space-y-8">
                {/* Principal Loan Amount */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-slate-900">
                    Principal Loan Amount (PHP)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="10000"
                      max="5000000"
                      step="10000"
                      value={principal}
                      onChange={(e) => setPrincipal(Number(e.target.value))}
                      className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <input
                      type="number"
                      value={principal}
                      onChange={(e) => setPrincipal(Number(e.target.value))}
                      className="w-32 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <p className="text-right text-lg font-semibold text-primary">
                    {formatPHP(principal)}
                  </p>
                </div>

                {/* Annual Interest Rate */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-slate-900">
                    Annual Interest Rate (%)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="30"
                      step="0.1"
                      value={annualRate}
                      onChange={(e) => setAnnualRate(Number(e.target.value))}
                      className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <input
                      type="number"
                      value={annualRate}
                      onChange={(e) => setAnnualRate(Number(e.target.value))}
                      step="0.1"
                      className="w-20 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <p className="text-right text-lg font-semibold text-primary">
                    {annualRate.toFixed(1)}%
                  </p>
                </div>

                {/* Loan Term */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-slate-900">
                    Loan Term (Months)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1"
                      max="360"
                      step="1"
                      value={months}
                      onChange={(e) => setMonths(Number(e.target.value))}
                      className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <input
                      type="number"
                      value={months}
                      onChange={(e) => setMonths(Number(e.target.value))}
                      className="w-20 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <p className="text-right text-lg font-semibold text-primary">
                    {months} months ({(months / 12).toFixed(1)} years)
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="mt-12 pt-8 border-t-2 border-slate-300 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* Monthly Payment */}
                  <div className="p-6 bg-white rounded-lg border border-slate-200">
                    <p className="text-sm text-slate-600 font-medium mb-2">
                      Monthly Payment
                    </p>
                    <p className="text-3xl font-bold text-primary">
                      {formatPHP(monthlyPayment)}
                    </p>
                  </div>

                  {/* Total Interest */}
                  <div className="p-6 bg-white rounded-lg border border-slate-200">
                    <p className="text-sm text-slate-600 font-medium mb-2">
                      Total Interest
                    </p>
                    <p className="text-3xl font-bold text-red-600">
                      {formatPHP(totalInterest)}
                    </p>
                  </div>
                </div>

                {/* Total Payment */}
                <div className="p-6 bg-primary/10 border border-primary rounded-lg">
                  <p className="text-sm text-slate-600 font-medium mb-2">
                    Total Amount to Pay
                  </p>
                  <p className="text-4xl font-bold text-primary">
                    {formatPHP(totalPayment)}
                  </p>
                </div>
              </div>

              {/* Summary Table */}
              <div className="mt-8 pt-8 border-t-2 border-slate-300">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Loan Summary
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600">Principal Amount:</span>
                    <span className="font-semibold text-slate-900">
                      {formatPHP(principal)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600">Interest Rate (p.a.):</span>
                    <span className="font-semibold text-slate-900">
                      {annualRate.toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600">Loan Term:</span>
                    <span className="font-semibold text-slate-900">
                      {months} months
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600">Monthly Payment:</span>
                    <span className="font-semibold text-primary">
                      {formatPHP(monthlyPayment)}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 bg-slate-100 px-3 rounded-lg font-semibold">
                    <span className="text-slate-900">Total Payment:</span>
                    <span className="text-primary">
                      {formatPHP(totalPayment)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
