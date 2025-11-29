import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const Books = () => {
  const [books, setBooks] = useState([]);

 useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const res = await axios.get(`${apiUrl}/books`);
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
}, []);
 // Delete অংশটুকু আপডেট করো
const handleDelete = async (id) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      await axios.delete(`${apiUrl}/books/${id}`);
      setBooks(books.filter((book) => book.id !== id));
    } catch (err) {
      console.log(err);
    }
};

  return (
    <div className="container mx-auto py-10 px-4 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Available Books</h1>
      
      {books.length === 0 ? (
          <p className="text-center text-gray-500">No books found. Please add some.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
            <div key={book.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col">
                <div className="h-64 bg-gray-200 w-full overflow-hidden">
                    {book.cover ? (
                        <img src={book.cover} alt={book.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
                    )}
                </div>
                <div className="p-6 flex-grow">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{book.title}</h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{book.desc}</p>
                    <span className="text-2xl font-bold text-teal-600">${book.price}</span>
                </div>
                <div className="p-6 pt-0 flex gap-4 mt-auto">
                    <button 
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition" 
                        onClick={() => handleDelete(book.id)}
                    >
                        Delete
                    </button>
                    <Link 
                        to={`/update/${book.id}`} 
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition text-center"
                    >
                        Update
                    </Link>
                </div>
            </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Books;