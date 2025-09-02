import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Award, 
  Users, 
  Clock, 
  Target, 
  CheckCircle, 
  Car, 
  Truck,
  Settings,
  Shield,
  TrendingUp
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import { trackEvent } from "@/lib/analytics";

export default function About() {
  const handleContactClick = () => {
    trackEvent('about_contact_click', 'conversion', 'about_page');
  };

  const stats = [
    { number: "500+", label: "Очищенных фильтров", icon: Target },
    { number: "5+", label: "Лет опыта", icon: Award },
    { number: "98%", label: "Успешных восстановлений", icon: TrendingUp },
    { number: "24ч", label: "Максимальное время работы", icon: Clock },
  ];

  const advantages = [
    {
      icon: Award,
      title: "Профессиональная экспертиза",
      description: "Наша команда имеет многолетний опыт работы с системами aftertreatment всех марок автомобилей. Мы постоянно повышаем квалификацию и следим за новыми технологиями."
    },
    {
      icon: Settings,
      title: "Современное оборудование",
      description: "Используем ультразвуковые установки последнего поколения, термические печи и специализированные стенды для тестирования пропускной способности."
    },
    {
      icon: Shield,
      title: "Гарантия качества",
      description: "Предоставляем письменную гарантию на 12 месяцев. Если фильтр не восстановится до заявленных показателей - возвращаем деньги."
    },
    {
      icon: Users,
      title: "Индивидуальный подход",
      description: "Работаем как с частными клиентами, так и с автопарками. Предлагаем гибкие условия и персональное обслуживание."
    }
  ];

  const equipment = [
    {
      name: "Ультразвуковая установка FSX-3000",
      description: "Профессиональная ультразвуковая ванна для глубокой очистки",
      features: ["Частота 40 кГц", "Объем 150 литров", "Автоматический цикл", "Фильтрация раствора"]
    },
    {
      name: "Термическая печь TERMO-DPF",
      description: "Высокотемпературная печь для выжигания органических отложений",
      features: ["Температура до 600°C", "Контроль атмосферы", "Программируемые циклы", "Система безопасности"]
    },
    {
      name: "Стенд проверки FlowTest-Pro",
      description: "Измерение пропускной способности и эффективности фильтра",
      features: ["Точность ±2%", "Автоматическое тестирование", "Протокол результатов", "Сравнение с эталоном"]
    }
  ];

  const certifications = [
    "Сертификат соответствия на услуги",
    "Разрешение на работу с опасными отходами",
    "Аттестация специалистов",
    "Сертификация оборудования"
  ];

  return (
    <>
      <Helmet>
        <title>О компании ЭкоДизель-Сервис | Профессиональная чистка DPF в Гродно</title>
        <meta 
          name="description" 
          content="О компании ЭкоДизель-Сервис: 5+ лет опыта, современное оборудование, профессиональная команда. Чистка DPF фильтров в Гродно с гарантией качества." 
        />
      </Helmet>

      <Header />
      
      <Hero 
        title="О компании ЭкоДизель-Сервис"
        subtitle="Профессиональная команда с многолетним опытом • Современное оборудование • Индивидуальный подход к каждому клиенту"
        showStats={false}
      />

      {/* Company Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <Card key={index} className="border border-border">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="text-primary" size={32} />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Наша история</h2>
              <p className="text-lg text-muted-foreground mb-6">
                ЭкоДизель-Сервис основан в 2019 году группой специалистов автомобильной индустрии, 
                которые заметили растущую потребность в качественном обслуживании систем очистки выхлопных газов.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Мы начинали как небольшая мастерская, но благодаря профессиональному подходу и инвестициям 
                в современное оборудование быстро стали лидерами рынка в Гродненском регионе.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Сегодня мы обслуживаем более 100 клиентов в месяц, от владельцев легковых автомобилей 
                до крупных автопарков, и гордимся доверием, которое нам оказывают.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary" data-testid="clients-monthly">100+</div>
                  <p className="text-sm text-muted-foreground">Клиентов в месяц</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-accent" data-testid="success-rate">98%</div>
                  <p className="text-sm text-muted-foreground">Успешных восстановлений</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src="/attached_assets/generated_images/Professional_service_team_working_a2354216.png" 
                alt="Команда ЭкоДизель-Сервис" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="team-image"
              />
              <p className="text-center text-muted-foreground">
                Наша команда профессионалов готова решить любые задачи
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-xl text-muted-foreground">
              Почему клиенты выбирают именно нас
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border border-border">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <advantage.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                      <p className="text-muted-foreground">{advantage.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Details */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наше оборудование</h2>
            <p className="text-xl text-muted-foreground">
              Современные технологии для максимально эффективной очистки
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <Card key={index} className="border border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Характеристики:</h4>
                    <ul className="space-y-1">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="text-green-500 mr-2" size={14} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Сертификаты и лицензии</h2>
            <p className="text-xl text-muted-foreground">
              Официальные разрешения и подтверждения качества
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-green-500" size={24} />
                  </div>
                  <p className="font-medium text-sm">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Доверьте свой автомобиль профессионалам
          </h2>
          <p className="text-xl text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            Более 500 довольных клиентов уже оценили качество нашей работы. Присоединяйтесь к ним!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                variant="secondary" 
                className="px-8 py-4 text-lg"
                onClick={handleContactClick}
                data-testid="button-get-quote"
              >
                Получить предложение
              </Button>
            </Link>
            <a href="tel:+375152123456">
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg"
                data-testid="button-call-now"
              >
                Позвонить сейчас
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
