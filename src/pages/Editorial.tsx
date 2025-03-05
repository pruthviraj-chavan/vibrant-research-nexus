
import Layout from "@/components/Layout";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Award, Briefcase, Mail, ExternalLink, FileText } from "lucide-react";

export default function Editorial() {
  const editorialTeam = {
    chiefEditors: [
      {
        name: "Dr. Sarah Johnson",
        role: "Editor-in-Chief",
        university: "Stanford University",
        department: "Department of Computer Science",
        bio: "Dr. Johnson is a renowned expert in artificial intelligence and has published over 100 papers in top-tier journals. She leads our editorial direction with a focus on maintaining the highest standards of research integrity.",
        photoUrl: "https://i.pravatar.cc/150?img=32",
        email: "sjohnson@stanford.edu",
        publications: 156,
        citations: 8450,
        specializations: ["Artificial Intelligence", "Machine Learning", "Data Ethics"],
        socialLinks: {
          website: "https://sarahjohnson.stanford.edu",
          twitter: "https://twitter.com/sarahjohnson",
          linkedin: "https://linkedin.com/in/sarahjohnson"
        }
      },
      {
        name: "Dr. Michael Chen",
        role: "Deputy Editor-in-Chief",
        university: "MIT",
        department: "Department of Electrical Engineering and Computer Science",
        bio: "Dr. Chen brings 20 years of experience in quantum computing research. He oversees the journal's technical content and special issues, ensuring accuracy and relevance across all publications.",
        photoUrl: "https://i.pravatar.cc/150?img=33",
        email: "mchen@mit.edu",
        publications: 128,
        citations: 6700,
        specializations: ["Quantum Computing", "Computational Physics", "Complex Systems"],
        socialLinks: {
          website: "https://michaelchen.mit.edu",
          twitter: "https://twitter.com/michaelchen",
          linkedin: "https://linkedin.com/in/michaelchen"
        }
      }
    ],
    associateEditors: [
      {
        name: "Dr. Priya Sharma",
        role: "Associate Editor",
        university: "University of Cambridge",
        department: "Department of Materials Science",
        bio: "Dr. Sharma specializes in nanomaterials and sustainable technologies. She manages submissions in the materials science and environmental engineering fields.",
        photoUrl: "https://i.pravatar.cc/150?img=34",
        email: "psharma@cambridge.ac.uk",
        publications: 87,
        citations: 4200,
        specializations: ["Nanomaterials", "Sustainable Technologies", "Green Chemistry"],
        socialLinks: {
          website: "https://priyasharma.cam.ac.uk",
          twitter: "https://twitter.com/priyasharma",
          linkedin: "https://linkedin.com/in/priyasharma"
        }
      },
      {
        name: "Dr. James Wilson",
        role: "Associate Editor",
        university: "University of California, Berkeley",
        department: "Department of Biology",
        bio: "Dr. Wilson is a leader in genomics and biotechnology research. He oversees the journal's biological sciences section and guides our peer review process for life sciences papers.",
        photoUrl: "https://i.pravatar.cc/150?img=61",
        email: "jwilson@berkeley.edu",
        publications: 112,
        citations: 5600,
        specializations: ["Genomics", "Biotechnology", "Cellular Biology"],
        socialLinks: {
          website: "https://jameswilson.berkeley.edu",
          twitter: "https://twitter.com/jameswilson",
          linkedin: "https://linkedin.com/in/jameswilson"
        }
      },
      {
        name: "Dr. Emma Rodriguez",
        role: "Associate Editor",
        university: "ETH Zurich",
        department: "Department of Environmental Sciences",
        bio: "Dr. Rodriguez focuses on climate science and environmental policy. She manages our special issues on sustainability and leads initiatives to promote interdisciplinary research.",
        photoUrl: "https://i.pravatar.cc/150?img=45",
        email: "erodriguez@ethz.ch",
        publications: 93,
        citations: 3900,
        specializations: ["Climate Science", "Environmental Policy", "Sustainability"],
        socialLinks: {
          website: "https://emmarodriguez.ethz.ch",
          twitter: "https://twitter.com/emmarodriguez",
          linkedin: "https://linkedin.com/in/emmarodriguez"
        }
      }
    ],
    advisoryBoard: [
      {
        name: "Prof. Robert Lee",
        role: "Advisory Board Member",
        university: "Harvard University",
        department: "Department of Physics",
        bio: "Professor Lee is a Nobel laureate in Physics who provides strategic guidance on our publishing direction and helps maintain our connections with the broader scientific community.",
        photoUrl: "https://i.pravatar.cc/150?img=65",
        specializations: ["Theoretical Physics", "Cosmology", "Quantum Mechanics"]
      },
      {
        name: "Dr. Alicia Martinez",
        role: "Advisory Board Member",
        university: "Max Planck Institute",
        department: "Department of Neuroscience",
        bio: "Dr. Martinez brings expertise in neuroscience and cognitive psychology. She helps ensure our journal addresses emerging research areas and maintains ethical standards.",
        photoUrl: "https://i.pravatar.cc/150?img=47",
        specializations: ["Neuroscience", "Cognitive Psychology", "Brain Mapping"]
      },
      {
        name: "Dr. Hiroshi Tanaka",
        role: "Advisory Board Member",
        university: "University of Tokyo",
        department: "Department of Information Science",
        bio: "Dr. Tanaka is a pioneer in information theory and computational linguistics. He advises on our technological direction and international expansion strategies.",
        photoUrl: "https://i.pravatar.cc/150?img=70",
        specializations: ["Information Theory", "Computational Linguistics", "AI Ethics"]
      }
    ]
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="space-y-12">
          {/* Header Section */}
          <section className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-research-blue to-research-purple">
              Editorial Team
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
              Our editorial team consists of leading experts from various disciplines who ensure the highest standards of academic rigor and integrity in our publications.
            </p>
          </section>

          {/* Editorial Tabs */}
          <Tabs defaultValue="chief-editors" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="chief-editors">Chief Editors</TabsTrigger>
              <TabsTrigger value="associate-editors">Associate Editors</TabsTrigger>
              <TabsTrigger value="advisory-board">Advisory Board</TabsTrigger>
            </TabsList>

            {/* Chief Editors Tab */}
            <TabsContent value="chief-editors" className="space-y-8">
              {editorialTeam.chiefEditors.map((editor, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="md:grid md:grid-cols-3 gap-6">
                    <div className="p-6 flex flex-col items-center justify-center bg-gradient-to-br from-research-blue/10 to-research-purple/10">
                      <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                        <img src={editor.photoUrl} alt={editor.name} className="object-cover" />
                      </Avatar>
                      <h3 className="mt-4 text-xl font-bold text-center">{editor.name}</h3>
                      <p className="text-research-blue dark:text-research-teal font-medium text-center">{editor.role}</p>
                      <p className="text-sm text-center text-slate-500 dark:text-slate-400 mt-1">{editor.university}</p>
                      <p className="text-sm text-center text-slate-500 dark:text-slate-400">{editor.department}</p>
                      
                      <div className="flex gap-2 mt-4">
                        <Button size="sm" variant="outline" className="rounded-full">
                          <Mail className="h-4 w-4" />
                        </Button>
                        {editor.socialLinks && (
                          <>
                            <Button size="sm" variant="outline" className="rounded-full">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <div className="col-span-2 p-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-medium text-research-blue dark:text-research-teal">Biography</h4>
                          <p className="mt-2 text-slate-600 dark:text-slate-300">{editor.bio}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-medium text-research-blue dark:text-research-teal">Specializations</h4>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {editor.specializations.map((specialization, idx) => (
                              <Badge key={idx} variant="secondary">{specialization}</Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 pt-3">
                          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 text-research-blue mr-2" />
                              <span className="text-slate-700 dark:text-slate-300">Publications</span>
                            </div>
                            <p className="text-2xl font-semibold mt-2">{editor.publications}</p>
                          </div>
                          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                            <div className="flex items-center">
                              <BookOpen className="h-5 w-5 text-research-purple mr-2" />
                              <span className="text-slate-700 dark:text-slate-300">Citations</span>
                            </div>
                            <p className="text-2xl font-semibold mt-2">{editor.citations}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            {/* Associate Editors Tab */}
            <TabsContent value="associate-editors" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {editorialTeam.associateEditors.map((editor, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="flex flex-row gap-4 items-start pb-2">
                    <Avatar className="h-16 w-16 border-2 border-white shadow">
                      <img src={editor.photoUrl} alt={editor.name} className="object-cover" />
                    </Avatar>
                    <div>
                      <CardTitle>{editor.name}</CardTitle>
                      <CardDescription className="flex flex-col">
                        <span>{editor.role}</span>
                        <span>{editor.university}</span>
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-slate-600 dark:text-slate-300">{editor.bio}</p>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-1 text-research-blue dark:text-research-teal">Specializations</h4>
                      <div className="flex flex-wrap gap-1">
                        {editor.specializations.map((specialization, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{specialization}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <FileText className="h-4 w-4 text-slate-400" />
                      <span>{editor.publications} publications</span>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Mail className="h-4 w-4 mr-1" />
                      Contact
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>

            {/* Advisory Board Tab */}
            <TabsContent value="advisory-board" className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {editorialTeam.advisoryBoard.map((advisor, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="p-6 flex flex-col items-center">
                    <Avatar className="h-24 w-24 border-2 border-white shadow mb-4">
                      <img src={advisor.photoUrl} alt={advisor.name} className="object-cover" />
                    </Avatar>
                    <h3 className="text-lg font-bold text-center">{advisor.name}</h3>
                    <p className="text-sm text-research-blue dark:text-research-teal text-center">{advisor.role}</p>
                    <p className="text-xs text-center text-slate-500 mt-1">{advisor.university}</p>
                    <p className="text-xs text-center text-slate-500">{advisor.department}</p>
                    
                    <div className="w-full mt-4 pt-4 border-t">
                      <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-4">{advisor.bio}</p>
                    </div>
                    
                    <div className="w-full mt-4">
                      <h4 className="text-xs font-medium mb-2 text-research-blue dark:text-research-teal">Specializations</h4>
                      <div className="flex flex-wrap gap-1">
                        {advisor.specializations.map((specialization, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{specialization}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          {/* Journal Process Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-semibold text-research-blue dark:text-research-teal">Editorial Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="bg-research-blue/10 dark:bg-research-teal/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                    <FileText className="h-6 w-6 text-research-blue dark:text-research-teal" />
                  </div>
                  <CardTitle>Submission Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300">
                    Our editors conduct an initial screening of all submissions to ensure they meet basic quality standards and align with our journal's scope.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="bg-research-purple/10 dark:bg-research-purple/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-research-purple" />
                  </div>
                  <CardTitle>Peer Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300">
                    Papers that pass initial screening undergo double-blind peer review by at least two independent experts in the relevant field.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                    <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Publication Decision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300">
                    Based on reviewer feedback, our editorial board makes a final decision on acceptance, revision requirements, or rejection.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Join Editorial Team */}
          <section className="bg-gradient-to-r from-research-blue/10 to-research-purple/10 dark:from-research-blue/20 dark:to-research-purple/20 rounded-xl p-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-2xl font-serif font-semibold">Join Our Editorial Team</h2>
              <p className="text-slate-600 dark:text-slate-300">
                We're always looking for qualified researchers to join our editorial team. If you have expertise in a relevant field and are interested in contributing to our journal, we'd love to hear from you.
              </p>
              <Button className="mt-4">
                <Briefcase className="mr-2 h-4 w-4" />
                Apply to Join
              </Button>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
