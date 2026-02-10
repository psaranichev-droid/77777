import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  Search,
  Heart,
  ShoppingCart,
  LayoutGrid,
  Menu,
  X,
  Phone,
  ChevronDown,
  ChevronRight,
  FileText,
  Sparkles,
  Palette,
  Package,
  Scissors,
  MapPin,
  Clock,
} from "lucide-react";

const navLinks = [
  { label: "Оптовые цены", href: "/" },
  { label: "Шоурум", href: "/showroom" },
  { label: "Дизайнерская бумага", href: "/design-paper" },
  { label: "Индивидуальная резка", href: "/custom-cutting" },
];

const catalogCategories = [
  {
    title: "Офсетная бумага",
    icon: FileText,
    color: "text-blue-600",
    bg: "bg-blue-50",
    items: [
      { name: "Высокой плотности", desc: "250–300 г/м²", href: "/catalog?cat=offset" },
      { name: "Повышенной плотности", desc: "160–190 г/м²", href: "/catalog?cat=offset" },
      { name: "Стандартной плотности", desc: "80–120 г/м²", href: "/catalog?cat=offset" },
    ],
  },
  {
    title: "Мелованная бумага",
    icon: Sparkles,
    color: "text-purple-600",
    bg: "bg-purple-50",
    items: [
      { name: "Глянцевая", desc: "Гладкая блестящая поверхность", href: "/catalog?cat=coated" },
      { name: "Матовая", desc: "Мягкая бархатистая текстура", href: "/catalog?cat=coated" },
    ],
  },
  {
    title: "Дизайнерская бумага",
    icon: Palette,
    color: "text-amber-600",
    bg: "bg-amber-50",
    items: [
      { name: "Knight Color", desc: "Тонированная в массе художественная бумага", href: "/catalog?cat=design&sub=knight-color" },
      { name: "Rubber Like", desc: "Матовое покрытие, напоминающее резину", href: "/catalog?cat=design&sub=rubber-like" },
      { name: "Galaxy Metallic", desc: "Металлизированное покрытие", href: "/catalog?cat=design&sub=galaxy-metallic" },
      { name: "Fiber Art", desc: "Натуральные природные оттенки", href: "/catalog?cat=design&sub=fiber-art" },
      { name: "Knight Black", desc: "Глубокий чёрный цвет", href: "/catalog?cat=design&sub=knight-black" },
    ],
  },
  {
    title: "Картон",
    icon: Package,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    items: [
      { name: "Мелованный", desc: "Высококачественный картон", href: "/catalog?cat=cardboard" },
    ],
  },
  {
    title: "Заготовки",
    icon: Scissors,
    color: "text-rose-600",
    bg: "bg-rose-50",
    items: [
      { name: "Карточки", desc: "Готовые к использованию", href: "/catalog?cat=blanks" },
    ],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<number | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const catalogBtnRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        catalogBtnRef.current &&
        !catalogBtnRef.current.contains(event.target as Node)
      ) {
        setCatalogOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setCatalogOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    setCatalogOpen(false);
    setMobileOpen(false);
    setMobileCatalogOpen(false);
    setMobileExpandedCat(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top info bar */}
      <div className="bg-slate-800 text-white hidden sm:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9 sm:h-10 text-[12px] sm:text-[13px]">
            <div className="hidden md:flex items-center gap-4 text-slate-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3" />
                Нижний Новгород, ул. Баумана, 48к1
              </span>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3 w-3" />
                Пн–Пт: 9:00–18:00
              </span>
            </div>
            <a
              href="tel:+79001234567"
              className="flex items-center gap-1.5 text-white hover:text-blue-300 transition-colors ml-auto"
            >
              <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span className="font-medium">+7 (900) 123-45-67</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 sm:h-20 gap-3 sm:gap-4 lg:gap-8">
            {/* Mobile menu button */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors shrink-0"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Меню"
            >
              {mobileOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="https://static.tildacdn.com/tild6566-3861-4866-b934-333963323735/--_3__1_1_2_1.png"
                alt="Логотип"
                className="object-contain h-8 sm:h-9 lg:h-auto"
                style={{ maxWidth: "245px" }}
              />
            </Link>

            {/* Catalog button */}
            <button
              ref={catalogBtnRef}
              onClick={() => setCatalogOpen(!catalogOpen)}
              className={`hidden lg:flex items-center gap-2.5 rounded-xl pl-4 pr-5 py-3 font-medium text-[15px] transition-all duration-200 shrink-0 ${
                catalogOpen
                  ? "bg-blue-700 text-white shadow-lg shadow-blue-600/30"
                  : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-sm shadow-blue-600/20 hover:shadow-md hover:shadow-blue-600/30"
              }`}
            >
              {catalogOpen ? <X className="h-[18px] w-[18px]" /> : <LayoutGrid className="h-[18px] w-[18px]" />}
              <span>Каталог</span>
            </button>

            {/* Search */}
            <div className="flex-1 min-w-0 hidden lg:block">
              <div
                className={`flex items-center rounded-xl border-2 transition-all duration-200 ${
                  searchFocused
                    ? "border-blue-500 bg-white shadow-sm shadow-blue-500/10"
                    : "border-gray-200 bg-gray-50 hover:border-gray-300"
                }`}
              >
                <input
                  type="text"
                  placeholder="Поиск по каталогу..."
                  className="flex-1 min-w-0 bg-transparent px-4 py-2.5 text-[15px] outline-none placeholder:text-gray-400 text-gray-700"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                <button className="flex items-center justify-center w-10 h-10 mr-0.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-0.5 sm:gap-1 shrink-0 ml-auto lg:ml-0">
              <a href="#" className="relative flex flex-col items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl hover:bg-gray-50 transition-all duration-200 group">
                <Heart className="h-5 w-5 sm:h-[22px] sm:w-[22px] text-gray-400 group-hover:text-red-500 transition-colors duration-200" />
                <span className="hidden lg:block text-[11px] text-gray-400 group-hover:text-gray-600 mt-0.5 font-medium transition-colors">Избранное</span>
                <span className="absolute -top-0.5 -right-0.5 sm:top-0.5 sm:right-0.5 min-w-[16px] sm:min-w-[18px] h-4 sm:h-[18px] bg-red-500 text-white text-[9px] sm:text-[10px] font-medium rounded-full flex items-center justify-center px-1 shadow-sm">3</span>
              </a>
              <button onClick={() => setIsCartOpen(true)} className="relative flex flex-col items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl hover:bg-gray-50 transition-all duration-200 group">
                <ShoppingCart className="h-5 w-5 sm:h-[22px] sm:w-[22px] text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                <span className="hidden lg:block text-[11px] text-gray-400 group-hover:text-gray-600 mt-0.5 font-medium transition-colors">Корзина</span>
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 sm:top-0.5 sm:right-0.5 min-w-[16px] sm:min-w-[18px] h-4 sm:h-[18px] bg-blue-600 text-white text-[9px] sm:text-[10px] font-medium rounded-full flex items-center justify-center px-1 shadow-sm">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-nav */}
      <div className="bg-white border-b border-gray-100 shadow-sm hidden md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 h-11">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.href} className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50/60 transition-all duration-200 whitespace-nowrap">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* MEGA MENU */}
      {catalogOpen && (
        <>
          <div className="fixed inset-0 bg-black/30 z-30" onClick={() => setCatalogOpen(false)} />
          <div className="hidden lg:block absolute left-0 right-0 z-40">
            <div ref={megaMenuRef} className="bg-white border-b border-gray-200 shadow-2xl shadow-black/10">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex py-6 gap-0 min-h-[380px]">
                  <div className="w-[320px] shrink-0 border-r border-gray-100 pr-2">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider px-4 mb-3">Категории</p>
                    <div className="space-y-0.5">
                      {catalogCategories.map((cat, idx) => {
                        const Icon = cat.icon;
                        return (
                          <button
                            key={cat.title}
                            onMouseEnter={() => setActiveCategory(idx)}
                            onClick={() => setActiveCategory(idx)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-150 group ${
                              activeCategory === idx ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            <span className={`flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-150 ${activeCategory === idx ? cat.bg : "bg-gray-100 group-hover:bg-gray-50"}`}>
                              <Icon className={`h-[18px] w-[18px] transition-colors duration-150 ${activeCategory === idx ? cat.color : "text-gray-400 group-hover:text-gray-500"}`} />
                            </span>
                            <span className={`text-[15px] font-medium flex-1 ${activeCategory === idx ? "text-blue-700" : ""}`}>{cat.title}</span>
                            <ChevronRight className={`h-4 w-4 transition-all duration-150 ${activeCategory === idx ? "text-blue-400 translate-x-0 opacity-100" : "text-gray-300 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex-1 pl-8">
                    {catalogCategories.map((cat, idx) => {
                      const Icon = cat.icon;
                      return (
                        <div key={cat.title} className={`transition-all duration-200 ${activeCategory === idx ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 absolute pointer-events-none"}`} style={{ display: activeCategory === idx ? "block" : "none" }}>
                          <div className="flex items-center gap-3 mb-6">
                            <span className={`flex items-center justify-center w-11 h-11 rounded-xl ${cat.bg}`}>
                              <Icon className={`h-5 w-5 ${cat.color}`} />
                            </span>
                            <div>
                              <h3 className="text-xl font-medium text-gray-900">{cat.title}</h3>
                              <p className="text-sm text-gray-400 mt-0.5">{cat.items.length} {cat.items.length === 1 ? "позиция" : cat.items.length < 5 ? "позиции" : "позиций"}</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
                            {cat.items.map((item) => (
                              <Link key={item.name} to={item.href} onClick={() => setCatalogOpen(false)} className="group flex flex-col p-5 rounded-2xl border border-gray-100 hover:border-blue-200 bg-white hover:bg-blue-50/40 transition-all duration-200 hover:shadow-sm">
                                <span className="text-[15px] font-medium text-gray-800 group-hover:text-blue-700 transition-colors">{item.name}</span>
                                <span className="text-sm text-gray-400 mt-1.5 leading-snug">{item.desc}</span>
                                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-200">
                                  Перейти <ChevronRight className="h-3.5 w-3.5" />
                                </span>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-6 pt-5 border-t border-gray-100">
                            <Link to={`/catalog?cat=${['offset','coated','design','cardboard','blanks'][idx]}`} onClick={() => setCatalogOpen(false)} className="inline-flex items-center gap-2 text-[15px] font-medium text-blue-600 hover:text-blue-700 transition-colors group">
                              Смотреть все в «{cat.title}»
                              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 lg:hidden ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setMobileOpen(false)} />
      <div className={`fixed top-0 left-0 bottom-0 w-[320px] max-w-[85vw] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out lg:hidden flex flex-col ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-100 shrink-0">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <img src="https://static.tildacdn.com/tild6566-3861-4866-b934-333963323735/--_3__1_1_2_1.png" alt="Логотип" className="h-7 object-contain" />
          </Link>
          <button onClick={() => setMobileOpen(false)} className="flex items-center justify-center w-9 h-9 rounded-xl hover:bg-gray-100 transition-colors">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain">
          <div className="px-4 pt-4 pb-4 space-y-1">
            <button
              onClick={() => setMobileCatalogOpen(!mobileCatalogOpen)}
              className={`flex items-center gap-2.5 w-full rounded-xl px-4 py-3 font-medium text-[14px] transition-all duration-200 mb-1 ${mobileCatalogOpen ? "bg-blue-700 text-white" : "bg-blue-600 text-white"}`}
            >
              {mobileCatalogOpen ? <X className="h-4 w-4" /> : <LayoutGrid className="h-4 w-4" />}
              <span className="flex-1 text-left">Каталог</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileCatalogOpen ? "rotate-180" : ""}`} />
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-out ${mobileCatalogOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="py-1 space-y-0.5">
                {catalogCategories.map((cat, idx) => {
                  const Icon = cat.icon;
                  const isExpanded = mobileExpandedCat === idx;
                  return (
                    <div key={cat.title}>
                      <button
                        onClick={() => setMobileExpandedCat(isExpanded ? null : idx)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left transition-all duration-150 ${isExpanded ? "bg-gray-50 text-gray-900" : "text-gray-700 hover:bg-gray-50"}`}
                      >
                        <span className={`flex items-center justify-center w-7 h-7 rounded-lg ${cat.bg}`}>
                          <Icon className={`h-3.5 w-3.5 ${cat.color}`} />
                        </span>
                        <span className="text-[14px] font-medium flex-1">{cat.title}</span>
                        <ChevronDown className={`h-3.5 w-3.5 text-gray-400 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-200 ease-out ${isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="pl-10 pr-3 pb-2 space-y-0.5">
                          {cat.items.map((item) => (
                            <Link key={item.name} to={item.href} onClick={() => setMobileOpen(false)} className="block py-2 px-3 text-[13px] text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50/60 transition-all duration-150">
                              <span className="font-medium">{item.name}</span>
                              <span className="block text-[11px] text-gray-400 mt-0.5">{item.desc}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="!my-2 border-t border-gray-100" />

            {navLinks.map((link) => (
              <Link key={link.label} to={link.href} className="flex items-center px-4 py-2.5 text-[14px] font-medium text-gray-600 hover:text-blue-600 rounded-xl hover:bg-blue-50/60 transition-all duration-200" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100 p-4 shrink-0 bg-gray-50">
          <a href="tel:+79001234567" className="flex items-center gap-2.5 px-3 py-2 text-[14px] font-medium text-gray-700 hover:text-blue-600 transition-colors">
            <Phone className="h-4 w-4" />
            +7 (900) 123-45-67
          </a>
          <div className="px-3 pt-2 space-y-1">
            <p className="text-[12px] text-gray-400 flex items-center gap-1.5">
              <MapPin className="h-3 w-3" />
              Нижний Новгород, ул. Баумана, 48к1
            </p>
            <p className="text-[12px] text-gray-400 flex items-center gap-1.5">
              <Clock className="h-3 w-3" />
              Пн–Пт: 9:00–18:00
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
