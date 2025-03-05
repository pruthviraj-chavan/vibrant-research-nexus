
import Layout from "@/components/Layout";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Mock data for upcoming conferences
const upcomingConferences = [
  {
    id: 1,
    title: "International Symposium on Quantum Computing",
    date: "August 15-18, 2023",
    location: "Zurich, Switzerland",
    description: "Explore the latest advancements in quantum computing theory and applications with leading researchers from around the world.",
    attendees: 350,
    color: "from-research-blue to-research-purple"
  },
  {
    id: 2,
    title: "Global Climate Science Forum",
    date: "September 22-25, 2023",
    location: "Stockholm, Sweden",
    description: "A multidisciplinary conference focusing on climate change research, mitigation strategies, and global policy initiatives.",
    attendees: 420,
    color: "from-research-teal to-green-400"
  },
  {
    id: 3,
    title: "Biomedical Innovation Summit",
    date: "October 10-12, 2023",
    location: "Boston, USA",
    description: "Bridging the gap between laboratory discoveries and clinical applications in biomedical research and healthcare.",
    attendees: 380,
    color: "from-research-amber to-research-coral"
  },
  {
    id: 4,
    title: "AI and Machine Learning Conference",
    date: "November 5-8, 2023",
    location: "Singapore",
    description: "Showcasing cutting-edge research in artificial intelligence, deep learning, and their transformative applications across industries.",
    attendees: 500,
    color: "from-research-purple to-indigo-600"
  },
];

export default function Conferences() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 pt-24 pb-16">
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute top-40 right-20 w-72 h-72 bg-research-blue/20 rounded-full filter blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-research-purple/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-research-purple/10 text-research-purple dark:bg-research-purple/20 animate-fade-in">
              Academic Events
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Upcoming Research Conferences
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Discover the most anticipated academic conferences and symposiums in the global research community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {upcomingConferences.map((conference, index) => (
              <article
                key={conference.id}
                className="glass-card p-8 rounded-2xl relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${conference.color}`} />
                <h2 className="text-2xl font-semibold mb-3">{conference.title}</h2>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-research-blue dark:text-research-teal" />
                    {conference.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-research-coral" />
                    {conference.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-research-purple" />
                    {conference.attendees} expected attendees
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {conference.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="sm" className={`bg-gradient-to-r ${conference.color} rounded-full text-white hover:shadow-md`}>
                    <Link to={`/conference/${conference.id}`}>
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <Link to={`/conference/${conference.id}/register`}>
                      Register Now
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto text-center mt-12">
            <h2 className="text-2xl font-serif font-semibold mb-6">
              Want to Propose a Conference?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              If you're interested in organizing a research conference under our auspices, we welcome your proposal.
            </p>
            <Button asChild size="lg" className="rounded-full bg-research-blue hover:bg-research-blue/90">
              <Link to="/conference-proposal">
                Submit Conference Proposal
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
