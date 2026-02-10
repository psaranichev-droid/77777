import { useState } from 'react';
import { Scissors, FileText, Truck, Send, CheckCircle, ArrowRight, ClipboardCheck, Ruler, Layers, Package, BadgeCheck } from 'lucide-react';
import { MarketplaceSection } from '../components/MarketplaceSection';

export default function CustomCuttingPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setFormState('submitting'); setTimeout(() => setFormState('success'), 1500); };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[480px] sm:min-h-[560px] lg:min-h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://static.tildacdn.com/tild3562-6136-4133-a532-336166626563/IMG_8469.jpg')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-white leading-tight mb-6">
              Оказываем услугу по <span className="text-blue-400">резке бумаги</span> и картона
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100/90 mb-8 sm:mb-10 leading-relaxed">
              Порежем бумагу в любой формат или размер на собственном профессиональном оборудовании. Точность до миллиметра и высокое качество края.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#request-form" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-medium px-8 py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                Оставить заявку <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[38px] font-medium text-slate-900 mb-3 sm:mb-4">Услуги резки</h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-500 max-w-2xl mx-auto">Подберём оптимальное решение под вашу задачу — от визиток и листовок до больших тиражей упаковки.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
            {[
              { icon: Scissors, title: 'Резка в любой формат', desc: 'Порежем под нужный размер: А3, А4, А5 и нестандартные форматы.', color: 'from-blue-500 to-blue-600' },
              { icon: Layers, title: 'Пакетная резка тиражей', desc: 'Быстро обрабатываем большие объёмы без потери точности.', color: 'from-violet-500 to-purple-600' },
              { icon: Ruler, title: 'Точная подрезка', desc: 'Аккуратные края, допуск до ±0.5 мм на профессиональном оборудовании.', color: 'from-emerald-500 to-green-600' },
              { icon: FileText, title: 'Подготовка макета', desc: 'Поможем подготовить ТЗ и разметку под чистовой рез.', color: 'from-amber-500 to-orange-600' },
              { icon: Package, title: 'Упаковка и маркировка', desc: 'Упакуем и промаркируем партии по вашим требованиям.', color: 'from-sky-500 to-indigo-600' },
              { icon: Truck, title: 'Логистика и доставка', desc: 'Доставим по городу или отправим ТК по РФ — оперативно и надёжно.', color: 'from-rose-500 to-pink-600' },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="group relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-7 hover:shadow-2xl hover:border-slate-300 transition-all duration-300 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-slate-700" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-medium text-slate-900 mb-1.5">{s.title}</h3>
                      <p className="text-[13px] sm:text-[15px] text-slate-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`, backgroundSize: '28px 28px' }} />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5 sm:mb-7">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white"><BadgeCheck className="h-5 w-5" /></div>
                <h2 className="text-lg sm:text-2xl lg:text-3xl font-medium text-white">Технические параметры</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 text-white">
                {[
                  { label: 'Точность', value: '±0.5 мм' }, { label: 'Плотность', value: 'до 400 г/м²' }, { label: 'Форматы', value: 'от A7 до SRA3' },
                  { label: 'Ширина реза', value: 'до 480 мм' }, { label: 'Материалы', value: 'бумага, картон' }, { label: 'Скорость', value: 'до 5 000 резов/день' },
                ].map((it, i) => (
                  <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-4 sm:p-5">
                    <div className="text-sm text-white/60 mb-1.5">{it.label}</div>
                    <div className="text-base sm:text-xl font-medium">{it.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common tasks */}
      <section className="py-12 sm:py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-900 mb-3">Частые задачи</h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">Мы ежедневно решаем повторяющиеся задачи для бизнеса и творчества.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
            {['Визитки', 'Листовки', 'Открытки', 'Бирки', 'Меню', 'Постеры'].map((tag, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-3 sm:p-4 text-center shadow-sm hover:shadow-md transition-all">
                <span className="text-[13px] sm:text-sm font-medium text-slate-700">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="request-form" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="flex flex-col md:flex-row">
              <div className="bg-slate-900 md:w-1/3 p-8 sm:p-12 text-white">
                <h2 className="text-2xl font-medium mb-6">Оставьте заявку</h2>
                <p className="text-slate-400 mb-8 leading-relaxed">Наши специалисты свяжутся с вами в течение 30 минут для уточнения деталей и расчета стоимости.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm"><ClipboardCheck className="text-blue-400 h-5 w-5" /><span>Быстрый расчет</span></div>
                  <div className="flex items-center gap-3 text-sm"><ClipboardCheck className="text-blue-400 h-5 w-5" /><span>Любая сложность</span></div>
                </div>
              </div>
              <div className="flex-1 p-8 sm:p-12">
                {formState !== 'success' ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Имя</label><input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" placeholder="Александр" /></div>
                      <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Телефон</label><input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" placeholder="+7 (000) 000-00-00" /></div>
                    </div>
                    <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Электронная почта</label><input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" placeholder="example@mail.ru" /></div>
                    <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Задача на резку</label><textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none" placeholder="Опишите детально задачу: вид бумаги, количество, нужные размеры..."></textarea></div>
                    <button disabled={formState === 'submitting'} className="w-full bg-slate-900 text-white font-medium py-4 rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 disabled:opacity-70">
                      {formState === 'submitting' ? 'Отправка...' : 'Отправить заявку'} <Send className="h-4 w-4" />
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle className="h-10 w-10" /></div>
                    <h3 className="text-2xl font-medium text-slate-900 mb-2">Заявка принята!</h3>
                    <p className="text-slate-500">Мы свяжемся с вами в ближайшее время.</p>
                    <button onClick={() => setFormState('idle')} className="mt-8 text-blue-600 font-medium hover:underline">Отправить ещё одну заявку</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarketplaceSection />
    </div>
  );
}
