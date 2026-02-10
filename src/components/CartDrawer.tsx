import { X, Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalAmount } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white shadow-2xl flex flex-col h-full transform transition-transform duration-300 ease-out">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="text-xl font-medium text-gray-900 flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-blue-600" />
            Корзина
            <span className="text-gray-400 text-sm font-normal ml-2">{items.length} товаров</span>
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 space-y-4">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-2">
                <ShoppingCart className="w-10 h-10 text-gray-300" />
              </div>
              <p className="text-lg font-medium text-gray-900">Ваша корзина пуста</p>
              <p className="text-sm max-w-xs mx-auto">Перейдите в каталог, чтобы найти нужные товары для вашего бизнеса</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors mt-4"
              >
                Перейти в каталог
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="w-24 h-24 bg-gray-50 rounded-xl overflow-hidden shrink-0 border border-gray-100">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-snug">
                      <Link to={`/product/${item.id}`} onClick={() => setIsCartOpen(false)} className="hover:text-blue-600 transition-colors">
                        {item.name}
                      </Link>
                    </h3>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors p-1 -mr-2 -mt-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mb-auto">{item.subcategory}</p>
                  
                  <div className="flex items-end justify-between mt-3">
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-gray-600 hover:text-blue-600 disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-gray-600 hover:text-blue-600"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">
                        {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                      </div>
                      <div className="text-xs text-gray-400">
                        {item.price.toLocaleString('ru-RU')} ₽ / шт.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-5 border-t border-gray-100 bg-gray-50/50 space-y-4">
            <div className="flex items-center justify-between text-lg font-medium text-gray-900">
              <span>Итого:</span>
              <span>{totalAmount.toLocaleString('ru-RU')} ₽</span>
            </div>
            <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 active:bg-blue-800 transition-all shadow-lg shadow-blue-600/20">
              Оформить заказ
            </button>
            <p className="text-center text-xs text-gray-400">
              Расчет стоимости доставки будет доступен на следующем шаге
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
