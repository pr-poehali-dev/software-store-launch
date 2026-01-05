import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="border-t border-primary/30 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Icon name="Zap" size={24} className="text-primary" />
              </div>
              <span className="text-xl font-black neon-text">
                CYBER<span className="text-accent">SOFT</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Премиальный магазин софта, читов и макросов для геймеров
            </p>
            <div className="flex gap-2">
              <div className="p-2 bg-primary/20 rounded-lg hover:neon-glow transition-all cursor-pointer">
                <Icon name="Send" size={20} className="text-primary" />
              </div>
              <div className="p-2 bg-secondary/20 rounded-lg hover:neon-glow transition-all cursor-pointer">
                <Icon name="MessageSquare" size={20} className="text-secondary" />
              </div>
              <div className="p-2 bg-accent/20 rounded-lg hover:neon-glow transition-all cursor-pointer">
                <Icon name="Youtube" size={20} className="text-accent" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/sales" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Акции
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Каталог игр
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">Поддержка</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">FAQ</li>
              <li className="text-sm text-muted-foreground">База знаний</li>
              <li className="text-sm text-muted-foreground">Гарантии</li>
              <li className="text-sm text-muted-foreground">Возврат средств</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Информация</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">О компании</li>
              <li className="text-sm text-muted-foreground">Политика конфиденциальности</li>
              <li className="text-sm text-muted-foreground">Условия использования</li>
              <li className="text-sm text-muted-foreground">Партнерская программа</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 CyberSoft. Все права защищены.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Icon name="Shield" size={16} className="text-primary" />
                Безопасные платежи
              </span>
              <span className="flex items-center gap-2">
                <Icon name="Zap" size={16} className="text-secondary" />
                Моментальная доставка
              </span>
              <span className="flex items-center gap-2">
                <Icon name="Headphones" size={16} className="text-accent" />
                Поддержка 24/7
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
