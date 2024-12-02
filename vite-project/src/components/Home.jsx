import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Home = () => {
    return (
        <div className="w-full mx-auto mt-[80px]"> {/* Push content down to prevent overlap */}
            <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false} showStatus={false}>
                <div>
                    <img src="img-1.webp" alt="Image 1" className="w-full h-full object-cover" />
                </div>
                <div>
                    <img src="img-2.webp" alt="Image 2" className="w-full h-full object-cover" />
                </div>
                <div>
                    <img src="img-3.jpg" alt="Image 3" className="w-full h-full object-cover" />
                </div>
            </Carousel>
        </div>
    );
};
