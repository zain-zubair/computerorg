import Link from 'next/link';
import Test from '@/components/Test';
import { filler } from '@/utils/test';
import * as tests from '@/content/testExports';

export default function TestsHome({ params }: { params: { test: string } }) {
  const test: string = params.test;
  const questions = tests[test as keyof typeof tests] || filler;

  return tests[test as keyof typeof tests] !== undefined ? (
    <div className="flex min-h-screen flex-col p-6">
      <header className="items-center flex flex-col justify-center">
        <h1 className="text-2xl ">Practice Tests</h1>
      </header>

      <Test test={test} questions={questions} />
    </div>
  ) : (
    <div className="flex justify-center p-6">
      <p className="text-center">
        The test you are looking for does not exist.
        <br />
        Please return back to our test page
        <Link href={'/tests'} className="text-blue-300">
          {' '}
          here
        </Link>
        .
      </p>
    </div>
  );
}
