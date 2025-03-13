import React from "react";
import pinkcard from "../assets/pinkcard.png";
import greenCard from "../assets/greenCard.png";
import blackcard from "../assets/blackcard.png";
import bluecard from "../assets/bluecard.png";
import skybluecard from "../assets/skybluecard.png";

const cardData = [
  {
    title: "NearBy Shopping - Save More, Shop Smart!",
    description:
      "Find local deals, shop directly, and pay with our app to earn loyalty points. Redeem points for purchases and win exclusive monthly prizes. Track expenses and enjoy free insurance for eligible transactions.",
    included: [
      "Near By Shopping",
      "Find Local Deals",
      "Direct Retail Shopping",
      "Pay with our App",
      "Earn Loyalty Points",
      "Pay with Loyalty Points",
      "Win Exclusive Prizes Every Month",
      "Expense Tracker",
      "Get Free Insurance",
    ],
    imageUrl: pinkcard,
    bgColor: "bg-pink-100",
  },
  {
    title: "Build Your Professional Future!",
    description:
      "Create your job profile, apply for freelance jobs, and grow your own e-company. Form teams, get leads, and get hired directly with a strong professional score. Unlock new opportunities and advance your career effortlessly!",
    included: [
      "Create Job Profile",
      "Freelance Jobs",
      "Build Your Own E-Company",
      "Create Teams",
      "Get Leads",
      "Apply for Jobs",
      "Get Hired Directly",
      "Build Professional Score",
    ],
    imageUrl: greenCard,
    bgColor: "bg-green-100",
  },
  {
    title: "Grow Your Business with Ease!",
    description:
      "Create your business profile, connect with other businesses, and build trust. Receive orders directly, manage payments, and access business loans. Advertise, secure insurance, and scale your business effortlessly.",
    included: [
      "Create Your Business Profile",
      "Connect with Other Businesses",
      "Trust Score Building",
      "Pay Your Business Debts Directly",
      "Get Orders Directly from Customers",
      "Business Loans",
      "Advertisements",
      "Business Insurance",
    ],
    imageUrl: blackcard,
    bgColor: "bg-gray-200",
  },
  {
    title: "Ambition X - Shape Your Future!",
    description:
      "Create your student profile, connect with mentors, and get career guidance. Access free certification courses, internships, and skill-building opportunities. Partner with schools, colleges, and start earning while studying!",
    included: [
      "Create Student Profile",
      "Connect with Community",
      "Career Guidance",
      "Free Certification Courses",
      "Skill Up",
      "Schools/Colleges/Training Institutions",
      "Mentor Consultation",
      "Internships",
      "Set Your Career Path",
    ],
    imageUrl: bluecard,
    bgColor: "bg-blue-100",
  },
  {
    title: "Your Complete Health Companion!",
    description:
      "Create your ARHA Health ID, consult doctors online, and manage health records. Get medical loans, doorstep treatment, and a dedicated family health manager. Enjoy big discounts, connect with any hospital, and secure health insurance!",
    included: [
      "Create Health ID with ARHA",
      "Online Doctor Consultation",
      "Health Record Maintenance",
      "Medical Loans",
      "Dedicated Family Health Manager",
      "Treatment and Consultation at Your Doorstep",
      "Large Discounts",
      "Connect with Any Hospital & Doctor",
      "Health Insurance",
    ],
    imageUrl: skybluecard,
    bgColor: "bg-sky-100",
  },
];

const Cardd = () => {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-6 px-4 pb-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`p-4 w-80 md:w-96 shadow-lg rounded-lg ${card.bgColor}`}
        >
          <img
            className="w-full mb-4 rounded-md shadow-md"
            src={card.imageUrl}
            alt={card.title}
          />
          <div className="bg-white p-5 rounded-md shadow-sm">
            <h2 className="text-[16px] text-start font-semibold text-gray-900">
              {card.title}
            </h2>
            <p className="text-gray-700 text-start mt-2 text-sm">
              {card.description}
            </p>
            <span className="block mt-4 text-gray-800 font-medium text-sm">
              Included with...
            </span>
            <ul className="mt-2 text-left text-gray-700 space-y-2">
              {card.included.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <i className="fa-solid fa-circle-check text-black"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cardd;
