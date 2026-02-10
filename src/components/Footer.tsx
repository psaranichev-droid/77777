import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center mb-4 sm:mb-5">
              <img
                src="https://static.tildacdn.com/tild6566-3861-4866-b934-333963323735/--_3__1_1_2_1.png"
                alt="Логотип"
                className="object-contain brightness-0 invert h-7 sm:h-8 lg:h-auto"
                style={{ maxWidth: "245px" }}
              />
            </Link>
            <p className="text-[13px] sm:text-[15px] text-gray-400 leading-relaxed max-w-xs">
              Оптовые поставки офсетной и мелованной бумаги и картона для
              полиграфических производств.
            </p>
          </div>

          {/* Каталог */}
          <div>
            <h4 className="text-[14px] sm:text-[15px] font-medium text-white uppercase tracking-wider mb-4 sm:mb-5">
              Каталог
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-[13px] sm:text-[15px]">
              <li><Link to="/catalog?cat=offset" className="hover:text-white transition-colors">Офсетная бумага</Link></li>
              <li><Link to="/catalog?cat=coated" className="hover:text-white transition-colors">Мелованная бумага</Link></li>
              <li><Link to="/design-paper" className="hover:text-white transition-colors">Дизайнерская бумага</Link></li>
              <li><Link to="/catalog?cat=cardboard" className="hover:text-white transition-colors">Картон</Link></li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h4 className="text-[14px] sm:text-[15px] font-medium text-white uppercase tracking-wider mb-4 sm:mb-5">
              Информация
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-[13px] sm:text-[15px]">
              <li><Link to="/" className="hover:text-white transition-colors">Оптовые цены</Link></li>
              <li><Link to="/showroom" className="hover:text-white transition-colors">Шоурум</Link></li>
              <li><a href="#payment" className="hover:text-white transition-colors">Оплата</a></li>
              <li><Link to="/custom-cutting" className="hover:text-white transition-colors">Индивидуальная резка</Link></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-[14px] sm:text-[15px] font-medium text-white uppercase tracking-wider mb-4 sm:mb-5">
              Контакты
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-[13px] sm:text-[15px]">
              <li className="flex items-start gap-2.5 sm:gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 text-gray-500 shrink-0" />
                <span className="leading-relaxed">
                  г. Нижний Новгород, ул. Баумана, 48, корпус 1
                </span>
              </li>
              <li className="flex items-center gap-2.5 sm:gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 shrink-0" />
                <a href="tel:+78001234567" className="hover:text-white transition-colors">
                  8 (800) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2.5 sm:gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 shrink-0" />
                <a href="mailto:info@bumagaopt.ru" className="hover:text-white transition-colors">
                  info@bumagaopt.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-gray-500">
            © 2025 БумагаОпт. Все права защищены.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Оферта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
