// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "./redux/Cartslice";

// export const Items = () => {
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart.items);

//   const images = [
//     { src: "pop-1.jpg", alt: "Image 1" },
//     { src: "pop-2.avif", alt: "Image 2" },
//     { src: "pop-3.jpeg", alt: "Image 3" },
//     { src: "pop-4.jpeg", alt: "Image 4" },
//     { src: "pop-5.jpg", alt: "Image 5" },
//     { src: "pop-6.avif", alt: "Image 6" },
//   ];

//   return (
//     <div className="w-full h-auto bg-orange-500 p-8">
//       <div className="grid grid-cols-3 gap-7">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center border border-gray-400 rounded-md p-4 bg-white"
//           >
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="w-full h-[250px] object-cover rounded-md mb-4"
//             />
//             <button
//               onClick={() => dispatch(addToCart(image))}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 bg-white p-4 rounded shadow-md">
//         <h2 className="text-xl font-bold">Cart</h2>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <ul>
//             {cart.map((item, index) => (
//               <li key={index} className="py-2 border-b flex items-center gap-4">
//                 <img src={item.src} alt={item.alt} className="w-20 h-20" />
//                 <div>
//                   <p>{item.alt}</p>
//                   <p>Quantity: {item.quantity}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };








import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/Cartslice';

export const Items = () => {
    const dispatch = useDispatch();

    const images = [
        { src: 'pop-1.jpg', alt: 'Image 1' },
        { src: 'pop-2.avif', alt: 'Image 2' },
        { src: 'pop-3.jpeg', alt: 'Image 3' },
        { src: 'pop-4.jpeg', alt: 'Image 4' },
        { src: 'pop-5.jpg', alt: 'Image 5' },
        { src: 'pop-6.avif', alt: 'Image 6' },
    ];

    return (
        <div className="w-full h-auto bg-orange-500 p-8">
            <div className="grid grid-cols-3 gap-7">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center border border-gray-400 rounded-md p-4 bg-white"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-[250px] object-cover rounded-md mb-4"
                        />
                        <button
                            onClick={() => dispatch(addToCart(image))}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
