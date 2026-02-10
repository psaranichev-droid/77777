import { ExternalLink } from "lucide-react";

export function MarketplaceSection() {
  return (
    <section id="samples" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 sm:p-10 md:p-14 lg:p-20">
          {/* Decorative */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 h-40 sm:h-64 w-40 sm:w-64 rounded-full bg-white/10" />
            <div className="absolute -bottom-16 -left-16 h-32 sm:h-48 w-32 sm:w-48 rounded-full bg-white/10" />
          </div>

          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-3 sm:mb-5 leading-tight">
              Покупайте прямо сейчас на маркетплейсах
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-6 sm:mb-10 leading-relaxed">
              Понимаем, как важна для вас надежность, стабильность и
              универсальность материалов, чтобы успешно выполнять разнообразные
              заказы ваших клиентов.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-gray-900 font-medium px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-[14px] sm:text-[15px]"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="4" fill="#4B0082" />
                  <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">WB</text>
                </svg>
                Wildberries
                <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400" />
              </a>

              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-gray-900 font-medium px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-[14px] sm:text-[15px]"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="4" fill="#005BFF" />
                  <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">OZ</text>
                </svg>
                Ozon
                <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
