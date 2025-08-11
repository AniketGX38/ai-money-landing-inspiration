import { Service } from "@/types/service";

const serviceData: Service[] = [
  {
    id: 1,
    subService: [
      {
        id: 1,
        serviceId: 1,
        subServiceId: 1,
        icon: (
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">🎨</span>
          </div>
        ),
        subTitle: "Visual Interface Builder",
        subDescription: "An intuitive drag-and-drop interface for building user interfaces and designing workflows without writing code.",
      },
      {
        id: 2,
        serviceId: 1,
        subServiceId: 2,
        icon: (
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">📝</span>
          </div>
        ),
        subTitle: "Form Builders",
        subDescription: "Offer an intuitive interface to design and automate workflows, approval processes, and data collection forms.",
      },
      {
        id: 3,
        serviceId: 1,
        subServiceId: 3,
        icon: (
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">⚙️</span>
          </div>
        ),
        subTitle: "No-Code Backend",
        subDescription: "Authentication and User Management, Data Management, Automated Data Integration, Real-Time Communication, File and Media Management.",
      },
      {
        id: 4,
        serviceId: 1,
        subServiceId: 4,
        icon: (
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">🔄</span>
          </div>
        ),
        subTitle: "Workflow Automation",
        subDescription: "Automate repetitive and manual tasks, Design and customize automated workflows tailored to the specific needs of individual businesses and industries.",
      },
    ],
    title: "No-Code Platform",
    description: "Build user interfaces within minutes.",
  },
  {
    id: 2,
    subService: [
      {
        id: 1,
        serviceId: 2,
        subServiceId: 5,
        icon: (
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">🔗</span>
          </div>
        ),
        subTitle: "API Platform",
        subDescription: "Tools for building, deploying, managing, testing and securing their APIs, allowing developers to share and monetize APIs with ease.",
      },
      {
        id: 2,
        serviceId: 2,
        subServiceId: 6,
        icon: (
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">☁️</span>
          </div>
        ),
        subTitle: "Serverless Computing",
        subDescription: "A platform that allows running applications without managing server infrastructure. Event-driven, Automatic scaling, Pay-as-you-go billing",
      },
      {
        id: 3,
        serviceId: 2,
        subServiceId: 7,
        icon: (
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">🖥️</span>
          </div>
        ),
        subTitle: "Virtual Machines",
        subDescription: "Run applications and services in a flexible, scalable, and cost-effective manner without the need to own and manage physical hardware.",
      },
      {
        id: 4,
        serviceId: 2,
        subServiceId: 8,
        icon: (
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">🗄️</span>
          </div>
        ),
        subTitle: "Database Management",
        subDescription: "Capabilities for creating and managing databases or data models without requiring database expertise.",
      },
    ],
    title: "Cloud Platform",
    description: "All tech infrastructure in one place.",
  },
  {
    id: 3,
    subService: [
      {
        id: 1,
        serviceId: 3,
        subServiceId: 9,
        icon: (
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">📊</span>
          </div>
        ),
        subTitle: "Data Analytics",
        subDescription: "Data preprocessing and cleansing, Pattern recognition, Predictive analytics and modeling, Anomaly detection, Time-series forecasting.",
      },
      {
        id: 2,
        serviceId: 3,
        subServiceId: 10,
        icon: (
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">🤖</span>
          </div>
        ),
        subTitle: "Chatbots",
        subDescription: "Building custom chatbots for customer support using generative AI, Virtual assistants for various tasks, Conversational AI development.",
      },
      {
        id: 3,
        serviceId: 3,
        subServiceId: 11,
        icon: (
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">✨</span>
          </div>
        ),
        subTitle: "Content Generation",
        subDescription: "AI-powered blog post and article writing, AI-driven image generation, editing and enhancement, AI-generated video content for social media, Automatic video slideshow creation.",
      },
      {
        id: 4,
        serviceId: 3,
        subServiceId: 12,
        icon: (
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">👁️</span>
          </div>
        ),
        subTitle: "Computer Vision",
        subDescription: "Image recognition and classification, Object detection and tracking, Visual Search, Image segmentation.",
      },
    ],
    title: "AI Services",
    description: "Make your applications smart with multiple AI Services.",
  },
];

export default serviceData;
