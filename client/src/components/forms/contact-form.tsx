import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactRequestSchema } from "@shared/schema";
import { z } from "zod";
import { trackEvent } from "@/lib/analytics";
import { Send } from "lucide-react";

const formSchema = insertContactRequestSchema.extend({
  consent: z.boolean().refine(val => val === true, {
    message: "Необходимо согласие на обработку данных",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      carModel: "",
      serviceType: "",
      description: "",
      consent: false,
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: Omit<FormData, 'consent'>) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Заявка отправлена!",
        description: data.message,
      });
      form.reset();
      trackEvent('contact_form_success', 'conversion', 'contact_page');
    },
    onError: () => {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте еще раз.",
        variant: "destructive",
      });
      trackEvent('contact_form_error', 'error', 'contact_page');
    },
  });

  const onSubmit = (data: FormData) => {
    const { consent, ...formData } = data;
    submitMutation.mutate(formData);
  };

  const serviceTypes = [
    "Чистка DPF фильтра",
    "Диагностика системы",
    "Принудительная регенерация",
    "Обслуживание автопарка",
    "Консультация специалиста",
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ваше имя</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Введите ваше имя" 
                    {...field} 
                    data-testid="input-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
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
                    data-testid="input-phone"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="example@mail.com" 
                    {...field} 
                    value={field.value || ""}
                    data-testid="input-email"
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
                <FormLabel>Марка и модель авто</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Например: Mercedes Sprinter" 
                    {...field} 
                    value={field.value || ""}
                    data-testid="input-car-model"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="serviceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Тип услуги</FormLabel>
              <Select onValueChange={field.onChange} value={field.value || ""} defaultValue={field.value || ""}>
                <FormControl>
                  <SelectTrigger data-testid="select-service-type">
                    <SelectValue placeholder="Выберите нужную услугу" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {serviceTypes.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание проблемы</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Опишите симптомы: горят ли лампочки, есть ли потеря мощности..."
                  rows={4}
                  {...field}
                  value={field.value || ""}
                  data-testid="textarea-description"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  data-testid="checkbox-consent"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Согласен на обработку персональных данных
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12"
          disabled={submitMutation.isPending}
          data-testid="button-submit-contact"
        >
          <Send className="mr-2" size={20} />
          {submitMutation.isPending ? "Отправка..." : "Отправить заявку"}
        </Button>
      </form>
    </Form>
  );
}
