
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for recent papers
const recentPapers = [
  {
    id: 1,
    title: "Quantum Computing Applications in Modern Cryptography",
    authors: "Zhang Wei, Maria Rodriguez, John Smith",
    abstract: "This paper explores the applications of quantum computing in modern cryptographic systems and its potential to disrupt current security paradigms.",
    date: "June 15, 2023",
    topic: "Computer Science",
    color: "bg-research-blue/10 text-research-blue dark:bg-research-blue/20"
  },
  {
    id: 2,
    title: "Climate Change Impact on Coral Reef Ecosystems",
    authors: "Emma Johnson, Ahmed Hassan, Lisa Chen",
    abstract: "A comprehensive analysis of how rising sea temperatures and ocean acidification affect coral reef health and biodiversity globally.",
    date: "May 22, 2023",
    topic: "Environmental Science",
    color: "bg-research-teal/10 text-research-teal dark:bg-research-teal/20"
  },
  {
    id: 3,
    title: "Neural Network Approaches to Natural Language Processing",
    authors: "Alex Kumar, Sophie Martin, Kenji Tanaka",
    abstract: "This research presents novel neural network architectures that advance the state-of-the-art in natural language understanding and generation.",
    date: "July 3, 2023",
    topic: "Artificial Intelligence",
    color: "bg-research-purple/10 text-research-purple dark:bg-research-purple/20"
  },
  {
    id: 4,
    title: "Advances in CRISPR Gene Editing Technologies",
    authors: "Sara Patel, Michael Brown, Lin Huang",
    abstract: "A review of recent advances in CRISPR-Cas9 gene editing technologies and their potential applications in treating genetic disorders.",
    date: "June 8, 2023",
    topic: "Biotechnology",
    color: "bg-research-amber/10 text-research-amber dark:bg-research-amber/20"
  }
];

export default function RecentPapers() {
  return (
    <section className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-research-purple/10 text-research-purple dark:bg-research-purple/20">
          Latest Publications
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Recent Research Papers
        </h2>
        <p className="text-slate-600 dark:text-slate-300">
          Explore the most recent publications from our community of researchers spanning various disciplines and topics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recentPapers.map((paper, index) => (
          <article 
            key={paper.id} 
            className="paper-card animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-start">
              <span className={`topic-tag ${paper.color}`}>
                {paper.topic}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {paper.date}
              </span>
            </div>
            <h3 className="text-xl font-semibold mt-3 mb-2">
              {paper.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
              by {paper.authors}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
              {paper.abstract}
            </p>
            <Link 
              to={`/paper/${paper.id}`} 
              className="inline-flex items-center text-research-blue dark:text-research-teal hover:underline font-medium"
            >
              Read Paper
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link 
          to="/archives" 
          className="inline-flex items-center text-slate-600 dark:text-slate-300 hover:text-research-blue dark:hover:text-research-teal transition-colors"
        >
          View all published papers
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
