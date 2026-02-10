import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products, Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { 
  ChevronRight, 
  Minus, 
  Plus, 
  ShoppingCart, 
  Heart, 
  Truck, 
  ShieldCheck, 
  ArrowLeft,
  Star
} from 'lucide-react';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProduct = products.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      const buyButton = document.getElementById('main-buy-button');
      if (buyButton) {
        const rect = buyButton.getBoundingClientRect();
        setShowStickyBar(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-medium text-slate-900 mb-2">Товар не найден</h2>
          <Link 
            to="/catalog" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Вернуться в каталог
          </Link>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white pt-0 pb-24 sm:pt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-slate-500 mb-6 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
          <Link to="/" className="hover:text-blue-600 transition-colors">Главная</Link>
          <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
          <Link to="/catalog" className="hover:text-blue-600 transition-colors">Каталог</Link>
          <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
          <span className="text-slate-900 font-medium truncate">{product.name}</span>
        </nav>

        {/* Main Content - No Card Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20">
            
          {/* Gallery - Clean Layout */}
          <div className="lg:col-span-7">
            <div className="sticky top-24">
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/3] lg:aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain bg-white hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-lg">
                    {product.badge}
                  </div>
                )}
              </div>
              
              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {[product.image, product.image, product.image].map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border transition-all flex-shrink-0 ${
                      activeImage === idx ? 'border-blue-600' : 'border-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info - Linear Layout */}
          <div className="lg:col-span-5 flex flex-col h-full">
            
            {/* Header Info */}
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900 mb-3 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 text-sm mb-6">
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-slate-400 ml-2 font-normal">5.0</span>
                </div>
                <span className="text-slate-300">|</span>
                <span className="text-slate-500">Арт. {product.id.toUpperCase()}</span>
              </div>
              
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl sm:text-4xl font-medium text-slate-900">
                  {product.price.toLocaleString('ru-RU')} ₽
                </span>
                {product.oldPrice && (
                  <span className="text-lg text-slate-400 line-through">
                    {product.oldPrice.toLocaleString('ru-RU')} ₽
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 mb-8" id="main-buy-button">
              <div className="flex gap-4">
                 <div className="flex items-center bg-slate-100 rounded-xl p-1">
                    <button 
                      onClick={() => handleQuantityChange(-1)}
                      className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-white rounded-lg transition-colors disabled:opacity-50"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <div className="w-12 text-center font-medium text-lg">{quantity}</div>
                    <button 
                      onClick={() => handleQuantityChange(1)}
                      className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-white rounded-lg transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                  <button className="w-12 h-12 flex items-center justify-center bg-slate-100 rounded-xl text-slate-500 hover:text-red-500 hover:bg-red-50 transition-colors">
                    <Heart className="w-6 h-6" />
                  </button>
              </div>

              <button 
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full py-4 rounded-xl text-lg font-medium transition-all ${
                  product.inStock 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.98]' 
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                {product.inStock ? 'Добавить в корзину' : 'Нет в наличии'}
              </button>
            </div>

            {/* Short Specs */}
            <div className="mb-8">
              <h3 className="font-medium text-slate-900 mb-4">Характеристики</h3>
              <div className="space-y-3">
                {product.specs.map((spec, index) => (
                  <div key={index} className="flex justify-between items-baseline text-sm pb-3 border-b border-slate-100 last:border-0">
                    <span className="text-slate-500">{spec.label}</span>
                    <span className="font-medium text-slate-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="font-medium text-slate-900 mb-3">Описание</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {product.description}
              </p>
            </div>

            {/* Delivery Info - Compact */}
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <div className="p-4 rounded-xl bg-slate-50">
                <Truck className="w-5 h-5 text-slate-400 mb-2" />
                <div className="text-xs font-medium text-slate-900 mb-0.5">Доставка</div>
                <div className="text-[11px] text-slate-500">Завтра, бесплатно</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50">
                <ShieldCheck className="w-5 h-5 text-slate-400 mb-2" />
                <div className="text-xs font-medium text-slate-900 mb-0.5">Гарантия</div>
                <div className="text-[11px] text-slate-500">100% оригинал</div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-16 border-t border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-medium text-slate-900">Похожие товары</h2>
              <Link to="/catalog" className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                Все товары
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <Link 
                  key={related.id} 
                  to={`/product/${related.id}`}
                  className="group block"
                >
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-50 mb-3">
                    <img 
                      src={related.image} 
                      alt={related.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {related.badge && (
                      <div className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-medium px-2 py-0.5 rounded-lg">
                        {related.badge}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="text-lg font-medium text-slate-900 mb-1">
                      {related.price.toLocaleString('ru-RU')} ₽
                    </div>
                    <div className="text-sm text-slate-700 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {related.name}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{related.subcategory}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Sticky Bar */}
      <div className={`fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-4 transform transition-transform duration-300 lg:hidden z-50 ${showStickyBar ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="text-lg font-medium text-slate-900">
              {product.price.toLocaleString('ru-RU')} ₽
            </div>
            <div className="text-xs text-slate-500">В наличии</div>
          </div>
          <button 
            onClick={handleAddToCart}
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-xl active:scale-95 transition-transform"
          >
            В корзину
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductPage;
