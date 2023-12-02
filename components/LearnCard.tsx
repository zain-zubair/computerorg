import Link from 'next/link';

export interface TopicProps {
  title: string;
  description: string;
  link: string;
}

const LearnCard: React.FC<TopicProps> = ({ title, description, link }) => {
  return (
    <Link href={link}>
      <div className="text-center group">
        <div className="p-4">
          <h2 className="text-lg font-bold mb-1 text-center">{title}</h2>
          <p className="opacity-50 text-base mb-1 group-hover:opacity-90 duration-300 transition-opacity">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default LearnCard;
