



// export const Header = () => {
//     return (
//         <div className="fixed top-0 left-0 w-full bg-blue-500 text-white py-2 px-5 z-10 flex items-center">
//             {/* Logo on the left */}
//             <a href="#" className="mr-auto">
//                 <img src="Ubi.png" alt="Logo" className="h-[70px] w-[70px]" />
//             </a>

//             {/* Links on the right */}
//             <div className="flex gap-[75px] items-center">
//                 <a href="#" className="hover:underline">Home</a>
//                 <a href="#" className="hover:underline">About</a>
//                 <a href="#" className="hover:underline">Contact Us</a>
//                 <a href="#" className="hover:underline flex items-center">
//                     <img
//                         src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
//                         alt="Cart"
//                         className="h-6 w-6"
//                     />
//                 </a>
//             </div>
//         </div>
//     );
// };






import { useSelector } from 'react-redux';
import { useState } from 'react';

export const Header = () => {
    const [showCart, setShowCart] = useState(false); // State to toggle cart visibility
    const cartItems = useSelector((state) => state.cart.items); // Access cart items from Redux

    // Calculate total quantity for the cart icon
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="fixed top-0 left-0 w-full bg-blue-500 text-white py-2 px-5 z-10 flex items-center">
            {/* Logo on the left */}
            <a href="#" className="mr-auto">
                <img src="Ubi.png" alt="Logo" className="h-[70px] w-[70px]" />
            </a>

            {/* Links on the right */}
            <div className="flex gap-[75px] items-center">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">About</a>
                <a href="#" className="hover:underline">Contact Us</a>
                <a
                    href="#"
                    className="hover:underline flex items-center relative"
                    onClick={() => setShowCart(!showCart)} // Toggle cart visibility
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
                        alt="Cart"
                        className="h-6 w-6"
                    />
                    {/* Display cart count */}
                    {totalQuantity > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
                            {totalQuantity}
                        </span>
                    )}
                </a>
            </div>

            {/* Cart Modal */}
            {showCart && (
                <div className="absolute top-14 right-5 bg-white text-black p-4 rounded shadow-lg w-72">
                    <h3 className="font-bold text-lg mb-2">Cart</h3>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index} className="flex items-center justify-between py-2 border-b">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="h-12 w-12 object-cover rounded"
                                    />
                                    <span className="text-sm">{item.alt}</span>
                                    <span className="text-sm">Qty: {item.quantity}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};
