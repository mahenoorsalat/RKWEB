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
import { FaUpwork, FaFiverr, FaLinkedin } from "react-icons/fa"



export default function Home() {
  const swiperRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const icons = ["/images/devops.png", "/images/cloud.png", "/images/setting.png"];
  const UpworkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
      <path d="M3.8 8.2c0 2.3 0 4.6 0 6.9 0 .8.1 1.6.3 2.3.2.7.5 1.4 1 2 1.1 1.3 2.5 2.1 4.2 2.3.9.1 1.9.1 2.8 0 1.5-.2 2.8-.9 3.9-2 .9-.9 1.5-2 1.7-3.3.2-.9.2-1.8.2-2.7 0-.7 0-1.4 0-2.1 0-.1 0-.2.1-.3s.1-.2.3-.2h1.8c.2 0 .3.1.3.3v2.1c0 .8 0 1.5-.2 2.3-.2 1.1-.6 2.1-1.2 3-.8 1.3-1.8 2.3-3.1 3.1-1.4.8-2.9 1.2-4.5 1.3-.9 0-1.7 0-2.6-.1-1.4-.2-2.7-.7-3.9-1.5-1.1-.7-2-1.6-2.8-2.6-1.2-1.5-1.8-3.2-2.1-5.1-.2-1.4-.2-2.8-.2-4.2v-2.4h1.9v2.2z" />
    </svg>
  );

  const [activeTab, setActiveTab] = useState("Home");
  const [step, setStep] = useState(0);

  const [swiper, setSwiper] = useState(null); 
  const textRef = useRef(null);
  const FiverrIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
    </svg>
  );
  const testimonials = [
    {
      name: "Tobias Jany",
      position: "Germany",
      image: "/test5.jpeg",
      text: "I had the pleasure of working with Sajiya Das on several complex projects, and she consistently demonstrated a deep expertise in DevOps, particularly with Kubernetes (K8s) and Docker. Her ability to design and manage scalable, containerized applications using Kubernetes is truly impressive, ensuring smooth deployment pipelines and seamless orchestration. Sajiya’s proficiency with Docker further enhances her capability to efficiently build, test, and deploy applications across various environments.In addition to her technical skills, Sajiya brings a collaborative and problem-solving mindset to the team. She is always ready to tackle challenges head-on, and her dedication to continuous improvement and automation has significantly optimized our workflows. I highly recommend Sajiya for any DevOps role, especially where Kubernetes and Docker expertise is essential.",
    },
    {
      name: "jayshan_88",
      position: "United Kingdom",
      image: "/test1.jpeg",
      text: "Sajiya was again super helpful in supporting our team. She worked outside of her skillset with this requirement and was able to meet our expectations. She communicated well her plans and thought process and kept us updated frequently on her progress. We would definitely recommend Sajiya to anyone.",
    },
    {
      name: "Haneef Haroon",
      position: "India",
      image: "/test2.jpeg",
      text: "I have been working been with Sajiya for a little over five months. I am really impressed by her ability to learn things fast, handle pressure, put in new ideas, multitask. Something I observed is she never sees a problem as a problem , she has looked at every hurdle or obstacle as an opportunity to learn, enhance her skills . Also she is an excellent team player , I highly recommend her as I believe she would be an asset to any team .",
    },
    {
      name: "Anisha singh",
      position: "United States",
      image: "/test4.jpeg",
      text: "The best part is that she is incredibly down-to-earth, polite, calm, and knowledgeable. The session went amazing and very Insightful. She has exceptional expertise in DevOps, and I recommend her without hesitation.",
    },
  ];
  const projects = [
    {
      title: 'CI/CD Pipeline',
      description: 'Comprehensive DevOps Solutions for a German Construction Company',
      image: '/pr1.jpg',
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Automated and Secured Backend for Jira Plugins',
      image: '/pr2.jpg',
    },
    {
      title: 'Monitoring & Logging',
      description: 'Comprehensive DevOps Course for US-Based Startup',
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
          <button  onClick={() => window.open("https://calendly.com/salatsajiya7-8-6/30min", "_blank")} className="cursor cursor-pointer text-sm">Book a call</button>
          <button onClick={() => window.open("https://www.linkedin.com/in/sajiya-salat-0a2a78245/", "_blank")} className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer">Let's connect</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto flex-col md:flex-row flex justify-between text-start py-20 ">
  <h2 className="text-6xl font-bold tracking-tight leading-tight">
    Empowering <br /> 
    <span className="text-gray-800">DevOps Solutions</span>
    <span className="text-gray-600"> for Scalability *</span>
  </h2>
<div>

<p className="text-gray-500 mt-4 text-xl max-w-lg mx-auto ">
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

    <div className="m-20 max-w-6xl mx-auto flex flex-col items-center p-6 font-sans gap-5">
  <div className="w-full max-w-9xl flex-col md:flex-row flex items-start gap-10">
    {/* Left Section: Main Heading and Description */}
    <div className="flex-col md:flex-row flex">
      <h1 className="text-4xl ml-5 font-serif font-bold leading-tight mb-4">
        Powering Digital Transformation with <span className="text-black">RKWEB</span>
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        RKWEB specializes in seamless DevOps solutions: Automate, Scale, Secure. From CI/CD pipelines to cloud-native architecture, we optimize and streamline development workflows for efficiency and innovation.
      </p>
    </div>
  </div>
</div>

{/* Right Section: DevOps Services */}
<div className="flex max-w-6xl mx-auto m-20 flex-col lg:flex-row gap-6 w-full">
  {/* Left Column: DevOps Solutions Info */}
  <div className="lg:w-1/2">
    <h2 className="text-3xl font-serif italic mb-4">Optimize Your DevOps Workflow</h2>
    <div className="p-6 rounded-lg shadow-md">
      <p className="text-gray-700 mb-4">
        We build scalable and automated DevOps environments tailored to your business needs, ensuring seamless development, deployment, and security.
      </p>
      <ul className="text-gray-600 space-y-2">
        <li>• Implement CI/CD pipelines for rapid deployment</li>
        <li>• Automate infrastructure with IaC (Terraform, Ansible, etc.)</li>
        <li>• Secure and optimize cloud architecture</li>
        <li>• Monitor and enhance system performance</li>
        <li>• Drive operational excellence with DevOps best practices</li>
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

    <div className="bg-black pt-10 text-white min-h-screen flex flex-col items-center justify-center px-6">
  <div className="max-w-5xl w-full">
    <div className="flex justify-between items-center mb-10">
      <div className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">RKweb Agency</div>
      <div className="flex space-x-4">
        <button onClick={() => window.open("https://calendly.com/salatsajiya7-8-6/30min", "_blank")} className="bg-white cursor-pointer text-black px-4 py-2 rounded-full text-sm font-semibold">Book a Call</button>
        <button onClick={() => window.open("https://www.linkedin.com/in/sajiya-salat-0a2a78245/", "_blank")} className="cursor-pointer text-white text-sm font-semibold">→ Let's Connect</button>
      </div>
    </div>

    <h1 className="text-5xl font-serif leading-tight">Let's Optimize Your Infrastructure</h1>
    <p className="mt-6 text-gray-400 text-lg max-w-2xl">
      Get expert DevOps consultation for free. We provide advice on CI/CD pipelines, cloud deployments, Kubernetes orchestration, and automation strategies.
    </p>

    <div className="mt-10 flex space-x-6">
    <a href="https://www.upwork.com/fl/~01b55674f113e18603?mp_source=share" target="_blank" rel="noopener noreferrer">
        <UpworkIcon />
      </a>
  <a href="https://www.fiverr.com/sellers/sajiyah_salat" target="_blank" rel="noopener noreferrer">
    <FiverrIcon />
  </a>
  <a href="https://www.linkedin.com/in/sajiya-salat-0a2a78245/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="w-8 h-8 text-white" />
  </a>
</div>

    <div className="mt-12 w-full max-w-lg">
      <form className="space-y-4" action="mailto:salatsajiya7.8.6@gmail.com" method="POST" encType="text/plain">
        <input type="text" placeholder="First & Last Name" className="w-full bg-black border-b border-gray-600 py-2 outline-none focus:border-white" />
        <input type="email" placeholder="Email" className="w-full bg-black border-b border-gray-600 py-2 outline-none focus:border-white" />
        <textarea placeholder="About Your Project" className="w-full bg-black border-b border-gray-600 py-2 outline-none focus:border-white"></textarea>
        <button className="w-full bg-gray-700 text-white py-3 rounded-full mt-4 hover:bg-gray-600">Send Message</button>
      </form>
    </div>

    <div className="mt-10 text-gray-400 text-sm">
      <p>Contact us at:</p>
      <p>salatsajiya7.8.6@gmail.com</p>
    </div>
  </div>
</div>

</>
  );
}
