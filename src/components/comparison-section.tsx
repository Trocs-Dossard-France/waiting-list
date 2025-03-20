import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type ComparisonFeatureProps = {
  text: string;
  isPositive: boolean;
};

function ComparisonFeature({ text, isPositive }: ComparisonFeatureProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      {isPositive ? (
        <div className="text-green-500">
          <Check className="w-6 h-6" />
        </div>
      ) : (
        <div className="text-red-500">
          <X className="w-6 h-6" />
        </div>
      )}
      <p className="text-muted-foreground">{text}</p>
    </div>
  );
}

export function ComparisonSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          Pourquoi nous choisir ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* DossardSwap Column */}
          <Card className="bg-blue-50 border-none shadow-sm">
            <CardHeader>
              <h3 className="text-2xl font-bold text-blue-600">
                Avec DossardSwap
              </h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <ComparisonFeature 
                  isPositive={true}
                  text="Transfert 100% légal et approuvé par les organisateurs"
                />
                <ComparisonFeature 
                  isPositive={true}
                  text="Paiement sécurisé avec garantie remboursement"
                />
                <ComparisonFeature 
                  isPositive={true}
                  text="Modification automatique des données personnelles"
                />
                <ComparisonFeature 
                  isPositive={true}
                  text="Assistance dédiée 7j/7"
                />
              </div>
            </CardContent>
          </Card>
          
          {/* Traditional Column */}
          <Card className="bg-gray-50 border-none shadow-sm">
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-600">
                Revente classique
              </h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <ComparisonFeature 
                  isPositive={false}
                  text="Risque de disqualification ou de refus d'entrée"
                />
                <ComparisonFeature 
                  isPositive={false}
                  text="Aucune garantie sur l'authenticité du dossard"
                />
                <ComparisonFeature 
                  isPositive={false}
                  text="Problèmes potentiels avec les données personnelles"
                />
                <ComparisonFeature 
                  isPositive={false}
                  text="Aucun support en cas de problème"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 