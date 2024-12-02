// export const Header = () => {
//     return (
//         <div className="fixed top-0 left-0 w-full bg-black text-white py-2 px-5 z-10">
//             {/* Logo on the left */}
//             <a href="">
//                 <img src="Ubi.png" alt="Logo" className="h-[70px] w-[70px]" />
//             </a>

//             {/* Links on the right */}
//             <div className="flex gap-[75px] ml-auto">
//                 <a href="" className="hover:underline">Home</a>
//                 <a href="" className="hover:underline">About</a>
//                 <a href="" className="hover:underline">Contact Us</a>
//             </div>
//         </div>
//     );
// };
export const Header = () => {
    return (
        <div className="fixed top-0 left-0 w-full bg-black text-white py-2 px-5 z-10 flex items-center">
            {/* Logo on the left */}
            <a href="" className="mr-auto">
                <img src="Ubi.png" alt="Logo" className="h-[70px] w-[70px]" />
            </a>

            {/* Links on the right */}
            <div className="flex gap-[75px]">
                <a href="" className="hover:underline">Home</a>
                <a href="" className="hover:underline">About</a>
                <a href="" className="hover:underline">Contact Us</a>
            </div>
        </div>
    );
};
