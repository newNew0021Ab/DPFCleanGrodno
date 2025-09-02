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
    <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link href="/">
            <div className="flex items-center space-x-2 md:space-x-3 cursor-pointer" data-testid="logo-link">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center">
                <Car className="text-primary-foreground" size={16} />
              </div>
              <div>
                <h1 className="text-base md:text-xl font-bold text-gray-900 leading-tight">ЭкоДизель-Сервис</h1>
                <p className="text-xs md:text-sm text-gray-600 hidden sm:block">Профессиональная чистка DPF</p>
              </div>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                <span 
                  className={`text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium px-2 xl:px-3 py-2 rounded-md hover:bg-blue-50 text-sm xl:text-base ${
                    location === item.href ? 'text-blue-600 bg-blue-50 font-semibold' : ''
                  }`}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="text-right hidden md:block">
              <p className="text-xs xl:text-sm text-gray-600">Звоните сейчас</p>
              <a 
                href="tel:+375152123456" 
                className="text-sm xl:text-lg font-bold text-blue-600 hover:text-blue-700"
                onClick={handlePhoneClick}
                data-testid="header-phone"
              >
                +375 (152) 12-34-56
              </a>
            </div>
            <Button 
              className="bg-orange-500 text-white hover:bg-orange-600 font-medium px-3 md:px-6 py-2 text-sm md:text-base hidden md:inline-flex"
              onClick={handleCallbackClick}
              data-testid="button-callback"
            >
              <span className="hidden lg:inline">Заказать звонок</span>
              <span className="lg:hidden">Звонок</span>
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden p-2" data-testid="button-mobile-menu">
                  <Menu size={18} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col space-y-6 mt-6">
                  {navigation.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <span 
                        className={`text-lg cursor-pointer font-medium px-3 py-2 rounded-md transition-colors ${
                          location === item.href 
                            ? 'text-blue-600 bg-blue-50 font-semibold' 
                            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                        }`}
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
                      className="flex items-center space-x-3 text-blue-600 font-bold text-lg hover:text-blue-700"
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
