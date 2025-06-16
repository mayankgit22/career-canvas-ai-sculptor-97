import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Menu, X, Home, BarChart3, User, FileText, Award } from "lucide-react";
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    path: "/",
    label: "Home",
    icon: Home
  }, {
    path: "/dashboard",
    label: "Dashboard",
    icon: BarChart3
  }, {
    path: "/profile",
    label: "Profile",
    icon: User
  }, {
    path: "/creator",
    label: "Creator",
    icon: FileText
  }, {
    path: "/badges",
    label: "Badges",
    icon: Award
  }];
  return <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-white w-full py-4">
      <div className="flex items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold gradient-text">CareerCanvas</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(item => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return <Link key={item.path} to={item.path} className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>
                <Icon className="w-4 h-4" />
                <span className="text-zinc-950 font-semibold text-base">{item.label}</span>
              </Link>;
        })}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" className="bg-lime-500 hover:bg-lime-400">Sign In</Button>
          <Button size="sm" className="gradient-bg">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden mt-4 pb-4 border-t border-border">
          <nav className="flex flex-col space-y-2 mt-4">
            {navItems.map(item => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return <Link key={item.path} to={item.path} className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`} onClick={() => setIsOpen(false)}>
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>;
        })}
            <div className="flex flex-col space-y-2 pt-4 border-t border-border">
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm" className="gradient-bg">Get Started</Button>
            </div>
          </nav>
        </div>}
    </header>;
};