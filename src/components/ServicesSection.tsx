"use client";

import { useState, useEffect } from "react";
import { Service, SubService } from "@/types/service";
import serviceData from "@/data/serviceData";
import { motion, AnimatePresence } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const serviceCardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  },
  hover: { 
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

const subServiceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3 }
  }
};

const subServiceItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3 }
  }
};

export default function ServicesSection() {
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (serviceData.length > 0) {
      setSelectedServiceId(serviceData[0].id);
    }
  }, []);

  const handleServiceClick = (serviceId: number) => {
    setSelectedServiceId((prev) => (prev === serviceId ? null : serviceId));
  };

  const selectedService = serviceData.find(
    (service) => service.id === selectedServiceId
  );

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background matching your page theme */}
      <div className="absolute inset-0 bg-gray-950"></div>
      
      {/* Gradient effects similar to your page */}
      <div className="absolute top-10 left-1/4 w-96 h-96 opacity-10 animate-pulse">
        <div 
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'float-slow 8s ease-in-out infinite'
          }}
        />
      </div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-4 text-white"
              variants={serviceCardVariants}
            >
              Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              variants={serviceCardVariants}
            >
              Comprehensive solutions to power your digital transformation
            </motion.p>
          </motion.div>

          {/* Desktop View */}
          <div className="hidden lg:block">
            <motion.div
              className="grid grid-cols-4 bg-gray-900/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-800"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Services List */}
              <div className="col-span-1 bg-gray-900/80 border-r border-gray-800">
                <div className="p-8">
                  <h3 className="text-lg font-semibold mb-6 text-white">Core Services</h3>
                  <div className="space-y-3">
                    {serviceData.map((service, index) => (
                      <CardSpotlight
                        key={`${service.id}-${index}`}
                        className={`p-4 cursor-pointer rounded-xl transition-all duration-300 border ${
                          selectedServiceId === service.id 
                            ? "border-blue-500/50 bg-blue-600/10" 
                            : "border-gray-800 hover:border-gray-700"
                        }`}
                        radius={300}
                        color={selectedServiceId === service.id ? "#3b82f6" : "#6b7280"}
                      >
                        <motion.div
                          onClick={() => handleServiceClick(service.id)}
                          variants={serviceCardVariants}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="relative z-10"
                        >
                          <h4 className={`text-lg font-semibold mb-2 transition-colors ${
                            selectedServiceId === service.id ? "text-blue-400" : "text-white"
                          }`}>
                            {service.title}
                          </h4>
                          <p className="text-gray-400 text-sm">{service.description}</p>
                        </motion.div>
                      </CardSpotlight>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sub Services Display */}
              {selectedService && (
                <motion.div
                  className="col-span-3 p-8 bg-gray-900/30"
                  initial="hidden"
                  animate="visible"
                  variants={subServiceVariants}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedService.subService.map((sub) => (
                      <CardSpotlight
                        key={sub.id}
                        className="group p-6 bg-gray-800/30 backdrop-blur-sm border-gray-700/50 hover:border-gray-600/50"
                        radius={400}
                        color="#372fad"
                      >
                        <motion.div
                          className="flex items-start gap-4"
                          variants={subServiceItemVariants}
                          whileHover={{ y: -4, scale: 1.02 }}
                        >
                          <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300 relative z-10">
                            {sub.icon}
                          </div>
                          <div className="relative z-10">
                            <h4 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                              {sub.subTitle}
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed">{sub.subDescription}</p>
                          </div>
                        </motion.div>
                      </CardSpotlight>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Mobile View */}
          <div className="block lg:hidden">
            <div className="space-y-6">
              {serviceData.map((service) => (
                <motion.div
                  key={service.id}
                  initial="hidden"
                  animate="visible"
                  variants={serviceCardVariants}
                >
                  <CardSpotlight
                    className={`bg-gray-900/50 backdrop-blur-sm border-gray-800 ${
                      selectedServiceId === service.id ? "border-b border-gray-800" : ""
                    }`}
                    radius={300}
                    color="#3b82f6"
                  >
                    <motion.div
                      className="p-6 cursor-pointer relative z-10"
                      onClick={() => handleServiceClick(service.id)}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                          <p className="text-gray-300">{service.description}</p>
                        </div>
                        <motion.div
                          animate={{ rotate: selectedServiceId === service.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-blue-400"
                        >
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    <AnimatePresence>
                      {selectedServiceId === service.id && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={subServiceVariants}
                          className="p-6 pt-0 relative z-10"
                        >
                          <div className="space-y-4">
                            {service.subService.map((sub) => (
                              <CardSpotlight
                                key={sub.id}
                                className="bg-gray-800/50 border-gray-700/50"
                                radius={200}
                                color="#372fad"
                              >
                                <motion.div
                                  variants={subServiceItemVariants}
                                  className="flex items-start gap-4 p-4 relative z-10"
                                >
                                  <div className="flex-shrink-0">{sub.icon}</div>
                                  <div>
                                    <h4 className="text-lg font-bold mb-1 text-white">{sub.subTitle}</h4>
                                    <p className="text-gray-300 text-sm">{sub.subDescription}</p>
                                  </div>
                                </motion.div>
                              </CardSpotlight>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardSpotlight>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
