import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Palette, Sparkles, ChevronRight, MapPin, Search,
  ClipboardCheck, Calculator, CreditCard, Truck,
  Scissors, Package, FileCheck, Clock, Eye
} from 'lucide-react';
import { MarketplaceSection } from '../components/MarketplaceSection';

const collections = [
  { name: 'Knight Color', slug: 'knight-color', desc: 'Целлюлозные тонированные в массе художественные бумаги, глубоких, ярких тонов', gradient: 'from-violet-500 to-purple-600', initials: 'KC' },
  { name: 'Rubber Like', slug: 'rubber-like', desc: 'Коллекция бумаги с матовым покрытием, напоминающим резину', gradient: 'from-rose-500 to-pink-600', initials: 'RL' },
  { name: 'Galaxy Metallic', slug: 'galaxy-metallic', desc: 'Окрашенная в массе дизайнерская бумага с металлизированным покрытием', gradient: 'from-amber-500 to-orange-600', initials: 'GM' },
  { name: 'Fiber Art', slug: 'fiber-art', desc: 'Коллекция немелованных дизайнерских бумаг в натуральных природных оттенках', gradient: 'from-emerald-500 to-green-600', initials: 'FA' },
  { name: 'Color Style Smooth', slug: 'color-style-smooth', desc: 'Тонированные в массе дизайнерские бумаги и картоны насыщенного чёрного цвета', gradient: 'from-slate-600 to-slate-800', initials: 'CS' },
  { name: 'Knight Black', slug: 'knight-black', desc: 'Коллекция чистоцеллюлозной тонированной в массе, гладкой дизайнерской бумаги пастельных оттенков', gradient: 'from-blue-500 to-indigo-600', initials: 'KB' },
];

const steps = [
  { icon: Search, title: 'Определитесь с видами дизайнерской бумаги', desc: 'Для начала нужно изучить образцы и каталоги дизайнерской бумаги в нашем шоуруме, находящемся по адресу: Нижний Новгород, ул. Баумана, д. 48к1.', color: 'blue' },
  { icon: Eye, title: 'Проверка наличия остатков', desc: 'Мы используем специальную программу, чтобы проверить наличие бумаги на нашем складе и складах поставщиков. В случае, если Вам понравился образец бумаги, но самой бумаги нет в наличии, мы закажём её у поставщика специально под Ваш заказ.', color: 'violet' },
  { icon: Calculator, title: 'Расчёт стоимости', desc: 'Уточняем все детали Вашего заказа: резка, упаковка, доставка, торговое предложение и в итоге озвучиваем Вам полную стоимость заказа.', color: 'emerald' },
  { icon: CreditCard, title: 'Оформление заказа', desc: 'Если все условия Вас устраивают, то тогда на этом этапе Вы осуществляете оплату заказа тем путем, который мы ранее с Вами обсудили.', color: 'amber' },
  { icon: Clock, title: 'Ждём доставку бумаги от поставщика', desc: 'Срок доставки составляет от 1 дня до 4 недель. В любом случае вы будете знать заранее, когда бумага поступит от поставщика к нам.', color: 'rose' },
  { icon: ClipboardCheck, title: 'Приёмка и осмотр бумаги', desc: 'Когда бумага пришла от поставщика, мы её тщательно осматриваем. Если есть повреждения, делаем фото/видео фиксацию и самостоятельно решаем проблему.', color: 'blue' },
  { icon: Scissors, title: 'Резка бумаги', desc: 'Осуществляем резку Вашей бумаги на нашем профессиональном оборудовании в нужные размеры.', color: 'violet' },
  { icon: Package, title: 'Упаковка', desc: 'Упакуем готовую нарезанную бумагу в ту упаковку, которую мы согласовали на этапе Расчёт стоимости.', color: 'emerald' },
  { icon: Truck, title: 'Доставка или Самовывоз', desc: 'Осуществляем доставку собственными силами или через транспортные/курьерские компании, также возможен самовывоз из шоурума.', color: 'amber' },
  { icon: FileCheck, title: 'Подписание документов', desc: 'Для юридических лиц выставляем УПД с НДС, для физических — высылаем электронный чек на почту или в мессенджер.', color: 'rose' },
];

