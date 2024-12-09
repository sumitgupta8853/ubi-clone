import { useSelector } from 'react-redux';

export const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <div className="space-y-4">
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 border p-4 rounded">
                            <img src={item.src} alt={item.alt} className="h-16 w-16 rounded object-cover" />
                            <div className="flex-1">
                                <h2 className="text-lg font-medium">{item.alt}</h2>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


// import { useSelector } from "react-redux";

// export const Cart = () => {
//   const cart = useSelector((state) => state.cart.items);

//   return (
//     <div className="mt-20 p-5">
//       <h1 className="text-2xl font-bold">Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cart.map((item, index) => (
//             <li key={index} className="border-b py-2">
//               <img
//                 src={item.src}
//                 alt={item.alt}
//                 className="inline-block h-16 w-16 mr-4"
//               />
//               {item.alt} - Quantity: {item.quantity}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };  

// import { useSelector } from "react-redux";

// export const Cart = () => {
//   const cart = useSelector((state) => state.cart.items);

//   return (
//     <div className="mt-20 p-5">
//       <h1 className="text-2xl font-bold">Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cart.map((item, index) => (
//             <li key={index} className="border-b py-2 flex items-center">
//               <img
//                 src={item.src}
//                 alt={item.alt}
//                 className="h-16 w-16 mr-4"
//               />
//               <span>{item.alt} - Quantity: {item.quantity}</span>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

