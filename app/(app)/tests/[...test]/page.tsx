import Link from 'next/link';
import Test from '@/components/test/Test';
import { filler, getItemsFromSlug, randomizeQuestions } from '@/utils/test';
import * as tests from '@/content/testExports';
import Header from '@/components/Header';
import NotFound from '@/components/NotFound';

export default function TestsHome({ params }: { params: { test: string } }) {
  const test: string = params.test;
  const questions = tests[test as keyof typeof tests] || filler;
  const randomizedSet = randomizeQuestions([...questions]);
  const { title } = getItemsFromSlug(params.test);

  return (
    <div className="flex min-h-screen flex-col p-6">
      <Header main={title || 'Test'} sub="" />

      {tests[test as keyof typeof tests] !== undefined ? (
        <Test test={test} questions={randomizedSet} />
      ) : (
        <NotFound test />
      )}
    </div>
  );
}
