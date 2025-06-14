import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  active?: boolean;
}
export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  active = false
}: FeatureCardProps) => {
  return <Card className={`transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${active ? "ring-2 ring-blue-500 shadow-lg" : ""}`}>
      <CardHeader className="bg-gray-50">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${active ? "bg-blue-500" : "bg-muted"}`}>
          <Icon className={`w-6 h-6 ${active ? "text-white" : "text-muted-foreground"}`} />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>;
};