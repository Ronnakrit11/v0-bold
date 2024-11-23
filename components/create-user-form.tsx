"use client"

import { useState } from "react"
import { createUser } from "@/lib/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CreateUserForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [revenue, setRevenue] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await createUser({ name, email, revenue: parseFloat(revenue) })
    setName("")
    setEmail("")
    setRevenue("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="revenue">Revenue</Label>
        <Input
          id="revenue"
          type="number"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          required
        />
      </div>
      <Button type="submit">Create User</Button>
    </form>
  )
}

