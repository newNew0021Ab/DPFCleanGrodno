import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Car, Bus, Truck, Shield, Calculator } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import PricingCalculator from "@/components/sections/pricing-calculator";
import { trackEvent } from "@/lib/analytics";

export default function Prices() {
  const [activeTab, setActiveTab] = useState("passenger");

  const handleOrderService = (serviceType: string, price: string) => {
    trackEvent('service_order', 'conversion', serviceType, parseInt(price));
  };

  const pricingPlans = {
    passenger: [
      {
        title: "Базовый",
        price: "250",
        description: "Для легковых автомобилей",
        features: [
          "Диагностика включена",
          "Ультразвуковая очистка",
          "Гарантия 6 месяцев",
          "Сброс счетчиков"
        ],
        recommended: false
      },
      {
        title: "Стандарт",
        price: "300",
        description: "Расширенный пакет",
        features: [
          "Расширенная диагностика",
          "Премиум очистка",
          "Гарантия 12 месяцев",
          "Чистка DOC катализатора",
          "Проверка датчиков"
        ],
        recommended: true
      },
      {
        title: "Премиум",
        price: "400",
        description: "Максимальный сервис",
        features: [
          "Комплексная диагностика",
          "Профессиональная очистка",
          "Гарантия 18 месяцев",
          "Обслуживание всей системы",
          "Выезд к клиенту",
          "Приоритетная поддержка"
        ],
        recommended: false
      }
    ],
    commercial: [
      {
        title: "Коммерческий",
        price: "450",
        description: "Для микроавтобусов и фургонов",
        features: [
          "Расширенная диагностика",
          "Промышленная очистка",
          "Гарантия 12 месяцев",
          "Приоритетное обслуживание",
          "Техподдержка 24/7"
        ],
        recommended: true
      },
      {
        title: "Коммерческий+",
        price: "550",
        description: "С выездом к клиенту",
        features: [
          "Выезд в удобное место",
          "Мобильное оборудование",
          "Минимальный простой",
          "Экстренное обслуживание",
          "Индивидуальные условия"
        ],
        recommended: false
      }
    ],
    truck: [
      {
        title: "Грузовой",
        price: "650",
        description: "Для большегрузного транспорта",
        features: [
          "Выезд к клиенту",
          "Спецоборудование",
          "Договор обслуживания",
          "Скидки автопаркам",
          "Техподдержка"
        ],
        recommended: false
      },
      {
        title: "Автопарк",
        price: "от 500",
        description: "Для автопарков от 5 единиц",
        features: [
          "Индивидуальные тарифы",
          "Плановое обслуживание",
          "Приоритетная очередь",
          "Отсрочка платежа",
          "Персональный менеджер",
          "Скидки до 30%"
        ],
        recommended: true
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Цены на чистку DPF фильтров в Гродно | Прозрачные тарифы</title>
        <meta 
          name="description" 
          content="Актуальные цены на чистку DPF фильтров в Гродно. Фиксированные тарифы для легковых, коммерческих и грузовых автомобилей. Скидки автопаркам." 
        />
      </Helmet>

      <Header />
      
      <Hero 
        title="Прозрачные цены на чистку DPF фильтров"
        subtitle="Фиксированная стоимость без скрытых доплат • Скидки для автопарков • Гарантия или возврат денег"
        showStats={false}
      />

      {/* Pricing Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Калькулятор стоимости</h2>
            <p className="text-xl text-muted-foreground">
              Узнайте стоимость обслуживания вашего автомобиля
            </p>
          </div>
          
          <PricingCalculator />
        </div>
      </section>

      {/* Detailed Pricing */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Детальные тарифы</h2>
            <p className="text-xl text-muted-foreground">
              Выберите категорию вашего транспорта
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="passenger" className="flex items-center gap-2" data-testid="tab-passenger">
                <Car size={16} />
                Легковые
              </TabsTrigger>
              <TabsTrigger value="commercial" className="flex items-center gap-2" data-testid="tab-commercial">
                <Bus size={16} />
                Коммерческие
              </TabsTrigger>
              <TabsTrigger value="truck" className="flex items-center gap-2" data-testid="tab-truck">
                <Truck size={16} />
                Грузовые
              </TabsTrigger>
            </TabsList>

            {Object.entries(pricingPlans).map(([category, plans]) => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {plans.map((plan, index) => (
                    <Card 
                      key={index} 
                      className={`relative border ${
                        plan.recommended 
                          ? 'border-accent bg-accent text-accent-foreground' 
                          : 'border-border bg-card'
                      }`}
                    >
                      {plan.recommended && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-white text-accent px-4 py-1">
                            Популярно
                          </Badge>
                        </div>
                      )}
                      
                      <CardHeader>
                        <CardTitle className="text-center">
                          <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                          <p className={`text-sm ${plan.recommended ? 'text-accent-foreground/80' : 'text-muted-foreground'}`}>
                            {plan.description}
                          </p>
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="text-center mb-6">
                          <div className="text-4xl font-bold mb-1" data-testid={`price-${plan.title.toLowerCase()}`}>
                            {plan.price} BYN
                          </div>
                          <p className={`text-sm ${plan.recommended ? 'text-accent-foreground/80' : 'text-muted-foreground'}`}>
                            за услугу
                          </p>
                        </div>
                        
                        <ul className="space-y-3 mb-8">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <CheckCircle 
                                className={`mr-3 flex-shrink-0 ${
                                  plan.recommended ? 'text-white' : 'text-green-500'
                                }`} 
                                size={16} 
                              />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Button 
                          className={`w-full ${
                            plan.recommended 
                              ? 'bg-white text-accent hover:bg-gray-100' 
                              : 'bg-primary text-primary-foreground hover:bg-primary/90'
                          }`}
                          onClick={() => handleOrderService(plan.title, plan.price)}
                          data-testid={`button-order-${plan.title.toLowerCase()}`}
                        >
                          Заказать услугу
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Guarantee Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center bg-green-500/10 text-green-600 px-6 py-3 rounded-full">
              <Shield className="mr-2" size={20} />
              <span className="font-medium">Если фильтр не восстановится - деньги вернем!</span>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Дополнительные услуги</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Экспресс-диагностика</h4>
                  <p className="text-2xl font-bold text-primary" data-testid="price-express-diagnostics">80 BYN</p>
                  <p className="text-sm text-muted-foreground">15 минут</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Выезд к клиенту</h4>
                  <p className="text-2xl font-bold text-primary" data-testid="price-mobile-service">+150 BYN</p>
                  <p className="text-sm text-muted-foreground">в пределах Гродно</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Срочное обслуживание</h4>
                  <p className="text-2xl font-bold text-primary" data-testid="price-urgent-service">+100 BYN</p>
                  <p className="text-sm text-muted-foreground">в течение 2 часов</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Замена прокладок</h4>
                  <p className="text-2xl font-bold text-primary" data-testid="price-gasket-replacement">50 BYN</p>
                  <p className="text-sm text-muted-foreground">при необходимости</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
