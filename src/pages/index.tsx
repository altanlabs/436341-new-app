import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight, Stethoscope, ShoppingBag, Heart, Info } from "lucide-react"
import { useNavigate } from "react-router-dom"

const features = [
  {
    title: "Servicios Veterinarios",
    description: "Encuentra los mejores veterinarios cerca de ti",
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    link: "/veterinarios"
  },
  {
    title: "Tienda de Productos",
    description: "Todo lo que tu mascota necesita",
    icon: <ShoppingBag className="h-10 w-10 text-primary" />,
    link: "/productos"
  },
  {
    title: "Cuidados y Consejos",
    description: "Aprende a cuidar mejor a tu mascota",
    icon: <Heart className="h-10 w-10 text-primary" />,
    link: "/consejos"
  },
  {
    title: "Emergencias",
    description: "Información de emergencias 24/7",
    icon: <Info className="h-10 w-10 text-primary" />,
    link: "/emergencias"
  }
]

export default function IndexPage() {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* Hero Section */}
      <motion.section 
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="secondary" className="mb-4">
          Tu Compañero de Confianza
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          El Mejor Cuidado
          <br />
          Para Tu Mascota
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Todo lo que necesitas para el bienestar de tu compañero peludo en un solo lugar
        </p>
        <Button size="lg" className="mt-4" onClick={() => navigate('/servicios')}>
          Descubre Nuestros Servicios <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="space-y-4">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-center">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  {feature.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="text-center bg-primary/5 rounded-3xl p-12 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold">¿Listo para darle el mejor cuidado a tu mascota?</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto">
          Únete a nuestra comunidad de dueños responsables y accede a los mejores servicios para tu mascota
        </p>
        <Button size="lg" variant="default">
          Comenzar Ahora
        </Button>
      </motion.section>
    </div>
  )
}