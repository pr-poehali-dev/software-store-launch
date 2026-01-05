import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const messengers = [
    {
      name: "Telegram",
      username: "@cybersoft_shop",
      icon: "Send",
      color: "primary",
      link: "#"
    },
    {
      name: "Discord",
      username: "CyberSoft#1234",
      icon: "MessageSquare",
      color: "secondary",
      link: "#"
    },
    {
      name: "WhatsApp",
      username: "+7 (999) 123-45-67",
      icon: "Phone",
      color: "accent",
      link: "#"
    }
  ];

  const info = [
    {
      title: "Время работы",
      value: "24/7",
      description: "Круглосуточная поддержка",
      icon: "Clock"
    },
    {
      title: "Среднее время ответа",
      value: "< 15 мин",
      description: "Быстрая реакция на запросы",
      icon: "Timer"
    },
    {
      title: "Активных пользователей",
      value: "15,000+",
      description: "Доверяют нашему сервису",
      icon: "Users"
    },
    {
      title: "Продуктов в каталоге",
      value: "150+",
      description: "Для разных игр и задач",
      icon: "Package"
    }
  ];

  const features = [
    {
      title: "Информация о лицензиях",
      description: "Все наши продукты имеют лицензии на определенные сроки действия",
      details: [
        "1 день - тестовая версия для ознакомления",
        "7 дней - оптимальный вариант для проверки",
        "30 дней - популярный выбор большинства клиентов",
        "90 дней - выгодное предложение с скидкой",
        "Lifetime - навсегда с бесплатными обновлениями"
      ],
      icon: "FileCheck"
    },
    {
      title: "Гарантии и возврат",
      description: "Мы гарантируем качество и работоспособность всех продуктов",
      details: [
        "Возврат в течение 24 часов при технических проблемах",
        "Бесплатная замена при обнаружении дефектов",
        "Техническая поддержка на весь срок лицензии",
        "Автоматическое продление подписок",
        "Безопасные методы оплаты"
      ],
      icon: "ShieldCheck"
    },
    {
      title: "Политика безопасности",
      description: "Ваша безопасность - наш главный приоритет",
      details: [
        "Шифрование всех транзакций",
        "Конфиденциальность личных данных",
        "Защита от детекта в играх",
        "Регулярные обновления безопасности",
        "Анонимная доставка продуктов"
      ],
      icon: "Lock"
    }
  ];

  return (
    <div className="min-h-screen cyber-grid">
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-black neon-text mb-4">
              Контакты и информация
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом или узнайте больше о нашем сервисе
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {messengers.map((messenger, index) => (
              <Card 
                key={index}
                className={`p-8 bg-card border-2 hover:scale-105 transition-all group cursor-pointer text-center`}
                style={{ borderColor: `hsl(var(--neon-${messenger.color}))` }}
              >
                <div className="flex justify-center mb-4">
                  <div 
                    className="p-4 rounded-full"
                    style={{ backgroundColor: `hsl(var(--neon-${messenger.color}) / 0.2)` }}
                  >
                    <Icon 
                      name={messenger.icon as any} 
                      size={40} 
                      className={`text-${messenger.color} group-hover:animate-glow-pulse`}
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{messenger.name}</h3>
                <p className="text-muted-foreground mb-4">{messenger.username}</p>
                
                <Button 
                  className="w-full neon-glow"
                  style={{ backgroundColor: `hsl(var(--neon-${messenger.color}))` }}
                >
                  <Icon name="ExternalLink" className="mr-2" size={16} />
                  Открыть
                </Button>
              </Card>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {info.map((item, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-primary/30 hover:border-primary transition-all text-center group hover:neon-border"
              >
                <Icon 
                  name={item.icon as any} 
                  size={40} 
                  className="mx-auto mb-4 text-primary group-hover:animate-glow-pulse"
                />
                <h3 className="text-sm text-muted-foreground mb-2">{item.title}</h3>
                <p className="text-3xl font-bold text-primary mb-2">{item.value}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

          <div className="space-y-8 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-8 bg-card border-primary/30 hover:border-primary transition-all hover:neon-border"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-primary/20 rounded-full w-fit">
                      <Icon 
                        name={feature.icon as any} 
                        size={48} 
                        className="text-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-primary">{feature.title}</h3>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    
                    <ul className="space-y-3">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Icon name="CheckCircle" size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary text-center">
            <Icon name="Mail" size={64} className="mx-auto mb-6 text-accent animate-glow-pulse" />
            <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Наша команда поддержки готова помочь вам в любое время суток
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="neon-glow">
                <Icon name="MessageCircle" className="mr-2" />
                Написать в поддержку
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Icon name="BookOpen" className="mr-2" />
                База знаний
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
