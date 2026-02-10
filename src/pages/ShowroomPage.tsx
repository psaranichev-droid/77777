import { Link } from "react-router-dom";
import { MarketplaceSection } from "../components/MarketplaceSection";
import {
  MapPin, Phone, Clock, Package, Scissors, Brush, GraduationCap, Users,
  CheckCircle2, Star, ParkingCircle, TrainFront, Ruler, HandHelping, ArrowRight, Navigation,
} from "lucide-react";

const categories = [
  { name: "Офсетная бумага", image: "https://static.tildacdn.com/tild3331-3137-4564-b331-366361613933/IMG_5781.jpg", accent: "bg-blue-600", desc: "Универсальная бумага для полиграфии и офиса" },
  { name: "Мелованная бумага", image: "https://static.tildacdn.com/tild3338-6337-4834-b434-643739383635/IMG_8498.jpg", accent: "bg-purple-600", desc: "Глянцевая и матовая для премиум-печати" },
  { name: "Мелованный картон", image: "https://static.tildacdn.com/tild3562-6136-4133-a532-336166626563/IMG_8469.jpg", accent: "bg-emerald-600", desc: "Плотный картон для упаковки и полиграфии" },
  { name: "Дизайнерская бумага", image: "https://static.tildacdn.com/tild6166-6538-4336-b239-353232646436/orig.jpg", accent: "bg-amber-600", desc: "Уникальные текстуры и цвета для творчества" },
];

const visitors = [
  { title: "Полиграфисты", desc: "У нас есть офсетная, мелованная и дизайнерская бумага. Если нужно, порежем сразу в нужный формат", icon: Scissors, gradient: "from-blue-500 to-blue-600", image: "https://static.tildacdn.com/tild6664-3034-4536-b862-643936623365/2025-11-27-164235.jpg" },
  { title: "Дизайнеры", desc: "Крутые проекты делаются только на дизайнерской бумаге — приходите, смотрите, вдохновляйтесь", icon: Brush, gradient: "from-purple-500 to-purple-600", image: "https://static.tildacdn.com/tild6461-6433-4430-a235-396164623931/i.jpg" },
  { title: "Творческие люди", desc: "В нашем шоуруме есть в наличии бумага формата А4 и А3, которую можно приобрести поштучно, нет границ для творчества", icon: GraduationCap, gradient: "from-amber-500 to-amber-600", image: "https://static.tildacdn.com/tild6362-6465-4463-b664-343263663565/159915566c674971aaac.jpg" },
  { title: "Клиенты типографий", desc: "Типографии не продают бумагу — они на ней печатают, так что перед тем, как искать типографию, выберите бумагу, от этого зависит стоимость печати", icon: Users, gradient: "from-emerald-500 to-emerald-600", image: "https://static.tildacdn.com/tild6337-6633-4130-a636-326466623565/product-school-urVHq.jpg" },
];

const facts = [
  { text: "Более 500 видов бумаги: Дизайнерская, Офсетная, Меловая", icon: Star },
  { text: "Оборудованное пространство для погружения в творческий процесс", icon: Brush },
  { text: "Помощь специалиста в подборе бумаги под ваши задачи", icon: HandHelping },
  { text: "Всегда найдется парковочное место для размещения машины", icon: ParkingCircle },
  { text: "Удобное местоположение в 10 мин. от станции метро Заречная", icon: TrainFront },
  { text: "Можно отрезать небольшой фрагмент образца бумаги", icon: Ruler },
];

