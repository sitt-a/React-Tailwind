import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "./constants";

const ActiveSlider = () => {
    return (
        <div className="flex items-center justify-center flex-col h-[500px] bg-zinc-300  lg:mt-20 pt-12">
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                autoplay={{
                    delay: 2000,
                }}
                className="max-w-[90%] lg:max-w-[80%]"
            >
                {ServiceData.map((item) => (
                    <SwiperSlide key={item.title}>
                        <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6
                         py-8 h-[150px] w-[215px] lg:h-[280px] lg:w-[350px] overflow-hidden cursor-pointer">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${item.backgroundImage})` }}
                            />
                            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                            <div className="relative flex flex-col gap-3">

                                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                                <p className="lg:text-[18px]">{item.content} </p>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default ActiveSlider;