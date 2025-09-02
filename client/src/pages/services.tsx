import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Filter, Wrench, Truck, Car, Bus, Settings, CheckCircle, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import { trackEvent } from "@/lib/analytics";

export default function Services() {
  const handleServiceOrder = (service: string) => {
    trackEvent('service_order', 'conversion', service);
  };

  const services = [
    {
      icon: Filter,
      title: "Чистка DPF фильтров",
      description: "Профессиональная ультразвуковая очистка сажевых фильтров всех типов",
      features: [
        "Ультразвуковая очистка",
        "Тестирование пропускной способности",
        "Восстановление до 98% эффективности",
        "Гарантия 12 месяцев",
        "Работаем с любыми марками"
      ],
      price: "от 250 BYN",
      category: "primary"
    },
    {
      icon: Wrench,
      title: "Диагностика и ремонт",
      description: "Компьютерная диагностика систем очистки выхлопных газов",
      features: [
        "OBD диагностика",
        "Считывание и сброс ошибок",
        "Принудительная регенерация",
        "Проверка датчиков",
        "Настройка параметров"
      ],
      price: "от 80 BYN",
      category: "secondary"
    },
    {
      icon: Settings,
      title: "Обслуживание DOC и SCR",
      description: "Чистка и восстановление всех компонентов системы aftertreatment",
      features: [
        "Чистка DOC катализатора",
        "Восстановление SCR системы",
        "Замена датчиков NOx",
        "Обслуживание AdBlue системы",
        "Комплексный подход"
      ],
      price: "от 150 BYN",
      category: "accent"
    },
    {
      icon: Car,
      title: "Легковые автомобили",
      description: "Специализированное обслуживание легковых дизельных автомобилей",
      features: [
        "BMW, Mercedes, Audi, VW",
        "Экспресс-диагностика",
        "Бережная очистка",
        "Сохранение гарантии",
        "Быстрое обслуживание"
      ],
      price: "250-350 BYN",
      category: "primary"
    },
    {
      icon: Bus,
      title: "Коммерческий транспорт",
      description: "Обслуживание микроавтобусов, фургонов и средних грузовиков",
      features: [
        "Sprinter, Crafter, Transit",
        "Приоритетное обслуживание",
        "Выезд к клиенту",
        "Минимальный простой",
        "Договор обслуживания"
      ],
      price: "450-550 BYN",
      category: "accent"
    },
    {
      icon: Truck,
      title: "Грузовой транспорт",
      description: "Профессиональное обслуживание большегрузного транспорта",
      features: [
        "MAN, Volvo, Scania, DAF",
        "Выездная бригада",
        "Спецоборудование",
        "Ускоренное обслуживание",
        "Скидки автопаркам"
      ],
      price: "от 650 BYN",
      category: "secondary"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Услуги по чистке DPF фильтров в Гродно | ЭкоДизель-Сервис</title>
        <meta 
          name="description" 
          content="Полный спектр услуг по чистке и обслуживанию DPF фильтров в Гродно. Диагностика, очистка, ремонт систем aftertreatment для всех марок авто." 
        />
      </Helmet>

      <Header />
      
      <Hero 
        title="Полный спектр услуг по обслуживанию DPF систем"
        subtitle="Диагностика, очистка, ремонт и обслуживание систем очистки выхлопных газов для всех типов транспорта"
        showStats={false}
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card border border-border">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                    service.category === 'primary' ? 'bg-primary/10' :
                    service.category === 'accent' ? 'bg-accent/10' :
                    'bg-green-500/10'
                  }`}>
                    <service.icon 
                      className={
                        service.category === 'primary' ? 'text-primary' :
                        service.category === 'accent' ? 'text-accent' :
                        'text-green-500'
                      } 
                      size={32} 
                    />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-2xl font-bold text-primary mb-4" data-testid={`price-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {service.price}
                  </div>
                  
                  <Button 
                    className="w-full group"
                    onClick={() => handleServiceOrder(service.title)}
                    data-testid={`button-order-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Заказать услугу
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-primary text-primary-foreground p-8 max-w-4xl mx-auto">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Нужна консультация специалиста?</h3>
                <p className="text-primary-foreground/80 mb-6">
                  Не знаете, какая услуга вам нужна? Наши эксперты помогут определить проблему и подобрать оптимальное решение.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button 
                      variant="secondary" 
                      className="px-8 py-3"
                      data-testid="button-expert-consultation"
                    >
                      Консультация эксперта
                    </Button>
                  </Link>
                  <a href="tel:+375152123456">
                    <Button 
                      variant="outline" 
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-3"
                      data-testid="button-call-expert"
                    >
                      Позвонить сейчас
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
