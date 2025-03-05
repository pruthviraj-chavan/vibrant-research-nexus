
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Edit, Trash2, MoreHorizontal, Calendar } from "lucide-react";

// Mock data for conferences
const conferencesMockData = [
  {
    id: 1,
    title: "International Symposium on Quantum Computing",
    date: "August 15-18, 2023",
    location: "Zurich, Switzerland",
    attendees: 350,
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Global Climate Science Forum",
    date: "September 22-25, 2023",
    location: "Stockholm, Sweden",
    attendees: 420,
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Biomedical Innovation Summit",
    date: "October 10-12, 2023",
    location: "Boston, USA",
    attendees: 380,
    status: "Registration Open",
  },
  {
    id: 4,
    title: "AI and Machine Learning Conference",
    date: "November 5-8, 2023",
    location: "Singapore",
    attendees: 500,
    status: "Planning",
  },
  {
    id: 5,
    title: "Annual Biotechnology Conference",
    date: "April 15-18, 2023",
    location: "Berlin, Germany",
    attendees: 425,
    status: "Completed",
  },
];

export default function ConferencesManager() {
  const [searchTerm, setSearchTerm] = useState("");
  const [conferences, setConferences] = useState(conferencesMockData);

  const filteredConferences = conferences.filter(
    (conference) =>
      conference.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conference.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Upcoming":
        return "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-400";
      case "Registration Open":
        return "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400";
      case "Planning":
        return "bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-400";
      case "Completed":
        return "bg-slate-100 text-slate-800 dark:bg-slate-800/20 dark:text-slate-400";
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-800/20 dark:text-slate-400";
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-serif font-bold">Manage Conferences</h1>
        <Button className="rounded-full">
          <Plus className="mr-2 h-4 w-4" />
          Add Conference
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium">Upcoming</h3>
            <div className="h-8 w-8 bg-blue-100 dark:bg-blue-800/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Calendar className="h-4 w-4" />
            </div>
          </div>
          <div className="text-3xl font-bold mb-1">
            {conferences.filter(c => c.status === "Upcoming").length}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Next in 12 days
          </p>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium">Registration Open</h3>
            <div className="h-8 w-8 bg-green-100 dark:bg-green-800/20 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
              <Calendar className="h-4 w-4" />
            </div>
          </div>
          <div className="text-3xl font-bold mb-1">
            {conferences.filter(c => c.status === "Registration Open").length}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            218 registrations so far
          </p>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium">Completed</h3>
            <div className="h-8 w-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400">
              <Calendar className="h-4 w-4" />
            </div>
          </div>
          <div className="text-3xl font-bold mb-1">
            {conferences.filter(c => c.status === "Completed").length}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last month
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-700">
          <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search conferences by title or location..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 uppercase">
              <tr>
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Location</th>
                <th className="px-6 py-3 text-left">Attendees</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {filteredConferences.map((conference) => (
                <tr key={conference.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm">CONF-{conference.id}</td>
                  <td className="px-6 py-4 text-sm font-medium">{conference.title}</td>
                  <td className="px-6 py-4 text-sm">{conference.date}</td>
                  <td className="px-6 py-4 text-sm">{conference.location}</td>
                  <td className="px-6 py-4 text-sm">{conference.attendees}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(conference.status)}`}>
                      {conference.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
          <div className="text-sm text-slate-500 dark:text-slate-400">
            Showing <span className="font-medium">{filteredConferences.length}</span> of{" "}
            <span className="font-medium">{conferences.length}</span> conferences
          </div>
        </div>
      </div>
    </div>
  );
}
