import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: "",
    cover: "",
  });
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

 const bookId = location.pathname.split("/")[2];
const apiUrl = import.meta.env.VITE_API_URL; // URL ভেরিয়েবল

// Fetch existing data
useEffect(() => {
    const fetchBook = async () => {
        try {
            const res = await axios.get(`${apiUrl}/books/${bookId}`);
            setBook(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    fetchBook();
}, [apiUrl, bookId]);


  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

// Update function
const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${apiUrl}/books/${bookId}`, book);
      navigate("/books");
    } catch (err) {
      console.log(err);
      setError(true);
    }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Update Book</h1>
        <div className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Book title"
                name="title"
                value={book.title}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <textarea
                rows={4}
                placeholder="Book description"
                name="desc"
                value={book.desc}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input
                type="number"
                placeholder="Price"
                name="price"
                value={book.price}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input
                type="text"
                placeholder="Cover Image URL"
                name="cover"
                value={book.cover}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            
            <button 
                onClick={handleClick}
                className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition font-bold mt-2"
            >
                Update Book
            </button>
            
            {error && <p className="text-red-500 text-center text-sm">Something went wrong!</p>}
            
            <Link to="/books" className="text-center text-blue-600 hover:underline mt-2">
                Back to Books
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Update;