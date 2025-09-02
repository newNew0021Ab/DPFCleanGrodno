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
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-24 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-50 font-light">
              {subtitle}
            </p>
            
            {showCTA && (
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  className="bg-white text-blue-600 px-10 py-5 text-lg font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl h-auto rounded-full"
                  onClick={handleCalculatorClick}
                  data-testid="button-calculator"
                >
                  <Calculator className="mr-3" size={22} />
                  Рассчитать стоимость
                </Button>
                <Button 
                  variant="outline"
                  className="bg-transparent text-white border-2 border-white/30 px-10 py-5 text-lg font-bold hover:bg-white/10 backdrop-blur-sm h-auto rounded-full transition-all duration-300 hover:scale-105"
                  onClick={handleConsultationClick}
                  data-testid="button-consultation"
                >
                  <Phone className="mr-3" size={22} />
                  Получить консультацию
                </Button>
              </div>
            )}
            
            {showStats && (
              <div className="grid grid-cols-3 gap-8 text-center">
                <div data-testid="stat-filters">
                  <div className="text-4xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">500+</div>
                  <div className="text-sm text-blue-100 font-medium">Очищенных фильтров</div>
                </div>
                <div data-testid="stat-restoration">
                  <div className="text-3xl font-bold text-accent">98%</div>
                  <div className="text-sm text-blue-100">Восстановление</div>
                </div>
                <div data-testid="stat-warranty">
                  <div className="text-3xl font-bold text-accent">12</div>
                  <div className="text-sm text-blue-100">Месяцев гарантии</div>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Профессиональное оборудование для чистки DPF фильтров" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="hero-image"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-card text-foreground p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-white" size={20} />
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
