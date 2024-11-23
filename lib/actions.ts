"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "./prisma"

export async function createUser(data: { name: string; email: string; revenue: number }) {
  try {
    if (!data.name || !data.email) {
      throw new Error('Name and email are required')
    }

    await prisma.user.create({ 
      data: {
        name: data.name,
        email: data.email,
        revenue: data.revenue || 0
      }
    })
    revalidatePath("/dashboard/users")
  } catch (error) {
    console.error('Error creating user:', error)
    throw new Error(error instanceof Error ? error.message : 'Failed to create user')
  }
}

export async function updateUser(id: string, data: { name: string; email: string; revenue: number }) {
  try {
    if (!id || !data.name || !data.email) {
      throw new Error('ID, name and email are required')
    }

    await prisma.user.update({ 
      where: { id }, 
      data: {
        name: data.name,
        email: data.email,
        revenue: data.revenue || 0
      }
    })
    revalidatePath("/dashboard/users")
  } catch (error) {
    console.error('Error updating user:', error)
    throw new Error(error instanceof Error ? error.message : 'Failed to update user')
  }
}

export async function deleteUser(id: string) {
  try {
    if (!id) {
      throw new Error('User ID is required')
    }

    await prisma.user.delete({ where: { id } })
    revalidatePath("/dashboard/users")
  } catch (error) {
    console.error('Error deleting user:', error)
    throw new Error(error instanceof Error ? error.message : 'Failed to delete user')
  }
}