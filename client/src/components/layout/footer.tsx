import { Link } from "wouter";
import { Car, Phone, MapPin, Clock, Mail } from "lucide-react";
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
                <Car className="text-primary-foreground" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold">ReFilter</h3>
              </div>
            </div>
            <p className="text-background/80 mb-4">
              Профессиональная чистка DPF фильтров в Гродно. Современное оборудование, опытные специалисты, гарантия результата.
            </p>
            <div className="flex space-x-4">
              <a 
                href="viber://chat?number=+375152123456" 
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                data-testid="link-viber"
              >
                <i className="fab fa-viber text-background/80"></i>
              </a>
              <a 
                href="https://t.me/refilter_grodno" 
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                data-testid="link-telegram"
              >
                <i className="fab fa-telegram text-background/80"></i>
              </a>
              <a 
                href="https://wa.me/375152123456" 
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                data-testid="link-whatsapp"
              >
                <i className="fab fa-whatsapp text-background/80"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Услуги</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer" data-testid="footer-link-services">
                    Чистка DPF фильтров
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer" data-testid="footer-link-diagnostics">
                    Диагностика систем
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer" data-testid="footer-link-fleet">
                    Обслуживание автопарков
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer" data-testid="footer-link-mobile">
                    Выездное обслуживание
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer" data-testid="footer-link-regen">
                    Принудительная регенерация
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
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer" data-testid="footer-link-equipment">
                    Наше оборудование
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer" data-testid="footer-link-warranty">
                    Гарантии
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer" data-testid="footer-link-certificates">
                    Сертификаты
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="text-background/80 hover:text-background transition-colors cursor-pointer" data-testid="footer-link-blog">
                    Статьи и советы
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Контакты</h4>
            <div className="space-y-4">
              <div>
                <p className="text-background/60 text-sm">Телефон</p>
                <a 
                  href="tel:+375152123456" 
                  className="text-background hover:text-accent transition-colors"
                  onClick={handlePhoneClick}
                  data-testid="footer-phone"
                >
                  +375 (152) 12-34-56
                </a>
              </div>
              <div>
                <p className="text-background/60 text-sm">Email</p>
                <a 
                  href="mailto:info@refilter-grodno.by" 
                  className="text-background hover:text-accent transition-colors"
                  onClick={handleEmailClick}
                  data-testid="footer-email"
                >
                  info@refilter-grodno.by
                </a>
              </div>
              <div>
                <p className="text-background/60 text-sm">Адрес</p>
                <p className="text-background/80" data-testid="footer-address">
                  г. Гродно, ул. Промышленная, 25
                </p>
              </div>
              <div>
                <p className="text-background/60 text-sm">Режим работы</p>
                <div className="text-background/80 text-sm" data-testid="footer-hours">
                  <p>Пн-Пт: 8:00 - 18:00</p>
                  <p>Сб: 9:00 - 15:00</p>
                  <p>Вс: выходной</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © 2024 ReFilter. Все права защищены. 
            <Link href="/privacy">
              <span className="hover:text-background transition-colors ml-2 cursor-pointer" data-testid="link-privacy">
                Политика конфиденциальности
              </span>
            </Link>
          </p>
        </div>
      </div>

      {/* Floating Phone Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="tel:+375152123456" 
          className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-accent/90 transition-all animate-pulse"
          onClick={handlePhoneClick}
          data-testid="floating-phone"
        >
          <Phone size={24} />
        </a>
      </div>
    </footer>
  );
}
