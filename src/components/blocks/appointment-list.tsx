import { Card } from "@/components/ui/card";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface Appointment {
  id: string;
  petName: string;
  title: string;
  date: Date;
  time: string;
}

interface AppointmentListProps {
  appointments: Appointment[];
}

export function AppointmentList({ appointments }: AppointmentListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Próximas citas</h2>
      {appointments.map((appointment) => (
        <Card key={appointment.id} className="p-4 flex items-center gap-4">
          <div className="bg-primary/10 p-2 rounded-lg">
            <CalendarIcon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium">{appointment.petName}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{appointment.title}</p>
            <p className="text-sm text-gray-500">
              {format(appointment.date, "EEEE d", { locale: es })} | {appointment.time}
            </p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </Card>
      ))}
    </div>
  );
}