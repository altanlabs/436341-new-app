import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Search, ShoppingCart, Bell, Home, Paw, ShoppingBag, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <div className="max-w-md mx-auto h-screen bg-background">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-background">
        <span className="text-sm">09:41</span>
        <div className="flex items-center gap-2">
          <span className="text-sm">●●●●●</span>
        </div>
      </div>

      {/* Header */}
      <header className="px-4 py-2 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm text-muted-foreground">Hola,</p>
            <h2 className="font-semibold">Maria</h2>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Search className="h-6 w-6 text-muted-foreground" />
          <ShoppingCart className="h-6 w-6 text-muted-foreground" />
          <Bell className="h-6 w-6 text-muted-foreground" />
        </div>
      </header>

      {/* Mis Peludos Section */}
      <section className="px-4 mt-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Mis peludos</h3>
          <span className="text-muted-foreground">3</span>
        </div>
        
        <Card className="bg-blue-100 p-4 rounded-xl flex justify-between items-center">
          <div>
            <h4 className="font-bold text-lg">Kira</h4>
            <p className="text-sm text-muted-foreground">Perro | Border Collie</p>
          </div>
          <Avatar className="h-12 w-12">
            <AvatarImage src="/dog-avatar.jpg" />
            <AvatarFallback>K</AvatarFallback>
          </Avatar>
        </Card>
      </section>

      {/* Quick Actions */}
      <section className="px-4 mt-6 grid grid-cols-2 gap-4">
        <Card className="p-4 rounded-xl">
          <h4 className="font-semibold mb-2">Comunidad</h4>
          <div className="h-24 flex items-center justify-center">
            <img src="/community.svg" alt="Comunidad" className="h-20" />
          </div>
        </Card>
        <Card className="p-4 rounded-xl">
          <h4 className="font-semibold mb-2">Actividades</h4>
          <div className="h-24 flex items-center justify-center">
            <img src="/activities.svg" alt="Actividades" className="h-20" />
          </div>
        </Card>
      </section>

      {/* Próximas Citas */}
      <section className="px-4 mt-6">
        <h3 className="font-semibold mb-4">Próximas citas</h3>
        <div className="space-y-4">
          {[1, 2].map((_, index) => (
            <Card key={index} className="p-4 rounded-xl">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">Lolo</h4>
                  <p className="text-sm text-muted-foreground">Cita con el veterinario</p>
                  <p className="text-sm text-muted-foreground">Miércoles 23 | 18:00 h</p>
                </div>
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Ver detalles</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border px-4 py-2">
        <div className="flex justify-between items-center">
          <Button variant="ghost" size="icon" className="flex flex-col items-center">
            <Home className="h-6 w-6" />
            <span className="text-xs">Home</span>
          </Button>
          <Button variant="ghost" size="icon" className="flex flex-col items-center">
            <Paw className="h-6 w-6" />
            <span className="text-xs">Peludos</span>
          </Button>
          <Button variant="ghost" size="icon" className="flex flex-col items-center">
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xs">Servicios</span>
          </Button>
          <Button variant="ghost" size="icon" className="flex flex-col items-center">
            <ShoppingCart className="h-6 w-6" />
            <span className="text-xs">Tienda</span>
          </Button>
          <Button variant="ghost" size="icon" className="flex flex-col items-center">
            <Users className="h-6 w-6" />
            <span className="text-xs">Social</span>
          </Button>
        </div>
      </nav>
    </div>
  )
}