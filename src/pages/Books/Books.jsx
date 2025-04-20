import React, { useEffect, useState } from 'react';

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json'
    )
      .then((response) => response.json())
      .then((data) => {
        setAllBooks(data);
      });
  }, []);

  return (
    <div className="mb-16">
      <h1 className="text-2xl font-worksans font-bold text-center">
        Books List
      </h1>
    </div>
  );
};

export default Books;
