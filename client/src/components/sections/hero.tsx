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
    <section className="py-12 md:py-20 text-white relative overflow-hidden min-h-[500px] md:min-h-[600px]">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1556783151-c6d5e7d296bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080')`,
          filter: 'blur(8px)',
          transform: 'scale(1.1)'
        }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="w-full max-w-4xl">
          <div className="fade-in text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-gray-100 max-w-3xl mx-auto md:mx-0">
              {subtitle}
            </p>
            
            {showCTA && (
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-8 md:mb-12 justify-center md:justify-start">
                <Button 
                  className="bg-accent text-accent-foreground px-6 md:px-10 py-4 md:py-5 text-lg md:text-xl font-semibold hover:bg-accent/90 h-auto shadow-lg"
                  onClick={handleCalculatorClick}
                  data-testid="button-calculator"
                >
                  <Calculator className="mr-3" size={20} />
                  <span className="hidden sm:inline">Рассчитать стоимость</span>
                  <span className="sm:hidden">Расчет</span>
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 px-6 md:px-10 py-4 md:py-5 text-lg md:text-xl font-semibold hover:bg-white/20 h-auto backdrop-blur-sm shadow-lg"
                  onClick={handleConsultationClick}
                  data-testid="button-consultation"
                >
                  <Phone className="mr-3" size={20} />
                  <span className="hidden sm:inline">Получить консультацию</span>
                  <span className="sm:hidden">Консультация</span>
                </Button>
              </div>
            )}
            
            {showStats && (
              <div className="grid grid-cols-3 gap-6 md:gap-12 text-center max-w-2xl mx-auto md:mx-0">
                <div data-testid="stat-filters">
                  <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-accent mb-2">300+</div>
                  <div className="text-sm md:text-base text-gray-200">Очищенных фильтров</div>
                </div>
                <div data-testid="stat-restoration">
                  <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-accent mb-2">98%</div>
                  <div className="text-sm md:text-base text-gray-200">Восстановление</div>
                </div>
                <div data-testid="stat-warranty">
                  <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-accent mb-2">6</div>
                  <div className="text-sm md:text-base text-gray-200">Месяцев гарантии</div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Badge positioned absolutely */}
        <div className="absolute bottom-6 right-6 bg-card text-foreground p-3 md:p-4 rounded-xl shadow-lg">
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
    </section>
  );
}
