import { prisma } from "./prisma"
import { User } from "@prisma/client"

export async function getUsers(): Promise<User[]> {
  try {
    return await prisma.user.findMany()
  } catch (error) {
    console.error('Error fetching users:', error)
    return []
  }
}

export async function getUser(id: string): Promise<User | null> {
  if (!id) {
    console.error('User ID is required')
    return null
  }
  
  try {
    const user = await prisma.user.findUnique({
      where: { id }
    })
    
    if (!user) {
      console.error(`User with ID ${id} not found`)
    }
    
    return user
  } catch (error) {
    console.error('Error fetching user:', error)
    return null
  }
}

