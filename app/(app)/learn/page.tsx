import Header from '@/components/Header';
import TopicList from '@/components/TopicSearch';

export default function LearnHome() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Header
        main="Learn Computer Organization"
        sub="These are place holder topics at the moment. Expect the real learning
          modules soon!"
      />
      <TopicList />
    </main>
  );
}
