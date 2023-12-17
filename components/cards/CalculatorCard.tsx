import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

interface CalculatorProps {
  title: string;
  image: StaticImageData;
  description: string;
  link: string;
}

const CalculatorCard: React.FC<CalculatorProps> = ({
  title,
  image,
  description,
  link,
}) => {
  return (
    <Link href={link}>
      <div className="text-center group">
        <div className="p-4">
          <h2 className="text-lg font-bold mb-1 text-center group-hover:text-Green duration-300 transition-colors">
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

export default CalculatorCard;
