import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function PricingTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: "Large Ad",
          deposit: "$300",
          features: [
            "Premium placement",
            "Maximum visibility",
            "Includes 5,000 flyers",
            "Professional design assistance",
          ],
          popular: true,
        },
        {
          title: "Medium Ad",
          deposit: "$200",
          features: ["Great visibility", "Effective size", "Professional design assistance", "Affordable option"],
          popular: false,
        },
        {
          title: "Small Ad",
          deposit: "$100",
          features: ["Budget-friendly", "Professional design assistance", "Targeted distribution", "Quick turnaround"],
          popular: false,
        },
        {
          title: "Directory Ad",
          deposit: "$125",
          discount: "$115 w/ discount",
          features: [
            "Seasonal availability",
            "Professional design assistance",
            "Great for special events",
            "Discount available",
          ],
          popular: false,
        },
      ].map((plan, i) => (
        <Card key={i} className={`overflow-hidden ${plan.popular ? "border-primary shadow-lg shadow-primary/10" : ""}`}>
          {plan.popular && (
            <div className="bg-primary text-white py-1.5 px-3 text-center text-sm font-medium">Most Popular</div>
          )}
          <CardContent className={`p-6 ${plan.popular ? "pt-4" : "pt-6"}`}>
            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
            <div className="mb-4">
              <div className="text-3xl font-bold">{plan.deposit}</div>
              <p className="text-muted-foreground">deposit, balance due at print</p>
              {plan.discount && <p className="text-sm font-medium text-primary mt-1">{plan.discount}</p>}
            </div>
            <ul className="space-y-2 mb-4">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
