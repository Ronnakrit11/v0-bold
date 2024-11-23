import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react'
import { getUsers, getTotalRevenue } from "@/lib/users"

export default async function DashboardHome() {
  const users = await getUsers()
  const userCount = users.length
  const totalRevenue = await getTotalRevenue()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to the Admin Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Users" value={userCount.toString()} icon={<Users className="h-6 w-6" />} />
        <StatCard title="Total Revenue" value={`$${totalRevenue.toFixed(2)}`} icon={<DollarSign className="h-6 w-6" />} />
        <StatCard title="Total Orders" value="567" icon={<ShoppingCart className="h-6 w-6" />} />
        <StatCard title="Growth Rate" value="8.5%" icon={<TrendingUp className="h-6 w-6" />} />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Here you can display recent user activities or important notifications.</p>
        </CardContent>
      </Card>
    </div>
  )
}

function StatCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}

