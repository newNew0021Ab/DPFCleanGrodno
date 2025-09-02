import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema, insertQuoteRequestSchema, insertTestimonialSchema } from "@shared/schema";
import { trackEvent } from "../client/src/lib/analytics";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validatedData);
      
      // TODO: Send email notification to admin
      // TODO: Send confirmation email to customer
      
      res.json({ 
        success: true, 
        message: "Заявка принята! Мы свяжемся с вами в ближайшее время.",
        id: contactRequest.id 
      });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: "Ошибка при отправке заявки. Проверьте правильность заполнения формы." 
      });
    }
  });

  // Quote request submission
  app.post("/api/quote", async (req, res) => {
    try {
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      const quoteRequest = await storage.createQuoteRequest(validatedData);
      
      res.json({ 
        success: true, 
        message: "Запрос на расчет принят! Мы рассчитаем стоимость и свяжемся с вами.",
        estimatedPrice: quoteRequest.estimatedPrice,
        id: quoteRequest.id 
      });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: "Ошибка при отправке запроса. Проверьте правильность заполнения формы." 
      });
    }
  });

  // Get blog posts
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Ошибка при загрузке статей" });
    }
  });

  // Get single blog post
  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPost(req.params.slug);
      if (!post) {
        return res.status(404).json({ message: "Статья не найдена" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Ошибка при загрузке статьи" });
    }
  });

  // Get approved testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getApprovedTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Ошибка при загрузке отзывов" });
    }
  });

  // Submit testimonial
  app.post("/api/testimonials", async (req, res) => {
    try {
      const validatedData = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(validatedData);
      
      res.json({ 
        success: true, 
        message: "Спасибо за отзыв! После модерации он появится на сайте.",
        id: testimonial.id 
      });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: "Ошибка при отправке отзыва. Проверьте правильность заполнения формы." 
      });
    }
  });

  // Get pricing calculator data
  app.get("/api/pricing/:vehicleType", async (req, res) => {
    const { vehicleType } = req.params;
    
    const pricingData = {
      passenger: {
        basePrice: 250,
        description: "Легковые автомобили",
        features: ["Диагностика включена", "Ультразвуковая очистка", "Гарантия 12 месяцев", "Сброс счетчиков"]
      },
      commercial: {
        basePrice: 450,
        description: "Коммерческий транспорт",
        features: ["Расширенная диагностика", "Промышленная очистка", "Гарантия 12 месяцев", "Приоритетное обслуживание"]
      },
      truck: {
        basePrice: 650,
        description: "Грузовой транспорт",
        features: ["Выезд к клиенту", "Спецоборудование", "Договор обслуживания", "Скидки автопаркам"]
      }
    };

    const pricing = pricingData[vehicleType as keyof typeof pricingData];
    if (!pricing) {
      return res.status(404).json({ message: "Тариф не найден" });
    }

    res.json(pricing);
  });

  const httpServer = createServer(app);
  return httpServer;
}
