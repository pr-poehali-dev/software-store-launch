import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/sales", label: "Акции", icon: "Flame" },
    { path: "/games", label: "Каталог", icon: "Gamepad2" },
    { path: "/contacts", label: "Контакты", icon: "Mail" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-primary/20 rounded-lg group-hover:neon-glow transition-all">
              <Icon name="Zap" size={28} className="text-primary" />
            </div>
            <span className="text-2xl font-black neon-text hidden sm:inline">
              CYBER<span className="text-accent">SOFT</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={location.pathname === link.path ? "default" : "ghost"}
                  className={`gap-2 ${
                    location.pathname === link.path 
                      ? "neon-glow bg-primary text-primary-foreground" 
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  <Icon name={link.icon as any} size={18} />
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary/10">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="border-secondary text-secondary hover:bg-secondary/10 relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full text-xs flex items-center justify-center text-background font-bold">
                3
              </span>
            </Button>
            <Button className="neon-glow ml-2">
              <Icon name="User" size={18} className="mr-2" />
              Войти
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant={location.pathname === link.path ? "default" : "ghost"}
                    className={`w-full justify-start gap-2 ${
                      location.pathname === link.path 
                        ? "neon-glow bg-primary text-primary-foreground" 
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    <Icon name={link.icon as any} size={18} />
                    {link.label}
                  </Button>
                </Link>
              ))}
              <div className="flex gap-2 mt-4">
                <Button variant="outline" className="flex-1 border-primary text-primary">
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  Корзина (3)
                </Button>
                <Button className="flex-1 neon-glow">
                  <Icon name="User" size={18} className="mr-2" />
                  Войти
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
