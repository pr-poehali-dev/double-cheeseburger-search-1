import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => setIsSearching(false), 1000);
  };

  const searchResults = [
    {
      id: 1,
      title: 'Лучший поиск в интернете',
      description: 'Найдите все что угодно с нашим инновационным поисковиком',
      category: 'Основной'
    },
    {
      id: 2, 
      title: 'Быстрые результаты',
      description: 'Мгновенные ответы на любые вопросы',
      category: 'Скорость'
    },
    {
      id: 3,
      title: 'Точность поиска',
      description: 'Самые релевантные результаты для ваших запросов',
      category: 'Качество'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <img src="/img/a0f7ce89-ba94-4f83-8f46-7039163f4d43.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-yellow-100 opacity-60"></div>
        <div className="relative container mx-auto px-4 py-20 text-center z-10">
          {/* Burger Hero Image */}
          <div className="mb-8">
            <img src="/img/2341887b-1890-4acf-aaca-7050ee06d181.jpg" alt="Двойной чизбургер" className="w-32 h-32 mx-auto rounded-full border-4 border-cheese shadow-xl animate-bounce-gentle" />
          </div>
          <h1 className="text-6xl font-black mb-4 text-bun tracking-tight drop-shadow-lg" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
            ПОИСКОВИК
          </h1>
          <h2 className="text-4xl font-black mb-8 text-tomato drop-shadow-md" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
            ДВОЙНОЙ ЧИЗБУРГЕР
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto font-medium">
            Самый вкусный поиск в сети! Найдите все что нужно с нашим уникальным поисковиком в стиле двойного чизбургера
          </p>

          {/* Burger Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              {/* Top Bun */}
              <div className="h-8 bg-bun rounded-t-full border-4 border-orange-300 shadow-lg mb-1 animate-bounce-gentle"></div>
              
              {/* Cheese Layer with stretch animation */}
              <div className="h-3 bg-cheese shadow-md animate-cheese-stretch transform-gpu"></div>
              
              {/* Main Search Input (Meat) */}
              <div className="relative bg-gradient-to-r from-red-800 to-red-900 p-4 shadow-xl">
                <div className="flex gap-3">
                  <Input
                    type="text"
                    placeholder="Что будем искать?..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 text-lg px-6 py-4 rounded-full border-2 border-orange-300 bg-white/95 placeholder:text-gray-500 focus:border-cheese focus:ring-2 focus:ring-cheese/20 font-medium"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <Button
                    onClick={handleSearch}
                    disabled={isSearching}
                    className="px-8 py-4 bg-cheese hover:bg-orange-600 text-white font-bold text-lg rounded-full border-4 border-orange-300 hover:border-orange-400 transition-all duration-200 hover:scale-105 shadow-lg"
                  >
                    {isSearching ? (
                      <Icon name="Loader2" className="animate-spin" size={24} />
                    ) : (
                      <Icon name="Search" size={24} />
                    )}
                  </Button>
                </div>
              </div>
              
              {/* Lettuce */}
              <div className="h-2 bg-lettuce shadow-md"></div>
              
              {/* Tomato */}
              <div className="h-3 bg-tomato shadow-md"></div>
              
              {/* Second Cheese Layer */}
              <div className="h-3 bg-cheese shadow-md animate-cheese-stretch animation-delay-300"></div>
              
              {/* Bottom Bun */}
              <div className="h-8 bg-bun rounded-b-full border-4 border-orange-300 shadow-lg mt-1"></div>
            </div>
          </div>

          {/* Search Results */}
          {searchQuery && (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-black mb-8 text-bun" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
                РЕЗУЛЬТАТЫ ПОИСКА
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {searchResults.map((result) => (
                  <Card key={result.id} className="hover:scale-105 transition-transform duration-200 border-4 border-orange-200 shadow-lg bg-white/90 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-cheese text-white text-sm font-bold rounded-full border-2 border-orange-300">
                          {result.category}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold mb-3 text-bun">
                        {result.title}
                      </h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {result.description}
                      </p>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-full border-2 border-orange-300 hover:border-orange-400 transition-all duration-200">
                        ПЕРЕЙТИ
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white/80">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-black text-center mb-16 text-bun" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
            ПОЧЕМУ МЫ ЛУЧШИЕ?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-b from-cheese/20 to-orange-100 rounded-2xl border-4 border-orange-200">
              <div className="text-6xl mb-4">🍔</div>
              <h4 className="text-xl font-bold mb-3 text-bun">БЫСТРО</h4>
              <p className="text-gray-600">Результаты поиска быстрее чем приготовление бургера!</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-tomato/20 to-red-100 rounded-2xl border-4 border-red-200">
              <div className="text-6xl mb-4">🧀</div>
              <h4 className="text-xl font-bold mb-3 text-bun">ТОЧНО</h4>
              <p className="text-gray-600">Каждый результат тщательно отобран как ингредиенты!</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-lettuce/20 to-green-100 rounded-2xl border-4 border-green-200">
              <div className="text-6xl mb-4">🥬</div>
              <h4 className="text-xl font-bold mb-3 text-bun">СВЕЖО</h4>
              <p className="text-gray-600">Самая актуальная информация из интернета!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;