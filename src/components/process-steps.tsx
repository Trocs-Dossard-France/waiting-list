import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type StepProps = {
  number: number;
  title: string;
  description: string;
  className?: string;
};

function Step({ number, title, description, className }: StepProps) {
  return (
    <Card className={cn("h-full bg-white border-none transition-shadow hover:shadow-md", className)}>
      <CardHeader className="pb-2">
        <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
          {number}
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export function ProcessSteps() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          Comment ça marche ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
          <Step
            number={1}
            title="Publiez votre annonce"
            description="Créez votre compte et mettez en vente votre dossard en quelques minutes. Ajoutez toutes les informations nécessaires."
          />
          
          <Step
            number={2}
            title="Trouvez un acheteur"
            description="Notre plateforme s'occupe de trouver un acquéreur pour votre dossard. Validez la transaction quand vous êtes prêt."
          />
          
          <Step
            number={3}
            title="Transfert sécurisé"
            description="Nous gérons le transfert officiel du dossard en collaboration avec les organisateurs et sécurisons votre paiement."
          />
        </div>
      </div>
    </section>
  );
} 