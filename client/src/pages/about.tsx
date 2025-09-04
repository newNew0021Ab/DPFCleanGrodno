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
  TrendingUp,
  TrendingDown,
  PercentCircleIcon,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import { trackEvent } from "@/lib/analytics";

export default function About() {
  const handleContactClick = () => {
    trackEvent("about_contact_click", "conversion", "about_page");
  };

  const stats = [
    { number: "100+", label: "Очищенных фильтров", icon: Target },
    { number: "2+", label: "Года опыта", icon: Award },
    { number: "98%", label: "Успешных восстановлений", icon: TrendingUp },
    { number: "2%", label: "Негативных отзывов", icon: PercentCircleIcon },
  ];

  const advantages = [
    {
      icon: Award,
      title: "Профессиональная экспертиза",
      description:
        "Наша команда имеет многолетний опыт работы с выхлопными системами  всех марок автомобилей. Мы постоянно повышаем квалификацию и следим за новыми технологиями.",
    },
    {
      icon: Settings,
      title: "Современное оборудование",
      description:
        "Используем ультразвуковые установки последнего поколения, термические печи и специализированные стенды для тестирования пропускной способности.",
    },
    {
      icon: Shield,
      title: "Гарантия качества",
      description:
        "Предоставляем письменную гарантию на 6 месяцев. Если фильтр не восстановится до заявленных показателей - возвращаем деньги.",
    },
    {
      icon: Users,
      title: "Индивидуальный подход",
      description:
        "Работаем как с частными клиентами, так и с автопарками. Предлагаем гибкие условия и персональное обслуживание.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "Экономим время",
      description: "Быстрая диагностика и восстановление фильтра за 1-2 дня. Не тратьте недели на поиски решения — мы решим проблему оперативно.",
      features: [
        "Диагностика за 30 минут",
        "Восстановление за 1-2 дня",
        "Работаем без выходных",
        "Уведомления о готовности",
      ],
    },
    {
      icon: Settings,
      title: "Современные методы очистки",
      description: "Используем передовые технологии: ультразвуковую очистку, термическое восстановление и химическую обработку.",
      features: [
        "Ультразвуковая технология",
        "Термическое восстановление",
        "Экологически безопасно",
        "Проверка эффективности",
      ],
    },
    {
      icon: Car,
      title: "Выезд по городу",
      description: "Забираем ваш автомобиль прямо от дома или офиса и доставляем обратно после восстановления фильтра.",
      features: [
        "Бесплатный забор авто",
        "Доставка после работ",
        "Работаем по всему городу",
        "Удобное время подачи",
      ],
    },
  ];

  const guaranteesData = [
    {
      icon: Shield,
      title: "Гарантия на 50 000 км",
      description: "Мы уверены в качестве работ, поэтому даём гарантию на 10 000 км пробега или 6 месяцев.",
    },
    {
      icon: Target,
      title: "Возврат средств",
      description: "Если фильтр не восстановится до заявленных показателей — возвращаем 100% стоимости.",
    },
    {
      icon: CheckCircle,
      title: "Письменная гарантия",
      description: "Все обязательства фиксируем документально с указанием конкретных показателей восстановления.",
    },
    {
      icon: Users,
      title: "Ответственность за результат",
      description: "Несем полную ответственность за качество работ и готовы устранить любые недочеты бесплатно.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          О компании ReFilter | Профессиональная чистка DPF в Гродно
        </title>
        <meta
          name="description"
          content="О компании ReFilter: 2+ года опыта, современное оборудование, профессиональная команда. Чистка DPF фильтров в Гродно с гарантией качества."
        />
      </Helmet>

      <Header />

      <Hero
        title="О компании ReFilter"
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
                  <div
                    className="text-3xl font-bold text-primary mb-2"
                    data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Наша история
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                ReFilter основан в 2019 году группой специалистов автомобильной
                индустрии, которые заметили растущую потребность в качественном
                обслуживании систем очистки выхлопных газов.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Мы начинали как небольшая мастерская, но благодаря
                профессиональному подходу и инвестициям в современное
                оборудование быстро стали лидерами рынка в Гродненском регионе.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Сегодня мы обслуживаем более 100 клиентов в месяц, от владельцев
                легковых автомобилей до крупных автопарков, и гордимся доверием,
                которое нам оказывают.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div
                    className="text-2xl font-bold text-primary"
                    data-testid="clients-monthly"
                  >
                    100+
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Клиентов в месяц
                  </p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div
                    className="text-2xl font-bold text-accent"
                    data-testid="success-rate"
                  >
                    98%
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Успешных восстановлений
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Команда ReFilter"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Наши преимущества
            </h2>
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
                      <h3 className="text-xl font-bold mb-3">
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-muted-foreground">
              Наши главные преимущества, которые ценят клиенты
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="border border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Преимущества:</h4>
                    <ul className="space-y-1">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle
                            className="text-green-500 mr-2"
                            size={14}
                          />
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

      {/* Guarantees and Responsibility */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Гарантии и ответственность
            </h2>
            <p className="text-xl text-muted-foreground">
              Мы отвечаем за качество наших услуг и даем четкие гарантии
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {guaranteesData.map((guarantee, index) => (
              <Card key={index} className="border border-border">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <guarantee.icon className="text-green-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-green-600">
                        {guarantee.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {guarantee.description}
                      </p>
                    </div>
                  </div>
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
            Более 500 довольных клиентов уже оценили качество нашей работы.
            Присоединяйтесь к ним!
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
