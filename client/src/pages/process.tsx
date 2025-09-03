import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Search, 
  Wrench, 
  Filter, 
  CheckCircle, 
  Settings, 
  Clock,
  Shield,
  Award,
  Thermometer,
  Microscope,
  BarChart3
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import { trackEvent } from "@/lib/analytics";

export default function Process() {
  const handleCTAClick = () => {
    trackEvent('process_cta_click', 'conversion', 'process_page');
  };

  const processSteps = [
    {
      number: 1,
      icon: Search,
      title: "Диагностика",
      description: "Компьютерная диагностика и оценка состояния фильтра",
      details: [
        "Подключение к бортовому компьютеру",
        "Считывание кодов ошибок",
        "Анализ работы системы aftertreatment",
        "Оценка степени засорения",
        "Проверка датчиков и компонентов"
      ],
      duration: "15-30 минут",
      color: "primary"
    },
    {
      number: 2,
      icon: Wrench,
      title: "Демонтаж",
      description: "Аккуратное снятие DPF фильтра с автомобиля",
      details: [
        "Подготовка рабочего места",
        "Снятие защитных кожухов",
        "Отсоединение датчиков",
        "Демонтаж фильтра",
        "Маркировка всех соединений"
      ],
      duration: "30-45 минут",
      color: "secondary"
    },
    {
      number: 3,
      icon: Filter,
      title: "Очистка",
      description: "Многоступенчатая очистка на профессиональном оборудовании",
      details: [
        "Предварительная продувка сжатым воздухом",
        "Ультразвуковая ванна с моющим раствором",
        "Термическая обработка в печи",
        "Финальная промывка деионизированной водой",
        "Сушка в специальной камере"
      ],
      duration: "2-3 часа",
      color: "accent"
    },
    {
      number: 4,
      icon: BarChart3,
      title: "Контроль",
      description: "Тестирование эффективности и качества очистки",
      details: [
        "Измерение пропускной способности",
        "Эндоскопическая проверка",
        "Тест на герметичность",
        "Фотофиксация результата",
        "Сравнение с эталонными показателями"
      ],
      duration: "20-30 минут",
      color: "green"
    },
    {
      number: 5,
      icon: Settings,
      title: "Установка",
      description: "Монтаж фильтра и сброс счетчиков системы",
      details: [
        "Установка фильтра на место",
        "Подключение всех датчиков",
        "Проверка герметичности соединений",
        "Сброс счетчиков сажи",
        "Финальная диагностика"
      ],
      duration: "30-45 минут",
      color: "primary"
    }
  ];

  const equipment = [
    {
      icon: Microscope,
      title: "Ультразвуковая очистка",
      description: "Удаляем даже микроскопические частицы сажи без повреждения керамической структуры фильтра"
    },
    {
      icon: Thermometer,
      title: "Термическая обработка",
      description: "Высокотемпературная печь для выжигания органических отложений"
    },
    {
      icon: BarChart3,
      title: "Контроль качества",
      description: "Тестирование пропускной способности до и после очистки на специальном стенде"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Процесс чистки DPF фильтров | Как мы работаем | ReFilter</title>
        <meta 
          name="description" 
          content="Подробное описание процесса профессиональной чистки DPF фильтров в 5 этапов. Современное оборудование, контроль качества, гарантия результата." 
        />
      </Helmet>

      <Header />
      
      <Hero 
        title="Профессиональный процесс чистки DPF фильтров"
        subtitle="Пятиэтапная система обработки с контролем качества на каждом шаге • Современное оборудование • Гарантия результата"
        showStats={false}
      />

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональный подход к очистке DPF фильтров в 5 этапов
            </p>
          </div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={step.number} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-4 ${
                      step.color === 'primary' ? 'bg-primary text-primary-foreground' :
                      step.color === 'accent' ? 'bg-accent text-accent-foreground' :
                      step.color === 'green' ? 'bg-green-500 text-white' :
                      'bg-secondary text-secondary-foreground'
                    }`}>
                      <span className="text-2xl font-bold">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="inline-flex items-center bg-secondary/30 px-4 py-2 rounded-full">
                    <Clock className="mr-2" size={16} />
                    <span className="font-medium">Время выполнения: {step.duration}</span>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="p-8 text-center">
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${
                      step.color === 'primary' ? 'bg-primary/10' :
                      step.color === 'accent' ? 'bg-accent/10' :
                      step.color === 'green' ? 'bg-green-500/10' :
                      'bg-secondary/30'
                    }`}>
                      <step.icon 
                        className={
                          step.color === 'primary' ? 'text-primary' :
                          step.color === 'accent' ? 'text-accent' :
                          step.color === 'green' ? 'text-green-500' :
                          'text-secondary-foreground'
                        } 
                        size={48} 
                      />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Этап {step.number}</h4>
                    <p className="text-lg font-semibold text-primary">{step.title}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center bg-accent/10 text-accent px-6 py-3 rounded-full">
              <Clock className="mr-2" size={20} />
              <span className="font-medium">Весь процесс занимает 3-4 часа</span>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Современное оборудование</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Используем профессиональные ультразвуковые установки последнего поколения
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {equipment.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Профессиональное оборудование для очистки DPF" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="equipment-image-1"
              />
              <img 
                src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Современный автосервис" 
                className="rounded-xl shadow-lg w-full h-auto mt-8"
                data-testid="equipment-image-2"
              />
              <img 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Процесс очистки фильтра" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="equipment-image-3"
              />
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Диагностическое оборудование" 
                className="rounded-xl shadow-lg w-full h-auto mt-8"
                data-testid="equipment-image-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Гарантии качества</h2>
            <p className="text-xl text-muted-foreground">
              Мы уверены в качестве нашей работы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="text-green-500" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Гарантия результата</h3>
                <p className="text-muted-foreground">
                  Если фильтр не восстановится до заявленных показателей - возвращаем деньги полностью
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">12 месяцев гарантии</h3>
                <p className="text-muted-foreground">
                  Гарантируем работу очищенного фильтра в течение года при соблюдении условий эксплуатации
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Сертификация</h3>
                <p className="text-muted-foreground">
                  Все процедуры выполняются согласно требованиям производителей автомобилей
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы восстановить ваш DPF фильтр?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Не ждите полного засорения - регулярное обслуживание продлевает срок службы фильтра и экономит ваши деньги
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                variant="secondary" 
                className="px-8 py-4 text-lg"
                onClick={handleCTAClick}
                data-testid="button-contact-us"
              >
                Связаться с нами
              </Button>
            </Link>
            <Link href="/prices">
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg"
                data-testid="button-view-prices"
              >
                Посмотреть цены
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
