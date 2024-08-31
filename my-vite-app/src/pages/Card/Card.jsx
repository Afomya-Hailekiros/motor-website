import React from 'react';
import { useOrder } from "../Context/OrderContext";
import { useNavigate } from 'react-router-dom';

const Card = ({ uploads }) => {
  const { addOrder } = useOrder();
  const navigate = useNavigate();

  const handleOrder = (upload) => {
    addOrder(upload);
    alert(`${upload.name} ordered successfully!`);
  };

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {uploads.map((upload, index) => (
        <div key={index} className="relative group w-96 h-96 overflow-hidden bg-white m-auto mt-36">
          {/* Make sure the image URL is correctly pointing to your backend */}
          <img 
            className="object-cover w-full h-full transform duration-700" 
            src={`http://localhost:7004/${upload.image}`} // Update the URL to your backend
            alt={upload.name} 
          />
          <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
          <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
            <div className="absolute w-full flex place-content-center">
              <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">{upload.name}</p>
            </div>
            <div className="absolute w-full flex place-content-center mt-20">
              <p className="font-sans text-center w-4/5 text-white mt-5">{upload.description}</p>
              <p className="font-sans text-center w-4/5 text-white mt-5">${upload.price}</p>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-5"
                onClick={() => handleOrder(upload)}
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Card;
