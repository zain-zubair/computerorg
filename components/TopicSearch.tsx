'use client';

import { useState } from 'react';
import { learnTopics } from '@/content/learnCards';

const TopicList = () => {
  const [search, setSearch] = useState(''.toLowerCase());

  const filteredTopics = learnTopics.filter(
    (topic) =>
      topic.props.title.toLowerCase().includes(search) ||
      topic.props.description.toLowerCase().includes(search)
  );

  // TODO: Add estimated time for completion to card

  return (
    <div className="p-10 flex flex-col items-center focus:ring-none">
      <input
        className="px-3 py-1 mb-4 bg-Navy-light outline-none rounded-md shadow-lg hover:ring-1 focus:ring-2 ring-Slate transition-all duration-300"
        placeholder="Search topics..."
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredTopics.map((topic, index) => (
          <li
            key={index}
            className="bg-Navy-light rounded-lg shadow-lg overflow-hidden group col-span-1 md:col-span-1 lg:col-span-1"
          >
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
