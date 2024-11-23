"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "./prisma"

export async function createUser(data: { name: string; email: string; revenue: number }) {
  try {
    await prisma.user.create({ data })
    revalidatePath("/dashboard/users")
  } catch (error) {
    console.error('Error creating user:', error )
    throw new Error('Failed to create user')
  }
}

export async function updateUser(id: string, data: { name: string; email: string; revenue: number }) {
  try {
    await prisma.user.update({ where: { id }, data })
    revalidatePath("/dashboard/users")
  } catch (error) {
    console.error('Error updating user:', error)
    throw new Error('Failed to update user')
  }
}

export async function deleteUser(id: string) {
  try {
    await prisma.user.delete({ where: { id } })
    revalidatePath("/dashboard/users")
  } catch (error) {
    console.error('Error deleting user:', error)
    throw new Error('Failed to delete user')
  }
}

