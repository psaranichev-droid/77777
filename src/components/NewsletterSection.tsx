import { useState } from "react";
import { Send, CheckCircle, Mail, Bell } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-xl">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="nl-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1.5" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#nl-grid)" />
            </svg>
          </div>

          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-bl from-blue-100/60 to-transparent rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-40 sm:w-60 h-40 sm:h-60 bg-gradient-to-tr from-indigo-100/60 to-transparent rounded-full translate-y-1/3 -translate-x-1/4" />

          <div className="relative px-5 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-20 lg:py-20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
              {/* Left content */}
              <div className="flex-1 mb-8 lg:mb-0">
                <div className="flex items-center gap-2.5 mb-4 sm:mb-6">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 text-blue-600">
                    <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-blue-600 uppercase tracking-wider">
                    Рассылка
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-medium text-slate-900 mb-3 sm:mb-4 leading-tight">
                  Подпишитесь на новостную рассылку
                </h2>

                <p className="text-sm sm:text-base lg:text-lg text-slate-500 leading-relaxed max-w-xl">
                  Будьте в курсе новых поступлений, специальных предложений и акций.
                  Получайте выгодные цены первыми — никакого спама.
                </p>

                <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 mt-4 sm:mt-6">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Новые поступления
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Скидки и акции
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Без спама
                  </div>
                </div>
              </div>

              {/* Right form */}
              <div className="w-full lg:w-[400px] flex-shrink-0">
                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-slate-100">
                  {!submitted ? (
                    <form onSubmit={handleSubmit}>
                      <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                        Ваш email
                      </label>
                      <div className="relative mb-3 sm:mb-4">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="example@mail.ru"
                          required
                          className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-[14px] sm:text-[15px] bg-white border border-slate-200 rounded-xl
                                     text-slate-900 placeholder:text-slate-400
                                     focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400
                                     transition-all duration-200"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800
                                   text-white font-medium text-[14px] sm:text-[15px] py-3 sm:py-4 rounded-xl
                                   transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow-md"
                      >
                        Подписаться
                        <Send className="w-4 h-4" />
                      </button>

                      <p className="text-[11px] sm:text-xs text-slate-400 mt-3 sm:mt-4 text-center leading-relaxed">
                        Нажимая «Подписаться», вы соглашаетесь с{" "}
                        <a href="#" className="text-slate-500 underline underline-offset-2 hover:text-slate-700">
                          политикой конфиденциальности
                        </a>
                      </p>
                    </form>
                  ) : (
                    <div className="text-center py-4 sm:py-6">
                      <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-50 text-green-500 mx-auto mb-3 sm:mb-4">
                        <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8" />
                      </div>
                      <h3 className="text-base sm:text-lg font-medium text-slate-900 mb-2">
                        Вы подписаны!
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500">
                        Мы отправим письмо на{" "}
                        <span className="font-medium text-slate-700">{email}</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