const colorMap: Record<string, { bg: string; text: string; border: string; light: string }> = {
  blue: { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200', light: 'bg-blue-50' },
  violet: { bg: 'bg-violet-500', text: 'text-violet-600', border: 'border-violet-200', light: 'bg-violet-50' },
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', border: 'border-emerald-200', light: 'bg-emerald-50' },
  amber: { bg: 'bg-amber-500', text: 'text-amber-600', border: 'border-amber-200', light: 'bg-amber-50' },
  rose: { bg: 'bg-rose-500', text: 'text-rose-600', border: 'border-rose-200', light: 'bg-rose-50' },
};

export default function DesignPaperPage() {
  const [hoveredCollection, setHoveredCollection] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[480px] sm:min-h-[560px] lg:min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://static.tildacdn.com/tild3562-6136-4133-a532-336166626563/IMG_8469.jpg')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/50 sm:from-slate-900/90 sm:via-slate-900/80 sm:to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-slate-900/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-14 sm:py-20 lg:py-28">
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-medium text-white leading-[1.1] mb-4 sm:mb-6 tracking-tight">
              Ищете, где купить{' '}<span className="text-blue-300">дизайнерскую бумагу?</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-xl text-blue-100/85 mb-6 sm:mb-10 leading-relaxed max-w-xl">
              Мы создаём красивые и притягательные проекты. Разрабатываем сервис, который помогает людям развивать бизнес и совершенствовать рабочие процессы.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/showroom" className="inline-flex items-center justify-center gap-2.5 bg-white text-slate-900 font-medium text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg">
                <Palette className="h-4 w-4 sm:h-5 sm:w-5" /> Посетить шоурум
              </Link>
              <a href="tel:+79101234567" className="inline-flex items-center justify-center gap-2.5 bg-white/15 backdrop-blur-sm text-white font-medium text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 rounded-xl border border-white/25 hover:bg-white/25 transition-all duration-300">
                Связаться с нами <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-12 sm:py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 mb-4 sm:mb-6">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-500" />
              <span className="text-blue-700 text-xs sm:text-sm font-medium">Премиум качество</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-medium text-slate-900 mb-3 sm:mb-6 tracking-tight">Коллекции дизайнерской бумаги</h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Выбирать дизайнерскую бумагу по картинке в интернете рискованно, потому что цвета на экране искажаются, текстура не видна, а итоговая печать способна разочаровать
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {collections.map((col, i) => (
              <Link key={i} to={`/catalog?cat=design&sub=${col.slug}`} className="group relative bg-white rounded-xl sm:rounded-2xl border border-slate-200 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-slate-300 block" onMouseEnter={() => setHoveredCollection(i)} onMouseLeave={() => setHoveredCollection(null)}>
                <div className={`h-32 sm:h-44 lg:h-52 bg-gradient-to-br ${col.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[80px] sm:text-[120px] font-medium text-white/20 leading-none select-none">{col.initials}</div>
                  </div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.15),transparent_60%)]" />
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-5">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2.5 py-1 sm:px-3 sm:py-1.5">
                      <span className="text-white text-[10px] sm:text-xs font-medium tracking-wide uppercase">Коллекция</span>
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-black/10 transition-opacity duration-500 ${hoveredCollection === i ? 'opacity-0' : 'opacity-100'}`} />
                </div>
                <div className="p-4 sm:p-6 lg:p-7">
                  <h3 className="text-base sm:text-lg lg:text-xl font-medium text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">{col.name}</h3>
                  <p className="text-[13px] sm:text-[15px] text-slate-500 leading-relaxed mb-3 sm:mb-5">{col.desc}</p>
                  <div className="flex items-center text-blue-500 text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0">
                    Перейти в каталог <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 sm:py-16 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgb(100,116,139) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 mb-4 sm:mb-6">
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-500" />
              <span className="text-blue-700 text-xs sm:text-sm font-medium">Пошаговый процесс</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-medium text-slate-900 mb-3 sm:mb-6 tracking-tight">Этапы работ</h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">Расписали для Вас совершенно ясную и понятную структуру этапов работы</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {steps.map((step, i) => {
                const colors = colorMap[step.color];
                const Icon = step.icon;
                return (
                  <div key={i} className="group relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:border-slate-300 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${colors.light} border ${colors.border} flex items-center justify-center transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                        <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${colors.text}`} />
                      </div>
                      <span className="text-4xl sm:text-5xl font-medium text-slate-100 group-hover:text-slate-200 transition-colors duration-500 select-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
                    <p className="text-[14px] sm:text-[15px] text-slate-500 leading-relaxed mb-6 flex-1">{step.desc}</p>
                    <div className={`h-1.5 w-12 rounded-full ${colors.bg} opacity-20 group-hover:w-full group-hover:opacity-100 transition-all duration-500`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <MarketplaceSection />
    </div>
  );
}
