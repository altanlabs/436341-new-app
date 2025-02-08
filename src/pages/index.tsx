import { Avatar } from "@/components/ui/avatar";
import { NavigationBar } from "@/components/blocks/navigation-bar";
import { PetCard } from "@/components/blocks/pet-card";
import { FeatureSection } from "@/components/blocks/feature-section";
import { AppointmentList } from "@/components/blocks/appointment-list";

const mockPets = [
  {
    id: "1",
    name: "Kira",
    type: "Perro",
    breed: "Border Collie",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
];

const mockAppointments = [
  {
    id: "1",
    petName: "Lolo",
    title: "Cita con el veterinario",
    date: new Date(2024, 1, 23),
    time: "18:00 h",
  },
  {
    id: "2",
    petName: "Lolo",
    title: "Cita con el veterinario",
    date: new Date(2024, 1, 25),
    time: "16:30 h",
  },
];

export default function HomePage() {
  return (
    <div className="pb-20">
      {/* Header */}
      <header className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="María"
              className="object-cover"
            />
          </Avatar>
          <div>
            <p className="text-gray-600 dark:text-gray-400">Hola,</p>
            <h1 className="text-xl font-bold">María</h1>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="text-gray-600 dark:text-gray-300">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="text-gray-600 dark:text-gray-300">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-6">
        {/* Pets Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Mis peludos</h2>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
              {mockPets.length}
            </span>
          </div>
          {mockPets.map((pet) => (
            <PetCard key={pet.id} {...pet} />
          ))}
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-2 gap-4">
          <FeatureSection
            title="Comunidad"
            image="/images/community.png"
          />
          <FeatureSection
            title="Actividades"
            image="/images/activities.png"
          />
        </section>

        {/* Appointments */}
        <AppointmentList appointments={mockAppointments} />
      </main>

      {/* Navigation */}
      <NavigationBar />
    </div>
  );
}