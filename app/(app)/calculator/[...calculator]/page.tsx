import Header from '@/components/Header';
import NotFound from '@/components/NotFound';
import { getItemsFromSlug } from '@/utils/test';
import Link from 'next/link';

export default function Calculator({
  params,
}: {
  params: { calculator: string };
}) {
  const { title, calc } = getItemsFromSlug(params.calculator);

  return (
    <main className="flex min-h-screen flex-col p-6">
      <Header main={title || 'Calculator'} sub="" />
      {calc || <NotFound calc />}
    </main>
  );
}
