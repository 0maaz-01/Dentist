import { useState } from "react";
import { CheckCircle } from 'lucide-react';
import TitleHeader from "../components/TitleHeader";

// Mock data for plans (you'll need to replace this with your actual data)
const plans = [
  {
    id: 1,
    title: "Basic",
    logo: "/images/plan-1.png",
    priceMonthly: 19,
    priceYearly: 12,
    caption: "Perfect for small teams getting started",
    features: [
      "Up to 5 team members",
      "10 GB storage",
      "Basic support",
      "Core features"
    ],
    icon: "/images/icon-1.png"
  },
  {
    id: 2,
    title: "Pro",
    logo: "/images/plan-2.png", 
    priceMonthly: 39,
    priceYearly: 29,
    caption: "Best for growing businesses",
    features: [
      "Up to 25 team members",
      "100 GB storage", 
      "Priority support",
      "Advanced features",
      "Analytics dashboard"
    ],
    icon: "/images/icon-2.png"
  },
  {
    id: 3,
    title: "Enterprise",
    logo: "/images/plan-3.png",
    priceMonthly: 99,
    priceYearly: 79,
    caption: "For large organizations",
    features: [
      "Unlimited team members",
      "1 TB storage",
      "24/7 dedicated support", 
      "All features included",
      "Custom integrations"
    ],
  }
];

// CountUp component replacement
const CountUp = ({ start, end, duration, useEasing, preserveValue }) => {
  return <span>{end}</span>;
};

// Button3 component replacement
const Button3 = ({ children, icon }) => {
  return (
    <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg transition-colors">
      {icon && <img src={icon} alt="" className="w-4 h-4" />}
      {children}
    </button>
  );
};

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);

  return (
    <section>
      <div id="pricing">
        <div className="max-w-7xl mx-auto   text-white    playfair-font    mb-[100px] lg:mb-[200px]">
          
          {/* Header Section */}
          <div className="relative mx-auto max-w-4xl xl:max-w-5xl  pb-40 pt-28 xl:pb-40 xl:pt-28 lg:border-none md:pb-32 md:pt-16">
            
            {/* Decorative elements before */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent  pointer-events-none"></div>
            
            <TitleHeader title = "Flexible Pricing"/>

            {/* Toggle Buttons */}
            <div className="relative z-20 mx-auto flex w-96 md:w-80 rounded-4xl           border-gray-400/25 bg-black/80 p-2 backdrop-blur-lg">
              <button
                className={`flex-1 relative  cursor-pointer   z-10 rounded-2xl py-3 px-6 text-sm font-semibold transition-colors duration-300 ${
                  monthly ? '' : ''
                }`}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={`flex-1 relative z-10  cursor-pointer rounded-2xl py-3 px-6 text-sm font-semibold transition-colors duration-300 ${
                  !monthly ? '' : ''
                }`}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>

              {/* Toggle Background */}
              <div
                className={`absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] bg-white/20 rounded-4xl shadow-lg transition-transform duration-500 ${
                  !monthly ? 'translate-x-full' : ''
                }`}
              />
            </div>

          </div>

          {/* Pricing Cards */}
          <div className="relative z-10 -mt-12 flex items-start gap-5 xl:gap-0 overflow-x-auto xl:overflow-visible pt-6 xl:pt-0">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative border-2 p-7 min-w-80 xl:min-w-0 xl:w-1/3 xl:flex-1 rounded-3xl lg:rounded-3xl ${
                  index === 0 ? 'border-l-4 ' : ''
                } 
                ${
                  index % 2 === 0 ? '   mt-12  rounded-3xl     border-1 border-white/20       bg-white/10 backdrop-blur-md  ' : 'bg-black/60'
                }`}
              > 



                {/* Plan Content */}
                <div
                  className= "relative flex flex-col items-center pt-12 "
                >
                  {/* Plan Title */}
                  <div
                    className="text-xs font-semibold rounded-2xl relative z-20 mx-auto mb-6 border-2 px-4 py-1.5 uppercase"
                  >
                    {plan.title}
                  </div>

                  {/* Price */}
                  <div className="relative z-20 flex items-center justify-center">
                    <div
                      className={`text-6xl font-bold flex items-start ${
                        index === 1 ? 'text-purple-400' : 'text-white'
                      }`}
                    >
                      ${" "}
                      <CountUp
                        start={plan.priceMonthly}
                        end={monthly ? plan.priceMonthly : plan.priceYearly}
                        duration={0.1}
                        useEasing={false}
                        preserveValue
                      />
                    </div>
                    <div className="text-sm relative top-3 ml-1 uppercase text-white">
                      / mo
                    </div>
                  </div>
                </div>

                {/* Plan Caption */}
                <div
                  className={`text-base relative z-20 mb-10 w-full pb-9 text-center  ${
                    index === 1 ? 'border-b border-gray-300' : 'border-b border-gray-200'
                  }`}
                >
                  {plan.caption}
                </div>

                {/* Features List */}
                <ul className="mx-auto space-y-4 xl:px-7">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="relative flex items-center gap-5"
                    >
                      <CheckCircle/>
                      <p className="flex-1 ">{feature}</p>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-10 flex w-full justify-center">
                  <Button3 icon={plan.icon}>Get Started</Button3>
                </div>

                {/* Limited Offer Text */}
                {index === 1 && (
                  <p className="text-xs font-medium mt-9 text-center text-purple-400 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">
                    Limited time offer
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;