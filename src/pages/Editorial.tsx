
import Layout from "@/components/Layout";
import { Linkedin, Mail, ExternalLink } from "lucide-react";

// Mock data for editorial board
const editorInChief = {
  name: "Dr. Elizabeth Chen",
  role: "Editor-in-Chief",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  bio: "Professor of Molecular Biology at Stanford University with over 20 years of research experience in genomics and biotechnology.",
  email: "e.chen@vibrantresearch.org",
  linkedin: "https://linkedin.com/in/example"
};

const seniorEditors = [
  {
    name: "Dr. Robert Johnson",
    role: "Senior Editor, Physics",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    bio: "Quantum physicist with expertise in theoretical particle physics and cosmology.",
    institution: "MIT"
  },
  {
    name: "Dr. Maria Garcia",
    role: "Senior Editor, Computer Science",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    bio: "Leading researcher in artificial intelligence and machine learning algorithms.",
    institution: "UC Berkeley"
  },
  {
    name: "Dr. James Lee",
    role: "Senior Editor, Environmental Science",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    bio: "Specializes in climate change research and sustainable environmental practices.",
    institution: "Oxford University"
  }
];

const associateEditors = [
  {
    name: "Dr. Sarah Williams",
    role: "Associate Editor",
    specialty: "Neuroscience",
    institution: "Harvard Medical School"
  },
  {
    name: "Dr. Ahmed Hassan",
    role: "Associate Editor",
    specialty: "Materials Science",
    institution: "Tokyo Institute of Technology"
  },
  {
    name: "Dr. Carlos Rodriguez",
    role: "Associate Editor",
    specialty: "Sustainable Energy",
    institution: "ETH Zurich"
  },
  {
    name: "Dr. Priya Sharma",
    role: "Associate Editor",
    specialty: "Data Science",
    institution: "Indian Institute of Science"
  },
  {
    name: "Dr. Thomas Müller",
    role: "Associate Editor",
    specialty: "Organic Chemistry",
    institution: "Max Planck Institute"
  },
  {
    name: "Dr. Lucy Zhang",
    role: "Associate Editor",
    specialty: "Biomedical Engineering",
    institution: "Johns Hopkins University"
  }
];

const Editorial = () => {
  return (
    <Layout>
      <section className="pt-32 pb-12 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute top-32 -left-20 w-80 h-80 bg-research-blue/20 rounded-full filter blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-10 right-20 w-72 h-72 bg-research-amber/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-research-blue/10 text-research-blue dark:bg-research-blue/20 animate-fade-in">
              Our Team
            </span>
            <h1 className="page-heading animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Editorial Board
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Meet the experts who ensure the quality and integrity of our publications
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-semibold mb-8 text-center">Editor-in-Chief</h2>
          
          <div className="glass-card rounded-xl p-8 mb-16">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <img 
                  src={editorInChief.image} 
                  alt={editorInChief.name} 
                  className="w-full md:w-48 h-48 object-cover rounded-xl"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-1">{editorInChief.name}</h3>
                <p className="text-lg text-research-blue dark:text-research-teal mb-4">{editorInChief.role}</p>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{editorInChief.bio}</p>
                <div className="flex space-x-4">
                  <a 
                    href={`mailto:${editorInChief.email}`}
                    className="flex items-center text-slate-600 dark:text-slate-300 hover:text-research-blue dark:hover:text-research-teal transition-colors"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    {editorInChief.email}
                  </a>
                  <a 
                    href={editorInChief.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-600 dark:text-slate-300 hover:text-research-blue dark:hover:text-research-teal transition-colors"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-serif font-semibold mb-8 text-center">Senior Editors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {seniorEditors.map((editor, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <img 
                  src={editor.image} 
                  alt={editor.name} 
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center mb-1">{editor.name}</h3>
                <p className="text-center text-research-blue dark:text-research-teal text-sm mb-2">{editor.role}</p>
                <p className="text-center text-slate-500 dark:text-slate-400 text-sm mb-3">{editor.institution}</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm text-center">{editor.bio}</p>
              </div>
            ))}
          </div>
          
          <h2 className="text-2xl font-serif font-semibold mb-8 text-center">Associate Editors</h2>
          
          <div className="glass-card rounded-xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {associateEditors.map((editor, index) => (
                <div 
                  key={index} 
                  className="flex items-center border-b border-slate-200 dark:border-slate-700 pb-4 last:border-0 last:pb-0 animate-slide-in"
                  style={{ animationDelay: `${index * 0.05 + 0.2}s` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-research-purple/10 flex items-center justify-center mr-4">
                    <span className="text-research-purple font-semibold">
                      {editor.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{editor.name}</h3>
                    <p className="text-sm">
                      <span className="text-research-blue dark:text-research-teal">{editor.specialty}</span>
                      <span className="text-slate-500 dark:text-slate-400"> · {editor.institution}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="#"
              className="inline-flex items-center text-slate-600 dark:text-slate-300 hover:text-research-blue dark:hover:text-research-teal transition-colors"
            >
              View complete editorial board
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      
      <section className="section-container bg-slate-50 dark:bg-slate-900 rounded-3xl mx-4 sm:mx-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-semibold mb-6 text-center">Join Our Editorial Team</h2>
          <p className="text-center text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            VibrantResearch is always looking for qualified researchers to join our editorial board. If you're an established expert in your field with a passion for advancing scientific knowledge, we'd love to hear from you.
          </p>
          
          <div className="text-center">
            <a 
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-research-blue hover:bg-research-blue/90 transition-colors"
            >
              Apply to Join
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Editorial;
