
import { useState } from "react";
import Layout from "@/components/Layout";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminDashboard from "@/components/admin/AdminDashboard";
import PapersManager from "@/components/admin/PapersManager";
import ConferencesManager from "@/components/admin/ConferencesManager";
import UsersManager from "@/components/admin/UsersManager";
import SettingsManager from "@/components/admin/SettingsManager";

type AdminView = "dashboard" | "papers" | "conferences" | "users" | "settings";

export default function Admin() {
  const [currentView, setCurrentView] = useState<AdminView>("dashboard");

  // Render the appropriate component based on the current view
  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <AdminDashboard />;
      case "papers":
        return <PapersManager />;
      case "conferences":
        return <ConferencesManager />;
      case "users":
        return <UsersManager />;
      case "settings":
        return <SettingsManager />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen pt-16 md:pt-20">
        <AdminSidebar currentView={currentView} setCurrentView={setCurrentView} />
        <main className="flex-1 p-4 md:p-6 bg-slate-50 dark:bg-slate-900/50 min-h-screen">
          {renderView()}
        </main>
      </div>
    </Layout>
  );
}
