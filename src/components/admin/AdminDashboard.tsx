
import { Card } from "@/components/ui/card";
import {
  ArrowUpRight,
  FileText,
  Users,
  Calendar,
  Mail,
  TrendingUp,
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Papers",
      value: "521",
      change: "+12% from last month",
      icon: FileText,
      color: "bg-research-blue text-white",
    },
    {
      title: "Active Users",
      value: "2,842",
      change: "+5.3% from last month",
      icon: Users,
      color: "bg-research-purple text-white",
    },
    {
      title: "Upcoming Conferences",
      value: "8",
      change: "Next one in 12 days",
      icon: Calendar,
      color: "bg-research-teal text-white",
    },
    {
      title: "New Submissions",
      value: "34",
      change: "18 need review",
      icon: Mail,
      color: "bg-research-coral text-white",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-serif font-bold">Dashboard</h1>
        <span className="text-sm text-slate-500 dark:text-slate-400">
          Last updated: {new Date().toLocaleDateString()}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <h3 className="text-lg font-medium text-slate-500 dark:text-slate-400">
                {stat.title}
              </h3>
              <div className="mt-2 flex items-center justify-between">
                <div className="text-3xl font-bold">{stat.value}</div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.change}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Recent Activities</h3>
              <button className="text-sm text-research-blue dark:text-research-teal flex items-center">
                View All
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mr-4">
                    <Users className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                  </div>
                  <div>
                    <p className="font-medium">New paper submitted</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      2 hours ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Quick Actions</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "Add New Paper",
                  icon: FileText,
                  color: "bg-research-blue/10 text-research-blue",
                },
                {
                  title: "Manage Users",
                  icon: Users,
                  color: "bg-research-purple/10 text-research-purple",
                },
                {
                  title: "Schedule Conference",
                  icon: Calendar,
                  color: "bg-research-teal/10 text-research-teal",
                },
                {
                  title: "Review Submissions",
                  icon: Mail,
                  color: "bg-research-coral/10 text-research-coral",
                },
              ].map((action, i) => (
                <button
                  key={i}
                  className="p-4 rounded-xl flex flex-col items-center justify-center text-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${action.color} flex items-center justify-center mb-3`}
                  >
                    <action.icon className="h-6 w-6" />
                  </div>
                  <span className="font-medium">{action.title}</span>
                </button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
