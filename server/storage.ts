import { 
  type User, 
  type InsertUser,
  type ContactRequest,
  type InsertContactRequest,
  type QuoteRequest,
  type InsertQuoteRequest,
  type BlogPost,
  type InsertBlogPost,
  type Testimonial,
  type InsertTestimonial
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
  getContactRequests(): Promise<ContactRequest[]>;
  updateContactRequestStatus(id: string, status: string): Promise<void>;
  
  createQuoteRequest(request: InsertQuoteRequest): Promise<QuoteRequest>;
  getQuoteRequests(): Promise<QuoteRequest[]>;
  updateQuoteRequest(id: string, updates: Partial<QuoteRequest>): Promise<void>;
  
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  getTestimonials(): Promise<Testimonial[]>;
  getApprovedTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactRequests: Map<string, ContactRequest>;
  private quoteRequests: Map<string, QuoteRequest>;
  private blogPosts: Map<string, BlogPost>;
  private testimonials: Map<string, Testimonial>;

  constructor() {
    this.users = new Map();
    this.contactRequests = new Map();
    this.quoteRequests = new Map();
    this.blogPosts = new Map();
    this.testimonials = new Map();
    this.seedData();
  }

  private seedData() {
    // Seed blog posts
    const blogPost1: BlogPost = {
      id: randomUUID(),
      title: "Как понять, что DPF фильтр нуждается в чистке",
      slug: "how-to-know-dpf-needs-cleaning",
      excerpt: "5 основных признаков засорения сажевого фильтра и когда обращаться к специалистам",
      content: "Сажевый фильтр (DPF) - важная часть системы очистки выхлопных газов дизельного двигателя...",
      author: "Экспертная команда ЭкоДизель-Сервис",
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const blogPost2: BlogPost = {
      id: randomUUID(),
      title: "Почему нельзя игнорировать лампочку DPF на панели приборов",
      slug: "why-not-ignore-dpf-warning-light",
      excerpt: "Что происходит с двигателем при засоренном DPF и сколько это может стоить",
      content: "Многие водители игнорируют предупреждающую лампочку DPF, считая ее несущественной...",
      author: "Экспертная команда ЭкоДизель-Сервис",
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.blogPosts.set(blogPost1.id, blogPost1);
    this.blogPosts.set(blogPost2.id, blogPost2);

    // Seed testimonials
    const testimonial1: Testimonial = {
      id: randomUUID(),
      name: "Андрей Сидоров",
      carModel: "Mercedes Sprinter",
      rating: 5,
      comment: "Отличная работа! Фильтр очистили как новый. Машина стала работать заметно лучше, расход топлива снизился. Рекомендую!",
      approved: true,
      createdAt: new Date(),
    };

    const testimonial2: Testimonial = {
      id: randomUUID(),
      name: "Елена Козлова",
      carModel: "Volkswagen Touran",
      rating: 5,
      comment: "Быстро и качественно! Сделали за один день, предупредили о каждом этапе работы. Цена справедливая.",
      approved: true,
      createdAt: new Date(),
    };

    const testimonial3: Testimonial = {
      id: randomUUID(),
      name: "Дмитрий Морозов",
      carModel: "Iveco Daily",
      rating: 5,
      comment: "Профессионалы своего дела! У меня автопарк, обслуживаемся только здесь. Всегда качественно и в срок. Спасибо за работу!",
      approved: true,
      createdAt: new Date(),
    };

    this.testimonials.set(testimonial1.id, testimonial1);
    this.testimonials.set(testimonial2.id, testimonial2);
    this.testimonials.set(testimonial3.id, testimonial3);
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactRequest(request: InsertContactRequest): Promise<ContactRequest> {
    const id = randomUUID();
    const contactRequest: ContactRequest = {
      ...request,
      id,
      status: 'new',
      createdAt: new Date(),
    };
    this.contactRequests.set(id, contactRequest);
    return contactRequest;
  }

  async getContactRequests(): Promise<ContactRequest[]> {
    return Array.from(this.contactRequests.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async updateContactRequestStatus(id: string, status: string): Promise<void> {
    const request = this.contactRequests.get(id);
    if (request) {
      request.status = status;
      this.contactRequests.set(id, request);
    }
  }

  async createQuoteRequest(request: InsertQuoteRequest): Promise<QuoteRequest> {
    const id = randomUUID();
    const quoteRequest: QuoteRequest = {
      ...request,
      id,
      estimatedPrice: this.calculatePrice(request.vehicleType),
      status: 'pending',
      createdAt: new Date(),
    };
    this.quoteRequests.set(id, quoteRequest);
    return quoteRequest;
  }

  async getQuoteRequests(): Promise<QuoteRequest[]> {
    return Array.from(this.quoteRequests.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async updateQuoteRequest(id: string, updates: Partial<QuoteRequest>): Promise<void> {
    const request = this.quoteRequests.get(id);
    if (request) {
      Object.assign(request, updates);
      this.quoteRequests.set(id, request);
    }
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug && post.published);
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const blogPost: BlogPost = {
      ...post,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getApprovedTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values())
      .filter(testimonial => testimonial.approved)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const newTestimonial: Testimonial = {
      ...testimonial,
      id,
      approved: false,
      createdAt: new Date(),
    };
    this.testimonials.set(id, newTestimonial);
    return newTestimonial;
  }

  private calculatePrice(vehicleType: string): string {
    const prices = {
      'passenger': '250.00',
      'commercial': '450.00',
      'truck': '650.00',
    };
    return prices[vehicleType as keyof typeof prices] || '250.00';
  }
}

export const storage = new MemStorage();
