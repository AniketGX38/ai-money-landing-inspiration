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
  Zap
} from "lucide-react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      {/* Predictive Spending Categorization */}
      <div className="features-header">
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
          ].map((category) => (
            <div key={category.label} className="features-category-badge">
              <span>{category.emoji}</span>
              {category.label}
            </div>
          ))}
        </div>
      </div>

      {/* Feature Grid */}
      <div className="features-grid">
        {/* It only gets smarter */}
        <div className="features-card">
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
        </div>

        {/* Remove the guesswork */}
        <div className="features-card">
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
        </div>

        {/* Keep data private */}
        <div className="features-card">
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
        </div>
      </div>

      {/* Privacy Section */}
      <div className="features-privacy">
        <h3 className="features-privacy-title">Private & safe, as it should be</h3>
        <div className="features-privacy-grid">
          <div className="features-privacy-card">
            <Lock className="features-privacy-icon" />
            <h4 className="features-privacy-card-title">Access</h4>
            <p className="features-privacy-card-description">
              This prediction model is fully personalized and used only for your own
              transactions. We don't sell any data to third-parties.
            </p>
          </div>
          <div className="features-privacy-card">
            <CheckCircle className="features-privacy-icon" />
            <h4 className="features-privacy-card-title">Retention</h4>
            <p className="features-privacy-card-description">
              You can delete your Copilot account at any time directly through the app. All
              associated models get deleted as well.
            </p>
          </div>
          <div className="features-privacy-card">
            <Shield className="features-privacy-icon" />
            <h4 className="features-privacy-card-title">Infrastructure</h4>
            <p className="features-privacy-card-description">
              Our infrastructure is built on the Google Cloud Platform (GCP), which is used by
              leading financial companies worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="features-coming-soon">
        <div className="features-coming-soon-badge">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium">Coming soon to Mac and iOS</span>
        </div>
        <h3 className="features-coming-soon-title">Keep an eye out for more</h3>
        <div className="features-coming-soon-grid">
          {["Forecasting", "Benchmarking", "Spending Suggestions", "+More"].map((feature) => (
            <div key={feature} className="features-coming-soon-item">
              <span className="features-coming-soon-text">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Smart Goals */}
      <div className="features-highlight">
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
      </div>

      {/* Search & Find */}
      <div className="features-highlight">
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
          <div className="features-search-item">
            <ArrowRight className="w-4 h-4" />
            <span>show me food related purchases from June</span>
          </div>
          <div className="features-search-item">
            <ArrowRight className="w-4 h-4" />
            <span>unreviewed transactions above $100</span>
          </div>
          <div className="features-search-item">
            <ArrowRight className="w-4 h-4" />
            <span>only show Amazon transactions</span>
          </div>
          <div className="features-search-item">
            <ArrowRight className="w-4 h-4" />
            <span>transactions with tips above $20</span>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="features-highlight">
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
      </div>
    </section>
  );
};

export default FeaturesSection;
