"use client";
import dynamic from 'next/dynamic';
import Services from "./OurServices";
import Home from "./Home";
import { CustomerFeedbacks } from "../Home/CustomerFeedbacks";
import Footer from "../Components/Footer";
import BestDoctors from "./BestDoctors";
import "../Components/Components.css";

// Dynamically import the ClientNavbar component with SSR disabled
const DynamicClientNavbar = dynamic(() => import('./ClientNavbar'), { ssr: false });

const Page: React.FC = () => {
  const feedbacks = [
    {
      quote:
        "The care I received at this hospital was outstanding. The staff were incredibly attentive and compassionate.",
      name: "Ahmed El-Sayed",
      title: "Teacher from Cairo",
    },
    {
      quote:
        "Excellent service and very professional doctors. I felt well taken care of during my entire stay.",
      name: "Fatma Hassan",
      title: "Engineer from Alexandria",
    },
    {
      quote:
        "I had a wonderful experience. The facilities are top-notch, and the nurses were very supportive.",
      name: "Mohamed Ali",
      title: "Business Owner from Giza",
    },
    {
      quote:
        "The hospital environment is very clean and comfortable. I highly recommend it to anyone in need of medical care.",
      name: "Layla Mahmoud",
      title: "Student from Mansoura",
    },
    {
      quote:
        "The doctors were very knowledgeable and explained everything in detail. I am very satisfied with my treatment.",
      name: "Hana Ibrahim",
      title: "Accountant from Luxor",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#669bbc]">
      <DynamicClientNavbar />
      <div className="mt-24 space-y-10 md:space-y-20">
        <Home />
        <Services />
        <BestDoctors />
        <CustomerFeedbacks
          items={feedbacks}
          direction="left"
          speed="slow"
          pauseOnHover={true}
        />
        <Footer />
      </div>
    </main>
  );
}

export default Page;
