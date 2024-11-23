"use client"

import { deleteUser } from "@/lib/actions"
import { Button } from "@/components/ui/button"

export function DeleteUserButton({ userId }: { userId: string }) {
  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this user?")) {
      await deleteUser(userId)
    }
  }

  return (
    <Button variant="destructive" size="sm" onClick={handleDelete}>
      Delete
    </Button>
  )
}

