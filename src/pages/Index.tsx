
import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import RecentPapers from "@/components/home/RecentPapers";
import TrendingTopics from "@/components/home/TrendingTopics";
import JournalInfo from "@/components/home/JournalInfo";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <RecentPapers />
      <TrendingTopics />
      <JournalInfo />
    </Layout>
  );
};

export default Index;
