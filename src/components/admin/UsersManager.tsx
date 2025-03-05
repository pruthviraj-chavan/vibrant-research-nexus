
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Edit, Trash2, MoreHorizontal, User } from "lucide-react";

// Mock data for users
const usersMockData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "Editor",
    department: "Computer Science",
    joined: "Jan 15, 2022",
    status: "Active",
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    email: "michael.chen@example.com",
    role: "Reviewer",
    department: "Physics",
    joined: "Mar 3, 2022",
    status: "Active",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    email: "emily.rodriguez@example.com",
    role: "Author",
    department: "Biology",
    joined: "Feb 18, 2023",
    status: "Active",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    email: "james.wilson@example.com",
    role: "Reviewer",
    department: "Environmental Science",
    joined: "Jul 27, 2022",
    status: "Active",
  },
  {
    id: 5,
    name: "Prof. Li Wei",
    email: "li.wei@example.com",
    role: "Editor",
    department: "Mathematics",
    joined: "Nov 12, 2022",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Dr. Robert Smith",
    email: "robert.smith@example.com",
    role: "Author",
    department: "Chemistry",
    joined: "Apr 5, 2023",
    status: "Pending",
  },
];

export default function UsersManager() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState(usersMockData);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400";
      case "Inactive":
        return "bg-slate-100 text-slate-800 dark:bg-slate-800/20 dark:text-slate-400";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400";
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-800/20 dark:text-slate-400";
    }
  };

  const getRoleClass = (role: string) => {
    switch (role) {
      case "Editor":
        return "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-400";
      case "Reviewer":
        return "bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-400";
      case "Author":
        return "bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-400";
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-800/20 dark:text-slate-400";
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-serif font-bold">Manage Users</h1>
        <Button className="rounded-full">
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
          <div className="text-3xl font-bold mb-1">{users.length}</div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Total Users
          </p>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
          <div className="text-3xl font-bold mb-1 text-blue-600 dark:text-blue-400">
            {users.filter(u => u.role === "Editor").length}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Editors
          </p>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
          <div className="text-3xl font-bold mb-1 text-purple-600 dark:text-purple-400">
            {users.filter(u => u.role === "Reviewer").length}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Reviewers
          </p>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
          <div className="text-3xl font-bold mb-1 text-teal-600 dark:text-teal-400">
            {users.filter(u => u.role === "Author").length}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Authors
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-700">
          <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search users by name, email, role, or department..."
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
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Role</th>
                <th className="px-6 py-3 text-left">Department</th>
                <th className="px-6 py-3 text-left">Joined</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm">USER-{user.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mr-3">
                        <User className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                      </div>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleClass(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">{user.department}</td>
                  <td className="px-6 py-4 text-sm">{user.joined}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(user.status)}`}>
                      {user.status}
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
            Showing <span className="font-medium">{filteredUsers.length}</span> of{" "}
            <span className="font-medium">{users.length}</span> users
          </div>
        </div>
      </div>
    </div>
  );
}
