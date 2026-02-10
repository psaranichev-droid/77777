interface PriceRow {
  product: string;
  quantity: string;
  dimensions: string;
  volume: string;
  weight: string;
  price: string;
}

const priceData: PriceRow[] = [
  { product: "Бумага офсетная, А4, 120 г/м²", quantity: "2 000", dimensions: "31×31×31", volume: "0.03", weight: "15,5", price: "2 730" },
  { product: "Бумага офсетная, А4, 160 г/м²", quantity: "1 500", dimensions: "31×31×31", volume: "0.03", weight: "15,6", price: "2 579" },
  { product: "Бумага офсетная, А4, 190 г/м²", quantity: "1 400", dimensions: "31×31×31", volume: "0.03", weight: "14,5", price: "2 832" },
  { product: "Бумага офсетная, А4, 250 г/м²", quantity: "500", dimensions: "31×31×31", volume: "0.03", weight: "7,9", price: "2 235" },
  { product: "Бумага офсетная, А4, 300 г/м²", quantity: "400", dimensions: "31×31×31", volume: "0.03", weight: "7,6", price: "2 798" },
  { product: "Бумага офсетная, А5, 120 г/м²", quantity: "2 000", dimensions: "26×33×17", volume: "0.02", weight: "—", price: "1 457" },
  { product: "Бумага офсетная, А5, 160 г/м²", quantity: "1 500", dimensions: "26×33×17", volume: "0.02", weight: "—", price: "1 387" },
  { product: "Бумага офсетная, А5, 190 г/м²", quantity: "1 200", dimensions: "26×33×17", volume: "0.02", weight: "—", price: "1 341" },
  { product: "Бумага офсетная, А5, 250 г/м²", quantity: "1 000", dimensions: "26×33×17", volume: "0.02", weight: "—", price: "1 201" },
  { product: "Бумага офсетная, А5, 300 г/м²", quantity: "800", dimensions: "26×33×17", volume: "0.02", weight: "—", price: "1 482" },
];

export function PriceTable() {
  return (
    <section id="price-table" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 mb-3 sm:mb-4">
            Цены и атрибуты продукции
          </h2>
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
            Актуальные оптовые цены на офсетную бумагу форматов А4 и А5
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 lg:px-6 py-3.5 text-[13px] lg:text-[15px] font-medium text-gray-700">Продукция</th>
                  <th className="text-center px-3 lg:px-4 py-3.5 text-[13px] lg:text-[15px] font-medium text-gray-700">Кол-во (л.)</th>
                  <th className="text-center px-3 lg:px-4 py-3.5 text-[13px] lg:text-[15px] font-medium text-gray-700">Габариты (см)</th>
                  <th className="text-center px-3 lg:px-4 py-3.5 text-[13px] lg:text-[15px] font-medium text-gray-700">Объем (м³)</th>
                  <th className="text-center px-3 lg:px-4 py-3.5 text-[13px] lg:text-[15px] font-medium text-gray-700">Вес (кг)</th>
                  <th className="text-center px-3 lg:px-4 py-3.5 text-[13px] lg:text-[15px] font-medium text-gray-700">Цена (руб)</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 hover:bg-blue-50/50 transition-colors ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                    }`}
                  >
                    <td className="px-4 lg:px-6 py-3.5 text-[13px] lg:text-[15px] font-medium text-gray-900">{row.product}</td>
                    <td className="text-center px-3 lg:px-4 py-3.5 text-[13px] lg:text-[15px] text-gray-600">{row.quantity}</td>
                    <td className="text-center px-3 lg:px-4 py-3.5 text-[13px] lg:text-[15px] text-gray-600">{row.dimensions}</td>
                    <td className="text-center px-3 lg:px-4 py-3.5 text-[13px] lg:text-[15px] text-gray-600">{row.volume}</td>
                    <td className="text-center px-3 lg:px-4 py-3.5 text-[13px] lg:text-[15px] text-gray-600">{row.weight}</td>
                    <td className="text-center px-3 lg:px-4 py-3.5 text-sm lg:text-base font-medium text-blue-600">{row.price} ₽</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {priceData.map((row, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-[14px] font-medium text-gray-900 flex-1 leading-snug">
                  {row.product}
                </h3>
                <span className="text-lg font-medium text-blue-600 whitespace-nowrap">
                  {row.price} ₽
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[12px] sm:text-[13px]">
                <div className="bg-gray-50 rounded-lg px-3 py-2">
                  <span className="text-gray-400 block text-[11px]">Кол-во</span>
                  <span className="text-gray-700 font-medium">{row.quantity} л.</span>
                </div>
                <div className="bg-gray-50 rounded-lg px-3 py-2">
                  <span className="text-gray-400 block text-[11px]">Габариты</span>
                  <span className="text-gray-700 font-medium">{row.dimensions}</span>
                </div>
                <div className="bg-gray-50 rounded-lg px-3 py-2">
                  <span className="text-gray-400 block text-[11px]">Объем</span>
                  <span className="text-gray-700 font-medium">{row.volume} м³</span>
                </div>
                {row.weight !== "—" && (
                  <div className="bg-gray-50 rounded-lg px-3 py-2">
                    <span className="text-gray-400 block text-[11px]">Вес</span>
                    <span className="text-gray-700 font-medium">{row.weight} кг</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
