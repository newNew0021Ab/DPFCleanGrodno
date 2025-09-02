import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail, Car } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import ContactForm from "@/components/forms/contact-form";
import QuickQuoteForm from "@/components/forms/quick-quote-form";
import { trackEvent } from "@/lib/analytics";

export default function Contact() {
  const handlePhoneClick = () => {
    trackEvent('phone_click', 'contact', 'contact_page');
  };

  const handleEmailClick = () => {
    trackEvent('email_click', 'contact', 'contact_page');
  };

  const handleMapClick = () => {
    trackEvent('map_click', 'navigation', 'contact_page');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Адрес",
      content: "г. Гродно, ул. Промышленная, 25",
      subtitle: "(рядом с автовокзалом)",
      action: handleMapClick,
      href: "https://yandex.by/maps/?text=г.+Гродно,+ул.+Промышленная,+25",
      testId: "contact-address"
    },
    {
      icon: Phone,
      title: "Телефон",
      content: "+375 (152) 12-34-56",
      subtitle: "+375 (29) 123-45-67",
      action: handlePhoneClick,
      href: "tel:+375152123456",
      testId: "contact-phone"
    },
    {
      icon: Clock,
      title: "Режим работы",
      content: "Пн-Пт: 8:00 - 18:00",
      subtitle: "Сб: 9:00 - 15:00, Вс: выходной",
      testId: "contact-hours"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@ecodizel-grodno.by",
      subtitle: "Ответим в течение часа",
      action: handleEmailClick,
      href: "mailto:info@ecodizel-grodno.by",
      testId: "contact-email"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Контакты | Запись на чистку DPF в Гродно | ЭкоДизель-Сервис</title>
        <meta 
          name="description" 
          content="Контакты ЭкоДизель-Сервис в Гродно. Запись на чистку DPF фильтров, адрес, телефоны, режим работы. Быстрая связь и консультации." 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ЭкоДизель-Сервис",
            "description": "Профессиональная чистка DPF фильтров в Гродно",
            "telephone": "+375152123456",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ул. Промышленная, 25",
              "addressLocality": "Гродно",
              "addressCountry": "BY"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "53.6884",
              "longitude": "23.8258"
            },
            "openingHours": [
              "Mo-Fr 08:00-18:00",
              "Sa 09:00-15:00"
            ],
            "priceRange": "250-650 BYN",
            "serviceArea": {
              "@type": "City",
              "name": "Гродно"
            }
          })}
        </script>
      </Helmet>

      <Header />
      
      <Hero 
        title="Свяжитесь с нами"
        subtitle="Запишитесь на диагностику или получите консультацию специалиста • Работаем ежедневно • Быстрый ответ гарантирован"
        showStats={false}
      />

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  {info.href ? (
                    <a 
                      href={info.href}
                      onClick={info.action}
                      className="text-primary hover:text-primary/80 font-medium block"
                      data-testid={info.testId}
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="font-medium" data-testid={info.testId}>
                      {info.content}
                    </p>
                  )}
                  {info.subtitle && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {info.subtitle}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Main Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Быстрая заявка</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            {/* Quick Quote Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Car size={24} />
                  Калькулятор стоимости
                </CardTitle>
              </CardHeader>
              <CardContent>
                <QuickQuoteForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Как нас найти</h2>
            <p className="text-xl text-muted-foreground">
              Удобное расположение в промышленной зоне Гродно
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <Card className="h-96">
                <CardContent className="p-0 h-full flex items-center justify-center bg-secondary/30 rounded-lg">
                  <div className="text-center">
                    <MapPin className="text-4xl text-muted-foreground mb-4 mx-auto" size={64} />
                    <h4 className="font-semibold mb-2">Интерактивная карта</h4>
                    <p className="text-muted-foreground mb-4">г. Гродно, ул. Промышленная, 25</p>
                    <a
                      href="https://yandex.by/maps/?text=г.+Гродно,+ул.+Промышленная,+25"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleMapClick}
                      className="inline-flex items-center bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                      data-testid="button-open-map"
                    >
                      Открыть в Яндекс.Картах
                      <ArrowRight className="ml-2" size={16} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Directions */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Как добраться</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">На автомобиле:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Выезд на ул. Промышленную</li>
                      <li>• Ориентир: автовокзал</li>
                      <li>• Бесплатная парковка</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Общественный транспорт:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Автобусы №5, 12, 18</li>
                      <li>• Остановка "Промышленная"</li>
                      <li>• 2 минуты пешком</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Экстренная связь</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Если у вас аварийная ситуация с DPF системой, звоните по номеру экстренной связи:
                  </p>
                  <a 
                    href="tel:+375291234567"
                    className="flex items-center justify-center bg-accent text-accent-foreground p-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                    onClick={handlePhoneClick}
                    data-testid="emergency-phone"
                  >
                    <Phone className="mr-2" size={20} />
                    +375 (29) 123-45-67
                  </a>
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