export function ShowroomPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[480px] sm:min-h-[560px] lg:min-h-[700px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://static.tildacdn.com/tild3465-3965-4262-a466-396566636335/1770510534531-019c3a.png')` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60 sm:from-slate-900/90 sm:via-slate-900/75 sm:to-slate-900/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28 w-full">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-medium text-white leading-[1.15] mb-4 sm:mb-7">
              Шоурум бумаги и картона в Нижнем Новгороде
            </h1>
            <p className="text-sm sm:text-base lg:text-xl text-blue-100 leading-relaxed mb-6 sm:mb-10 max-w-2xl">
              У нас вы можете выбрать дизайнерскую бумагу по образцам и каталогам, купить офсетную и мелованную бумагу Royal Paper, ознакомиться с ассортиментом картона, получить консультацию и оформить заказ.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/" className="inline-flex items-center justify-center gap-2.5 bg-white text-blue-700 font-medium px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-sm sm:text-base">
                В каталог продукции <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <a href="https://yandex.ru/maps/47/nizhny-novgorod/?from=mapframe&ll=43.949282%2C56.281835&mode=routes&pt=43.949950%2C56.281586&rtext=~56.281910%2C43.949181&rtt=auto&ruri=~&source=mapframe&utm_source=mapframe&z=19.92" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 bg-white/15 backdrop-blur-sm text-white font-medium px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl hover:bg-white/25 transition-colors border border-white/20 text-sm sm:text-base">
                <Navigation className="h-4 w-4 sm:h-5 sm:w-5" /> Построить маршрут
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 sm:py-16 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs sm:text-sm font-medium mb-4 sm:mb-5"><Package className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Ассортимент</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-slate-900 mb-3 sm:mb-4">Категории товаров</h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-500 max-w-xl mx-auto">Которые у нас можно посмотреть или купить в шоуруме</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="group relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 lg:p-7">
                  <div className={`w-8 sm:w-10 h-1 ${cat.accent} rounded-full mb-2 sm:mb-4 group-hover:w-12 sm:group-hover:w-16 transition-all duration-500`} />
                  <h3 className="text-sm sm:text-lg lg:text-2xl font-medium text-white mb-1 sm:mb-2">{cat.name}</h3>
                  <p className="text-[11px] sm:text-sm text-white/70 leading-relaxed hidden sm:block">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visitors */}
      <section className="py-12 sm:py-16 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs sm:text-sm font-medium mb-4 sm:mb-5"><Users className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Наши гости</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-slate-900 mb-3 sm:mb-4">Кто в основном посещает наш шоурум</h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-500 max-w-xl mx-auto">Мы работаем с самыми разными клиентами</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {visitors.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-40 sm:h-56 lg:h-64 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <div className={`absolute top-3 left-3 sm:top-5 sm:left-5 w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center shadow-lg`}>
                      <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                  <div className="p-4 sm:p-7 lg:p-8">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-900 mb-2 sm:mb-3">{item.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="py-12 sm:py-16 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs sm:text-sm font-medium mb-4 sm:mb-5"><CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> О шоуруме</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-slate-900 mb-3 sm:mb-4">Несколько интересных фактов о шоуруме</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {facts.map((fact, idx) => {
              const Icon = fact.icon;
              return (
                <div key={idx} className="group flex items-start gap-3 sm:gap-5 p-4 sm:p-7 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-emerald-50 text-emerald-600 shrink-0 group-hover:bg-emerald-100 transition-colors duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium leading-relaxed pt-1 sm:pt-2">{fact.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 sm:py-16 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs sm:text-sm font-medium mb-4 sm:mb-5"><MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Контакты</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-slate-900 mb-3 sm:mb-4">Приезжайте к нам</h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-500 max-w-xl mx-auto">Всегда рады оказать аудиенцию в нашем комфортном шоуруме</p>
          </div>
          <div className="bg-white rounded-2xl sm:rounded-[32px] overflow-hidden shadow-xl border border-slate-100">
            <div className="flex flex-col lg:flex-row">
              <div className="p-5 sm:p-8 lg:p-14 lg:w-1/2">
                <div className="space-y-5 sm:space-y-8">
                  <div className="flex items-start gap-3 sm:gap-5">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0"><MapPin className="w-5 h-5 sm:w-6 sm:h-6" /></div>
                    <div>
                      <p className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider mb-0.5 sm:mb-1">Адрес</p>
                      <p className="text-base sm:text-lg text-slate-900 font-medium">г. Нижний Новгород, ул. Баумана, 48, корпус 1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-5">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0"><Phone className="w-5 h-5 sm:w-6 sm:h-6" /></div>
                    <div>
                      <p className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider mb-0.5 sm:mb-1">Телефон</p>
                      <a href="tel:+79001234567" className="text-base sm:text-lg text-slate-900 font-medium hover:text-blue-600 transition-colors">+7 (900) 123-45-67</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-5">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0"><Clock className="w-5 h-5 sm:w-6 sm:h-6" /></div>
                    <div>
                      <p className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider mb-0.5 sm:mb-1">Время работы</p>
                      <p className="text-base sm:text-lg text-slate-900 font-medium">Пн–Пт: 9:00 – 18:00</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 sm:mt-10 pt-5 sm:pt-8 border-t border-slate-100">
                  <a href="https://yandex.ru/maps/47/nizhny-novgorod/?from=mapframe&ll=43.949282%2C56.281835&mode=routes&pt=43.949950%2C56.281586&rtext=~56.281910%2C43.949181&rtt=auto&ruri=~&source=mapframe&utm_source=mapframe&z=19.92" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 text-white font-medium py-3.5 sm:py-4 px-8 rounded-xl sm:rounded-2xl hover:bg-blue-700 transition-all duration-200 text-base sm:text-lg shadow-lg shadow-blue-600/20">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" /> Построить маршрут
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto bg-slate-100 relative overflow-hidden">
                <iframe src="https://yandex.ru/map-widget/v1/?ll=43.949950%2C56.281586&z=16&pt=43.949950%2C56.281586%2Cpm2rdm" width="100%" height="100%" style={{ border: 0, display: "block", minHeight: "300px" }} allowFullScreen title="Карта — шоурум" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarketplaceSection />
    </div>
  );
}
