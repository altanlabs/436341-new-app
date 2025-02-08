import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

interface PetCardProps {
  name: string;
  type: string;
  breed: string;
  image: string;
}

export function PetCard({ name, type, breed, image }: PetCardProps) {
  return (
    <Card className="bg-sky-100 dark:bg-sky-900 p-4 flex items-center justify-between rounded-xl mb-4">
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600 dark:text-gray-300">{type} | {breed}</p>
      </div>
      <Avatar className="h-12 w-12 rounded-full">
        <img src={image} alt={name} className="object-cover" />
      </Avatar>
    </Card>
  );
}