import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Star, Car, Truck, Bus, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import { trackEvent } from "@/lib/analytics";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const { data: testimonials } = useQuery({
    queryKey: ['/api/testimonials'],
  });

  const handleImageView = (category: string) => {
    trackEvent('gallery_image_view', 'engagement', category);
  };

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Результат очистки DPF фильтра Mercedes Sprinter",
      title: "Mercedes Sprinter",
      description: "Восстановление пропускной способности на 97%",
      category: "commercial",
      type: "before-after"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Процесс очистки Volkswagen Crafter",
      title: "Volkswagen Crafter",
      description: "Полная очистка от сажи и золы",
      category: "commercial",
      type: "process"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Обслуживание грузовика MAN TGX",
      title: "MAN TGX",
      description: "Комплексное обслуживание грузового транспорта",
      category: "truck",
      type: "process"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Очистка DPF BMW X5",
      title: "BMW X5",
      description: "Профессиональная очистка легкового автомобиля",
      category: "passenger",
      type: "before-after"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Команда специалистов за работой",
      title: "Наша команда",
      description: "Профессиональные специалисты в работе",
      category: "team",
      type: "process"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Современное оборудование для очистки",
      title: "Ультразвуковая установка",
      description: "Современное оборудование последнего поколения",
      category: "equipment",
      type: "equipment"
    }
  ];

  const categories = [
    { value: "all", label: "Все работы", icon: null },
    { value: "passenger", label: "Легковые", icon: Car },
    { value: "commercial", label: "Коммерческие", icon: Bus },
    { value: "truck", label: "Грузовые", icon: Truck },
    { value: "equipment", label: "Оборудование", icon: null },
    { value: "team", label: "Команда", icon: null },
  ];

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Галерея работ | Фото до и после чистки DPF | ЭкоДизель-Сервис</title>
        <meta 
          name="description" 
          content="Галерея выполненных работ по чистке DPF фильтров. Фотографии до и после, процесс работы, современное оборудование. Результаты восстановления фильтров." 
        />
      </Helmet>

      <Header />
      
      <Hero 
        title="Галерея наших работ"
        subtitle="Реальные результаты очистки DPF фильтров • Фотографии до и после • Процесс работы с современным оборудованием"
        showStats={false}
      />

      {/* Gallery Filter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Результаты нашей работы</h2>
            <p className="text-xl text-muted-foreground">
              Фотографии реальных случаев очистки DPF фильтров
            </p>
          </div>

          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid grid-cols-3 lg:grid-cols-6 mb-12 w-full">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.value} 
                  value={category.value} 
                  className="flex items-center gap-2"
                  data-testid={`filter-${category.value}`}
                >
                  {category.icon && <category.icon size={16} />}
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image) => (
                <Dialog key={image.id}>
                  <DialogTrigger asChild>
                    <Card 
                      className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                      onClick={() => handleImageView(image.category)}
                      data-testid={`gallery-item-${image.id}`}
                    >
                      <div className="relative overflow-hidden rounded-t-xl">
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge 
                            variant={image.type === 'before-after' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {image.type === 'before-after' ? 'До/После' : 'Процесс'}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-2" data-testid={`image-title-${image.id}`}>
                          {image.title}
                        </h3>
                        <p className="text-muted-foreground text-sm" data-testid={`image-description-${image.id}`}>
                          {image.description}
                        </p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="mt-4">
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-muted-foreground">{image.description}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
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
              {testimonials.map((testimonial) => (
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
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Card className="bg-primary text-primary-foreground p-8 max-w-4xl mx-auto">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">Хотите такой же результат?</h3>
              <p className="text-primary-foreground/80 mb-6">
                Запишитесь на диагностику и узнайте состояние вашего DPF фильтра. 
                Если нужна очистка - сделаем качественно с гарантией.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button 
                    variant="secondary" 
                    className="px-8 py-3"
                    data-testid="button-book-service"
                  >
                    Записаться на диагностику
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </>
  );
}
