import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
  //   const [allBooks, setAllBooks] = useState([]);

  //   useEffect(() => {
  //     fetch(
  //       'https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json'
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setAllBooks(data);
  //       });
  //   }, []);

  //   const bookPromise = fetch(
  //     'https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json'
  //   ).then((response) => response.json());

  return (
    <div className="mb-16">
      <h1 className="text-2xl font-worksans font-bold text-center">
        Books List
      </h1>
      <Suspense
        fallback={<span className="loading loading-dots loading-md"></span>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10 font-worksans">
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
