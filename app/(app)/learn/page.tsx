import TopicList from '@/components/TopicSearch';

export default function LearnHome() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <header className="items-center flex flex-col justify-center">
        <h1 className="text-2xl">Learn Computer Organization</h1>
        <h2>
          These are place holder topics at the moment. Expect the real learning
          modules soon!
        </h2>
      </header>
      <TopicList />
    </main>
  );
}
