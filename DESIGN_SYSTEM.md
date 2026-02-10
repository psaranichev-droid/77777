# Дизайн-система сайта БумагаОпт

## Шрифт
- **Семейство:** Rubik (Google Fonts)
- **Доступные начертания:** 300 (Light), 400 (Regular), 500 (Medium)
- **Максимальная жирность:** 500 (font-medium)
- **Запрещено:** font-semibold (600), font-bold (700), font-extrabold (800), font-black (900)

## Типографика

### Заголовки
| Элемент | Мобильный | Планшет | Десктоп | Начертание |
|---------|-----------|---------|---------|------------|
| H1 (Hero) | text-2xl (24px) | text-3xl–4xl | text-[52px] | font-medium (500) |
| H2 (Секция) | text-xl (20px) | text-2xl–3xl | text-4xl (36px) | font-medium (500) |
| H3 (Карточка) | text-base (16px) | text-lg | text-xl (20px) | font-medium (500) |
| H4 (Подзаголовок) | text-sm (14px) | text-base | text-lg (18px) | font-medium (500) |

### Основной текст
| Элемент | Размер | Начертание | Цвет |
|---------|--------|------------|------|
| Body | text-base (16px) | font-normal (400) | text-slate-700 |
| Description | text-sm–text-base | font-normal (400) | text-slate-500 |
| Caption | text-xs–text-sm | font-normal (400) | text-slate-400 |
| Label | text-xs–text-sm | font-medium (500) | text-slate-600 |
| Badge | text-[10px]–text-xs | font-medium (500) | Зависит от контекста |
| Button | text-sm–text-base | font-medium (500) | Зависит от контекста |
| Nav link | text-sm–text-[15px] | font-medium (500) | text-slate-600 |

### Межстрочный интервал
- Заголовки: leading-[1.15]–leading-tight
- Основной текст: leading-relaxed (line-height: 1.625)
- Параграфы: line-height: 1.7

## Цветовая палитра

### Основные цвета
| Назначение | Класс | Hex |
|-----------|-------|-----|
| Основной фон | bg-white | #FFFFFF |
| Вторичный фон | bg-slate-50 | #F8FAFC |
| Текст основной | text-slate-900 | #0F172A |
| Текст вторичный | text-slate-600 | #475569 |
| Текст третичный | text-slate-400 | #94A3B8 |
| Акцент (primary) | bg-blue-600 | #2563EB |
| Акцент hover | bg-blue-700 | #1D4ED8 |

### Акцентные цвета (категории)
| Категория | Цвет | Фон | Текст |
|-----------|------|-----|-------|
| Офсетная бумага | Синий | bg-blue-50 | text-blue-600 |
| Мелованная бумага | Фиолетовый | bg-purple-50 | text-purple-600 |
| Дизайнерская бумага | Янтарный | bg-amber-50 | text-amber-600 |
| Картон | Изумрудный | bg-emerald-50 | text-emerald-600 |
| Заготовки | Розовый | bg-rose-50 | text-rose-600 |

### Статусные цвета
| Статус | Цвет | Класс |
|--------|------|-------|
| Успех / В наличии | Зелёный | text-emerald-600, bg-emerald-500 |
| Предупреждение / Под заказ | Янтарный | text-amber-600, bg-amber-500 |
| Ошибка | Красный | text-red-500, bg-red-500 |
| Информация | Синий | text-blue-600, bg-blue-500 |

## Скругления (Border Radius)

| Элемент | Мобильный | Десктоп |
|---------|-----------|---------|
| Кнопка | rounded-xl (12px) | rounded-xl (12px) |
| Карточка | rounded-xl (12px) | rounded-2xl (16px) |
| Большой блок | rounded-2xl (16px) | rounded-3xl (24px) |
| Badge/Tag | rounded-full | rounded-full |
| Input | rounded-xl (12px) | rounded-xl (12px) |
| Иконка-контейнер | rounded-lg (8px) | rounded-xl (12px) |

## Тени (Shadows)

