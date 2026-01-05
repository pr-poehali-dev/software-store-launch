import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Games = () => {
  const games = [
    {
      title: "Valorant",
      description: "Тактический шутер от Riot Games",
      productsCount: 12,
      icon: "Target",
      gradient: "from-red-500/20 to-pink-500/20"
    },
    {
      title: "Counter-Strike 2",
      description: "Легендарный шутер нового поколения",
      productsCount: 18,
      icon: "Crosshair",
      gradient: "from-orange-500/20 to-yellow-500/20"
    },
    {
      title: "Apex Legends",
      description: "Королевская битва с уникальными героями",
      productsCount: 10,
      icon: "Zap",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Call of Duty",
      description: "Легендарная серия военных шутеров",
      productsCount: 15,
      icon: "Flame",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Fortnite",
      description: "Популярная королевская битва",
      productsCount: 14,
      icon: "Sparkles",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "PUBG",
      description: "Оригинальная королевская битва",
      productsCount: 9,
      icon: "Radio",
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "Rust",
      description: "Хардкорная выживалка с PvP",
      productsCount: 8,
      icon: "Pickaxe",
      gradient: "from-amber-500/20 to-red-500/20"
    },
    {
      title: "Rainbow Six Siege",
      description: "Тактический шутер про спецназ",
      productsCount: 11,
      icon: "Shield",
      gradient: "from-indigo-500/20 to-blue-500/20"
    },
    {
      title: "Escape from Tarkov",
      description: "Хардкорный тактический шутер",
      productsCount: 7,
      icon: "Siren",
      gradient: "from-gray-500/20 to-slate-500/20"
    },
    {
      title: "Overwatch 2",
      description: "Командный герой-шутер",
      productsCount: 13,
      icon: "Users",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "League of Legends",
      description: "Самая популярная MOBA в мире",
      productsCount: 16,
      icon: "Swords",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "Dota 2",
      description: "Легендарная MOBA от Valve",
      productsCount: 10,
      icon: "Gamepad2",
      gradient: "from-red-500/20 to-purple-500/20"
    }
  ];

  return (
    <div className="min-h-screen cyber-grid">
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-black neon-text mb-4">
              Каталог игр
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите игру, чтобы увидеть все доступные программы, читы и макросы
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {games.map((game, index) => (
              <Card 
                key={index}
                className="bg-card border-primary/30 hover:border-primary transition-all overflow-hidden group hover:scale-105 hover:neon-border cursor-pointer"
              >
                <div className={`h-40 bg-gradient-to-br ${game.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-grid-white/10" />
                  </div>
                  <Icon 
                    name={game.icon as any} 
                    size={64} 
                    className="text-primary group-hover:animate-glow-pulse relative z-10" 
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {game.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Package" size={16} className="text-secondary" />
                      <span className="text-muted-foreground">
                        {game.productsCount} товаров
                      </span>
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="neon-glow"
                    >
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-16 p-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary text-center">
            <Icon name="Search" size={64} className="mx-auto mb-6 text-primary animate-glow-pulse" />
            <h2 className="text-3xl font-bold mb-4">Не нашли нужную игру?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Напишите нам в поддержку, и мы постараемся добавить софт для вашей любимой игры
            </p>
            <Button size="lg" className="neon-glow bg-secondary hover:bg-secondary/90">
              <Icon name="MessageCircle" className="mr-2" />
              Связаться с нами
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Games;
