import { getNameFromSlug, getCalcFromSlug } from '@/utils/test';
import Link from 'next/link';

export default function Calculator({
  params,
}: {
  params: { calculator: string };
}) {
  const title = getNameFromSlug(params.calculator) || 'Calculator';

  return (
    <main className="flex min-h-screen flex-col p-6">
      <header className="items-center flex flex-col justify-center">
        <h1 className="text-2xl ">{title}</h1>
        <h2>Confirm your answers and feel at ease</h2>
      </header>

      {getCalcFromSlug(params.calculator) || (
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
      )}
    </main>
  );
}
