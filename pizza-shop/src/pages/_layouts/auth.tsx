import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="text-muted-foregroun flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Pizza className="h-5 w-5" />
          <span className="font-semibold">pizza.shop</span>
        </div>
        <footer className="bottom-0 text-sm">
          Painel do parceiro &copy; pizza.shop = {new Date().getFullYear()}
        </footer>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}