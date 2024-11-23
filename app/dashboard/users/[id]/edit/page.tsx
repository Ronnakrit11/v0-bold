import { getUser } from "@/lib/users"
import { EditUserForm } from "@/components/edit-user-form"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function EditUserPage({
  params
}: PageProps) {
  const { id } = await params
  const user = await getUser(id)

  if (!user) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Edit User</h1>
      <EditUserForm user={user} />
    </div>
  )
}

