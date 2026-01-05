import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Home = () => {
  return (
    <div className="min-h-screen cyber-grid">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-secondary/20" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center space-y-8 animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-black neon-text">
              CYBER<span className="text-accent">SOFT</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto">
              Магазин премиального софта, читов и макросов для киберспортсменов
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" className="neon-glow text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Icon name="Zap" className="mr-2" />
                Перейти в каталог
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10">
                <Icon name="Shield" className="mr-2" />
                О нашей безопасности
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
            Почему выбирают нас?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-primary/30 hover:border-primary transition-all hover:neon-border group">
              <div className="text-primary mb-4 animate-glow-pulse">
                <Icon name="Shield" size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Безопасность</h3>
              <p className="text-muted-foreground">
                Все программы проверены антивирусами и работают с защитой от детекта. Гарантия безопасности вашего аккаунта.
              </p>
            </Card>

            <Card className="p-8 bg-card border-secondary/30 hover:border-secondary transition-all hover:neon-border group">
              <div className="text-secondary mb-4 animate-glow-pulse">
                <Icon name="Zap" size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">Мгновенная доставка</h3>
              <p className="text-muted-foreground">
                Получайте свой софт сразу после оплаты. Автоматическая система выдачи лицензий 24/7.
              </p>
            </Card>

            <Card className="p-8 bg-card border-accent/30 hover:border-accent transition-all hover:neon-border group">
              <div className="text-accent mb-4 animate-glow-pulse">
                <Icon name="Headphones" size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-accent">Поддержка 24/7</h3>
              <p className="text-muted-foreground">
                Наша команда всегда на связи. Помощь с установкой, настройкой и любыми вопросами.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
            Что мы предлагаем?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-card/50 rounded-lg border border-primary/20">
              <Icon name="Target" className="text-primary mt-1" size={32} />
              <div>
                <h3 className="text-xl font-bold mb-2">Читы для игр</h3>
                <p className="text-muted-foreground">
                  Аимботы, WH, ESP и другие функции для популярных шутеров. Регулярные обновления.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card/50 rounded-lg border border-secondary/20">
              <Icon name="Mouse" className="text-secondary mt-1" size={32} />
              <div>
                <h3 className="text-xl font-bold mb-2">Макросы</h3>
                <p className="text-muted-foreground">
                  Готовые скрипты для компенсации отдачи, быстрой стрельбы и других улучшений геймплея.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card/50 rounded-lg border border-accent/20">
              <Icon name="Package" className="text-accent mt-1" size={32} />
              <div>
                <h3 className="text-xl font-bold mb-2">Премиум софт</h3>
                <p className="text-muted-foreground">
                  Профессиональные программы для стриминга, монтажа и оптимизации системы.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card/50 rounded-lg border border-primary/20">
              <Icon name="Award" className="text-primary mt-1" size={32} />
              <div>
                <h3 className="text-xl font-bold mb-2">VIP подписки</h3>
                <p className="text-muted-foreground">
                  Эксклюзивный доступ к закрытым читам и приоритетная поддержка.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="p-12 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border-primary neon-border max-w-3xl mx-auto">
            <Icon name="Rocket" size={64} className="mx-auto mb-6 text-primary animate-glow-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы начать?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Присоединяйтесь к тысячам игроков, которые уже улучшили свой игровой опыт
            </p>
            <Button size="lg" className="neon-glow text-xl px-12 py-6 bg-primary hover:bg-primary/90">
              <Icon name="ShoppingCart" className="mr-2" />
              Начать покупки
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
