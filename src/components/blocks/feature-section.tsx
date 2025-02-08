import { Card } from "@/components/ui/card";

interface FeatureSectionProps {
  title: string;
  image: string;
  onClick?: () => void;
}

export function FeatureSection({ title, image, onClick }: FeatureSectionProps) {
  return (
    <Card
      className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      onClick={onClick}
    >
      <div className="aspect-square rounded-lg overflow-hidden mb-2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-medium text-center">{title}</h3>
    </Card>
  );
}