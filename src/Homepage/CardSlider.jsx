import React, { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import pinkcard from "../assets/pinkcard.png";
import greenCard from "../assets/greencard.png";
import blackcard from "../assets/blackcard.png";
import bluecard from "../assets/bluecard.png";
import skybluecard from "../assets/skybluecard.png";
import UserCounter from "./UserCounter";

const cardData = [
  { title: "Coupon Card", imageUrl: pinkcard, price: "₹499", crossPrice: "₹1299" },
  { title: "Safiss Card", imageUrl: greenCard, price: "₹499", crossPrice: "₹2500" },
  { title: "Business Bazar", imageUrl: blackcard, price: "₹699", crossPrice: "₹1999" },
  { title: "Ambition X Card", imageUrl: bluecard, price: "₹499", crossPrice: "₹999" },
  { title: "Health Card", imageUrl: skybluecard, price: "₹999", crossPrice: "₹1999" },
];

const featuresList = [
  ["Near By Shopping", "Find Local Deals", "Direct Retail Shopping", "Pay with our App", "Earn Loyalty points", "Pay with loyalty points", "Win Exclusive Prizes Every month", "Expense tracker", "Get free insurance"],
  ["Create Job Profile", "Freelance Jobs", "Build Your own E-Company", "Create teams", "Get Leads", "Apply for jobs", "Get hired Directly", "Build Professional Score"],
  ["Create Your business Profile", "Connect with Other business", "Trust Score Building", "Pay your Business debits directly from here", "Get orders directly from Customers", "Business Loans", "Advertisements", "Business Insurance"],
  ["Create health ID with ABHA", "Online doctor consultation", "Health Record maintenance", "Medical Loans", "Dedicated Manager for your family", "Treatment and consultation on your door Step", "Large Discounts", "Connect with Any hospital & Doctor", "Health insurance"],
  ["Create Student Profile", "Connect with Community", "Career Guidance", "Free Certification Courses", "Skill Up", "Schools/Colleges/Training Institutions", "Mentors Consultation", "Set your career Path", "Internships", "Start Earning while Studying"],
];

const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CardSlider = () => {
  const [activeCard, setActiveCard] = useState(0);
  const activeFeatures = useMemo(() => featuresList[activeCard] || [], [activeCard]);

  return (
    <div className="py-10 max-w-5xl mx-auto flex flex-col items-center mt-20 md:mt-0 ">
      <div className="w-full flex flex-col md:flex-row items-center gap-6">
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={15}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop={true}
            onSlideChange={(swiper) => setActiveCard(swiper.realIndex)}
            className="p-3"
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 2 },
            }}
          >
            {cardData.map((card, index) => {
              const isActive = index === activeCard;
              const cardStyle = isActive ? "scale-105 opacity-100" : "scale-95 opacity-60";
              return (
                <SwiperSlide key={index}>
                  <div className={`relative p-4 flex flex-col items-center transition-all duration-500 ease-in-out ${cardStyle}`}>
                    <motion.div
                      variants={fadeRight}
                      initial="hidden"
                      animate={isActive ? "visible" : "hidden"}
                      className="absolute flex flex-col -left-2 top-16 bg-white py-2 px-4 rounded shadow-md z-10"
                    >
                      <span className="text-gray-400 line-through">{card.crossPrice}</span>
                      <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E27214] via-[#E20C59] to-[#402B75]">
                        {card.price}
                      </span>
                    </motion.div>
                    <div className="">
                    <img src={card.imageUrl} alt={card.title} className="w-auto" /></div>
                    <motion.div variants={fadeUp} initial="hidden" animate={isActive ? "visible" : "hidden"} className="bg-white px-6 py-2 rounded-b-md shadow">
                      <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E27214] via-[#E20C59] to-[#402B75]">
                        {card.title}
                      </h3>
                    </motion.div>
                  </div>
                </SwiperSlide> 
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mt-10 w-full max-w-5xl transition-all duration-500 ease-in-out">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {activeFeatures.map((feature, subIndex) => (
            <div key={subIndex} className="flex items-center gap-2 text-gray-700">
              <Icon icon="ic:round-check-circle" className="text-blue-500 text-xl" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
