'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { supabase } from '@/lib/supabase'

export function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      router.push('/login')
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  return (
    <Button onClick={handleLogout} variant="outline">
      Logout
    </Button>
  )
}

