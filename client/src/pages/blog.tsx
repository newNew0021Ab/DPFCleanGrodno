import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Calendar, Clock, User, ArrowRight, BookOpen } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import { trackEvent } from "@/lib/analytics";

export default function Blog() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['/api/blog'],
  });

  const handlePostClick = (slug: string) => {
    trackEvent('blog_post_click', 'engagement', slug);
  };

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const featuredArticles = [
    {
      title: "5 признаков того, что DPF фильтр нуждается в чистке",
      excerpt: "Узнайте, как определить проблемы с сажевым фильтром до серьезных поломок",
      readTime: "5 мин",
      category: "Диагностика",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
    },
    {
      title: "Почему нельзя игнорировать лампочку DPF",
      excerpt: "Последствия игнорирования предупреждающих сигналов системы aftertreatment",
      readTime: "7 мин",
      category: "Обслуживание",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
    },
    {
      title: "Экономия на обслуживании коммерческого транспорта",
      excerpt: "Как правильное обслуживание DPF экономит деньги автопарков",
      readTime: "8 мин",
      category: "Экономика",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Блог о DPF фильтрах | Советы и статьи | ЭкоДизель-Сервис</title>
        <meta 
          name="description" 
          content="Полезные статьи о DPF фильтрах, сажевых фильтрах, обслуживании дизельных автомобилей. Экспертные советы от ЭкоДизель-Сервис в Гродно." 
        />
      </Helmet>

      <Header />
      
      <Hero 
        title="Блог о DPF системах"
        subtitle="Полезные статьи и экспертные советы по обслуживанию сажевых фильтров • Практические рекомендации • Новости отрасли"
        showStats={false}
      />

      {/* Featured Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Рекомендуемые статьи</h2>
            <p className="text-xl text-muted-foreground">
              Самые важные материалы для владельцев дизельных автомобилей
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{article.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2" data-testid={`featured-title-${index}`}>
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3" data-testid={`featured-excerpt-${index}`}>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1" size={14} />
                      {article.readTime}
                    </div>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-primary hover:text-primary/80"
                      onClick={() => handlePostClick(`featured-${index}`)}
                      data-testid={`button-read-featured-${index}`}
                    >
                      Читать далее
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Все статьи</h2>
            <p className="text-xl text-muted-foreground">
              Экспертные материалы от специалистов ЭкоДизель-Сервис
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className="h-48 bg-secondary rounded-t-lg"></div>
                  <CardContent className="p-6">
                    <div className="h-4 bg-secondary rounded mb-3"></div>
                    <div className="h-4 bg-secondary rounded mb-2"></div>
                    <div className="h-4 bg-secondary rounded w-3/4"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
                    <BookOpen className="text-primary" size={48} />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2" data-testid={`post-title-${post.id}`}>
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3" data-testid={`post-excerpt-${post.id}`}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <User className="mr-1" size={14} />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-1" size={14} />
                        {formatDate(post.createdAt)}
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full group"
                      onClick={() => handlePostClick(post.slug)}
                      data-testid={`button-read-post-${post.id}`}
                    >
                      Читать статью
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <BookOpen className="mx-auto text-muted-foreground mb-4" size={64} />
              <h3 className="text-xl font-semibold mb-2">Статьи готовятся к публикации</h3>
              <p className="text-muted-foreground mb-6">
                Мы работаем над созданием полезного контента для наших клиентов
              </p>
              <Link href="/contact">
                <Button data-testid="button-contact-for-info">
                  Задать вопрос специалисту
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground p-8 max-w-4xl mx-auto text-center">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">Получайте полезные советы</h3>
              <p className="text-primary-foreground/80 mb-6">
                Подпишитесь на нашу рассылку и получайте экспертные советы по обслуживанию дизельных автомобилей
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground border-0 focus:ring-2 focus:ring-white/50 outline-none"
                  data-testid="input-newsletter-email"
                />
                <Button 
                  variant="secondary" 
                  className="px-6 py-3"
                  data-testid="button-subscribe"
                >
                  Подписаться
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </>
  );
}
