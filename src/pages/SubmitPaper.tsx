
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FileUp, Info, DollarSign, FileText, Check } from "lucide-react";

export default function SubmitPaper() {
  const [submissionStep, setSubmissionStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    abstract: "",
    keywords: "",
    authors: "",
    category: "",
    manuscript: null as File | null,
    figures: [],
    supplementary: null as File | null,
    agree: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    if (e.target.files && e.target.files.length > 0) {
      if (fieldName === "figures") {
        setFormData({
          ...formData,
          figures: Array.from(e.target.files),
        });
      } else {
        setFormData({
          ...formData,
          [fieldName]: e.target.files[0],
        });
      }
    }
  };

  const handleSelectChange = (value: string, fieldName: string) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const nextStep = () => {
    setSubmissionStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setSubmissionStep((prev) => Math.max(prev - 1, 1));
  };

  const processingFees = [
    { type: "Standard Publication", fee: "$1,500", duration: "8-10 weeks processing time" },
    { type: "Expedited Publication", fee: "$2,200", duration: "4-6 weeks processing time" },
    { type: "Open Access", fee: "$2,800", duration: "Full open access with no subscription barriers" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-research-blue to-research-purple">
              Submit Your Paper
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Share your research with our global community of scholars and practitioners.
            </p>
          </div>

          <Tabs defaultValue="submission" className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-md mb-8">
              <TabsTrigger value="submission">Submission</TabsTrigger>
              <TabsTrigger value="fees">Processing Charges</TabsTrigger>
              <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
            </TabsList>

            <TabsContent value="submission" className="space-y-8">
              <div className="flex justify-between mb-8">
                <div className="flex space-x-2">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${submissionStep >= 1 ? "bg-research-blue text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400"}`}>
                    1
                  </div>
                  <div className={`h-1 w-16 self-center ${submissionStep >= 2 ? "bg-research-blue" : "bg-slate-200 dark:bg-slate-700"}`}></div>
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${submissionStep >= 2 ? "bg-research-blue text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400"}`}>
                    2
                  </div>
                  <div className={`h-1 w-16 self-center ${submissionStep >= 3 ? "bg-research-blue" : "bg-slate-200 dark:bg-slate-700"}`}></div>
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${submissionStep >= 3 ? "bg-research-blue text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400"}`}>
                    3
                  </div>
                </div>
              </div>

              {submissionStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Paper Information</CardTitle>
                    <CardDescription>Enter the basic details of your paper</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="title" className="block font-medium">Paper Title *</label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Enter the title of your paper"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="authors" className="block font-medium">Authors *</label>
                      <Input
                        id="authors"
                        name="authors"
                        value={formData.authors}
                        onChange={handleInputChange}
                        placeholder="List all authors (e.g., John Smith, Jane Doe)"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="abstract" className="block font-medium">Abstract *</label>
                      <Textarea
                        id="abstract"
                        name="abstract"
                        value={formData.abstract}
                        onChange={handleInputChange}
                        placeholder="Provide a brief summary of your research"
                        rows={5}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="keywords" className="block font-medium">Keywords *</label>
                      <Input
                        id="keywords"
                        name="keywords"
                        value={formData.keywords}
                        onChange={handleInputChange}
                        placeholder="Enter keywords separated by commas"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="category" className="block font-medium">Research Category *</label>
                      <Select value={formData.category} onValueChange={(value) => handleSelectChange(value, "category")}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a research category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="computer_science">Computer Science</SelectItem>
                          <SelectItem value="physics">Physics</SelectItem>
                          <SelectItem value="biology">Biology</SelectItem>
                          <SelectItem value="chemistry">Chemistry</SelectItem>
                          <SelectItem value="medicine">Medicine</SelectItem>
                          <SelectItem value="engineering">Engineering</SelectItem>
                          <SelectItem value="social_sciences">Social Sciences</SelectItem>
                          <SelectItem value="humanities">Humanities</SelectItem>
                          <SelectItem value="environmental_science">Environmental Science</SelectItem>
                          <SelectItem value="economics">Economics</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <Button onClick={nextStep}>
                        Continue to Uploads
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {submissionStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Upload Files</CardTitle>
                    <CardDescription>Upload your manuscript and supporting files</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <label className="block font-medium">Manuscript (PDF) *</label>
                      <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-6 text-center">
                        <FileUp className="mx-auto h-12 w-12 text-slate-400" />
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                          Drag and drop your manuscript file here, or click to browse
                        </p>
                        <input
                          type="file"
                          className="mt-4 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-research-blue/10 file:text-research-blue hover:file:bg-research-blue/20"
                          accept=".pdf"
                          onChange={(e) => handleFileChange(e, "manuscript")}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block font-medium">Figures and Tables (Optional)</label>
                      <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-6 text-center">
                        <FileUp className="mx-auto h-12 w-12 text-slate-400" />
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                          Upload figures and tables (PNG, JPG, TIFF)
                        </p>
                        <input
                          type="file"
                          className="mt-4 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-research-blue/10 file:text-research-blue hover:file:bg-research-blue/20"
                          accept=".png,.jpg,.jpeg,.tiff"
                          multiple
                          onChange={(e) => handleFileChange(e, "figures")}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block font-medium">Supplementary Material (Optional)</label>
                      <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-6 text-center">
                        <FileUp className="mx-auto h-12 w-12 text-slate-400" />
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                          Upload any supplementary files (ZIP, PDF)
                        </p>
                        <input
                          type="file"
                          className="mt-4 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-research-blue/10 file:text-research-blue hover:file:bg-research-blue/20"
                          accept=".zip,.pdf"
                          onChange={(e) => handleFileChange(e, "supplementary")}
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <Button variant="outline" onClick={prevStep}>
                        Back to Information
                      </Button>
                      <Button onClick={nextStep}>
                        Continue to Review
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {submissionStep === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Review and Submit</CardTitle>
                    <CardDescription>Review your submission and agree to terms</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 space-y-4">
                      <div>
                        <h3 className="font-semibold">Paper Title</h3>
                        <p>{formData.title || "Not provided"}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Authors</h3>
                        <p>{formData.authors || "Not provided"}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Abstract</h3>
                        <p className="text-sm">{formData.abstract || "Not provided"}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Keywords</h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {formData.keywords ? formData.keywords.split(',').map((keyword, index) => (
                            <Badge key={index} variant="secondary">{keyword.trim()}</Badge>
                          )) : "Not provided"}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold">Category</h3>
                        <p>{formData.category ? formData.category.replace('_', ' ') : "Not provided"}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Files</h3>
                        <p>Manuscript: {formData.manuscript ? formData.manuscript.name : "Not uploaded"}</p>
                        <p>Figures: {formData.figures.length > 0 ? `${formData.figures.length} files` : "None"}</p>
                        <p>Supplementary: {formData.supplementary ? formData.supplementary.name : "None"}</p>
                      </div>
                    </div>

                    <div className="pt-6 space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="agree"
                            type="checkbox"
                            className="h-4 w-4 rounded border-slate-300 text-research-blue focus:ring-research-blue"
                            checked={formData.agree}
                            onChange={() => setFormData({...formData, agree: !formData.agree})}
                          />
                        </div>
                        <div className="text-sm">
                          <label htmlFor="agree" className="font-medium">
                            I certify that:
                          </label>
                          <p className="text-slate-600 dark:text-slate-400">
                            This work is original, has not been published elsewhere, and is not currently under review at another journal. I have read and agree to the journal's publication ethics and publication charges.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <Button variant="outline" onClick={prevStep}>
                        Back to Uploads
                      </Button>
                      <Button disabled={!formData.agree}>
                        Submit Paper
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="fees" className="space-y-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <DollarSign className="h-6 w-6 text-research-blue mr-2" />
                  <h2 className="text-2xl font-serif font-semibold">Processing Charges</h2>
                </div>
                <p className="mb-6 text-slate-600 dark:text-slate-300">
                  VibrantResearch charges the following fees to cover the costs of peer review, editorial oversight, production, and distribution:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {processingFees.map((fee, index) => (
                    <Card key={index} className="border-2 border-research-blue/20">
                      <CardHeader className="bg-research-blue/5 dark:bg-research-blue/10">
                        <CardTitle className="text-lg">{fee.type}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <p className="text-3xl font-bold text-research-blue mb-2">{fee.fee}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{fee.duration}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-200">
                  <div className="flex">
                    <Info className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Fee Waivers</p>
                      <p className="mt-1 text-sm">
                        Fee waivers are available for authors from low-income countries and for exceptional cases where research funding is limited. To apply for a fee waiver, please contact <span className="underline">waivers@vibrantresearch.org</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="guidelines" className="space-y-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-research-blue mr-2" />
                  <h2 className="text-2xl font-serif font-semibold">Submission Guidelines</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-research-blue dark:text-research-teal mb-2">Manuscript Format</h3>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                      <li>Manuscripts must be submitted as PDF files</li>
                      <li>Use A4 or Letter size pages with 1-inch (2.5 cm) margins on all sides</li>
                      <li>Text should be double-spaced, in a 12-point standard font (e.g., Times New Roman, Arial)</li>
                      <li>Maximum length: 8,000 words including references and figure captions</li>
                      <li>Include page numbers and line numbers to facilitate the review process</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-research-blue dark:text-research-teal mb-2">Structure</h3>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                      <li><span className="font-medium">Title page:</span> Include title, authors, affiliations, corresponding author contact information</li>
                      <li><span className="font-medium">Abstract:</span> Max 250 words summarizing the research</li>
                      <li><span className="font-medium">Keywords:</span> 4-6 keywords</li>
                      <li><span className="font-medium">Introduction:</span> Background, rationale, objectives</li>
                      <li><span className="font-medium">Methods:</span> Detailed description of methodology</li>
                      <li><span className="font-medium">Results:</span> Clear presentation of findings</li>
                      <li><span className="font-medium">Discussion:</span> Interpretation of results and comparison with existing literature</li>
                      <li><span className="font-medium">Conclusion:</span> Summary of findings and implications</li>
                      <li><span className="font-medium">References:</span> Follow APA style (7th edition)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-research-blue dark:text-research-teal mb-2">Figures and Tables</h3>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                      <li>Figures should be submitted as separate high-resolution files (min. 300 dpi)</li>
                      <li>Acceptable formats: TIFF, PNG, JPEG</li>
                      <li>Each figure must have a caption that explains the figure</li>
                      <li>Tables should be editable and not images</li>
                      <li>Large tables can be submitted as supplementary materials</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-research-blue dark:text-research-teal mb-2">Ethics</h3>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                      <li>Research involving human subjects must include a statement of ethical approval</li>
                      <li>Clinical trials must be registered in a public trials registry</li>
                      <li>Conflicts of interest must be disclosed</li>
                      <li>Plagiarism and duplicate submission are strictly prohibited</li>
                    </ul>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400">
                    <Check className="h-5 w-5" />
                    <p className="font-medium">Need a template? <a href="#" className="underline">Download our manuscript template</a></p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
