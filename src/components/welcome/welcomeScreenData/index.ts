import { Zap, Target, TrendingUp } from "lucide-react";
import { version } from '../../../../package.json';

export const welcomeScreenData = {
  title: {
    gradient1: "Transform",
    textgradient1: "Your Business With",
    gradient2: "Analysr",
  },
  features: [
    {
      icon: Target,
      title: "Smart Insights",
      description:
        "Groq powered analytics to understand customer sentiment and trends",
    },
    {
      icon: TrendingUp,
      title: "Competitive Edge",
      description: "Insights for every stage of company growth",
    },
    {
      icon: Zap,
      title: "Deep Analytics",
      description: "Deep insights to help you make informed decisions",
    },
  ] as const,
  heroContent:
    "Unlock powerful insights from your customer reviews. Make informed decisions that drive growth and customer satisfaction.",
  welcomeSectionBottom: "Join to make data-driven decisions",
  welcomeSectionVersionBottom: `v ${version}`,
  getStartedSection:{
    topText: "Get Started",
    middleTitle: "Transform Your Business Today",
    bottomText: "Join to make data-driven decisions",
    buttonText: "Get Started Now",
  }
};
