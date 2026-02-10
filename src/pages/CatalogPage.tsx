import { useState, useMemo } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown, Package, Heart, Check, Grid3X3, List, ChevronRight } from 'lucide-react';
import { products, categories, designSubcategories, type Product } from '../data/products';

function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);
  return (
    <Link to={`/product/${product.id}`} className="group bg-white rounded-xl sm:rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        {product.badge && (
          <div className={`absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-medium text-white ${
            product.badge === 'Скидка' ? 'bg-red-500' : product.badge === 'Новинка' ? 'bg-emerald-500' : product.badge === 'Хит продаж' ? 'bg-blue-500' : product.badge === 'Премиум' ? 'bg-violet-500' : product.badge === 'Выгодно' ? 'bg-amber-500' : 'bg-blue-500'
          }`}>{product.badge}</div>
        )}
        <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLiked(!liked); }} className={`absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-200 ${liked ? 'bg-red-500 text-white shadow-lg' : 'bg-white/90 backdrop-blur-sm text-slate-400 hover:text-red-500 sm:opacity-0 sm:group-hover:opacity-100'}`}>
          <Heart className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${liked ? 'fill-current' : ''}`} />
        </button>
        {!product.inStock && (
          <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 px-2 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-medium text-white bg-slate-600/90 backdrop-blur-sm">Под заказ</div>
        )}
      </div>
      <div className="p-3 sm:p-4 lg:p-5 flex flex-col flex-1">
        <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium uppercase tracking-wider mb-1">{product.subcategory}</span>
        <h3 className="text-[13px] sm:text-sm lg:text-[15px] font-medium text-slate-900 mb-1.5 sm:mb-2 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 flex-1">{product.name}</h3>
        <div className="hidden xs:flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-3">
          {product.specs.slice(0, 2).map((spec) => (
            <span key={spec.label} className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded sm:rounded-md bg-slate-50 text-[9px] sm:text-[11px] text-slate-500 font-medium">{spec.value}</span>
          ))}
          <span className="hidden lg:inline-flex items-center px-2 py-0.5 rounded-md bg-slate-50 text-[11px] text-slate-500 font-medium">{product.specs[2]?.value}</span>
        </div>
        <div className="flex items-end justify-between mt-auto pt-2 sm:pt-3 border-t border-slate-100">
          <div>
            <div className="flex items-baseline gap-1 sm:gap-2">
              <span className="text-base sm:text-lg lg:text-xl font-medium text-slate-900">{product.price.toLocaleString('ru-RU')}</span>
              <span className="text-[13px] sm:text-base lg:text-lg font-medium text-slate-900">₽</span>
            </div>
            {product.oldPrice && (<span className="text-[11px] sm:text-xs text-slate-400 line-through">{product.oldPrice.toLocaleString('ru-RU')} ₽</span>)}
          </div>
          <div className={`flex items-center gap-1 text-[10px] sm:text-[11px] font-medium ${product.inStock ? 'text-emerald-600' : 'text-amber-600'}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${product.inStock ? 'bg-emerald-500' : 'bg-amber-500'}`} />
            <span className="hidden sm:inline">{product.inStock ? 'В наличии' : 'Под заказ'}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ProductListCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);
  return (
    <Link to={`/product/${product.id}`} className="group bg-white rounded-xl sm:rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300 block cursor-pointer">
      <div className="flex">
        <div className="relative w-28 sm:w-40 md:w-52 lg:w-60 shrink-0 overflow-hidden bg-slate-100">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          {product.badge && (<div className={`absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-medium text-white ${product.badge === 'Скидка' ? 'bg-red-500' : product.badge === 'Новинка' ? 'bg-emerald-500' : product.badge === 'Хит продаж' ? 'bg-blue-500' : product.badge === 'Премиум' ? 'bg-violet-500' : product.badge === 'Выгодно' ? 'bg-amber-500' : 'bg-blue-500'}`}>{product.badge}</div>)}
        </div>
        <div className="flex-1 p-3 sm:p-4 lg:p-5 flex flex-col min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium uppercase tracking-wider">{product.subcategory}</span>
              <h3 className="text-[13px] sm:text-sm lg:text-base font-medium text-slate-900 mt-0.5 group-hover:text-blue-600 transition-colors line-clamp-2">{product.name}</h3>
            </div>
            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLiked(!liked); }} className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-all ${liked ? 'bg-red-50 text-red-500' : 'bg-slate-50 text-slate-400 hover:text-red-500'}`}>
              <Heart className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${liked ? 'fill-current' : ''}`} />
            </button>
          </div>
          <p className="text-[11px] sm:text-[13px] text-slate-500 mt-1 sm:mt-2 leading-relaxed line-clamp-1 sm:line-clamp-2">{product.description}</p>
          <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2 sm:mt-3">
            {product.specs.slice(0, 2).map((spec) => (
              <span key={spec.label} className="inline-flex items-center px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded sm:rounded-lg bg-slate-50 text-[9px] sm:text-[11px] text-slate-500">
                <span className="font-medium text-slate-600 mr-0.5 sm:mr-1 hidden sm:inline">{spec.label}:</span>{spec.value}
              </span>
            ))}
          </div>
          <div className="flex items-end justify-between mt-auto pt-2 sm:pt-3">
            <div className="flex items-baseline gap-1 sm:gap-2">
              <span className="text-base sm:text-lg lg:text-xl font-medium text-slate-900">{product.price.toLocaleString('ru-RU')} ₽</span>
              {product.oldPrice && (<span className="text-[11px] sm:text-sm text-slate-400 line-through hidden sm:inline">{product.oldPrice.toLocaleString('ru-RU')} ₽</span>)}
            </div>
            <div className={`flex items-center gap-1 text-[10px] sm:text-xs font-medium ${product.inStock ? 'text-emerald-600' : 'text-amber-600'}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${product.inStock ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              {product.inStock ? 'В наличии' : 'Под заказ'}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('cat') || 'all';
  const activeSubcategory = searchParams.get('sub') || 'all';
  const [sortBy, setSortBy] = useState('default');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [stockOnly, setStockOnly] = useState(false);

  const setCategory = (slug: string) => { if (slug === 'all') { searchParams.delete('cat'); } else { searchParams.set('cat', slug); } searchParams.delete('sub'); setSearchParams(searchParams); setShowFilters(false); };
  const setSubcategory = (slug: string) => { if (slug === 'all') { searchParams.delete('sub'); } else { searchParams.set('sub', slug); } setSearchParams(searchParams); };

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'all') result = result.filter((p) => p.category === activeCategory);
    if (activeSubcategory !== 'all' && activeCategory === 'design') { const subName = designSubcategories.find((s) => s.slug === activeSubcategory)?.name; if (subName) result = result.filter((p) => p.subcategory === subName); }
    if (stockOnly) result = result.filter((p) => p.inStock);
    switch (sortBy) { case 'price-asc': result.sort((a, b) => a.price - b.price); break; case 'price-desc': result.sort((a, b) => b.price - a.price); break; case 'name': result.sort((a, b) => a.name.localeCompare(b.name)); break; }
    return result;
  }, [activeCategory, activeSubcategory, sortBy, stockOnly]);

  const activeCatName = activeCategory === 'all' ? 'Все товары' : categories.find((c) => c.slug === activeCategory)?.name || 'Все товары';
  const activeSubName = activeSubcategory !== 'all' ? designSubcategories.find((s) => s.slug === activeSubcategory)?.name || null : null;

  const { search } = useLocation();
  useMemo(() => { window.scrollTo(0, 0); }, [search]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8 lg:py-10">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-slate-400 mb-2 sm:mb-3">
            <a href="#/" className="hover:text-blue-600 transition-colors">Главная</a>
            <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span className="text-slate-600 font-medium">Каталог</span>
            {activeCategory !== 'all' && (<><ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" /><span className={`font-medium truncate max-w-[120px] sm:max-w-none ${activeSubName ? 'text-slate-400 cursor-pointer hover:text-blue-600' : 'text-slate-600'}`} onClick={() => activeSubName && setSubcategory('all')}>{activeCatName}</span></>)}
            {activeSubName && (<><ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" /><span className="text-slate-600 font-medium truncate max-w-[120px] sm:max-w-none">{activeSubName}</span></>)}
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-900 mb-1">{activeCatName}</h1>
          <p className="text-[13px] sm:text-sm text-slate-500">{filteredProducts.length} {filteredProducts.length === 1 ? 'товар' : filteredProducts.length < 5 ? 'товара' : 'товаров'}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="lg:hidden mb-3 sm:mb-4 -mx-3 sm:-mx-6 px-3 sm:px-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button onClick={() => setCategory('all')} className={`shrink-0 px-3.5 py-2 rounded-full text-[13px] font-medium transition-all ${activeCategory === 'all' ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 active:bg-slate-100'}`}>Все</button>
            {categories.map((cat) => (<button key={cat.slug} onClick={() => setCategory(cat.slug)} className={`shrink-0 px-3.5 py-2 rounded-full text-[13px] font-medium transition-all ${activeCategory === cat.slug ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 active:bg-slate-100'}`}>{cat.name}</button>))}
          </div>
          {activeCategory === 'design' && (
            <div className="flex gap-1.5 overflow-x-auto pb-2 mt-2 scrollbar-hide">
              <button onClick={() => setSubcategory('all')} className={`shrink-0 px-3 py-1.5 rounded-full text-[12px] font-medium transition-all ${activeSubcategory === 'all' ? 'bg-violet-600 text-white shadow-sm' : 'bg-violet-50 text-violet-700 border border-violet-200 active:bg-violet-100'}`}>Все коллекции</button>
              {designSubcategories.map((sub) => (<button key={sub.slug} onClick={() => setSubcategory(sub.slug)} className={`shrink-0 px-3 py-1.5 rounded-full text-[12px] font-medium transition-all ${activeSubcategory === sub.slug ? 'bg-violet-600 text-white shadow-sm' : 'bg-violet-50 text-violet-700 border border-violet-200 active:bg-violet-100'}`}>{sub.name}</button>))}
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-36">
              <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-5 shadow-sm ring-1 ring-slate-900/5">
                <h3 className="text-[13px] font-medium text-slate-900 uppercase tracking-wider mb-3">Категории</h3>
                <div className="space-y-0.5">
                  <button onClick={() => setCategory('all')} className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-[14px] font-medium transition-all ${activeCategory === 'all' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                    <span>Все товары</span><span className="text-[11px] text-slate-400 bg-slate-100 rounded-md px-1.5 py-0.5">{products.length}</span>
                  </button>
                  {categories.map((cat) => (
                    <div key={cat.slug}>
                      <button onClick={() => setCategory(cat.slug)} className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-[14px] font-medium transition-all ${activeCategory === cat.slug ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                        <span>{cat.name}</span><span className="text-[11px] text-slate-400 bg-slate-100 rounded-md px-1.5 py-0.5">{products.filter((p) => p.category === cat.slug).length}</span>
                      </button>
                      {cat.slug === 'design' && activeCategory === 'design' && (
                        <div className="ml-3 mt-1 mb-1 space-y-0.5 border-l-2 border-violet-200 pl-3">
                          <button onClick={() => setSubcategory('all')} className={`w-full text-left px-2.5 py-2 rounded-lg text-[13px] font-medium transition-all ${activeSubcategory === 'all' ? 'bg-violet-50 text-violet-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'}`}>Все коллекции</button>
                          {designSubcategories.map((sub) => (
                            <button key={sub.slug} onClick={() => setSubcategory(sub.slug)} className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-[13px] font-medium transition-all ${activeSubcategory === sub.slug ? 'bg-violet-50 text-violet-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'}`}>
                              <span>{sub.name}</span><span className="text-[10px] text-slate-400 bg-slate-100 rounded px-1.5 py-0.5">{products.filter((p) => p.subcategory === sub.name).length}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm ring-1 ring-slate-900/5">
                <h3 className="text-[13px] font-medium text-slate-900 uppercase tracking-wider mb-3">Фильтры</h3>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all cursor-pointer ${stockOnly ? 'bg-blue-600 border-blue-600' : 'border-slate-300 group-hover:border-blue-400'}`} onClick={() => setStockOnly(!stockOnly)}>
                    {stockOnly && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <span className="text-[14px] text-slate-700 font-medium">Только в наличии</span>
                </label>
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 p-3 sm:p-4 lg:p-5 mb-4 sm:mb-6 shadow-sm ring-1 ring-slate-900/5">
              <div className="flex gap-2">
                <div className="flex-1 lg:hidden"></div>
                <button onClick={() => setShowFilters(!showFilters)} className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-lg sm:rounded-xl border transition-colors ${showFilters || stockOnly ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-slate-50 border-slate-200 text-slate-500 active:bg-slate-100'}`}>
                  <SlidersHorizontal className="h-4 w-4" />
                </button>
                <div className="relative hidden sm:block">
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="appearance-none pl-3 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl text-[13px] sm:text-[14px] text-slate-600 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all cursor-pointer h-10">
                    <option value="default">По умолчанию</option><option value="price-asc">Дешёвые</option><option value="price-desc">Дорогие</option><option value="name">По названию</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
                </div>
                <div className="hidden md:flex items-center border border-slate-200 rounded-xl overflow-hidden">
                  <button onClick={() => setViewMode('grid')} className={`p-2.5 transition-colors ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400 hover:text-slate-600'}`}><Grid3X3 className="h-4 w-4" /></button>
                  <button onClick={() => setViewMode('list')} className={`p-2.5 transition-colors ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400 hover:text-slate-600'}`}><List className="h-4 w-4" /></button>
                </div>
              </div>
              {showFilters && (
                <div className="lg:hidden mt-2.5 pt-2.5 border-t border-slate-100 space-y-3">
                  <div className="sm:hidden relative">
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="appearance-none w-full pl-3 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-[13px] text-slate-600 font-medium focus:outline-none cursor-pointer">
                      <option value="default">По умолчанию</option><option value="price-asc">Сначала дешёвые</option><option value="price-desc">Сначала дорогие</option><option value="name">По названию</option>
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
                  </div>
                  <label className="flex items-center gap-2.5 cursor-pointer">
                    <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${stockOnly ? 'bg-blue-600 border-blue-600' : 'border-slate-300'}`} onClick={() => setStockOnly(!stockOnly)}>{stockOnly && <Check className="h-3 w-3 text-white" />}</div>
                    <span className="text-[13px] text-slate-700 font-medium">Только в наличии</span>
                  </label>
                </div>
              )}
            </div>

            {(activeCategory !== 'all' || activeSubcategory !== 'all' || stockOnly) && (
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {activeCategory !== 'all' && (<span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-medium rounded-lg">{activeCatName}<button onClick={() => setCategory('all')} className="hover:text-blue-900 ml-0.5"><X className="h-3 w-3" /></button></span>)}
                {activeSubName && (<span className="inline-flex items-center gap-1 px-2.5 py-1 bg-violet-50 text-violet-700 text-[11px] sm:text-xs font-medium rounded-lg">{activeSubName}<button onClick={() => setSubcategory('all')} className="hover:text-violet-900 ml-0.5"><X className="h-3 w-3" /></button></span>)}
                {stockOnly && (<span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[11px] sm:text-xs font-medium rounded-lg">В наличии<button onClick={() => setStockOnly(false)} className="hover:text-emerald-900 ml-0.5"><X className="h-3 w-3" /></button></span>)}
                <button onClick={() => { setCategory('all'); setStockOnly(false); }} className="text-[11px] sm:text-xs text-slate-400 hover:text-slate-600 font-medium ml-1">Сбросить</button>
              </div>
            )}

            {filteredProducts.length > 0 ? (
              viewMode === 'grid' ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 lg:gap-4">
                  {filteredProducts.map((product) => (<ProductCard key={product.id} product={product} />))}
                </div>
              ) : (
                <div className="space-y-2.5 sm:space-y-3">
                  {filteredProducts.map((product) => (<ProductListCard key={product.id} product={product} />))}
                </div>
              )
            ) : (
              <div className="text-center py-12 sm:py-20">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4"><Package className="h-7 w-7 sm:h-8 sm:w-8 text-slate-300" /></div>
                <h3 className="text-base sm:text-lg font-medium text-slate-900 mb-1.5">Товары не найдены</h3>
                <p className="text-[13px] sm:text-sm text-slate-500 mb-5 max-w-sm mx-auto">Попробуйте выбрать другую категорию или сбросить фильтры наличия</p>
                <button onClick={() => { setCategory('all'); setStockOnly(false); }} className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white font-medium text-[13px] sm:text-sm rounded-xl hover:bg-blue-700 transition-colors">Сбросить фильтры</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
