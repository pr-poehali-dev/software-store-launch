import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Sales = () => {
  const hotDeals = [
    {
      title: "VALORANT Private Cheat",
      game: "Valorant",
      price: "2990₽",
      oldPrice: "4990₽",
      discount: "-40%",
      features: ["Aimbot", "ESP", "Radar Hack", "Skin Changer"],
      badge: "ХИТ МЕСЯЦА",
      color: "primary"
    },
    {
      title: "CS2 Premium Pack",
      game: "Counter-Strike 2",
      price: "3490₽",
      oldPrice: "5990₽",
      discount: "-42%",
      features: ["Triggerbot", "Wallhack", "Bunny Hop", "Anti-Aim"],
      badge: "НОВИНКА",
      color: "secondary"
    },
    {
      title: "Apex Legends Ultimate",
      game: "Apex Legends",
      price: "2790₽",
      oldPrice: "4490₽",
      discount: "-38%",
      features: ["Aimbot", "ESP", "No Recoil", "Speed Hack"],
      badge: "ПОПУЛЯРНОЕ",
      color: "accent"
    }
  ];

  const popularProducts = [
    {
      title: "Fortnite Macro Pack",
      game: "Fortnite",
      price: "1490₽",
      rating: 4.9,
      sales: 1243
    },
    {
      title: "PUBG ESP Private",
      game: "PUBG",
      price: "2290₽",
      rating: 4.8,
      sales: 892
    },
    {
      title: "Warzone Aimbot Pro",
      game: "Call of Duty",
      price: "3290₽",
      rating: 4.9,
      sales: 756
    },
    {
      title: "Rust Ultimate Cheat",
      game: "Rust",
      price: "2990₽",
      rating: 4.7,
      sales: 634
    }
  ];

  return (
    <div className="min-h-screen cyber-grid">
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4 text-lg px-6 py-2 bg-accent/20 text-accent border-accent neon-glow">
              🔥 ГОРЯЩИЕ ПРЕДЛОЖЕНИЯ
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black neon-text mb-4">
              Акции и скидки
            </h1>
            <p className="text-xl text-muted-foreground">
              Лучшие предложения месяца со скидками до 50%
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {hotDeals.map((deal, index) => (
              <Card 
                key={index}
                className="bg-card border-2 hover:scale-105 transition-all duration-300 overflow-hidden group"
                style={{ borderColor: `hsl(var(--neon-${deal.color}))` }}
              >
                <div className="relative">
                  <div 
                    className="absolute top-4 right-4 z-10 px-4 py-2 rounded-full font-bold text-sm"
                    style={{ 
                      backgroundColor: `hsl(var(--neon-${deal.color}))`,
                      color: 'hsl(var(--background))'
                    }}
                  >
                    {deal.discount}
                  </div>
                  
                  <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                    <Icon name="Gamepad2" size={80} className={`text-${deal.color} animate-glow-pulse`} />
                  </div>
                </div>

                <div className="p-6">
                  <Badge className="mb-3 text-xs" variant="secondary">
                    {deal.badge}
                  </Badge>
                  
                  <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
                  <p className="text-muted-foreground mb-4">{deal.game}</p>
                  
                  <div className="space-y-2 mb-6">
                    {deal.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-primary">{deal.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{deal.oldPrice}</span>
                  </div>

                  <Button className="w-full neon-glow" size="lg">
                    <Icon name="ShoppingCart" className="mr-2" />
                    Купить сейчас
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold neon-text mb-8 text-center">
              Популярные товары месяца
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularProducts.map((product, index) => (
                <Card 
                  key={index}
                  className="bg-card border-primary/30 hover:border-primary transition-all p-6 group hover:neon-border"
                >
                  <div className="flex items-center justify-center h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4">
                    <Icon name="Trophy" size={48} className="text-secondary group-hover:animate-glow-pulse" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.game}</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          size={14} 
                          className={i < Math.floor(product.rating) ? "text-accent fill-accent" : "text-muted"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.sales} продаж)
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" variant="outline" className="border-primary text-primary">
                      <Icon name="Eye" size={16} />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary text-center">
            <Icon name="Gift" size={64} className="mx-auto mb-6 text-accent animate-glow-pulse" />
            <h2 className="text-3xl font-bold mb-4">Хотите больше скидок?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Подпишитесь на нашу VIP-программу и получайте эксклюзивные предложения каждую неделю
            </p>
            <Button size="lg" className="neon-glow bg-secondary hover:bg-secondary/90">
              <Icon name="Crown" className="mr-2" />
              Узнать подробнее
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Sales;
