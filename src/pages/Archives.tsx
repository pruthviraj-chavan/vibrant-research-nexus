
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Search, ChevronRight } from "lucide-react";

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
              <VolumeDetail volumeId={selectedVolume} archiveData={archivesMockData} />
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
    </Layout>
  );
}

type VolumeDetailProps = {
  volumeId: string;
  archiveData: ArchiveYear[];
};

// Mock paper data
const papersMockData = [
  {
    id: "p001",
    title: "Machine Learning Approaches for Climate Change Prediction",
    authors: "Sarah Johnson, Michael Chen, David Lee",
    abstract: "This paper explores various machine learning techniques for predicting climate change patterns and their potential impact on global ecosystems...",
    keywords: ["machine learning", "climate change", "prediction models", "environmental science"],
    publicationDate: "November 15, 2023",
    doi: "10.1234/jsr.2023.001",
    volumeId: "v8-i11",
    citations: 12,
    downloads: 345,
    views: 1287,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: "p002",
    title: "Neural Network Architectures for Natural Language Processing",
    authors: "Alex Kumar, Emma Williams, James Taylor",
    abstract: "A comprehensive analysis of modern neural network architectures and their applications in natural language processing tasks...",
    keywords: ["neural networks", "NLP", "deep learning", "transformer models"],
    publicationDate: "November 20, 2023",
    doi: "10.1234/jsr.2023.002",
    volumeId: "v8-i11",
    citations: 8,
    downloads: 267,
    views: 943,
    imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
  },
  {
    id: "p003",
    title: "Advancements in Quantum Computing: A Systematic Review",
    authors: "Linda Zhang, Robert Miller, Sophia Garcia",
    abstract: "This systematic review examines recent advancements in quantum computing hardware and algorithms, highlighting key breakthroughs and challenges...",
    keywords: ["quantum computing", "qubits", "quantum algorithms", "quantum supremacy"],
    publicationDate: "October 5, 2023",
    doi: "10.1234/jsr.2023.003",
    volumeId: "v8-i10",
    citations: 15,
    downloads: 412,
    views: 1568,
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  }
];

function VolumeDetail({ volumeId, archiveData }: VolumeDetailProps) {
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
  const papers = papersMockData
    .filter(paper => paper.volumeId === volumeId)
    .filter(paper => 
      searchPaper === "" || 
      paper.title.toLowerCase().includes(searchPaper.toLowerCase()) ||
      paper.authors.toLowerCase().includes(searchPaper.toLowerCase()) ||
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
        {papers.map(paper => (
          <Card key={paper.id} className="overflow-hidden hover:shadow-md transition-shadow">
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
                    <a href={`/paper/${paper.id}`}>{paper.title}</a>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 dark:text-slate-300">{paper.authors}</p>
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
                  
                  <div className="flex space-x-4 pt-2">
                    <Button size="sm">View Paper</Button>
                    <Button size="sm" variant="outline">Download PDF</Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
