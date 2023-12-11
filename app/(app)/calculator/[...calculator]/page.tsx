import { getItemsFromSlug } from '@/utils/test';
import Link from 'next/link';

export default function Calculator({
  params,
}: {
  params: { calculator: string };
}) {
  const { title, calc } = getItemsFromSlug(params.calculator);

  const notFound = (
    <div className="flex justify-center p-6">
      <p className="text-center">
        The calculator you are looking for does not exist. <br />
        Please return back to our calculator page{' '}
        <Link href={'/calculator'} className="text-blue-300">
          here
        </Link>
        .
      </p>
    </div>
  );

  return (
    <main className="flex min-h-screen flex-col p-6">
      <header className="items-center flex flex-col justify-center">
        <h1 className="text-2xl ">{title || 'Calculator'}</h1>
        <h2>Confirm your answers and feel at ease</h2>
      </header>

      {calc || notFound}
    </main>
  );
}
