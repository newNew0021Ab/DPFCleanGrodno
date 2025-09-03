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
        <title>Профессиональная чистка DPF фильтров в Гродно | ReFilter</title>
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
        subtitle="Восстанавливаем до 99% эффективности • Гарантия 6 месяцев • Экономия до 15 000 BYN на замене • Экспресс-диагностика за 15 минут"
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
                <div className="text-2xl font-bold text-primary mb-4" data-testid="price-dpf-cleaning">от 390 BYN</div>
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
                <div className="text-2xl font-bold text-primary mb-4" data-testid="price-diagnostics">БЕСПЛАТНО</div>
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

      {/* Statistics and Achievements */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-green-500/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Наши достижения</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Цифры, которые говорят о качестве нашей работы
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="stat-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 animate-pulse-gentle" data-testid="stat-filters-cleaned">2500+</div>
                <p className="text-muted-foreground font-medium">фильтров очищено</p>
              </div>
            </div>

            <div className="text-center">
              <div className="stat-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2 animate-pulse-gentle" data-testid="stat-success-rate">99%</div>
                <p className="text-muted-foreground font-medium">успешных восстановлений</p>
              </div>
            </div>

            <div className="text-center">
              <div className="stat-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2 animate-pulse-gentle" data-testid="stat-experience">5+</div>
                <p className="text-muted-foreground font-medium">лет опыта</p>
              </div>
            </div>

            <div className="text-center">
              <div className="stat-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2 animate-pulse-gentle" data-testid="stat-guarantee">6</div>
                <p className="text-muted-foreground font-medium">месяцев гарантии</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-3xl p-8 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clock text-primary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Экспресс-диагностика</h3>
                <p className="text-muted-foreground">Оценим состояние фильтра за 15 минут в вашем присутствии</p>
              </div>

              <div>
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shipping-fast text-green-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Бесплатная доставка</h3>
                <p className="text-muted-foreground">Забираем и доставляем по всей Беларуси бесплатно</p>
              </div>

              <div>
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-certificate text-blue-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Фото-отчет</h3>
                <p className="text-muted-foreground">Наглядно покажем результат до и после очистки</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology and Equipment Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Современные технологии</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Используем профессиональное оборудование и передовые методы очистки
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Гидродинамическая очистка</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong>4-этапная жидкостная чистка</strong> — промывка в двух направлениях с анализом частиц на каждом этапе
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong>Температурный режим 70°C</strong> — оптимальная температура раствора для эффективного растворения отложений
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong>Специальные моющие составы</strong> — безопасны для керамической структуры фильтра
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong>Контроль противодавления</strong> — измерение до и после очистки с печатью отчета
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-primary/10 rounded-3xl p-8">
              <h4 className="text-xl font-bold mb-4">Что удаляется при очистке:</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-gray-800 mb-1">99%</div>
                  <div className="text-sm text-muted-foreground">сажи и нагара</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">95%</div>
                  <div className="text-sm text-muted-foreground">зольных отложений</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">масляных загрязнений</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-orange-600 mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">восстановление пропускной способности</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Как происходит очистка</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Пошаговый процесс профессиональной очистки сажевого фильтра
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Диагностика",
                description: "Проверка целостности и измерение степени засорения фильтра",
                icon: "fas fa-search",
                color: "primary"
              },
              {
                step: "02",
                title: "Монтаж и тестирование",
                description: "Установка в оборудование и проверка противодавления",
                icon: "fas fa-cogs",
                color: "accent"
              },
              {
                step: "03",
                title: "Гидродинамическая мойка",
                description: "4-этапная очистка специальными растворами под давлением",
                icon: "fas fa-tint",
                color: "green-500"
              },
              {
                step: "04",
                title: "Сушка и контроль",
                description: "Термосушка, повторное тестирование и печать отчета",
                icon: "fas fa-certificate",
                color: "blue-500"
              }
            ].map((item, index) => (
              <Card key={index} className="process-card relative overflow-hidden border-2 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`absolute top-0 right-0 w-12 h-12 bg-${item.color}/10 rounded-bl-2xl`}></div>
                  <div className={`text-4xl font-bold text-${item.color}/20 mb-2`}>{item.step}</div>
                  <div className={`w-12 h-12 bg-${item.color}/10 rounded-xl flex items-center justify-center mb-4`}>
                    <i className={`${item.icon} text-${item.color === 'primary' ? 'primary' : item.color} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
              <h3 className="text-xl font-bold mb-4">Время выполнения</h3>
              <div className="flex items-center justify-center space-x-4">
                <Clock className="text-primary" size={24} />
                <span className="text-2xl font-bold text-primary">1-3 часа</span>
              </div>
              <p className="text-muted-foreground mt-2">В зависимости от степени загрязнения</p>
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
