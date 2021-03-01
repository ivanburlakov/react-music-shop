import * as React from 'react';
import CategoryCard from './CategoryCard';

const categoryData = [
  {
    link: '/guitars',
    title: 'Guitars',
    image: '/images/guitar1.jpg',
  },
  {
    link: '/basses',
    title: 'Basses',
    image: '/images/guitar2.jpg',
  },
  {
    link: '/pianos',
    title: 'Pianos',
    image: '/images/guitar3.jpg',
  },
  {
    link: '/drums',
    title: 'Drums',
    image: '/images/guitar4.jpg',
  },
  {
    link: '/bowed',
    title: 'Bowed',
    image: '/images/guitar5.jpg',
  },
  {
    link: '/other',
    title: 'Other',
    image: '/images/guitar6.jpg',
  },
];

const CategoryCardList = () => (
  <ul className="category-section">
    {categoryData.map(category => (
      <CategoryCard
        title={category.title}
        link={category.link}
        image={category.image}
      />
    ))}
  </ul>
);

export default CategoryCardList;
