import { Button } from "@/components/ui/button";
import { Calculator, Phone, CheckCircle } from "lucide-react";
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
    <section className="hero-gradient py-12 md:py-20 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100">
              {subtitle}
            </p>
            
            {showCTA && (
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
                <Button 
                  className="bg-accent text-accent-foreground px-4 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold hover:bg-accent/90 h-auto"
                  onClick={handleCalculatorClick}
                  data-testid="button-calculator"
                >
                  <Calculator className="mr-2" size={18} />
                  <span className="hidden sm:inline">Рассчитать стоимость</span>
                  <span className="sm:hidden">Расчет</span>
                </Button>
                <Button 
                  variant="outline"
                  className="px-4 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold h-auto bg-white text-blue-900 border-white shadow sm:bg-white/10 sm:text-white sm:border-white/20 sm:hover:bg-white/20"
                  onClick={handleConsultationClick}
                  data-testid="button-consultation"
                >
                  <Phone className="mr-2" size={18} />
                  <span className="hidden sm:inline">Получить консультацию</span>
                  <span className="sm:hidden">Консультация</span>
                </Button>
              </div>
            )}
            
            {showStats && (
              <div className="grid grid-cols-3 gap-3 md:gap-6 text-center">
                <div data-testid="stat-filters">
                  <div className="text-xl md:text-3xl font-bold text-accent">300+</div>
                  <div className="text-xs md:text-sm text-blue-100">Очищенных фильтров</div>
                </div>
                <div data-testid="stat-restoration">
                  <div className="text-xl md:text-3xl font-bold text-accent">98%</div>
                  <div className="text-xs md:text-sm text-blue-100">Восстановление</div>
                </div>
                <div data-testid="stat-warranty">
                  <div className="text-xl md:text-3xl font-bold text-accent">6</div>
                  <div className="text-xs md:text-sm text-blue-100">Месяцев гарантии</div>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556783151-c6d5e7d296bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400" 
              alt="Профессиональное оборудование для чистки DPF фильтров" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="hero-image"
            />
            
            <div className="absolute -bottom-3 md:-bottom-6 -right-3 md:-right-6 bg-card text-foreground p-3 md:p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-white" size={16} />
                </div>
                <div>
                  <p className="font-semibold">Работаем в Гродно</p>
                  <p className="text-sm text-muted-foreground">Быстрый результат</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
    </section>
  );
}
