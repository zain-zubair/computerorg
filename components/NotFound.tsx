import Link from 'next/link';

interface NotFoundProps {
  learn?: boolean;
  test?: boolean;
  calc?: boolean;
}

const NotFound = ({ learn, test, calc }: NotFoundProps) => {
  const type = learn
    ? 'learn topic'
    : test
    ? 'test'
    : calc
    ? 'calculator'
    : 'page';

  return (
    <div className="flex justify-center p-6">
      <p className="text-center">
        The {type} you are looking for does not exist. <br />
        Please return back to our{' '}
        {type === 'learn topic' ? type.slice(0, 4) : type} page{' '}
        <Link href={'/calculator'} className="text-Green underline">
          here
        </Link>
        .
      </p>
    </div>
  );
};

export default NotFound;
