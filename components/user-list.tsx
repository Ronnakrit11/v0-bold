import { User } from "@prisma/client"
import { DeleteUserButton } from "./delete-user-button"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export function UserList({ users }: { users: User[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Revenue</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>${user.revenue.toFixed(2)}</TableCell>
            <TableCell className="text-right">
              <div className="space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/dashboard/users/${user.id}/edit`}>
                    Edit
                  </Link>
                </Button>
                <DeleteUserButton userId={user.id} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

