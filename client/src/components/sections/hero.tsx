import { Button } from "@/components/ui/button";
import { Calculator, Phone } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import heroBackground from "@assets/generated_images/Minimalist_exhaust_pipe_closeup_b3e9bc77.png";

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
    <section className="py-20 md:py-32 text-white relative overflow-hidden min-h-[600px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
          filter: 'blur(3px)',
          transform: 'scale(1.05)'
        }}
      ></div>
      
      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/95 via-blue-700/90 to-blue-800/95"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto">
            {subtitle}
          </p>
          
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-6 mb-16 justify-center">
              <Button 
                className="bg-accent text-accent-foreground px-8 py-4 text-lg font-semibold hover:bg-accent/90 h-auto"
                onClick={handleCalculatorClick}
                data-testid="button-calculator"
              >
                <Calculator className="mr-2" size={20} />
                Рассчитать стоимость
              </Button>
              <Button 
                variant="outline"
                className="bg-white/10 text-white border-white/30 px-8 py-4 text-lg font-semibold hover:bg-white/20 h-auto"
                onClick={handleConsultationClick}
                data-testid="button-consultation"
              >
                <Phone className="mr-2" size={20} />
                Получить консультацию
              </Button>
            </div>
          )}
          
          {showStats && (
            <div className="grid grid-cols-3 gap-8 md:gap-16 text-center">
              <div data-testid="stat-filters">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">300+</div>
                <div className="text-base md:text-lg text-blue-100">Очищенных фильтров</div>
              </div>
              <div data-testid="stat-restoration">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">98%</div>
                <div className="text-base md:text-lg text-blue-100">Восстановление</div>
              </div>
              <div data-testid="stat-warranty">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">6</div>
                <div className="text-base md:text-lg text-blue-100">Месяцев гарантии</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}