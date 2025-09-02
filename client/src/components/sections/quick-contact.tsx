import { useState } from "react";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { trackEvent } from "@/lib/analytics";

export default function QuickContact() {
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  const quickQuoteMutation = useMutation({
    mutationFn: async (data: { phone: string; vehicleType: string }) => {
      const response = await apiRequest("POST", "/api/quote", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Заявка отправлена!",
        description: data.message,
      });
      setPhone("");
      trackEvent('quick_quote_success', 'conversion', 'express_form');
    },
    onError: () => {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте еще раз.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      toast({
        title: "Ошибка",
        description: "Введите номер телефона",
        variant: "destructive",
      });
      return;
    }
    
    quickQuoteMutation.mutate({
      phone,
      vehicleType: 'passenger',
    });
  };

  return (
    <section className="bg-accent text-accent-foreground py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Clock size={32} />
            <div>
              <p className="font-semibold">Экспресс-диагностика DPF</p>
              <p className="text-sm text-accent-foreground/80">Бесплатно за 15 минут</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <Input 
              type="tel" 
              placeholder="Ваш телефон" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="text-foreground bg-white border-0 focus:ring-2 focus:ring-white/50"
              data-testid="input-quick-phone"
            />
            <Button 
              type="submit" 
              className="bg-white text-accent hover:bg-gray-100"
              disabled={quickQuoteMutation.isPending}
              data-testid="button-quick-submit"
            >
              {quickQuoteMutation.isPending ? "Отправка..." : "Записаться"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
