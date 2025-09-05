import {
  Cable,
  Code,
  Contrast,
  MonitorSmartphone,
  SquareDashedMousePointer,
  Zap
} from "lucide-react";

import Image from "next/image";

const features = [
  {
    title: "Accurate BMI Calculation",
    description:
      "Get instant BMI results with health risk categories for better awareness.",
    icon: Zap
  },
  {
    title: "BMI History Tracking",
    description:
      "Monitor your progress over time and stay motivated toward your health goals.",
    icon: SquareDashedMousePointer
  },
  {
    title: "Personalized Health Tips",
    description:
      "Receive practical tips based on your BMI to guide your wellness journey.",
    icon: Code
  },
  {
    title: "Responsive by Default",
    description:
      "Every component is designed to look great on all screen sizes — no extra work needed to make things mobile-friendly.",
    icon: MonitorSmartphone
  },
  {
    title: "Normal Weight Range",
    description:
      "Find the ideal weight range for your height with ease.",
    icon: Contrast
  }
];

const Features = () => {
  return (
    <div id="features" className="mx-auto flex max-w-screen-xl flex-col px-6 py-12 sm:py-14">
      <h2 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
      Powerful Health Tools, Built for You
      </h2>
      <p className="mt-3 text-center text-xl sm:text-2xl">
      Designed for simplicity, accuracy, and long-term health tracking.
      </p>

      <div className="flex ">
         
      <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-muted/30 border-border/50 rounded-lg border px-5 py-7"
          >
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 dark:bg-primary/15 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
            <p className="mt-4 text-base tracking-wide">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      </div>

    </div>
  );
};

export default Features;
