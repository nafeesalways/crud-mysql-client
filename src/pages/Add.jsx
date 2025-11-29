import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: "",
    cover: "",
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 const handleClick = async (e) => {
    e.preventDefault();
    try {
      // পরিবর্তন: Environment Variable ব্যবহার করা হলো
      const apiUrl = import.meta.env.VITE_API_URL;
      await axios.post(`${apiUrl}/books`, book);
      
      navigate("/books");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Add New Book</h1>
        <div className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Book title"
                name="title"
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
            />
            <textarea
                rows={4}
                placeholder="Book description"
                name="desc"
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
            />
            <input
                type="number"
                placeholder="Price"
                name="price"
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
            />
            <input
                type="text"
                placeholder="Cover Image URL"
                name="cover"
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
            />
            
            <button 
                onClick={handleClick}
                className="bg-teal-600 text-white py-3 rounded hover:bg-teal-700 transition font-bold mt-2"
            >
                Add Book
            </button>
            
            {error && <p className="text-red-500 text-center text-sm">Something went wrong!</p>}
            
            <Link to="/books" className="text-center text-teal-600 hover:underline mt-2">
                Back to Books
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Add;