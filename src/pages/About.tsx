
import Layout from "@/components/Layout";
import { BookOpen, FileText, Users, Award, Clock, Globe } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="pt-32 pb-12 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute top-32 -right-20 w-80 h-80 bg-research-purple/20 rounded-full filter blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-research-teal/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-research-purple/10 text-research-purple dark:bg-research-purple/20 animate-fade-in">
              Our Story
            </span>
            <h1 className="page-heading animate-fade-in" style={{ animationDelay: "0.2s" }}>
              About VibrantResearch
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              A leading platform committed to advancing science through rigorous research and open access publishing
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Founded in 2010, VibrantResearch has become a premier destination for researchers worldwide to publish their groundbreaking work. Our journal is committed to the highest standards of academic integrity, rigorous peer review, and the open dissemination of scientific knowledge.
            </p>
            
            <h2>Our Mission</h2>
            <p>
              VibrantResearch exists to accelerate scientific discovery by providing a platform that connects researchers across disciplines and geographical boundaries. We believe that scientific knowledge belongs to everyone and should be accessible to all who seek it.
            </p>
            
            <h2>Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {[
                { icon: BookOpen, title: "Academic Excellence", description: "We maintain the highest standards for published research" },
                { icon: Users, title: "Inclusivity", description: "We welcome diverse perspectives and voices in science" },
                { icon: Globe, title: "Global Reach", description: "We connect researchers across geographical boundaries" },
                { icon: Clock, title: "Efficiency", description: "We optimize the publishing process for rapid dissemination" }
              ].map((value, index) => (
                <div key={index} className="glass-card p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 w-12 h-12 rounded-full flex items-center justify-center bg-research-blue/10 text-research-blue dark:bg-research-blue/20">
                      <value.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-xl">{value.title}</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">{value.description}</p>
                </div>
              ))}
            </div>
            
            <h2>Peer Review Process</h2>
            <p>
              Our peer review process ensures the quality and integrity of published research. Every submission undergoes a rigorous evaluation by experts in the relevant field. We employ a double-blind peer review process to eliminate bias and ensure fair assessment.
            </p>
            
            <ol className="space-y-4 my-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-research-purple/10 text-research-purple dark:bg-research-purple/20 mr-4 font-bold">1</span>
                <div>
                  <h4 className="font-semibold">Initial Screening</h4>
                  <p className="text-slate-600 dark:text-slate-300">Our editorial team reviews submissions for scope, format, and basic scientific quality.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-research-purple/10 text-research-purple dark:bg-research-purple/20 mr-4 font-bold">2</span>
                <div>
                  <h4 className="font-semibold">Peer Evaluation</h4>
                  <p className="text-slate-600 dark:text-slate-300">Each paper is sent to at least two experts in the field for thorough assessment.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-research-purple/10 text-research-purple dark:bg-research-purple/20 mr-4 font-bold">3</span>
                <div>
                  <h4 className="font-semibold">Editorial Decision</h4>
                  <p className="text-slate-600 dark:text-slate-300">Based on reviewer feedback, editors make a decision to accept, reject, or request revisions.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-research-purple/10 text-research-purple dark:bg-research-purple/20 mr-4 font-bold">4</span>
                <div>
                  <h4 className="font-semibold">Publication</h4>
                  <p className="text-slate-600 dark:text-slate-300">Accepted papers are promptly published and made available to the scientific community.</p>
                </div>
              </li>
            </ol>
            
            <h2>Open Access Policy</h2>
            <p>
              VibrantResearch is fully committed to open access publishing. All articles are freely available online, allowing for maximum visibility and impact of research. We believe that open access accelerates discovery by providing immediate, unrestricted access to scientific information.
            </p>
            
            <div className="glass-card p-6 rounded-xl my-8">
              <h3 className="font-semibold text-xl mb-4">Journal Recognition</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <Award className="w-8 h-8 mx-auto text-research-blue mb-2" />
                  <p className="font-semibold">Indexed in Web of Science</p>
                </div>
                <div>
                  <Award className="w-8 h-8 mx-auto text-research-purple mb-2" />
                  <p className="font-semibold">Scopus Listed</p>
                </div>
                <div>
                  <Award className="w-8 h-8 mx-auto text-research-teal mb-2" />
                  <p className="font-semibold">DOAJ Certified</p>
                </div>
              </div>
            </div>
            
            <h2>Contact Us</h2>
            <p>
              We welcome inquiries from researchers, institutions, and readers. Please feel free to reach out to us at <a href="mailto:info@vibrantresearch.org" className="text-research-blue dark:text-research-teal">info@vibrantresearch.org</a> or through our contact form.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
