
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  FileText,
  Users,
  Calendar,
  BookOpen,
  Eye,
  ExternalLink
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock paper data
const paperDetail = {
  id: "p001",
  title: "Machine Learning Approaches for Climate Change Prediction",
  authors: [
    { name: "Sarah Johnson", affiliation: "Stanford University", email: "sjohnson@stanford.edu", isCorresponding: true },
    { name: "Michael Chen", affiliation: "MIT", email: "mchen@mit.edu", isCorresponding: false },
    { name: "David Lee", affiliation: "University of California, Berkeley", email: "dlee@berkeley.edu", isCorresponding: false }
  ],
  abstract: "This paper explores various machine learning techniques for predicting climate change patterns and their potential impact on global ecosystems. Using a combination of supervised and unsupervised learning methods, we analyze large-scale climate data from the past century to identify patterns and make predictions about future climate scenarios. Our results indicate that ensemble methods combining multiple models achieve the highest accuracy in predicting temperature and precipitation changes. Furthermore, we demonstrate how these predictions can be used to assess potential impacts on biodiversity and agriculture in vulnerable regions.",
  keywords: ["machine learning", "climate change", "prediction models", "environmental science", "data science"],
  publicationDate: "November 15, 2023",
  doi: "10.1234/jsr.2023.001",
  volume: "Volume 8, Issue 11",
  publisher: "VibrantResearch Publishing",
  citations: 12,
  downloads: 345,
  views: 1287,
  imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  funding: "This research was supported by the National Science Foundation (Grant #NSF-12345) and the Climate Research Initiative.",
  sections: [
    {
      title: "Introduction",
      content: "Climate change represents one of the most significant challenges of our time, with far-reaching implications for ecosystems, economies, and human societies worldwide. Accurate prediction of climate patterns is essential for developing effective mitigation and adaptation strategies. Traditional climate models, while sophisticated, often struggle with incorporating complex feedback mechanisms and regional variations.\n\nIn recent years, machine learning (ML) has emerged as a powerful tool for analyzing complex, high-dimensional data. ML approaches offer several advantages for climate prediction, including the ability to identify non-linear relationships, handle large datasets efficiently, and continuously improve predictions as new data becomes available. This paper explores how various ML techniques can be applied to climate data to enhance prediction accuracy and provide insights into future climate scenarios."
    },
    {
      title: "Methods",
      content: "We collected climate data from multiple sources, including the Global Historical Climatology Network, satellite observations, and ocean temperature records spanning the period from 1900 to 2022. The dataset includes temperature, precipitation, sea level, atmospheric CO2 concentrations, and other relevant climate variables at monthly intervals.\n\nData preprocessing involved handling missing values through multiple imputation, normalizing variables to account for different measurement scales, and applying principal component analysis to reduce dimensionality while preserving key information. We divided the dataset into training (1900-2000), validation (2000-2010), and testing (2010-2022) periods.\n\nWe implemented and compared several machine learning algorithms, including Random Forests, Gradient Boosting Machines, Deep Neural Networks, and Long Short-Term Memory (LSTM) networks. For each model, hyperparameters were optimized using grid search with cross-validation on the training set. We also developed ensemble methods that combine predictions from multiple models to improve overall accuracy."
    },
    {
      title: "Results",
      content: "Our analysis indicates that ensemble methods consistently outperformed individual models in predicting both temperature and precipitation patterns. The best-performing ensemble, combining gradient boosting with LSTM networks, achieved a mean absolute error of 0.24°C for global temperature predictions and 15.8mm for monthly precipitation.\n\nRegional analysis revealed varying model performance, with predictions for equatorial regions showing higher accuracy than polar regions. This discrepancy likely results from the greater climate variability and fewer historical observations in polar areas.\n\nTemperature predictions for the next 50 years, under different emission scenarios, show an expected global increase of 1.8-3.2°C, with more pronounced warming in Arctic regions and continental interiors. Precipitation patterns show greater spatial heterogeneity, with increased rainfall in some regions and severe drought conditions in others."
    },
    {
      title: "Discussion",
      content: "The superior performance of ensemble methods in our study highlights the value of combining diverse modeling approaches when dealing with complex climate systems. Each model captures different aspects of climate dynamics, and their integration provides more robust predictions.\n\nOur findings regarding regional differences in prediction accuracy emphasize the need for more comprehensive data collection in underrepresented areas, particularly in polar regions and developing countries with limited monitoring capabilities.\n\nThe projected climate changes have significant implications for biodiversity, agriculture, and human settlements. Areas projected to experience the most dramatic changes will require targeted adaptation strategies. Furthermore, our results reinforce the urgency of emissions reduction, as scenarios with lower emissions consistently show less severe climate impacts across all models."
    },
    {
      title: "Conclusion",
      content: "This study demonstrates the potential of machine learning approaches to enhance climate change prediction, providing valuable insights for environmental planning and policy development. By combining multiple ML techniques and leveraging diverse data sources, we can achieve more accurate and nuanced projections of future climate conditions.\n\nFuture work should focus on incorporating additional variables such as ocean circulation patterns and land use changes, as well as developing more region-specific models to address local climate dynamics. We also recommend further research into interpretable machine learning methods that can help explain the factors driving predicted climate changes, thereby providing more actionable information for stakeholders and policymakers."
    }
  ],
  references: [
    "Johnson, A., & Smith, B. (2020). Climate data analysis using machine learning. Journal of Climate Science, 45(3), 234-251.",
    "Chen, L., Wang, R., & Davis, T. (2021). Deep learning applications in environmental modeling. Environmental Data Science, 12(2), 189-205.",
    "Williams, E., & Brown, J. (2019). Statistical approaches to temperature prediction. International Journal of Climatology, 38(1), 78-94.",
    "Anderson, K., & Miller, S. (2022). Ensemble methods for improved climate forecasting. Nature Climate Change, 12, 482-491.",
    "Taylor, P., & Garcia, M. (2018). Regional climate modeling: Challenges and opportunities. Climate Dynamics, 50(4), 935-952.",
    "Lopez, R., & Kohl, T. (2021). Machine learning for precipitation forecasting: A systematic review. Weather and Forecasting, 36(2), 417-430.",
    "Martin, D., & Wilson, J. (2020). Climate change impacts on agricultural systems. Global Food Security, 24, 100350.",
    "Thompson, S., & Lee, C. (2019). Long-term climate prediction using recurrent neural networks. Geophysical Research Letters, 46(13), 7683-7691.",
    "White, R., & Johnson, K. (2022). Explainable AI for climate science. Scientific Reports, 12, 8765.",
    "Zhang, H., & Moore, G. (2021). Uncertainty quantification in machine learning-based climate models. Climate Informatics, 9(3), 301-315."
  ]
};

