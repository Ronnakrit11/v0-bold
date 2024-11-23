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

export async function getTotalRevenue(): Promise<number> {
  try {
    const result = await prisma.user.aggregate({
      _sum: {
        revenue: true
      }
    })
    return result._sum.revenue || 0
  } catch (error) {
    console.error('Error fetching total revenue:', error)
    return 0
  }
}

