import { 
  Brain, 
  Shield, 
  Search, 
  MessageCircle, 
  Target, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Lock,
  Zap,
  ExternalLink,
  Tag
} from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/types/product";
import { EvervaultCard } from "./ui/evervault-card";
import "./FeaturesSection.css";

const productData: Product[] = [
  {
    id: 1,
    title: "XQL AI",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/logo/XQLAI.png",
    tags: ["AI Asistant"],
    productDetails: "Try Now Beta Version",
  },
  {
    id: 2,
    title: "XQL Tools",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/logo/XQL TOOLS.png",
    tags: ["XQL Tools"],
    productDetails: "Try Now Beta Version",
  },
  {
    id: 3,
    title: "X38 Cloud",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/logo/x38.svg",
    tags: ["X38 Cloud"],
    productDetails: "Try Now",
  },
  {
    id: 4,
    title: "FLEX.CHAT",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/logo/flexChat.png",
    tags: ["FLEX.CHAT"],
    productDetails: "Coming Soon",
  },
  {
    id: 5,
    title: "XQL NEURAL DB",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/logo/XQLNEURALDB.png",
    tags: ["XQL NEURAL DB"],
    productDetails: "Coming Soon",
  },
  {
    id: 6,
    title: "ONE INTERNET APP",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/logo/oneInternetApp.png",
    tags: ["ONE INTERNET APP"],
    productDetails: "Coming Soon",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section ">
      {/* Predictive Spending Categorization */}
      <motion.div className="features-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="features-main-heading">
          Predictive Spending Categorization
        </h2>
        <p className="features-subtitle">
          Your data is your superpower
        </p>
        {/* Category Badges */}
        <div className="features-categories">
          {[
            { emoji: "🥡", label: "DELIVERY" },
            { emoji: "🔑", label: "RENT" },
            { emoji: "🛫", label: "TRAVEL" },
            { emoji: "🥑", label: "GROCERIES" },
            { emoji: "💈", label: "SELF CARE" },
            { emoji: "🛍", label: "SHOPS" },
            { emoji: "💳", label: "SUBSCRIPTIONS" },
            { emoji: "👾", label: "ENTERTAINMENT" },
            { emoji: "☕️", label: "COFFEE" },
            { emoji: "❤️", label: "THERAPY" }
          ].map((category, i) => (
            <motion.div
              key={category.label}
              className="features-category-badge"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <span>{category.emoji}</span>
              {category.label}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Feature Grid */}
      <motion.div className="features-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* It only gets smarter */}
        <motion.div className="features-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="features-card-header">
            <div className="features-card-icon">
              <Brain className="w-5 h-5 text-background" />
            </div>
            <h3 className="features-card-title">It only gets smarter</h3>
          </div>
          <p className="features-card-description">
            Copilot learns from your behavior to categorize transactions automatically,
            eliminating the need for manual rule creation. Simply review your transactions and
            Copilot will make better predictions over time.
          </p>
        </motion.div>
        {/* Remove the guesswork */}
        <motion.div className="features-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="features-card-header">
            <div className="features-card-icon">
              <Zap className="w-5 h-5 text-background" />
            </div>
            <h3 className="features-card-title">Remove the guesswork</h3>
          </div>
          <p className="features-card-description">
            If Copilot guesses incorrectly and you need to change the category, Intelligence
            will bump the second-best guess to the top.
          </p>
        </motion.div>
        {/* Keep data private */}
        <motion.div className="features-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="features-card-header">
            <div className="features-card-icon">
              <Shield className="w-5 h-5 text-background" />
            </div>
            <h3 className="features-card-title">Keep data private</h3>
          </div>
          <p className="features-card-description">
            This is for you and you only. You get your own private categorization model
            based on your data, and nothing leaves Copilot's systems.
          </p>
        </motion.div>
      </motion.div>

      {/* Privacy Section */}
      <motion.div className="features-privacy"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="features-privacy-title">Private & safe, as it should be</h3>
        <div className="features-privacy-grid">
          {[{
            icon: <Lock className="features-privacy-icon" />,
            title: "Access",
            desc: "This prediction model is fully personalized and used only for your own transactions. We don't sell any data to third-parties."
          }, {
            icon: <CheckCircle className="features-privacy-icon" />,
            title: "Retention",
            desc: "You can delete your Copilot account at any time directly through the app. All associated models get deleted as well."
          }, {
            icon: <Shield className="features-privacy-icon" />,
            title: "Infrastructure",
            desc: "Our infrastructure is built on the Google Cloud Platform (GCP), which is used by leading financial companies worldwide."
          }].map((card, i) => (
            <motion.div className="features-privacy-card"
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {card.icon}
              <h4 className="features-privacy-card-title">{card.title}</h4>
              <p className="features-privacy-card-description">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Coming Soon */}
      <motion.div className="features-coming-soon"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="features-coming-soon-badge">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium">Coming soon to Mac and iOS</span>
        </div>
        <h3 className="features-coming-soon-title">Keep an eye out for more</h3>
        <div className="features-coming-soon-grid">
          {["Forecasting", "Benchmarking", "Spending Suggestions", "+More"].map((feature, i) => (
            <motion.div key={feature} className="features-coming-soon-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <span className="features-coming-soon-text">{feature}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Smart Goals */}
      <motion.div className="features-highlight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="features-highlight-header">
          <div className="features-highlight-icon">
            <Target className="w-6 h-6 text-background" />
          </div>
          <div>
            <h3 className="features-highlight-title">Smart Financial Goals</h3>
            <p className="features-highlight-description">
              Forget creating manual calculations to plan your future. Copilot will provide
              smart suggestions to make creating goals a breeze.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Search & Find */}
      <motion.div className="features-highlight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="features-highlight-header">
          <div className="features-highlight-icon">
            <Search className="w-6 h-6 text-background" />
          </div>
          <div>
            <h3 className="features-highlight-title">Search & Find</h3>
            <p className="features-highlight-description">
              Query your transactions using natural language. Copilot translates your search
              into filters, helping find what you need in seconds.
            </p>
          </div>
        </div>
        <div className="features-search-examples">
          {[
            "show me food related purchases from June",
            "unreviewed transactions above $100",
            "only show Amazon transactions",
            "transactions with tips above $20"
          ].map((text, i) => (
            <motion.div className="features-search-item" key={text}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <ArrowRight className="w-4 h-4" />
              <span>{text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Chat Interface */}
      <motion.div className="features-highlight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="features-highlight-header">
          <div className="features-highlight-icon">
            <MessageCircle className="w-6 h-6 text-background" />
          </div>
          <div>
            <h3 className="features-highlight-title">Chat with your Copilot</h3>
            <p className="features-highlight-description">
              A conversational interface to explore your finances like never before. Gain
              insights, and ask Copilot for help in setting up your next goal.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Products Section */}
      <motion.div className="features-products"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="features-products-header">
          <h2 className="features-products-title">Our Product Suite</h2>
          <p className="features-products-subtitle">
            Discover our comprehensive range of AI-powered tools and solutions
          </p>
        </div>
        
        <div className="features-products-grid">
          {productData.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 120
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              className="features-evervault-wrapper"
            >
              <EvervaultCard className="features-product-card">
                <motion.div className="features-product-image-container"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                    transition: { 
                      rotate: { duration: 0.6 },
                      scale: { duration: 0.3 }
                    }
                  }}
                >
                  <motion.img 
                    src={product.image} 
                    alt={product.title}
                    className="features-product-image"
                    whileHover={{ 
                      scale: 1.15,
                      transition: { duration: 0.3 }
                    }}
                  />
                  <motion.div 
                    className="features-product-overlay"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ 
                      opacity: 1, 
                      scale: 1,
                      rotate: 180,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </motion.div>
                
                <div className="features-product-content">
                  <motion.div 
                    className="features-product-tags"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                  >
                    {product.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tagIndex}
                        className="features-product-tag"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + tagIndex * 0.05 }}
                        whileHover={{ 
                          scale: 1.1,
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Tag className="w-2.5 h-2.5" />
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                  
                  <motion.h3 
                    className="features-product-name"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {product.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="features-product-description"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  >
                    {product.discription}
                  </motion.p>
                  
                  <motion.div 
                    className="features-product-footer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  >
                    <motion.span 
                      className={`features-product-status ${
                        product.productDetails.includes('Coming Soon') 
                          ? 'status-coming-soon' 
                          : product.productDetails.includes('Beta')
                          ? 'status-beta'
                          : 'status-available'
                      }`}
                      whileHover={{ 
                        scale: 1.05,
                        y: -1,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {product.productDetails}
                    </motion.span>
                    <motion.button 
                      className="features-product-action"
                      whileHover={{ 
                        x: 3,
                        scale: 1.1,
                        rotate: 90,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      disabled={product.productDetails.includes('Coming Soon')}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                </div>
              </EvervaultCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