export default function PaperDetail() {
  const { paperId } = useParams();
  const [showShare, setShowShare] = useState(false);
  
  // In a real application, we would fetch the paper data based on the paperId
  // For now, we'll just use our mock data
  const paper = paperDetail;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="space-y-8">
          {/* Paper header */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight text-slate-900 dark:text-white">
              {paper.title}
            </h1>
            
            <div className="flex flex-wrap gap-2">
              {paper.keywords.map((keyword, index) => (
                <Badge key={index} variant="outline" className="bg-research-blue/5 dark:bg-research-blue/10">
                  {keyword}
                </Badge>
              ))}
            </div>
            
            <div className="space-y-2">
              {paper.authors.map((author, index) => (
                <div key={index} className="flex items-center space-x-1">
                  <span className="font-medium">{author.name}</span>
                  {author.isCorresponding && <span className="text-research-blue">*</span>}
                  <span className="text-slate-500 dark:text-slate-400">({author.affiliation})</span>
                </div>
              ))}
              <p className="text-sm text-slate-500 dark:text-slate-400">
                * Corresponding author: {paper.authors.find(a => a.isCorresponding)?.email}
              </p>
            </div>
          </div>
          
          {/* Paper stats and actions */}
          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
            <Card className="md:flex-1">
              <CardContent className="p-4 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-6">
                  <div className="flex flex-col items-center">
                    <Eye className="h-5 w-5 text-slate-400 mb-1" />
                    <span className="text-lg font-semibold">{paper.views}</span>
                    <span className="text-xs text-slate-500">Views</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Download className="h-5 w-5 text-slate-400 mb-1" />
                    <span className="text-lg font-semibold">{paper.downloads}</span>
                    <span className="text-xs text-slate-500">Downloads</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <BookOpen className="h-5 w-5 text-slate-400 mb-1" />
                    <span className="text-lg font-semibold">{paper.citations}</span>
                    <span className="text-xs text-slate-500">Citations</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button className="flex-1 md:flex-none">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                  <div className="relative">
                    <Button 
                      variant="outline" 
                      className="flex-1 md:flex-none"
                      onClick={() => setShowShare(!showShare)}
                    >
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                    {showShare && (
                      <div className="absolute right-0 mt-2 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-10">
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
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Paper image */}
          {paper.imageUrl && (
            <div className="rounded-xl overflow-hidden shadow-md">
              <img 
                src={paper.imageUrl} 
                alt={paper.title} 
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          )}
          
          {/* Paper metadata */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-slate-500" />
              <span className="text-slate-500 dark:text-slate-400">Published:</span>
              <span>{paper.publicationDate}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4 text-slate-500" />
              <span className="text-slate-500 dark:text-slate-400">Volume:</span>
              <span>{paper.volume}</span>
            </div>
            <div className="flex items-center space-x-2">
              <ExternalLink className="h-4 w-4 text-slate-500" />
              <span className="text-slate-500 dark:text-slate-400">DOI:</span>
              <a href={`https://doi.org/${paper.doi}`} className="text-research-blue hover:underline" target="_blank" rel="noopener noreferrer">
                {paper.doi}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-slate-500" />
              <span className="text-slate-500 dark:text-slate-400">Publisher:</span>
              <span>{paper.publisher}</span>
            </div>
          </div>
          
          {/* Paper content tabs */}
          <Tabs defaultValue="abstract" className="w-full">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="abstract">Abstract</TabsTrigger>
              <TabsTrigger value="fulltext">Full Text</TabsTrigger>
              <TabsTrigger value="references">References</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>
            
            <TabsContent value="abstract" className="p-4 bg-white dark:bg-slate-800 rounded-lg mt-4">
              <h2 className="text-xl font-semibold mb-3">Abstract</h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {paper.abstract}
              </p>
              {paper.funding && (
                <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <h3 className="font-medium mb-1">Funding</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{paper.funding}</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="fulltext" className="p-4 bg-white dark:bg-slate-800 rounded-lg mt-4">
              <div className="space-y-6">
                {paper.sections.map((section, index) => (
                  <div key={index} className="space-y-3">
                    <h2 className="text-xl font-semibold text-research-blue dark:text-research-teal">
                      {section.title}
                    </h2>
                    <div className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="references" className="p-4 bg-white dark:bg-slate-800 rounded-lg mt-4">
              <h2 className="text-xl font-semibold mb-3">References</h2>
              <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
                {paper.references.map((ref, index) => (
                  <li key={index} className="pl-2">{ref}</li>
                ))}
              </ol>
            </TabsContent>
            
            <TabsContent value="details" className="p-4 bg-white dark:bg-slate-800 rounded-lg mt-4">
              <h2 className="text-xl font-semibold mb-3">Article Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-research-blue dark:text-research-teal">Authors & Affiliations</h3>
                  <div className="space-y-2 mt-2">
                    {paper.authors.map((author, index) => (
                      <div key={index} className="flex flex-col">
                        <span className="font-medium">{author.name}{author.isCorresponding && " (Corresponding Author)"}</span>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{author.affiliation}</span>
                        <span className="text-sm text-slate-500 dark:text-slate-500">{author.email}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-research-blue dark:text-research-teal">Publication Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    <div>
                      <span className="text-sm font-medium">Publication Date:</span>
                      <p className="text-slate-600 dark:text-slate-400">{paper.publicationDate}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Volume:</span>
                      <p className="text-slate-600 dark:text-slate-400">{paper.volume}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Publisher:</span>
                      <p className="text-slate-600 dark:text-slate-400">{paper.publisher}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium">DOI:</span>
                      <p className="text-slate-600 dark:text-slate-400">{paper.doi}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-research-blue dark:text-research-teal">Keywords</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {paper.keywords.map((keyword, index) => (
                      <Badge key={index} variant="outline">{keyword}</Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-research-blue dark:text-research-teal">Funding Information</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">{paper.funding}</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-research-blue dark:text-research-teal">Article Statistics</h3>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div className="bg-slate-50 dark:bg-slate-700/30 p-3 rounded-lg text-center">
                      <span className="block text-sm font-medium">Views</span>
                      <span className="block text-xl">{paper.views}</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700/30 p-3 rounded-lg text-center">
                      <span className="block text-sm font-medium">Downloads</span>
                      <span className="block text-xl">{paper.downloads}</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700/30 p-3 rounded-lg text-center">
                      <span className="block text-sm font-medium">Citations</span>
                      <span className="block text-xl">{paper.citations}</span>
                    </div>
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
