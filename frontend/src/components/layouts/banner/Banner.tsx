import { Calendar, User, Clock } from "lucide-react";

export function Banner() {
  const features = [
    {
      icon: Calendar,
      title: "Easy changes",
      description: "Cancel or change your booking without hassle.",
    },
    {
      icon: User,
      title: "Travel made easy",
      description: "Exclusive extras, discounts and perks.",
    },
    {
      icon: Clock,
      title: "24/7 customer support",
      description: "Reach out to us anytime, anywhere.",
    },
  ];

  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
          Why book with Homz?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gray-100 rounded-lg">
                  <IconComponent className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
