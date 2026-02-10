import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const bgImage = "https://static.tildacdn.com/tild6464-3036-4937-a633-616430363436/1769938319715-019c18.png";

  return (
    <section
      id="prices"
      className="relative overflow-hidden min-h-[480px] sm:min-h-[560px] lg:min-h-[700px] flex items-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60 sm:from-slate-900/90 sm:via-slate-900/75 sm:to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-medium text-white leading-[1.15] mb-4 sm:mb-7">
            Оптовые цены на офсетную и мелованную бумагу и картон
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-blue-100 leading-relaxed mb-6 sm:mb-10 max-w-2xl">
            Понимаем, как важна для вас надежность, стабильность и
            универсальность материалов, чтобы успешно выполнять разнообразные
            заказы ваших клиентов, вне зависимости от используемого
            оборудования.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#price-table"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-blue-700 font-medium px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-sm sm:text-base"
            >
              Смотреть цены
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 bg-white/15 backdrop-blur-sm text-white font-medium px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl hover:bg-white/25 transition-colors border border-white/20 text-sm sm:text-base"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
