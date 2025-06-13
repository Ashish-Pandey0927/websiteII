import React from 'react';

interface ReadMoreReadLessProps {
  isExpanded: boolean;
  toggleExpanded: () => void;
}

const ReadMoreReadLess = ({ isExpanded, toggleExpanded }: ReadMoreReadLessProps) => {
  return (
    <button
      onClick={toggleExpanded}
      className="text-yellow px-2 py-1 rounded-md shadow-sm transition-all duration-300 hover:bg-gray-700 hover:text-white"
    >
      {isExpanded ? "Read Less" : "Read More..."}
    </button>
  );
};

export default ReadMoreReadLess;

