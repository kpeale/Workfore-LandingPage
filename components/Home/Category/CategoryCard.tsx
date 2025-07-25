'use client';
import React from 'react';
import Tilt from 'react-parallax-tilt';

type Props = {
  category: {
    id: number;
    categoryName: string;
    openPositions: number;
    icon: React.JSX.Element;
  };
};

const CategoryCard = ({ category }: Props) => {
  return (
    <Tilt
      scale={1.5}
      transitionSpeed={500}
    >
      <div className='p-6 bg-gray-50 dark:bg-gray-900 shadow-md'>
        <div className='w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full mx-auto flex items-center justify-center flex-col'>
          {category.icon}
        </div>
        <h1 className='mt-6 text-center font-medium text-gray-800 dark:text-gray-200'>
          {category.categoryName}
        </h1>
        <p className='mt-2 text-gray-600 dark:text-gray-400 text-sm text-center'>
          ({category.openPositions} Open Positions )
        </p>
      </div>
    </Tilt>
  );
};

export default CategoryCard;