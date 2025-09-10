import { Button } from "@/components/ui/button";
import { Calculator, Phone, Award, Clock, TrendingUp } from "lucide-react";
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
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[80vh] flex-col justify-center py-20 lg:py-32">
          
          {/* Main Content */}
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm border border-white/20 mb-8">
              <Award className="mr-2 h-4 w-4" />
              Профессиональная чистка в Гродно
            </div>

            {/* Title */}
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="block">{title}</span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100 sm:text-xl lg:text-2xl">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            {showCTA && (
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
                <Button
                  onClick={handleCalculatorClick}
                  size="lg"
                  className="bg-orange-500 text-white hover:bg-orange-600 font-semibold px-8 py-4 text-lg shadow-xl transition-all duration-200 hover:scale-105 hover:shadow-2xl"
                  data-testid="button-calculator"
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Рассчитать стоимость
                </Button>
                
                <Button
                  onClick={handleConsultationClick}
                  variant="outline"
                  size="lg"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 font-semibold px-8 py-4 text-lg backdrop-blur-sm transition-all duration-200 hover:scale-105"
                  data-testid="button-consultation"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Получить консультацию
                </Button>
              </div>
            )}

            {/* Stats */}
            {showStats && (
              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/20 backdrop-blur-sm mb-4">
                    <TrendingUp className="h-8 w-8 text-orange-400" />
                  </div>
                  <dt className="text-3xl font-bold text-orange-400 sm:text-4xl" data-testid="stat-filters">
                    300+
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-blue-100 font-medium">
                    Очищенных фильтров
                  </dd>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 backdrop-blur-sm mb-4">
                    <Award className="h-8 w-8 text-green-400" />
                  </div>
                  <dt className="text-3xl font-bold text-green-400 sm:text-4xl" data-testid="stat-restoration">
                    98%
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-blue-100 font-medium">
                    Восстановление
                  </dd>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-400/20 backdrop-blur-sm mb-4">
                    <Clock className="h-8 w-8 text-blue-300" />
                  </div>
                  <dt className="text-3xl font-bold text-blue-300 sm:text-4xl" data-testid="stat-warranty">
                    6
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-blue-100 font-medium">
                    Месяцев гарантии
                  </dd>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
    </section>
  );
}