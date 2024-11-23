import { getUsers } from "@/lib/user"
import { UserList } from "@/components/user-list"
import { CreateUserForm } from "@/components/create-user-form"

export default async function UsersPage() {
  const users = await getUsers()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">User Management</h1>
      <CreateUserForm />
      <UserList users={users} />
    </div>
  )
}

