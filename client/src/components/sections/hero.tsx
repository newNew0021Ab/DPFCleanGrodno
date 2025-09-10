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
    <section className="hero-gradient py-16 md:py-24 lg:py-32 text-white relative overflow-hidden min-h-[600px] md:min-h-[700px]">
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10 h-full flex items-center justify-center">
        <div className="w-full max-w-6xl">
          <div className="fade-in text-center mx-auto py-8 md:py-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 md:mb-10 text-white px-4">
              {title}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 md:mb-16 text-blue-100 max-w-5xl mx-auto leading-relaxed px-4">
              {subtitle}
            </p>
            
            {showCTA && (
              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 mb-16 md:mb-20 justify-center px-4">
                <Button 
                  className="bg-accent text-accent-foreground px-8 md:px-12 py-5 md:py-6 text-xl md:text-2xl font-semibold hover:bg-accent/90 h-auto shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={handleCalculatorClick}
                  data-testid="button-calculator"
                >
                  <Calculator className="mr-3" size={24} />
                  <span className="hidden sm:inline">Рассчитать стоимость</span>
                  <span className="sm:hidden">Расчет</span>
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 px-8 md:px-12 py-5 md:py-6 text-xl md:text-2xl font-semibold hover:bg-white/20 h-auto backdrop-blur-sm shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={handleConsultationClick}
                  data-testid="button-consultation"
                >
                  <Phone className="mr-3" size={24} />
                  <span className="hidden sm:inline">Получить консультацию</span>
                  <span className="sm:hidden">Консультация</span>
                </Button>
              </div>
            )}
            
            {showStats && (
              <div className="grid grid-cols-3 gap-6 md:gap-12 lg:gap-16 text-center max-w-4xl mx-auto px-4">
                <div data-testid="stat-filters">
                  <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-accent mb-3 md:mb-4">300+</div>
                  <div className="text-base md:text-lg lg:text-xl text-blue-100 font-medium">Очищенных фильтров</div>
                </div>
                <div data-testid="stat-restoration">
                  <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-accent mb-3 md:mb-4">98%</div>
                  <div className="text-base md:text-lg lg:text-xl text-blue-100 font-medium">Восстановление</div>
                </div>
                <div data-testid="stat-warranty">
                  <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-accent mb-3 md:mb-4">6</div>
                  <div className="text-base md:text-lg lg:text-xl text-blue-100 font-medium">Месяцев гарантии</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
