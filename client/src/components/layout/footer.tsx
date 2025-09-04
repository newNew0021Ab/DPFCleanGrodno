import { Link } from "wouter";
import { Filter, Phone, MapPin, Clock, Mail } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function Footer() {
  const handlePhoneClick = () => {
    trackEvent('phone_click', 'contact', 'footer_phone');
  };

  const handleEmailClick = () => {
    trackEvent('email_click', 'contact', 'footer_email');
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Filter className="text-primary-foreground" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold">ReFilter</h3>
              </div>
            </div>
            <p className="text-background/80 mb-4">
              Профессиональная чистка DPF фильтров в Гродно. Современное оборудование, опытные специалисты, гарантия результата.
            </p>
            <div className="flex space-x-3">
              <a 
                href="viber://chat?number=+375152123456" 
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                title="Написать в Viber"
                data-testid="link-viber"
              >
                <i className="fab fa-viber text-background/80"></i>
              </a>
              <a 
                href="https://t.me/refilter_grodno" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                title="Наш Telegram канал"
                data-testid="link-telegram"
              >
                <i className="fab fa-telegram text-background/80"></i>
              </a>
              <a 
                href="https://wa.me/375293456789?text=Здравствуйте!%20Интересует%20чистка%20DPF%20фильтра" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                title="WhatsApp"
                data-testid="link-whatsapp"
              >
                <i className="fab fa-whatsapp text-background/80"></i>
              </a>
              <a 
                href="https://www.instagram.com/refilter_grodno" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                title="Наш Instagram"
                data-testid="link-instagram"
              >
                <i className="fab fa-instagram text-background/80"></i>
              </a>
              <a 
                href="https://vk.com/refilter_grodno" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                title="Мы ВКонтакте"
                data-testid="link-vk"
              >
                <i className="fab fa-vk text-background/80"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Услуги</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer" data-testid="footer-link-dpf-cleaning">
                    Чистка DPF фильтров
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer" data-testid="footer-link-catalyst-cleaning">
                    Чистка катализаторов
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer" data-testid="footer-link-egr-cleaning">
                    Чистка клапанов EGR
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer" data-testid="footer-link-diagnostics">
                    Диагностика и программирование
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer" data-testid="footer-link-mobile">
                    Выездной сервис
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/calculator">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer" data-testid="footer-link-calculator">
                    Калькулятор стоимости
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Информация</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer" data-testid="footer-link-about">
                    О компании
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer" data-testid="footer-link-advantages">
                    Наши преимущества
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer" data-testid="footer-link-guarantees">
                    Гарантии и ответственность
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/testimonials">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer" data-testid="footer-link-reviews">
                    Отзывы клиентов
                  </span>
                </Link>
              </li>
              <li>
                <a href="https://www.instagram.com/refilter_grodno" target="_blank" rel="noopener noreferrer">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer" data-testid="footer-link-portfolio">
                    Портфолио работ
                  </span>
                </a>
              </li>
              <li>
                <a href="/contacts">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer" data-testid="footer-link-faq">
                    Частые вопросы
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Контакты</h4>
            <div className="space-y-4">
              <div>
                <p className="text-background/60 text-sm">Телефон</p>
                <div className="space-y-1">
                  <a 
                    href="tel:+375152123456" 
                    className="block text-background hover:text-accent transition-colors"
                    onClick={handlePhoneClick}
                    data-testid="footer-phone-main"
                  >
                    +375 (152) 12-34-56
                  </a>
                  <a 
                    href="tel:+375293456789" 
                    className="block text-background/80 hover:text-accent transition-colors text-sm"
                    data-testid="footer-phone-mobile"
                  >
                    +375 (29) 345-67-89 (МТС)
                  </a>
                </div>
              </div>
              <div>
                <p className="text-background/60 text-sm">Email</p>
                <div className="space-y-1">
                  <a 
                    href="mailto:info@refilter-grodno.by" 
                    className="block text-background hover:text-accent transition-colors"
                    onClick={handleEmailClick}
                    data-testid="footer-email-main"
                  >
                    info@refilter-grodno.by
                  </a>
                  <a 
                    href="mailto:zakaz@refilter-grodno.by" 
                    className="block text-background/80 hover:text-accent transition-colors text-sm"
                    data-testid="footer-email-orders"
                  >
                    zakaz@refilter-grodno.by
                  </a>
                </div>
              </div>
              <div>
                <p className="text-background/60 text-sm">Адрес</p>
                <a 
                  href="https://maps.google.com/?q=Гродно,+ул.+Вокзальная,+15" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-accent transition-colors" 
                  data-testid="footer-address"
                >
                  г. Гродно, ул. Вокзальная, 15
                  <br />
                  <span className="text-xs text-background/60">(автосервис "АвтоТех")</span>
                </a>
              </div>
              <div>
                <p className="text-background/60 text-sm">Режим работы</p>
                <div className="text-background/80 text-sm" data-testid="footer-hours">
                  <p>Пн-Пт: 8:00 - 19:00</p>
                  <p>Сб: 9:00 - 16:00</p>
                  <p>Вс: 10:00 - 14:00 (по записи)</p>
                  <p className="text-xs text-accent mt-1">Выезд: 24/7 по договоренности</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <h5 className="font-semibold mb-3">Полезные ссылки</h5>
              <div className="space-y-2 text-sm">
                <Link href="/calculator">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer block" data-testid="link-price-calculator">
                    Калькулятор стоимости
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer block" data-testid="link-emergency">
                    Срочный вызов
                  </span>
                </Link>
                <a href="https://maps.google.com/?q=Гродно,+ул.+Вокзальная,+15" target="_blank" rel="noopener noreferrer">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer block" data-testid="link-directions">
                    Как добраться
                  </span>
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Для клиентов</h5>
              <div className="space-y-2 text-sm">
                <a href="/contact">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer block" data-testid="link-warranty-claim">
                    Гарантийные случаи
                  </span>
                </a>
                <a href="tel:+375152123456">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer block" data-testid="link-support">
                    Техподдержка 24/7
                  </span>
                </a>
                <a href="/testimonials">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer block" data-testid="link-leave-review">
                    Оставить отзыв
                  </span>
                </a>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-3">Партнерам</h5>
              <div className="space-y-2 text-sm">
                <a href="mailto:partner@refilter-grodno.by">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer block" data-testid="link-partnership">
                    Стать партнером
                  </span>
                </a>
                <a href="mailto:b2b@refilter-grodno.by">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer block" data-testid="link-b2b">
                    Корпоративным клиентам
                  </span>
                </a>
                <a href="/contact">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer block" data-testid="link-bulk-orders">
                    Оптовые заказы
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center text-sm border-t border-background/10 pt-6">
            <p className="text-background/60 mb-4">
              © 2025 ИП Иванов А.В. "ReFilter" — Профессиональная чистка DPF фильтров в Гродно. Все права защищены.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <Link href="/privacy">
                <span className="hover:text-background transition-colors cursor-pointer" data-testid="link-privacy">
                  Политика конфиденциальности
                </span>
              </Link>
              <span className="text-background/40">•</span>
              <Link href="/terms">
                <span className="hover:text-background transition-colors cursor-pointer" data-testid="link-terms">
                  Пользовательское соглашение
                </span>
              </Link>
              <span className="text-background/40">•</span>
              <Link href="/sitemap">
                <span className="hover:text-background transition-colors cursor-pointer" data-testid="link-sitemap">
                  Карта сайта
                </span>
              </Link>
              <span className="text-background/40">•</span>
              <a href="mailto:info@refilter-grodno.by">
                <span className="hover:text-background transition-colors cursor-pointer" data-testid="link-contact-email">
                  Связаться с нами
                </span>
              </a>
            </div>
            <p className="text-background/40 mt-4 text-xs">
              УНП: 191234567 | Свидетельство о регистрации № 1234567890 от 15.03.2020 г.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Phone Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="tel:+375293456789" 
          className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-accent/90 transition-all animate-pulse"
          onClick={handlePhoneClick}
          title="Позвонить прямо сейчас"
          data-testid="floating-phone"
        >
          <Phone size={24} />
        </a>
      </div>
    </footer>
  );
}
