import {
  Truck,
  MapPin,
  CreditCard,
  Scissors,
  Package,
} from "lucide-react";

interface InfoCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  iconBg: string;
}

const cards: InfoCard[] = [
  {
    id: "delivery",
    icon: <Truck className="h-6 w-6" />,
    title: "Доставка",
    description:
      "Мы осуществляем перевозки через транспортные логистические компании, поэтому для нас нет границ. Доставку до транспортных компаний мы осуществляем бесплатно.",
    gradient: "from-emerald-500 to-teal-600",
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  {
    id: "location",
    icon: <MapPin className="h-6 w-6" />,
    title: "Где мы находимся",
    description:
      "Мы располагаемся в Нижнем Новгороде по адресу: улица Баумана, 48, корпус 1. Всегда рады оказать аудиенцию в нашем комфортном шоуруме.",
    gradient: "from-blue-500 to-indigo-600",
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    id: "payment",
    icon: <CreditCard className="h-6 w-6" />,
    title: "Оплата",
    description:
      "Мы работаем с любыми категориями клиентов: юридическими и физическими лицами. По запросу отправим торговое предложение.",
    gradient: "from-violet-500 to-purple-600",
    iconBg: "bg-violet-100 text-violet-600",
  },
  {
    id: "custom-cut",
    icon: <Scissors className="h-6 w-6" />,
    title: "Индивидуальный размер",
    description:
      "У нас собственное профессиональное оборудование для резки, поэтому мы можем изготовить материал практически любого размера, который вам нужен.",
    gradient: "from-orange-500 to-red-500",
    iconBg: "bg-orange-100 text-orange-600",
  },
  {
    id: "samples-card",
    icon: <Package className="h-6 w-6" />,
    title: "Образцы",
    description:
      "Если вы еще не убедились в качестве нашей продукции, предлагаем вам приобрести её в наших магазинах на маркетплейсах. Там вы найдете весь ассортимент.",
    gradient: "from-pink-500 to-rose-600",
    iconBg: "bg-pink-100 text-pink-600",
  },
];

export function InfoSections() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 mb-3 sm:mb-4">
            Это базовый минимум того, что нужно знать о нас
          </h2>
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Надёжный партнёр для вашего бизнеса — доставка, оплата,
            индивидуальный подход
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
              />
              <div
                className={`inline-flex items-center justify-center h-11 w-11 sm:h-14 sm:w-14 rounded-xl ${card.iconBg} mb-4 sm:mb-5`}
              >
                {card.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 sm:mb-3">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
