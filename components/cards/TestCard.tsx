import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

interface TestProps {
  title: string;
  image: StaticImageData;
  description: string;
  link: string;
}

const TestCard: React.FC<TestProps> = ({ title, image, description, link }) => {
  return (
    <Link href={link}>
      <div className="bg-Navy-light rounded-lg shadow-lg overflow-hidden group">
        <Image
          className="border-Navy-light border-3 w-full h-48 object-cover"
          src={image}
          alt={title}
        />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-1 group-hover:text-Green duration-300 transition-colors">
            {title}
          </h2>
          <p className="opacity-50 text-base mb-1 group-hover:opacity-90 duration-300 transition-opacity">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TestCard;
