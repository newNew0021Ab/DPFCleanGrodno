import { Button } from "@/components/ui/button";
import { Calculator, Phone, CheckCircle, Shield, Clock, Award, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface HeroProps {
  title: string;
  subtitle: string;
  showCTA?: boolean;
  showStats?: boolean;
}

export default function Hero({ title, subtitle, showCTA = true, showStats = true }: HeroProps) {
  const handleCalculatorClick = () => {
    trackEvent('calculator_click', 'conversion', 'hero_calculator');
  };

  const handleConsultationClick = () => {
    trackEvent('consultation_click', 'conversion', 'hero_consultation');
  };

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-blue-700">
      {/* Декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      {/* Геометрические формы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white/20 rounded-lg rotate-45 hidden md:block"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 border-2 border-accent/30 rounded-full hidden lg:block"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-white/10 rounded-full hidden xl:block"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-12">
          {/* Левая часть - контент */}
          <div className="space-y-8">
            {/* Бейдж */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">
              <Shield size={16} className="text-accent" />
              Профессиональная очистка в Гродно
            </div>

            {/* Заголовок */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-xl">
                {subtitle}
              </p>
            </div>

            {/* Ключевые преимущества */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">98%</div>
                  <div className="text-blue-200 text-sm">восстановление</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">1-2 дня</div>
                  <div className="text-blue-200 text-sm">выполнение</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Award size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">6 мес</div>
                  <div className="text-blue-200 text-sm">гарантия</div>
                </div>
              </div>
            </div>

            {/* Кнопки действий */}
            {showCTA && (
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  onClick={handleCalculatorClick}
                  data-testid="button-calculator"
                >
                  <Calculator className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                  Рассчитать стоимость
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
                  onClick={handleConsultationClick}
                  data-testid="button-consultation"
                >
                  <Phone className="mr-3" size={20} />
                  Бесплатная консультация
                </Button>
              </div>
            )}
          </div>

          {/* Правая часть - визуальная информация */}
          <div className="relative">
            {/* Главная статистическая карточка */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md ml-auto">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-primary rounded-2xl mx-auto flex items-center justify-center">
                  <Shield size={32} className="text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Гарантия качества</h3>
                  <p className="text-gray-600">Профессиональное оборудование и многолетний опыт</p>
                </div>

                {showStats && (
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                    <div className="text-center" data-testid="stat-filters">
                      <div className="text-2xl font-bold text-primary">300+</div>
                      <div className="text-xs text-gray-500">фильтров</div>
                    </div>
                    <div className="text-center" data-testid="stat-restoration">
                      <div className="text-2xl font-bold text-green-600">98%</div>
                      <div className="text-xs text-gray-500">успешно</div>
                    </div>
                    <div className="text-center" data-testid="stat-warranty">
                      <div className="text-2xl font-bold text-accent">6</div>
                      <div className="text-xs text-gray-500">месяцев</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Дополнительные карточки */}
            <div className="absolute -top-8 -left-8 bg-accent rounded-2xl p-6 shadow-xl hidden lg:block">
              <div className="text-white text-center">
                <div className="text-3xl font-bold">15 мин</div>
                <div className="text-accent-foreground/80 text-sm">диагностика</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-green-500 rounded-2xl p-6 shadow-xl hidden lg:block">
              <div className="text-white text-center">
                <div className="text-3xl font-bold">5x</div>
                <div className="text-green-100 text-sm">экономия</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Волновой элемент внизу */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}