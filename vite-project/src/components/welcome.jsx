import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Welcome = () => {
    const [currentText, setCurrentText] = useState("");
    const [thanksText, setThanksText] = useState("");

    const text = "Welcome to the Home Page"; // Top animated text
    const thanksMessage = "Thanks for visiting the site"; // Bottom message

    // Animate Welcome Text
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index += 1;
            setCurrentText(text.slice(0, index));
            if (index === text.length) clearInterval(interval);
        }, 200);
        return () => clearInterval(interval);
    }, [text]);

    // Animate Thanks Message
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index += 1;
            setThanksText(thanksMessage.slice(0, index));
            if (index === thanksMessage.length) clearInterval(interval);
        }, 200);
        return () => clearInterval(interval);
    }, [thanksMessage]);

    return (
        <div className="w-full h-[100vh] bg-gray-100 flex flex-col justify-between items-center">
            {/* Top H1 */}
            <motion.h1
                className="text-3xl font-bold mt-5"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {currentText}
            </motion.h1>

            {/* Images */}
            <div className="flex flex-col items-center gap-5" style={{marginTop:"70px"}}>
                {/* Top Row: 3 Images */}
                <div className="flex gap-4">
                    <img src="img-4.avif" alt="Image 1" className="h-[60%] w-[50%] object-cover" />
                    <img src="img-5.avif" alt="Image 2" className="h-[60%] w-[50%] object-cover" />
                    <img src="img-6.jpg" alt="Image 3" className="h-[60%] w-[50%] object-cover" />
                </div>

                {/* Bottom Row: 3 Images */}
                <div className="flex gap-4">
                    <img src="img-7.avif" alt="Image 4" className="h-[60%] w-[50%] object-cover" />
                    <img src="img-8.webp" alt="Image 5" className="h-[60%] w-[50%] object-cover" />
                    <img src="img-9.avif" alt="Image 6" className="h-[60%] w-[50%] object-cover" />
                </div>
            </div>

            {/* Bottom Thanks Message */}
            <motion.h1
                className="text-xl font-semibold mb-5"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {thanksText}
            </motion.h1>
        </div>
    )
}