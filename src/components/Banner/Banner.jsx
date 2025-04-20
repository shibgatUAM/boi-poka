import React from 'react';
import bookImage from '../../assets/images/book.png';

const Banner = () => {
  return (
    <div className="hero bg-base-200 h-[554px] mb-20 rounded-3xl px-8">
      <div className="hero-content flex-col lg:flex-row-reverse gap-30">
        <img src={bookImage} className="max-w-sm" />
        <div>
          <h1 className="text-5xl font-bold mb-8 font-worksans font-stretch-extra-condensed tracking-wider">
            Books to freshen up <br></br> your bookshelf
          </h1>
          <button className="btn font-worksans text-base-100 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-l">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