| Уровень | Класс | Применение |
|---------|-------|------------|
| Нет | shadow-none | Обычное состояние |
| Минимальная | shadow-sm | Карточки, toolbar |
| Стандартная | shadow-md | Hover-состояние карточек |
| Выраженная | shadow-lg | CTA-кнопки, модальные окна |
| Глубокая | shadow-xl | Активные элементы |
| Максимальная | shadow-2xl | Mega-menu, мобильное меню |

## Отступы (Spacing)

### Секции (вертикальные)
| Контекст | Мобильный | Планшет | Десктоп |
|---------|-----------|---------|---------|
| Между секциями | py-12 | py-16 | py-24 |
| Внутри секции (заголовок → контент) | mb-8 | mb-12 | mb-14 |

### Контейнер
- Максимальная ширина: max-w-7xl (80rem / 1280px)
- Горизонтальные отступы: px-4 (моб.) → px-6 (планшет) → px-8 (десктоп)

### Карточки
| Контекст | Мобильный | Десктоп |
|---------|-----------|---------|
| Padding карточки | p-4–p-5 | p-6–p-8 |
| Gap в сетке | gap-3 | gap-4–gap-6 |

## Границы (Borders)

| Элемент | Класс |
|---------|-------|
| Карточка | border border-slate-200 |
| Hover карточки | hover:border-slate-300 |
| Разделитель | border-t border-slate-100 |
| Input | border-2 border-slate-200 |
| Input focus | focus:border-blue-500 |

## Компоненты

### Hero-секция
- Фоновое изображение с `bg-cover bg-center`
- Два слоя overlay:
  1. `bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60`
  2. `bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80`
- Минимальная высота: min-h-[480px] (моб.) → min-h-[700px] (десктоп)
- Badge сверху: bg-white/15 backdrop-blur-sm, rounded-full
- Кнопки: основная (bg-white text-blue-700) + вторичная (bg-white/15 text-white border-white/20)

### Кнопка (Primary)
```
bg-blue-600 text-white font-medium px-6 py-3 rounded-xl
hover:bg-blue-700 transition-all shadow-sm
```

### Кнопка (Secondary)
```
bg-white border border-slate-200 text-slate-700 font-medium px-6 py-3 rounded-xl
hover:bg-slate-50 transition-all
```

### Карточка
```
bg-white rounded-xl sm:rounded-2xl border border-slate-200
shadow-sm hover:shadow-lg hover:border-slate-300
transition-all duration-300 overflow-hidden
```

### Input
```
w-full px-4 py-3 rounded-xl border border-slate-200
focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
outline-none transition-all text-[15px]
```

### Badge
```
inline-flex items-center gap-2 rounded-full
bg-blue-50 text-blue-600 text-xs font-medium
px-3 py-1
```

## Анимации

| Эффект | Класс |
|--------|-------|
| Базовый переход | transition-all duration-200 |
| Плавный переход | transition-all duration-300 |
| Медленный переход | transition-all duration-500 |
| Hover подъём | hover:-translate-y-1 |
| Hover масштаб (изображения) | group-hover:scale-105 |
| Пульсация (статус) | animate-pulse |

## Адаптивность (Breakpoints)

| Breakpoint | Ширина | Применение |
|-----------|--------|------------|
| Default | < 640px | Мобильные телефоны |
| sm | ≥ 640px | Большие телефоны |
| md | ≥ 768px | Планшеты |
| lg | ≥ 1024px | Десктоп |
| xl | ≥ 1280px | Широкий десктоп |

## Сквозные секции
Следующие компоненты присутствуют на всех (или почти всех) страницах:
- **Header** — sticky, с mega-меню и мобильным меню
- **Footer** — контакты, ссылки, копирайт
- **MarketplaceSection** — CTA-блок для Wildberries и Ozon

## Структура страниц

### Главная (/)
1. Hero → PriceTable → InfoSections → MarketplaceSection → NewsletterSection

### Шоурум (/showroom)
1. Hero → Categories → Visitors → Facts → Contacts → MarketplaceSection

### Дизайнерская бумага (/design-paper)
1. Hero → Collections → Steps → MarketplaceSection

### Каталог (/catalog)
1. Breadcrumb → Sidebar + ProductGrid

### Индивидуальная резка (/custom-cutting)
1. Hero → Services → TechSpecs → CommonTasks → RequestForm → MarketplaceSection
