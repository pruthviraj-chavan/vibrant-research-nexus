
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Filter, MoreHorizontal, Edit, Trash2 } from "lucide-react";

// Mock data for papers
const papersMockData = [
  {
    id: "P001",
    title: "Quantum Computing Applications in Modern Cryptography",
    authors: "Zhang Wei, Maria Rodriguez, John Smith",
    date: "June 15, 2023",
    status: "Published",
    topic: "Computer Science",
  },
  {
    id: "P002", 
    title: "Climate Change Impact on Coral Reef Ecosystems",
    authors: "Emma Johnson, Ahmed Hassan, Lisa Chen",
    date: "May 22, 2023",
    status: "Published",
    topic: "Environmental Science",
  },
  {
    id: "P003",
    title: "Neural Network Approaches to Natural Language Processing",
    authors: "Alex Kumar, Sophie Martin, Kenji Tanaka",
    date: "July 3, 2023",
    status: "Published",
    topic: "Artificial Intelligence",
  },
  {
    id: "P004",
    title: "Advances in CRISPR Gene Editing Technologies",
    authors: "Sara Patel, Michael Brown, Lin Huang",
    date: "June 8, 2023",
    status: "Published",
    topic: "Biotechnology",
  },
  {
    id: "P005",
    title: "Sustainable Urban Development in Growing Metropolises",
    authors: "Carlos Mendez, Julia Wong, Robert Allen",
    date: "July 25, 2023",
    status: "Under Review",
    topic: "Urban Planning",
  },
  {
    id: "P006",
    title: "Machine Learning for Predictive Healthcare Analytics",
    authors: "David Chen, Olivia Wilson, Peter Kahn",
    date: "August 2, 2023",
    status: "Pending",
    topic: "Healthcare",
  },
];

export default function PapersManager() {
  const [searchTerm, setSearchTerm] = useState("");
  const [papers, setPapers] = useState(papersMockData);

  const filteredPapers = papers.filter(
    (paper) =>
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400";
      case "Under Review":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400";
      case "Pending":
        return "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-400";
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-800/20 dark:text-slate-400";
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-serif font-bold">Manage Papers</h1>
        <Button className="rounded-full">
          <Plus className="mr-2 h-4 w-4" />
          Add New Paper
        </Button>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-700">
          <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search papers by title, author, or topic..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex-shrink-0">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 uppercase">
              <tr>
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Authors</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Topic</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {filteredPapers.map((paper) => (
                <tr key={paper.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{paper.id}</td>
                  <td className="px-6 py-4 text-sm font-medium">{paper.title}</td>
                  <td className="px-6 py-4 text-sm">{paper.authors}</td>
                  <td className="px-6 py-4 text-sm">{paper.date}</td>
                  <td className="px-6 py-4 text-sm">{paper.topic}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(paper.status)}`}>
                      {paper.status}
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
            Showing <span className="font-medium">{filteredPapers.length}</span> of{" "}
            <span className="font-medium">{papers.length}</span> papers
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
