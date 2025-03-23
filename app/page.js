"use client"

import Image from "next/image";
import React from "react";
import { useState , useEffect , useRef } from "react";
import { Briefcase, Settings, Cloud, Server } from "lucide-react";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';



export default function Home() {
  const swiperRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const icons = ["/images/devops.png", "/images/cloud.png", "/images/setting.png"];


  const [activeTab, setActiveTab] = useState("Home");
  const [step, setStep] = useState(0);

  const [swiper, setSwiper] = useState(null); 
  const textRef = useRef(null);
  const testimonials = [
    {
      name: "Samantha William",
      position: "Senior Designer at Design Studio",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Jonathan Hope",
      position: "Project Manager at Design Studio",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Samantha William",
      position: "Senior Designer at Design Studio",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Jonathan Hope",
      position: "Project Manager at Design Studio",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  const projects = [
    {
      title: 'CI/CD Pipeline',
      description: 'Automating deployments with GitHub Actions and Kubernetes.',
      image: '/pr1.jpg',
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Managing cloud infrastructure using Terraform and AWS.',
      image: '/pr2.jpg',
    },
    {
      title: 'Monitoring & Logging',
      description: 'Observability using Prometheus, Grafana, and ELK stack.',
      image: '/pr3.jpg',
    },
    {
      title: 'Containerization',
      description: 'Dockerizing applications and orchestrating with Kubernetes.',
      image: '/pr4.jpg',
    },
  ];
  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { x: "80%" }, // Start position (off-screen left)
      {
        x: -10, // End position (centered)
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 40%",
 
        },
      }
    );
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % icons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const menuItems = ["Home", "About", "How It Works", "Testimonial", "Contact"];
  return (
<>

<div className="bg-white min-h-screen font-[Inter] relative">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 ml-12 mr-12">
        <h1 className="text-lg font-bold">RKWEB</h1>
        <div className="space-x-4">
          <button className="text-sm">Book a call</button>
          <button className="bg-black text-white px-4 py-2 rounded-lg">Let's connect</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex justify-between   text-center py-20 px-40">
        <h2 className="text-9xl font-bold tracking-tight leading-tight">
          We design first <br /> <span className="text-gray-800">class SaaS</span>
          <span className="text-gray-600"> *</span>
        </h2>
<div>

<p className="text-gray-500 mt-4 text-2xl max-w-lg mx-auto">
          RKWEB is a DevOps-focused agency specializing in building scalable,
          efficient . We are team of talented Devops Engineer . Our focus is on delivering efficient, scalable, and high-quality digital solutions, ensuring seamless integration and rapid deployment.
        </p>
        <button className="mt-6 underline">Explore works →</button>
</div>
      </section>

      {/* Marquee Section */}
      <div className="overflow-hidden w-full">
      <div className="flex space-x-10 animate-marquee max-w-full">
          <span className="text-gray-700 font-medium">DevOps & Infrastructure</span>
          <span className="text-gray-700 font-medium">Cloud Solutions</span>
          <span className="text-gray-700 font-medium">Scalability & Security</span>
          <span className="text-gray-700 font-medium">Automation & CI/CD</span>
          <span className="text-gray-700 font-medium">Serverless Architecture</span>
          <span className="text-gray-700 font-medium">DevOps & Infrastructure</span>
          <span className="text-gray-700 font-medium">Cloud Solutions</span>
          <span className="text-gray-700 font-medium">Scalability & Security</span>
          <span className="text-gray-700 font-medium">Automation & CI/CD</span>
          <span className="text-gray-700 font-medium">Serverless Architecture</span>
          
        </div>
      </div>
      {/* Illustration */}
      <div className="flex justify-center items-center py-10">
      
          {/* Placeholder for Image/Illustration */}
<Image src='/agency.png' height={200} width={1400} alt="agency Image object-cover"/>
     
      </div>


    </div>

    <div className=" m-20 flex flex-col items-center p-6 font-sans gap-5">
  <div className="w-full max-w-9xl flex flex-col lg:flex-row items-start gap-10">
    {/* Left Section: Main Heading and Description */}
    <div className="flex">
      <h1 className="text-5xl font-serif font-bold leading-tight mb-4">
        Crafting Growth Through SaaS with <span className="text-black">RK Web</span>
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Elevate your SaaS journey with RK Web: Craft, Enhance, Extend. Tailored SaaS design solutions, from idea to execution, for businesses seeking intuitive experiences and growth.
      </p>
    </div>


  </div>
</div>

    {/* Right Section: Progress and Details */}
    <div className="flex m-20 flex-col lg:flex-row gap-6 w-full">
      {/* Left Column: SaaS Design Info */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-serif italic mb-4">Design a new SaaS</h2>
        <div className=" p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            We craft intuitive and tailored SaaS experiences that people love. From your idea to a complete design.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>• Design an MVP based on your SaaS idea</li>
            <li>• Transform a service business into SaaS</li>
            <li>• Design SaaS for your internal needs</li>
            <li>• Quickly test the business idea with potential customers</li>
            <li>• Craft stunning UI</li>
          </ul>
        </div>
      </div>

      {/* Right Column: Progress Tracker */}
      <div className="lg:w-1/2">
        <div className="bg-white p-6 rounded-lg ">
          {/* Progress Header */}
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span className="tracking-wider">STEP /0{step + 1}/</span>
         
          </div>

{/* Progress Bar */}
<div className="relative w-[80%] bg-gray-300 h-2 rounded-full overflow-hidden">
  <div
    className="bg-black h-2 rounded-full transition-all duration-1000 flex items-center"
    style={{ width: `${Math.min((step + 1) * 33, 100)}%` }}
  >
    <span className="absolute right-0 top-[-8px] text-xs bg-black text-white px-2 py-0.5 rounded-full">★</span>
  </div>
</div>


{/* Icon Display */}
<div className="mt-6 flex justify-center">
  <img src={icons[step]} alt="Step Icon" className="w-24 h-24" />
</div>
        </div>
      </div>
    </div>

    <div className="whitespace-nowrap relative flex flex-col items-center justify-center bg-white p-10">
      <h1
        ref={textRef}
        className="text-4xl md:text-8xl font-serif italic text-center"
      >
        * We Are The Best * In DevOps Field
      </h1>
    </div>

    <div className="relative w-full rounded-4xl text-white bg-black mt-20 py-10 p-10">
<div className="max-w-6xl mx-auto">
<h2 className="text-6xl font-sans italic text-start">Our DevOps Projects</h2>
      <p className="text-end text-gray-500 mb-5">
        Showcasing automation, cloud, and monitoring solutions.
      </p>

      <div className="relative">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          onClick={() => swiper && swiper.slidePrev()} // Use swiper instance
        >
       
        </button>

        <Swiper
          modules={[Navigation]}
          slidesPerView={1.2}
          spaceBetween={15}
          navigation
          onSwiper={setSwiper} // Store Swiper instance
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-10"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-2xl overflow-hidden bg-gray-900 text-white relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          onClick={() => swiper && swiper.slideNext()} // Use swiper instance
        >
     
        </button>
      </div>
</div>
    </div>

    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <div className="flex items-center justify-center gap-2">
         
          <h2 className="text-3xl font-serif font-semibold mb-10 text-gray-900">
         *   What Our Customers Are Saying
          </h2>
        </div>

 {/* Testimonial Cards */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-left flex flex-col justify-between"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  className="w-14 h-14 rounded-full border-2 border-green-500"
                  alt={testimonial.name}
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-5xl w-full">
        <div className="flex justify-between items-center mb-10">
          <div className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">RKweb Agency</div>
          <div className="flex space-x-4">
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">Book a Call</button>
            <button className="text-white text-sm font-semibold">→ Let's Connect</button>
          </div>
        </div>
        
        <h1 className="text-5xl font-serif  leading-tight">Let's Optimize Your Infrastructure</h1>
        <p className="mt-6 text-gray-400 text-lg max-w-2xl">
          Get expert DevOps consultation for free. We provide advice on CI/CD pipelines, cloud deployments, Kubernetes orchestration, and automation strategies.
        </p>
        
        <div className="mt-10 flex space-x-4 items-center">
          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">★</div>
          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">✦</div>
        </div>
        
        <div className="mt-12 w-full max-w-lg">
          <form className="space-y-4">
            <input type="text" placeholder="First & Last Name" className="w-full bg-black border-b border-gray-600 py-2 outline-none focus:border-white" />
            <input type="email" placeholder="Email" className="w-full bg-black border-b border-gray-600 py-2 outline-none focus:border-white" />
            <textarea placeholder="About Your Project" className="w-full bg-black border-b border-gray-600 py-2 outline-none focus:border-white"></textarea>
            <button className="w-full bg-gray-700 text-white py-3 rounded-full mt-4 hover:bg-gray-600">Send Message</button>
          </form>
        </div>
        
        <div className="mt-10 text-gray-400 text-sm">
          <p>Contact us at:</p>
          <p>hello@devopsagency.com</p>
          <p>+1 234 567 890</p>
        </div>
      </div>
    </div>
</>
  );
}
