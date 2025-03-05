
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CalendarIcon, 
  Search, 
  ChevronRight, 
  Download, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail,
  X,
  FileText,
  Users,
  BookOpen,
  Eye,
  ExternalLink 
} from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";

type ArchiveYear = {
  year: number;
  months: {
    month: string;
    volumes: {
      id: string;
      title: string;
      description: string;
      papersCount: number;
    }[];
  }[];
};

// Mock paper data
const papersMockData = [
  {
    id: "p001",
    title: "Machine Learning Approaches for Climate Change Prediction",
    authors: [
      { name: "Sarah Johnson", affiliation: "Stanford University", email: "sjohnson@stanford.edu", isCorresponding: true },
      { name: "Michael Chen", affiliation: "MIT", email: "mchen@mit.edu", isCorresponding: false },
      { name: "David Lee", affiliation: "University of California, Berkeley", email: "dlee@berkeley.edu", isCorresponding: false }
    ],
    abstract: "This paper explores various machine learning techniques for predicting climate change patterns and their potential impact on global ecosystems. Using a combination of supervised and unsupervised learning methods, we analyze large-scale climate data from the past century to identify patterns and make predictions about future climate scenarios.",
    keywords: ["machine learning", "climate change", "prediction models", "environmental science"],
    publicationDate: "November 15, 2023",
    doi: "10.1234/jsr.2023.001",
    volumeId: "v8-i11",
    citations: 12,
    downloads: 345,
    views: 1287,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    funding: "This research was supported by the National Science Foundation (Grant #NSF-12345) and the Climate Research Initiative.",
    references: [
      "Johnson, A., & Smith, B. (2020). Climate data analysis using machine learning. Journal of Climate Science, 45(3), 234-251.",
      "Chen, L., Wang, R., & Davis, T. (2021). Deep learning applications in environmental modeling. Environmental Data Science, 12(2), 189-205."
    ]
  },
  {
    id: "p002",
    title: "Neural Network Architectures for Natural Language Processing",
    authors: [
      { name: "Alex Kumar", affiliation: "University of Toronto", email: "akumar@utoronto.ca", isCorresponding: true },
      { name: "Emma Williams", affiliation: "Google Research", email: "ewilliams@google.com", isCorresponding: false },
      { name: "James Taylor", affiliation: "Oxford University", email: "jtaylor@oxford.ac.uk", isCorresponding: false }
    ],
    abstract: "A comprehensive analysis of modern neural network architectures and their applications in natural language processing tasks. We compare transformer models, recurrent neural networks, and hybrid approaches on various benchmarks and discuss their strengths and limitations.",
    keywords: ["neural networks", "NLP", "deep learning", "transformer models"],
    publicationDate: "November 20, 2023",
    doi: "10.1234/jsr.2023.002",
    volumeId: "v8-i11",
    citations: 8,
    downloads: 267,
    views: 943,
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    funding: "This work was supported by the AI Research Foundation (Grant #AI-5678).",
    references: [
      "Vaswani, A., et al. (2017). Attention is all you need. Advances in Neural Information Processing Systems, 30, 5998-6008.",
      "Devlin, J., et al. (2019). BERT: Pre-training of deep bidirectional transformers for language understanding. NAACL-HLT, 4171-4186."
    ]
  },
  {
    id: "p003",
    title: "Advancements in Quantum Computing: A Systematic Review",
    authors: [
      { name: "Linda Zhang", affiliation: "IBM Research", email: "lzhang@ibm.com", isCorresponding: true },
      { name: "Robert Miller", affiliation: "Caltech", email: "rmiller@caltech.edu", isCorresponding: false },
      { name: "Sophia Garcia", affiliation: "Princeton University", email: "sgarcia@princeton.edu", isCorresponding: false }
    ],
    abstract: "This systematic review examines recent advancements in quantum computing hardware and algorithms, highlighting key breakthroughs and challenges. We analyze the current state of quantum supremacy, error correction techniques, and promising application domains.",
    keywords: ["quantum computing", "qubits", "quantum algorithms", "quantum supremacy"],
    publicationDate: "October 5, 2023",
    doi: "10.1234/jsr.2023.003",
    volumeId: "v8-i10",
    citations: 15,
    downloads: 412,
    views: 1568,
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    funding: "This research was funded by the National Quantum Initiative (Grant #NQI-9012).",
    references: [
      "Arute, F., et al. (2019). Quantum supremacy using a programmable superconducting processor. Nature, 574(7779), 505-510.",
      "Preskill, J. (2018). Quantum Computing in the NISQ era and beyond. Quantum, 2, 79."
    ]
  },
  {
    id: "p004",
    title: "Microplastic Pollution in Marine Ecosystems: Current Status and Future Perspectives",
    authors: [
      { name: "Maria Rodriguez", affiliation: "Scripps Institution of Oceanography", email: "mrodriguez@scripps.edu", isCorresponding: true },
      { name: "Thomas Wilson", affiliation: "University of Washington", email: "twilson@uw.edu", isCorresponding: false }
    ],
    abstract: "This paper reviews the current state of knowledge on microplastic pollution in marine environments, including sources, distribution patterns, and ecological impacts. We also discuss emerging detection technologies and potential mitigation strategies.",
    keywords: ["microplastics", "marine pollution", "environmental science", "ecotoxicology"],
    publicationDate: "December 10, 2023",
    doi: "10.1234/jsr.2023.004",
    volumeId: "v8-i12",
    citations: 7,
    downloads: 289,
    views: 1045,
    imageUrl: "https://images.unsplash.com/photo-1621451537084-482c73073a0f",
    funding: "This work was supported by the Ocean Conservation Initiative (Grant #OCI-2345).",
    references: [
      "Cole, M., et al. (2011). Microplastics as contaminants in the marine environment: A review. Marine Pollution Bulletin, 62(12), 2588-2597.",
      "Eriksen, M., et al. (2014). Plastic pollution in the world's oceans: More than 5 trillion plastic pieces weighing over 250,000 tons afloat at sea. PLoS ONE, 9(12), e111913."
    ]
  },
  {
    id: "p005",
    title: "Blockchain Technology for Supply Chain Transparency: Implementation Challenges",
    authors: [
      { name: "Daniel Park", affiliation: "Singapore Management University", email: "dpark@smu.edu.sg", isCorresponding: true },
      { name: "Olivia Chen", affiliation: "University of Michigan", email: "ochen@umich.edu", isCorresponding: false },
      { name: "Ryan Adams", affiliation: "Copenhagen Business School", email: "radams@cbs.dk", isCorresponding: false }
    ],
    abstract: "This study examines the challenges associated with implementing blockchain technology for enhancing supply chain transparency. Through multiple case studies across different industries, we identify key technical, organizational, and regulatory barriers.",
    keywords: ["blockchain", "supply chain", "transparency", "distributed ledger", "business technology"],
    publicationDate: "December 18, 2023",
    doi: "10.1234/jsr.2023.005",
    volumeId: "v8-i12",
    citations: 4,
    downloads: 213,
    views: 876,
    imageUrl: "https://images.unsplash.com/photo-1639815188546-c43c240e8335",
    funding: "This research received funding from the Digital Supply Chain Consortium (Grant #DSCC-6789).",
    references: [
      "Saberi, S., et al. (2019). Blockchain technology and its relationships to sustainable supply chain management. International Journal of Production Research, 57(7), 2117-2135.",
      "Kshetri, N. (2018). Blockchain's roles in meeting key supply chain management objectives. International Journal of Information Management, 39, 80-89."
    ]
  },
  {
    id: "p006",
    title: "Genome Editing Using CRISPR-Cas9: Ethical Considerations and Regulatory Frameworks",
    authors: [
      { name: "Jennifer Kim", affiliation: "Johns Hopkins University", email: "jkim@jhu.edu", isCorresponding: true },
      { name: "David Wang", affiliation: "University of Chicago", email: "dwang@uchicago.edu", isCorresponding: false },
      { name: "Elizabeth Brown", affiliation: "University College London", email: "ebrown@ucl.ac.uk", isCorresponding: false }
    ],
    abstract: "This paper explores the ethical implications of CRISPR-Cas9 gene editing technology, particularly focusing on human germline modifications. We review current regulatory approaches across different countries and propose a framework for responsible research and application.",
    keywords: ["CRISPR", "gene editing", "bioethics", "regulatory policy", "biotechnology"],
    publicationDate: "October 22, 2023",
    doi: "10.1234/jsr.2023.006",
    volumeId: "v8-i10",
    citations: 11,
    downloads: 356,
    views: 1232,
    imageUrl: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8",
    funding: "This research was supported by the Bioethics Research Consortium (Grant #BRC-3456).",
    references: [
      "Lander, E.S., et al. (2019). Adopt a moratorium on heritable genome editing. Nature, 567(7747), 165-168.",
      "Jasanoff, S., & Hurlbut, J.B. (2018). A global observatory for gene editing. Nature, 555(7697), 435-437."
    ]
  },
  {
    id: "p007",
    title: "Federated Learning for Privacy-Preserving Healthcare Analytics",
    authors: [
      { name: "Wei Zhang", affiliation: "Stanford University", email: "wzhang@stanford.edu", isCorresponding: true },
      { name: "Sophia Martinez", affiliation: "Harvard Medical School", email: "smartinez@hms.harvard.edu", isCorresponding: false }
    ],
    abstract: "This study presents a federated learning approach for analyzing healthcare data while preserving patient privacy. We demonstrate the effectiveness of our method on electronic health records from multiple institutions without sharing sensitive information.",
    keywords: ["federated learning", "healthcare analytics", "privacy", "machine learning", "medical informatics"],
    publicationDate: "November 8, 2022",
    doi: "10.1234/jsr.2022.007",
    volumeId: "v7-i11",
    citations: 18,
    downloads: 423,
    views: 1756,
    imageUrl: "https://images.unsplash.com/photo-1584982751601-97dcc096659c",
    funding: "This work was funded by the Healthcare Privacy Initiative (Grant #HPI-4567).",
    references: [
      "Rieke, N., et al. (2020). The future of digital health with federated learning. NPJ Digital Medicine, 3(1), 1-7.",
      "Kaissis, G.A., et al. (2020). Secure, privacy-preserving and federated machine learning in medical imaging. Nature Machine Intelligence, 2(6), 305-311."
    ]
  },
  {
    id: "p008",
    title: "Urban Heat Islands: Mitigation Strategies and Policy Implications",
    authors: [
      { name: "Carlos Mendez", affiliation: "University of Barcelona", email: "cmendez@ub.edu", isCorresponding: true },
      { name: "Michelle Wong", affiliation: "University of California, Davis", email: "mwong@ucdavis.edu", isCorresponding: false },
      { name: "Ahmed Hassan", affiliation: "Cairo University", email: "ahassan@cu.edu.eg", isCorresponding: false }
    ],
    abstract: "This research examines the formation and impacts of urban heat islands in major metropolitan areas. Through remote sensing and thermal modeling, we assess the effectiveness of various mitigation strategies including green infrastructure, cool roofs, and urban design modifications.",
    keywords: ["urban heat island", "climate change", "urban planning", "environmental policy", "sustainability"],
    publicationDate: "October 15, 2022",
    doi: "10.1234/jsr.2022.008",
    volumeId: "v7-i10",
    citations: 21,
    downloads: 387,
    views: 1598,
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    funding: "This research was funded by the Urban Climate Resilience Foundation (Grant #UCRF-7890).",
    references: [
      "Santamouris, M. (2020). Recent progress on urban overheating and heat island research. Integrated assessment of the energy, environmental, vulnerability and health impact. Synergies with the global climate change. Energy and Buildings, 207, 109482.",
      "Wong, N.H., et al. (2021). A review of urban heat island research: Past, present and future. Urban Climate, 35, 100787."
    ]
  }
];

