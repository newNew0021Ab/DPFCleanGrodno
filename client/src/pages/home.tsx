import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Filter, Wrench, Truck, Star, Clock, Shield, Award } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import QuickContact from "@/components/sections/quick-contact";
import { trackEvent } from "@/lib/analytics";
import { Testimonial } from "@/../../shared/schema";

export default function Home() {
  const { data: testimonials } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  const handleServiceClick = (service: string) => {
    trackEvent('service_click', 'navigation', service);
  };

  return (
    <>
      <Helmet>
        <title>Профессиональная чистка DPF фильтров в Гродно | ЭкоДизель-Сервис</title>
        <meta 
          name="description" 
          content="Профессиональная чистка сажевых фильтров (DPF) в Гродно. Гарантия 12 месяцев, восстановление до 98% эффективности. Обслуживаем легковые и грузовые автомобили." 
        />
        <meta 
          name="keywords" 
          content="чистка DPF фильтров Гродно, сажевые фильтры, промывка фильтров, DPF cleaning, диагностика авто Гродно" 
        />
      </Helmet>
      
      <Header />
      
      <Hero 
        title="Профессиональная чистка DPF фильтров в Гродно"
        subtitle="Восстанавливаем до 98% эффективности • Гарантия 12 месяцев • Экономия до 15 000 BYN на замене"
      />
      
      <QuickContact />

      {/* Services Preview */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Полный спектр услуг по обслуживанию систем очистки выхлопных газов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Service Card 1 */}
            <Card className="service-card border border-border">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Filter className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Чистка DPF фильтров</h3>
                <p className="text-muted-foreground mb-6">
                  Профессиональная очистка сажевых фильтров с гарантией восстановления до 98% эффективности
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    <span className="text-sm">Ультразвуковая очистка</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    <span className="text-sm">Тестирование до/после</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    <span className="text-sm">12 месяцев гарантии</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold text-primary mb-4" data-testid="price-dpf-cleaning">от 250 BYN</div>
                <Link href="/services">
                  <Button 
                    className="w-full"
                    onClick={() => handleServiceClick('dpf_cleaning')}
                    data-testid="button-service-dpf"
                  >
                    Подробнее
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Service Card 2 */}
            <Card className="service-card border border-border">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Wrench className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Диагностика и ремонт</h3>
                <p className="text-muted-foreground mb-6">
                  Компьютерная диагностика систем очистки выхлопных газов и устранение неисправностей
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    <span className="text-sm">OBD диагностика</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    <span className="text-sm">Сброс ошибок</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    <span className="text-sm">Принудительная регенерация</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold text-primary mb-4" data-testid="price-diagnostics">от 80 BYN</div>
                <Link href="/services">
                  <Button 
                    className="w-full"
                    onClick={() => handleServiceClick('diagnostics')}
                    data-testid="button-service-diagnostics"
                  >
                    Подробнее
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Service Card 3 */}
            <Card className="service-card border border-border">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Truck className="text-green-500" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Обслуживание автопарков</h3>
                <p className="text-muted-foreground mb-6">
                  Комплексное обслуживание коммерческого транспорта с выездом к клиенту
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    <span className="text-sm">Выезд на место</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    <span className="text-sm">Индивидуальные тарифы</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    <span className="text-sm">Договор обслуживания</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold text-primary mb-4" data-testid="price-fleet">по договору</div>
                <Link href="/services">
                  <Button 
                    className="w-full"
                    onClick={() => handleServiceClick('fleet_service')}
                    data-testid="button-service-fleet"
                  >
                    Подробнее
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-lg md:text-xl text-muted-foreground px-4">
              Преимущества работы с ЭкоДизель-Сервис
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Гарантия результата</h3>
              <p className="text-muted-foreground text-sm">
                Если фильтр не восстановится - вернем деньги
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-accent" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Быстрый сервис</h3>
              <p className="text-muted-foreground text-sm">
                Очистка фильтра за 3-4 часа в день обращения
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-green-500" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Опыт и экспертиза</h3>
              <p className="text-muted-foreground text-sm">
                Более 5 лет в сфере обслуживания DPF систем
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-tools text-blue-500 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Современное оборудование</h3>
              <p className="text-muted-foreground text-sm">
                Ультразвуковые установки последнего поколения
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials && testimonials.length > 0 && (
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
              <p className="text-xl text-muted-foreground">
                Что говорят о нас наши клиенты
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((testimonial) => (
                <Card key={testimonial.id} className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary-foreground font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold" data-testid={`testimonial-name-${testimonial.id}`}>
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground" data-testid={`testimonial-car-${testimonial.id}`}>
                          {testimonial.carModel}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-500 fill-current" size={16} />
                      ))}
                    </div>
                    <p className="text-muted-foreground" data-testid={`testimonial-comment-${testimonial.id}`}>
                      {testimonial.comment}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/gallery">
                <Button 
                  variant="outline" 
                  className="px-8 py-3"
                  data-testid="button-all-testimonials"
                >
                  Все отзывы
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
