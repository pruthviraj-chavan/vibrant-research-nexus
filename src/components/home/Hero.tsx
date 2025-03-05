
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-research-blue/20 rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-research-purple/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-60 w-72 h-72 bg-research-teal/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>
      <div className="section-container relative pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-research-blue/10 text-research-blue dark:bg-research-blue/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Advancing Scientific Knowledge
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-research-blue via-research-purple to-research-teal">
              Vibrant Research Nexus
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
            A modern platform for groundbreaking academic research, cutting-edge discoveries, and scholarly excellence in all fields of science.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button asChild size="lg" className="rounded-full bg-research-blue hover:bg-research-blue/90">
              <Link to="/submit">
                Submit Your Research
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/archives">
                Explore Archives
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-16 max-w-4xl mx-auto glass-card rounded-2xl p-4 shadow-lg animate-scale-in" style={{ animationDelay: "1s" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-research-blue dark:text-research-teal mb-1">10+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Years of Publishing</div>
            </div>
            <div className="p-4 border-t md:border-t-0 md:border-l md:border-r border-slate-200 dark:border-slate-700">
              <div className="text-3xl font-bold text-research-purple mb-1">5,000+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Published Papers</div>
            </div>
            <div className="p-4 border-t md:border-t-0 border-slate-200 dark:border-slate-700">
              <div className="text-3xl font-bold text-research-coral mb-1">95%</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Academic Acceptance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