// Mock data for archives
const archivesMockData: ArchiveYear[] = [
  {
    year: 2023,
    months: [
      {
        month: "December",
        volumes: [
          {
            id: "v8-i12",
            title: "Volume 8, Issue 12",
            description: "Special Issue on Sustainable Development",
            papersCount: 14
          }
        ]
      },
      {
        month: "November",
        volumes: [
          {
            id: "v8-i11",
            title: "Volume 8, Issue 11",
            description: "Advances in Machine Learning",
            papersCount: 12
          }
        ]
      },
      {
        month: "October",
        volumes: [
          {
            id: "v8-i10",
            title: "Volume 8, Issue 10",
            description: "Climate Change Research",
            papersCount: 10
          }
        ]
      }
    ]
  },
  {
    year: 2022,
    months: [
      {
        month: "December",
        volumes: [
          {
            id: "v7-i12",
            title: "Volume 7, Issue 12",
            description: "Biotechnology and Genetic Engineering",
            papersCount: 15
          }
        ]
      },
      {
        month: "November",
        volumes: [
          {
            id: "v7-i11",
            title: "Volume 7, Issue 11",
            description: "Quantum Computing Research",
            papersCount: 11
          }
        ]
      },
      {
        month: "October",
        volumes: [
          {
            id: "v7-i10",
            title: "Volume 7, Issue 10",
            description: "Medical Innovations",
            papersCount: 13
          }
        ]
      }
    ]
  }
];

