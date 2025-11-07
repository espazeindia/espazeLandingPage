"use client";

import { Database, Truck, Package, BarChart3, Phone, PiIcon as ApiIcon } from "lucide-react";
import Container from "../ui/Container";
import Card from "../ui/Card";
import ScrollReveal from "../animations/ScrollReveal";

const services = [
  {
    icon: Database,
    title: "Cloud Warehousing",
    subtitle: "Store smart, scale faster.",
    description:
      "Espaze provides cloud-based virtual warehouses, helping sellers manage storage flexibly without physical overheads or expensive infrastructure."
  },
  {
    icon: Package,
    title: "Smart Inventory Management",
    subtitle: "Track everything, effortlessly.",
    description:
      "Monitor and sync your inventory across warehouses and platforms in real time with Espaze’s intelligent management dashboard."
  },
  {
    icon: Truck,
    title: "On-Demand Delivery Network",
    subtitle: "From shelf to doorstep — instantly.",
    description:
      "Our connected delivery network ensures rapid, reliable fulfillment by dispatching orders from the nearest warehouse to your customer."
  },
  {
    icon: ApiIcon,
    title: "Custom API Integration",
    subtitle: "Seamless connectivity for your business.",
    description:
      "Plug Espaze directly into your existing e-commerce platform or application to automate warehousing, tracking, and deliveries — effortlessly. (We also provide our own Espaze app for direct seller and customer access.)"
  },
  {
    icon: Phone,
    title: "Espaze App",
    subtitle: "Your business, in your pocket.",
    description:
      "Manage inventory, track orders, and monitor deliveries — all from the Espaze mobile app, designed for both sellers and customers."
  }
];


export default function Services() {
  return (
    <section className="py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
      <Container>
        <ScrollReveal direction="up">
          <h2 className="text-4xl md:text-5xl font-bold text-left mb-24 text-gray-900">
            Our Services
          </h2>
        </ScrollReveal>
        <div className="max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="mb-8 sticky top-20">
                <Card 
                  className="p-8 transition-all duration-300 hover:shadow-2xl"  
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/3 h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <service.icon className="w-16 h-16 text-purple-600 opacity-50" />
                    </div>
                      
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center shadow-md">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                          <p className="text-sm bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-medium">{service.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


