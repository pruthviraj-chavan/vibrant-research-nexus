
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

export default function AboutUs() {
  const editorialBoard = [
    { name: "Dr. Sarah Johnson", role: "Editor-in-Chief", university: "Stanford University", photoUrl: "https://i.pravatar.cc/150?img=32" },
    { name: "Dr. Michael Chen", role: "Associate Editor", university: "MIT", photoUrl: "https://i.pravatar.cc/150?img=33" },
    { name: "Dr. Priya Sharma", role: "Associate Editor", university: "University of Cambridge", photoUrl: "https://i.pravatar.cc/150?img=34" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="space-y-12">
          {/* Mission Section */}
          <section className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-research-blue to-research-purple">About Us</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold text-research-blue dark:text-research-teal">Our Mission</h2>
                <p className="text-lg leading-relaxed">
                  VibrantResearch is dedicated to advancing scientific knowledge by publishing high-quality, peer-reviewed research across diverse fields. Our mission is to facilitate the open exchange of innovative ideas, foster academic collaboration, and accelerate scientific progress.
                </p>
                <p className="text-lg leading-relaxed">
                  We strive to maintain the highest standards of academic integrity while making cutting-edge research accessible to a global audience of scholars, practitioners, and enthusiasts.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Research team collaborating" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Editorial Board Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-semibold text-research-blue dark:text-research-teal">Editorial Board</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {editorialBoard.map((editor, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Avatar className="h-16 w-16 border-2 border-research-blue">
                      <img src={editor.photoUrl} alt={editor.name} />
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl">{editor.name}</CardTitle>
                      <CardDescription>{editor.role}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{editor.university}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Peer Review Process */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-semibold text-research-blue dark:text-research-teal">Peer Review Process</h2>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-research-blue text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-medium">Initial Screening</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-300">All submissions undergo an initial review by the editorial team to ensure they meet basic quality standards and fall within the journal's scope.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-research-blue text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-medium">Double-Blind Review</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-300">Papers that pass initial screening are sent to at least two independent experts for double-blind peer review, where both the reviewers and authors remain anonymous.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-research-blue text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-medium">Decision Process</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-300">Based on reviewer feedback, the editorial board makes one of four decisions: accept, minor revisions, major revisions, or reject.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-research-blue text-white flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-medium">Publication</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-300">Accepted papers undergo final formatting and quality checks before being published in the next available issue.</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