export default function Archives() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedVolume, setSelectedVolume] = useState<string | null>(null);
  const [showShare, setShowShare] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState<typeof papersMockData[0] | null>(null);
  
  // Filter archives based on search term
  const filteredArchives = archivesMockData.filter((yearData) => {
    if (searchTerm === "") return true;
    
    // Check if year matches search term
    if (yearData.year.toString().includes(searchTerm)) return true;
    
    // Check if any month or volume matches search term
    return yearData.months.some((monthData) => 
      monthData.month.toLowerCase().includes(searchTerm.toLowerCase()) ||
      monthData.volumes.some((volume) => 
        volume.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        volume.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  });

  // Handle year selection
  const handleYearClick = (year: number) => {
    if (selectedYear === year) {
      setSelectedYear(null);
      setSelectedMonth(null);
      setSelectedVolume(null);
    } else {
      setSelectedYear(year);
      setSelectedMonth(null);
      setSelectedVolume(null);
    }
  };

  // Handle month selection
  const handleMonthClick = (month: string) => {
    if (selectedMonth === month) {
      setSelectedMonth(null);
      setSelectedVolume(null);
    } else {
      setSelectedMonth(month);
      setSelectedVolume(null);
    }
  };

  // Handle volume selection
  const handleVolumeClick = (volumeId: string) => {
    setSelectedVolume(volumeId);
  };

  // Reset all selections
  const handleReset = () => {
    setSelectedYear(null);
    setSelectedMonth(null);
    setSelectedVolume(null);
    setSearchTerm("");
  };

  // Open paper dialog
  const handlePaperClick = (paper: typeof papersMockData[0]) => {
    setSelectedPaper(paper);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-research-blue to-research-purple">
              Archives
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Browse our collection of research papers by year, month, and volume.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto md:flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search by year, month, or volume..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {(selectedYear || selectedMonth || selectedVolume) && (
              <Button variant="outline" onClick={handleReset}>
                Reset Filters
              </Button>
            )}
          </div>

          <div className="space-y-6">
            {selectedVolume ? (
              <VolumeDetail 
                volumeId={selectedVolume} 
                archiveData={archivesMockData} 
                papers={papersMockData}
                onPaperClick={handlePaperClick}
              />
            ) : (
              <>
                {/* Breadcrumb navigation */}
                {(selectedYear || selectedMonth) && (
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <button onClick={handleReset} className="hover:text-research-blue dark:hover:text-research-teal">
                      Archives
                    </button>
                    {selectedYear && (
                      <>
                        <ChevronRight className="h-4 w-4 mx-1" />
                        <button onClick={() => { setSelectedMonth(null); }} className="hover:text-research-blue dark:hover:text-research-teal">
                          {selectedYear}
                        </button>
                      </>
                    )}
                    {selectedMonth && (
                      <>
                        <ChevronRight className="h-4 w-4 mx-1" />
                        <span>{selectedMonth}</span>
                      </>
                    )}
                  </div>
                )}

                {/* Display years if no year is selected */}
                {!selectedYear && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredArchives.map((yearData) => (
                      <Card 
                        key={yearData.year}
                        className="hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => handleYearClick(yearData.year)}
                      >
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                          <CardTitle className="text-xl">{yearData.year}</CardTitle>
                          <Badge variant="secondary">
                            {yearData.months.reduce((acc, month) => acc + month.volumes.length, 0)} Volumes
                          </Badge>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {yearData.months.length} months with published research
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                {/* Display months if a year is selected but no month */}
                {selectedYear && !selectedMonth && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {filteredArchives
                      .find(yearData => yearData.year === selectedYear)
                      ?.months.map((monthData) => (
                        <Card 
                          key={monthData.month}
                          className="hover:shadow-md transition-shadow cursor-pointer"
                          onClick={() => handleMonthClick(monthData.month)}
                        >
                          <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-lg">{monthData.month}</CardTitle>
                            <CalendarIcon className="h-5 w-5 text-research-blue" />
                          </CardHeader>
                          <CardContent>
                            <Badge variant="outline">
                              {monthData.volumes.length} {monthData.volumes.length === 1 ? 'Volume' : 'Volumes'}
                            </Badge>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                )}

                {/* Display volumes if both year and month are selected */}
                {selectedYear && selectedMonth && (
                  <div className="grid grid-cols-1 gap-4">
                    {filteredArchives
                      .find(yearData => yearData.year === selectedYear)
                      ?.months.find(monthData => monthData.month === selectedMonth)
                      ?.volumes.map((volume) => (
                        <Card 
                          key={volume.id}
                          className="hover:shadow-md transition-shadow cursor-pointer"
                          onClick={() => handleVolumeClick(volume.id)}
                        >
                          <CardHeader>
                            <CardTitle className="text-lg">{volume.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="mb-4">{volume.description}</p>
                            <Badge variant="secondary">
                              {volume.papersCount} {volume.papersCount === 1 ? 'Paper' : 'Papers'}
                            </Badge>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Paper Detail Dialog */}
      {selectedPaper && (
        <Dialog open={!!selectedPaper} onOpenChange={(open) => !open && setSelectedPaper(null)}>
          <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-hidden p-0">
            <DialogHeader className="px-6 pt-6 pb-2">
              <DialogTitle className="text-2xl font-serif">{selectedPaper.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedPaper.keywords.map((keyword, index) => (
                    <Badge key={index} variant="outline" className="bg-research-blue/5 dark:bg-research-blue/10">
                      {keyword}
                    </Badge>
                  ))}
                </div>
                <div className="mt-2 space-y-1">
                  {selectedPaper.authors.map((author, index) => (
                    <div key={index} className="flex items-center space-x-1">
                      <span className="font-medium">{author.name}</span>
                      {author.isCorresponding && <span className="text-research-blue">*</span>}
                      <span className="text-slate-500 dark:text-slate-400">({author.affiliation})</span>
                    </div>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            
            <ScrollArea className="h-[calc(90vh-12rem)]">
              <div className="px-6">
                <Tabs defaultValue="abstract" className="w-full">
                  <TabsList className="grid grid-cols-3 w-full mb-4">
                    <TabsTrigger value="abstract">Abstract</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="references">References</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="abstract">
                    {selectedPaper.imageUrl && (
                      <div className="rounded-xl overflow-hidden mb-4">
                        <img 
                          src={selectedPaper.imageUrl} 
                          alt={selectedPaper.title} 
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold mb-3">Abstract</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {selectedPaper.abstract}
                    </p>
                    {selectedPaper.funding && (
                      <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <h3 className="font-medium mb-1">Funding</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{selectedPaper.funding}</p>
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="details">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium text-research-blue dark:text-research-teal">Publication Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                          <div>
                            <span className="text-sm font-medium">Publication Date:</span>
                            <p className="text-slate-600 dark:text-slate-400">{selectedPaper.publicationDate}</p>
                          </div>
                          <div>
                            <span className="text-sm font-medium">DOI:</span>
                            <p className="text-slate-600 dark:text-slate-400">{selectedPaper.doi}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-research-blue dark:text-research-teal">Authors & Affiliations</h3>
                        <div className="space-y-4 mt-2">
                          {selectedPaper.authors.map((author, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <Avatar className="h-10 w-10">
                                <img src={`https://i.pravatar.cc/150?img=${70 + index}`} alt={author.name} />
                              </Avatar>
                              <div>
                                <p className="font-medium">{author.name}{author.isCorresponding && " (Corresponding Author)"}</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{author.affiliation}</p>
                                <p className="text-sm text-slate-500 dark:text-slate-500">{author.email}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-research-blue dark:text-research-teal">Article Statistics</h3>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                          <div className="bg-slate-50 dark:bg-slate-700/30 p-3 rounded-lg text-center">
                            <span className="block text-sm font-medium">Views</span>
                            <span className="block text-xl">{selectedPaper.views}</span>
                          </div>
                          <div className="bg-slate-50 dark:bg-slate-700/30 p-3 rounded-lg text-center">
                            <span className="block text-sm font-medium">Downloads</span>
                            <span className="block text-xl">{selectedPaper.downloads}</span>
                          </div>
                          <div className="bg-slate-50 dark:bg-slate-700/30 p-3 rounded-lg text-center">
                            <span className="block text-sm font-medium">Citations</span>
                            <span className="block text-xl">{selectedPaper.citations}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="references">
                    <h3 className="text-xl font-semibold mb-3">References</h3>
                    <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
                      {selectedPaper.references.map((ref, index) => (
                        <li key={index} className="pl-2">{ref}</li>
                      ))}
                    </ol>
                  </TabsContent>
                </Tabs>
              </div>
            </ScrollArea>
            
            <div className="flex justify-between items-center border-t p-4">
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" onClick={() => setShowShare(!showShare)} className="relative">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                  
                  {showShare && (
                    <div className="absolute bottom-full left-0 mb-2 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-10">
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200">
                          <Facebook className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-sky-100 text-sky-600 hover:bg-sky-200">
                          <Twitter className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-red-100 text-red-600 hover:bg-red-200">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </Button>
                <Button size="sm" variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Full Text
                </Button>
              </div>
              <Button size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </Layout>
  );
}

type VolumeDetailProps = {
  volumeId: string;
  archiveData: ArchiveYear[];
  papers: typeof papersMockData;
  onPaperClick: (paper: typeof papersMockData[0]) => void;
};

function VolumeDetail({ volumeId, archiveData, papers, onPaperClick }: VolumeDetailProps) {
  const [searchPaper, setSearchPaper] = useState("");
  
  // Find volume information
  let volumeInfo = {
    id: "",
    title: "",
    description: "",
    month: "",
    year: 0
  };
  
  for (const yearData of archiveData) {
    for (const monthData of yearData.months) {
      const volume = monthData.volumes.find(v => v.id === volumeId);
      if (volume) {
        volumeInfo = {
          ...volume,
          month: monthData.month,
          year: yearData.year
        };
        break;
      }
    }
    if (volumeInfo.id) break;
  }
  
  // Filter papers based on volume and search term
  const filteredPapers = papers
    .filter(paper => paper.volumeId === volumeId)
    .filter(paper => 
      searchPaper === "" || 
      paper.title.toLowerCase().includes(searchPaper.toLowerCase()) ||
      paper.authors.some(author => 
        author.name.toLowerCase().includes(searchPaper.toLowerCase()) ||
        author.affiliation.toLowerCase().includes(searchPaper.toLowerCase())
      ) ||
      paper.keywords.some(keyword => keyword.toLowerCase().includes(searchPaper.toLowerCase()))
    );

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-research-blue dark:text-research-teal">
          {volumeInfo.title}
        </h2>
        <div className="flex items-center space-x-2 mt-2">
          <CalendarIcon className="h-4 w-4 text-slate-500" />
          <span className="text-slate-600 dark:text-slate-400">
            {volumeInfo.month} {volumeInfo.year}
          </span>
        </div>
        <p className="mt-2 text-lg">{volumeInfo.description}</p>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input
          placeholder="Search papers by title, author, or keyword..."
          className="pl-10"
          value={searchPaper}
          onChange={(e) => setSearchPaper(e.target.value)}
        />
      </div>

      <div className="space-y-6">
        {filteredPapers.length === 0 ? (
          <p className="text-center py-12 text-slate-500 dark:text-slate-400">No papers found matching your search criteria.</p>
        ) : (
          filteredPapers.map(paper => (
            <Card key={paper.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer" onClick={() => onPaperClick(paper)}>
              <div className="md:flex">
                {paper.imageUrl && (
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <img 
                      src={paper.imageUrl} 
                      alt={paper.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className={`${paper.imageUrl ? 'md:w-2/3' : 'w-full'}`}>
                  <CardHeader>
                    <CardTitle className="text-xl hover:text-research-blue dark:hover:text-research-teal transition-colors">
                      {paper.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 dark:text-slate-300">
                      {paper.authors.map(a => a.name).join(", ")}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3">{paper.abstract}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {paper.keywords.map((keyword, index) => (
                        <Badge key={index} variant="outline">{keyword}</Badge>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap justify-between text-sm text-slate-500 dark:text-slate-400">
                      <span>Published: {paper.publicationDate}</span>
                      <span>DOI: {paper.doi}</span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2">
                      <div className="flex space-x-4">
                        <div className="flex items-center text-slate-500 dark:text-slate-400">
                          <Eye className="h-4 w-4 mr-1" />
                          <span>{paper.views}</span>
                        </div>
                        <div className="flex items-center text-slate-500 dark:text-slate-400">
                          <Download className="h-4 w-4 mr-1" />
                          <span>{paper.downloads}</span>
                        </div>
                        <div className="flex items-center text-slate-500 dark:text-slate-400">
                          <BookOpen className="h-4 w-4 mr-1" />
                          <span>{paper.citations}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
