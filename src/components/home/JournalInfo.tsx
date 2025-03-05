
import { CheckCircle, BookOpen, Award, Users } from "lucide-react";

const features = [
  {
    name: "Rigorous Peer Review",
    description: "All papers undergo a thorough review process by experts in the field to ensure high-quality research.",
    icon: CheckCircle,
  },
  {
    name: "Open Access Publishing",
    description: "We believe in making research freely available to all, promoting wider dissemination of knowledge.",
    icon: BookOpen,
  },
  {
    name: "High Impact Factor",
    description: "Our journal maintains a high impact factor, reflecting the influence and importance of published research.",
    icon: Award,
  },
  {
    name: "Global Research Community",
    description: "Join a diverse community of researchers from around the world pushing the boundaries of science.",
    icon: Users,
  },
];

export default function JournalInfo() {
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-research-coral/10 text-research-coral dark:bg-research-coral/20">
            About Our Journal
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            A Platform for Scientific Excellence
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            VibrantResearch is dedicated to publishing cutting-edge research across multiple disciplines. Our journal provides a platform for researchers to share their discoveries and innovations with the global scientific community.
          </p>
          
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.name} 
                className="flex items-start animate-slide-in"
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-research-blue/10 text-research-blue dark:bg-research-blue/20 mr-4`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{feature.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative animate-scale-in">
          <div className="absolute inset-0 bg-gradient-radial from-research-blue/10 to-transparent opacity-50 rounded-3xl" />
          <div className="glass-card shadow-lg rounded-3xl p-8 relative">
            <h3 className="text-2xl font-semibold mb-4 text-center">Journal Metrics</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-research-blue mb-2">4.8</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Impact Factor</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-research-purple mb-2">21</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Days to First Decision</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-research-teal mb-2">94%</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Acceptance Rate</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-research-coral mb-2">42</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Countries Represented</div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-research-blue/5 dark:bg-research-blue/10 rounded-xl text-center">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                <span className="font-medium">Special Issue:</span> Submit your research on <span className="font-medium">Sustainable Technology</span> by September 30, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
