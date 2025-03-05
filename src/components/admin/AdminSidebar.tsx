
import {
  BarChart,
  FileText,
  Calendar,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type AdminView = "dashboard" | "papers" | "conferences" | "users" | "settings";

interface AdminSidebarProps {
  currentView: AdminView;
  setCurrentView: (view: AdminView) => void;
}

export default function AdminSidebar({
  currentView,
  setCurrentView,
}: AdminSidebarProps) {
  const navItems = [
    {
      name: "Dashboard",
      icon: BarChart,
      view: "dashboard" as AdminView,
    },
    {
      name: "Papers",
      icon: FileText,
      view: "papers" as AdminView,
    },
    {
      name: "Conferences",
      icon: Calendar,
      view: "conferences" as AdminView,
    },
    {
      name: "Users",
      icon: Users,
      view: "users" as AdminView,
    },
    {
      name: "Settings",
      icon: Settings,
      view: "settings" as AdminView,
    },
  ];

  return (
    <aside className="w-full md:w-64 bg-white dark:bg-slate-800 shadow-md md:min-h-screen">
      <div className="p-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="text-xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-research-blue to-research-purple">
          Admin Panel
        </h2>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.view}>
              <button
                onClick={() => setCurrentView(item.view)}
                className={cn(
                  "w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                  currentView === item.view
                    ? "bg-research-blue/10 text-research-blue dark:bg-research-blue/20"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-100 dark:border-slate-700 md:relative">
        <Link 
          to="/"
          className="flex items-center space-x-3 px-4 py-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span>Exit Admin</span>
        </Link>
      </div>
    </aside>
  );
}
