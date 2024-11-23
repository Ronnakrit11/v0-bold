import Link from "next/link"
import { Home, Users, Settings, LogOut } from 'lucide-react'

export function Sidebar() {
  return (
    <div className="w-64 bg-white h-full shadow-lg flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 px-4">
          <SidebarItem href="/dashboard" icon={<Home size={20} />} text="Home" />
          <SidebarItem href="/dashboard/users" icon={<Users size={20} />} text="Users" />
          <SidebarItem href="/dashboard/settings" icon={<Settings size={20} />} text="Settings" />
        </ul>
      </nav>
      <div className="p-4 border-t">
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

function SidebarItem({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <li>
      <Link href={href} className="flex items-center space-x-2 p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors">
        {icon}
        <span>{text}</span>
      </Link>
    </li>
  )
}

