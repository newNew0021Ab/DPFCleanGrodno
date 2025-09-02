import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Car } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handlePhoneClick = () => {
    trackEvent('phone_click', 'contact', 'header_phone');
  };

  const handleCallbackClick = () => {
    trackEvent('callback_request', 'contact', 'header_callback');
  };

  const navigation = [
    { href: "/", label: "Главная" },
    { href: "/services", label: "Услуги" },
    { href: "/prices", label: "Цены" },
    { href: "/process", label: "Процесс" },
    { href: "/about", label: "О нас" },
    { href: "/gallery", label: "Галерея" },
    { href: "/blog", label: "Блог" },
    { href: "/contact", label: "Контакты" },
  ];

  return (
    <header className="bg-card shadow-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer" data-testid="logo-link">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Car className="text-primary-foreground" size={20} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">ЭкоДизель-Сервис</h1>
                <p className="text-sm text-muted-foreground">Профессиональная чистка DPF</p>
              </div>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                <span 
                  className={`text-foreground hover:text-primary transition-colors cursor-pointer ${
                    location === item.href ? 'text-primary font-medium' : ''
                  }`}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm text-muted-foreground">Звоните сейчас</p>
              <a 
                href="tel:+375152123456" 
                className="text-lg font-semibold text-primary hover:text-primary/80"
                onClick={handlePhoneClick}
                data-testid="header-phone"
              >
                +375 (152) 12-34-56
              </a>
            </div>
            <Button 
              className="bg-accent text-accent-foreground hover:bg-accent/90 hidden sm:inline-flex"
              onClick={handleCallbackClick}
              data-testid="button-callback"
            >
              Заказать звонок
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" data-testid="button-mobile-menu">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-6 mt-6">
                  {navigation.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <span 
                        className={`text-lg cursor-pointer ${location === item.href ? 'text-primary font-medium' : 'text-foreground'}`}
                        onClick={() => setIsOpen(false)}
                        data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                  <div className="pt-6 border-t">
                    <a 
                      href="tel:+375152123456" 
                      className="flex items-center space-x-3 text-primary font-semibold text-lg"
                      onClick={handlePhoneClick}
                      data-testid="mobile-phone"
                    >
                      <Phone size={20} />
                      <span>+375 (152) 12-34-56</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
