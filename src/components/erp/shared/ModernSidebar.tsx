
import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { Button } from '../../ui/button';
import { cn } from '../../../lib/utils';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  FileText, 
  CreditCard, 
  Settings, 
  Package, 
  BarChart3,
  User,
  Calendar,
  BookOpen,
  MessageSquare,
  LogOut
} from 'lucide-react';

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  path: string;
  active?: boolean;
}

interface ModernSidebarProps {
  userRole: 'admin' | 'student' | 'instructor';
  activePath?: string;
}

const ModernSidebar: React.FC<ModernSidebarProps> = ({ userRole, activePath = 'dashboard' }) => {
  const { user, logout } = useAuth();

  const adminItems: SidebarItem[] = [
    { icon: LayoutDashboard, label: 'Dashboard', path: 'dashboard' },
    { icon: Users, label: 'Enrollees List', path: 'enrollees' },
    { icon: GraduationCap, label: 'Instructors', path: 'instructors' },
    { icon: Package, label: 'Training Packages', path: 'packages' },
    { icon: FileText, label: 'Reports', path: 'reports' },
    { icon: CreditCard, label: 'Payment Report', path: 'payments' },
    { icon: Settings, label: 'Settings', path: 'settings' }
  ];

  const studentItems: SidebarItem[] = [
    { icon: LayoutDashboard, label: 'Dashboard', path: 'dashboard' },
    { icon: BookOpen, label: 'My Courses', path: 'courses' },
    { icon: Calendar, label: 'Schedule', path: 'schedule' },
    { icon: FileText, label: 'Assignments', path: 'assignments' },
    { icon: CreditCard, label: 'Payments', path: 'payments' },
    { icon: MessageSquare, label: 'Messages', path: 'messages' },
    { icon: User, label: 'Profile', path: 'profile' }
  ];

  const instructorItems: SidebarItem[] = [
    { icon: LayoutDashboard, label: 'Dashboard', path: 'dashboard' },
    { icon: Users, label: 'My Students', path: 'students' },
    { icon: Calendar, label: 'Schedule', path: 'schedule' },
    { icon: BookOpen, label: 'Courses', path: 'courses' },
    { icon: BarChart3, label: 'Performance', path: 'performance' },
    { icon: MessageSquare, label: 'Messages', path: 'messages' },
    { icon: User, label: 'Profile', path: 'profile' }
  ];

  const getItems = () => {
    switch (userRole) {
      case 'admin': return adminItems;
      case 'student': return studentItems;
      case 'instructor': return instructorItems;
      default: return [];
    }
  };

  const getRoleColor = () => {
    switch (userRole) {
      case 'admin': return 'from-blue-600 to-blue-700';
      case 'student': return 'from-hirtoli-green to-green-600';
      case 'instructor': return 'from-purple-600 to-purple-700';
      default: return 'from-gray-600 to-gray-700';
    }
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl z-50">
      {/* Header */}
      <div className={`p-6 bg-gradient-to-r ${getRoleColor()} text-white`}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <GraduationCap size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg">HIRTOLI</h3>
            <p className="text-xs opacity-80 capitalize">{userRole} Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-8 px-4">
        <div className="space-y-2">
          {getItems().map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              className={cn(
                "w-full justify-start px-4 py-3 text-left hover:bg-white/10 hover:text-white transition-all duration-200",
                activePath === item.path 
                  ? "bg-white/10 text-white border-r-2 border-white" 
                  : "text-gray-300"
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.label}
            </Button>
          ))}
        </div>
      </nav>

      {/* User Info & Logout */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
        <div className="flex items-center space-x-3 mb-4 p-3 bg-white/5 rounded-lg">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <User size={16} className="text-white" />
          </div>
          <div className="text-white">
            <p className="font-medium text-sm">{user?.name || 'User'}</p>
            <p className="text-xs opacity-70 capitalize">{userRole}</p>
          </div>
        </div>
        <Button
          onClick={logout}
          variant="ghost"
          className="w-full justify-start px-4 py-2 text-gray-300 hover:bg-red-500/20 hover:text-red-400 transition-all duration-200"
        >
          <LogOut className="mr-3 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default ModernSidebar;
