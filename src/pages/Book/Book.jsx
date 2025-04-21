import React from 'react';
import { Star } from 'lucide-react';

const Book = ({ singleBook }) => {
  const { bookName, image, review, author, category, rating } = singleBook;
  console.log(singleBook);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img className="h-50 p-2" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>{review.length > 50 ? review.slice(0, 50) + '...' : review}</p>
        <p>
          By : <span className="font-bold font-worksans">{author}</span>
        </p>
        <div className="border border-dashed border-gray-200"></div>
        <div className="flex justify-between items-center">
          <div>{category}</div>
          <div className="flex items-center gap-3.5">
            <div>{rating}</div>
            <div>
              <Star className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
