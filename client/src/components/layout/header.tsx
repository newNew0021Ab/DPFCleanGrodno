import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Filter } from "lucide-react";
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
    { href: "/contact", label: "Контакты" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer" data-testid="logo-link">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Filter className="text-primary-foreground" size={18} />
              </div>
              <div className="min-w-0">
                <h1 className="text-base md:text-2xl font-bold text-gray-900 leading-tight truncate">ReFilter</h1>
                <p className="text-sm md:text-base text-gray-600 hidden sm:block truncate">Профессиональная чистка DPF</p>
              </div>
            </div>
          </Link>
          
          <nav className="hidden xl:flex items-center space-x-4 2xl:space-x-8 mx-8 2xl:mx-12">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                <span 
                  className={`text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium px-2 2xl:px-3 py-2 rounded-md hover:bg-blue-50 text-base 2xl:text-lg whitespace-nowrap ${
                    location === item.href ? 'text-blue-600 bg-blue-50 font-semibold' : ''
                  }`}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
            <div className="text-right hidden lg:block">
              <p className="text-xs text-gray-600">Звоните сейчас</p>
              <a 
                href="tel:+375152123456" 
                className="text-sm xl:text-base font-bold text-blue-600 hover:text-blue-700 whitespace-nowrap"
                onClick={handlePhoneClick}
                data-testid="header-phone"
              >
                +375 (152) 12-34-56
              </a>
            </div>
            <Button 
              className="bg-orange-500 text-white hover:bg-orange-600 font-medium px-2 sm:px-4 lg:px-6 py-2 text-xs sm:text-sm lg:text-base hidden sm:inline-flex"
              onClick={handleCallbackClick}
              data-testid="button-callback"
            >
              <span className="hidden lg:inline">Заказать звонок</span>
              <span className="lg:hidden">Звонок</span>
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden p-1 sm:p-2" data-testid="button-mobile-menu">
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
