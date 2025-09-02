import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Car, Truck, Bus } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function PricingCalculator() {
  const [vehicleType, setVehicleType] = useState("");
  const [carMake, setCarMake] = useState("");
  const [phone, setPhone] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const vehicleTypes = [
    { value: "passenger", label: "Легковой автомобиль", icon: Car, basePrice: 250 },
    { value: "commercial", label: "Коммерческий транспорт", icon: Bus, basePrice: 450 },
    { value: "truck", label: "Грузовой транспорт", icon: Truck, basePrice: 650 },
  ];

  const carMakes = [
    "Mercedes-Benz", "Volkswagen", "BMW", "Audi", "Ford", "Opel", 
    "Peugeot", "Renault", "Volvo", "Iveco", "MAN", "Scania", "DAF"
  ];

  const handleCalculate = () => {
    if (!vehicleType) return;
    
    const selectedVehicle = vehicleTypes.find(v => v.value === vehicleType);
    if (selectedVehicle) {
      setEstimatedPrice(selectedVehicle.basePrice);
      trackEvent('price_calculated', 'conversion', 'pricing_calculator', selectedVehicle.basePrice);
    }
  };

  const handleGetQuote = () => {
    if (!phone.trim()) return;
    
    trackEvent('quote_request', 'conversion', 'pricing_calculator');
    // TODO: Submit quote request
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="text-primary" size={24} />
          Калькулятор стоимости
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label htmlFor="vehicle-type">Тип транспорта</Label>
          <Select value={vehicleType} onValueChange={setVehicleType}>
            <SelectTrigger data-testid="select-vehicle-type">
              <SelectValue placeholder="Выберите тип автомобиля" />
            </SelectTrigger>
            <SelectContent>
              {vehicleTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  <div className="flex items-center gap-2">
                    <type.icon size={16} />
                    {type.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="car-make">Марка автомобиля (опционально)</Label>
          <Select value={carMake} onValueChange={setCarMake}>
            <SelectTrigger data-testid="select-car-make">
              <SelectValue placeholder="Выберите марку" />
            </SelectTrigger>
            <SelectContent>
              {carMakes.map((make) => (
                <SelectItem key={make} value={make}>
                  {make}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={handleCalculate}
          disabled={!vehicleType}
          className="w-full"
          data-testid="button-calculate"
        >
          Рассчитать стоимость
        </Button>

        {estimatedPrice && (
          <div className="bg-secondary/30 p-6 rounded-lg text-center animate-fade-in">
            <p className="text-lg font-semibold mb-2">Предварительная стоимость:</p>
            <p className="text-3xl font-bold text-primary mb-4" data-testid="text-estimated-price">
              от {estimatedPrice} BYN
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Окончательная цена зависит от состояния фильтра
            </p>
            
            <div className="space-y-3">
              <div>
                <Label htmlFor="phone-quote">Телефон для точного расчета</Label>
                <Input 
                  id="phone-quote"
                  type="tel" 
                  placeholder="+375 (XX) XXX-XX-XX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  data-testid="input-quote-phone"
                />
              </div>
              <Button 
                onClick={handleGetQuote}
                disabled={!phone.trim()}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                data-testid="button-get-quote"
              >
                Получить точный расчет
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
