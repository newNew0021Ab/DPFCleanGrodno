import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertQuoteRequestSchema } from "@shared/schema";
import { z } from "zod";
import { trackEvent } from "@/lib/analytics";
import { Calculator } from "lucide-react";

type FormData = z.infer<typeof insertQuoteRequestSchema>;

export default function QuickQuoteForm() {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(insertQuoteRequestSchema),
    defaultValues: {
      phone: "",
      vehicleType: "",
      carMake: "",
      carModel: "",
      year: undefined,
      mileage: undefined,
      description: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest("POST", "/api/quote", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Запрос отправлен!",
        description: data.message,
      });
      form.reset();
      trackEvent('quote_form_success', 'conversion', 'quote_calculator');
    },
    onError: () => {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить запрос. Попробуйте еще раз.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    submitMutation.mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Телефон *</FormLabel>
                <FormControl>
                  <Input 
                    type="tel" 
                    placeholder="+375 (XX) XXX-XX-XX" 
                    {...field} 
                    data-testid="input-quote-phone"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="vehicleType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Тип транспорта *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger data-testid="select-quote-vehicle-type">
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="passenger">Легковой</SelectItem>
                    <SelectItem value="commercial">Коммерческий</SelectItem>
                    <SelectItem value="truck">Грузовой</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="carMake"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Марка</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Mercedes-Benz" 
                    {...field} 
                    data-testid="input-quote-make"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="carModel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Модель</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Sprinter" 
                    {...field} 
                    data-testid="input-quote-model"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          disabled={submitMutation.isPending}
          data-testid="button-submit-quote"
        >
          <Calculator className="mr-2" size={16} />
          {submitMutation.isPending ? "Отправка..." : "Получить расчет"}
        </Button>
      </form>
    </Form>
  );
}
