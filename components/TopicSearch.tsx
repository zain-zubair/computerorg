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

  return (
    <div className="p-10 flex flex-col items-center">
      <input
        className="px-3 py-1 font-mono outline-none border-b-2 border-white/25 hover:border-white/40 focus:border-white/80 mb-4"
        placeholder="Search topics..."
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredTopics.map((topic, index) => (
          <li
            key={index}
            className="bg-white/10 rounded-lg shadow-lg overflow-hidden group col-span-1 md:col-span-1 lg:col-span-1"
          >
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;

{
  /*
<input
    type="text"
    placeholder="Search topics..."
    onChange={(e) => setSearchTerm(e.target.value)}
    className="p-2 mb-4 border rounded bg-black interactive"
/>
  */
}
