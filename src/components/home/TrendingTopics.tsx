
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const trendingTopics = [
  {
    id: 1,
    name: "Artificial Intelligence",
    description: "Research on machine learning, neural networks, and AI applications in various fields.",
    paperCount: 284,
    color: "from-research-blue to-research-purple"
  },
  {
    id: 2,
    name: "Sustainable Energy",
    description: "Studies on renewable energy sources, energy efficiency, and environmental impact.",
    paperCount: 162,
    color: "from-research-teal to-green-400"
  },
  {
    id: 3,
    name: "Biotechnology",
    description: "Advances in genetic engineering, pharmaceuticals, and biomedical applications.",
    paperCount: 195,
    color: "from-research-amber to-research-coral"
  },
  {
    id: 4,
    name: "Quantum Physics",
    description: "Theoretical and experimental research in quantum mechanics and its applications.",
    paperCount: 117,
    color: "from-research-purple to-indigo-500"
  },
  {
    id: 5,
    name: "Climate Science",
    description: "Studies on climate change, atmospheric science, and environmental impacts.",
    paperCount: 203,
    color: "from-research-teal to-research-blue"
  },
  {
    id: 6,
    name: "Data Science",
    description: "Research on big data analytics, statistical methods, and computational modeling.",
    paperCount: 241,
    color: "from-research-blue to-indigo-600"
  }
];

export default function TrendingTopics() {
  const [hoveredTopic, setHoveredTopic] = useState<number | null>(null);

  return (
    <section className="section-container bg-slate-50 dark:bg-slate-900 rounded-3xl mx-4 sm:mx-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-research-teal/10 text-research-teal dark:bg-research-teal/20">
          Hot Research Areas
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Trending Research Topics
        </h2>
        <p className="text-slate-600 dark:text-slate-300">
          Discover the most active research areas currently trending in our academic community.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingTopics.map((topic, index) => (
          <Link
            key={topic.id}
            to={`/topic/${topic.id}`}
            className="feature-card bg-white dark:bg-slate-800 overflow-hidden relative"
            onMouseEnter={() => setHoveredTopic(topic.id)}
            onMouseLeave={() => setHoveredTopic(null)}
          >
            <div 
              className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 transition-opacity duration-300 ${
                hoveredTopic === topic.id ? "opacity-5" : ""
              }`}
            />
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              {topic.name}
              <span className="ml-auto text-sm font-normal text-slate-500 dark:text-slate-400">
                {topic.paperCount} papers
              </span>
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              {topic.description}
            </p>
            <div className={`inline-flex items-center text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r ${topic.color}`}>
              Explore topic
              <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
