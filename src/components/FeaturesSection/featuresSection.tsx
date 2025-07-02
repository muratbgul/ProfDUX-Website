import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const [isFullyVisible, setIsFullyVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFullyVisible(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 py-12 lg:py-0 overflow-hidden"
    >
      {/* Görsel */}
      <motion.div
        initial={{ scale: 1, x:0 , y: 50 }}
        animate={
          isFullyVisible
            ? { scale: 0.8, x: 0, y: 0 }
            : { scale: 1, x: "50%", y: 10 }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0"
      >
        <img
          src="/assets/images/pd1.jpg"
          alt="Map"
          className="w-full max-w-[700px] h-auto rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Kartlar */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={
          isFullyVisible
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: 100 }
        }
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="w-full lg:w-1/2 space-y-8"
      >
        {[
          {
            icon: "chat.png",
            title: "Personalized Assistance",
            desc: "Get answers to your questions in any language, anytime.",
          },
          {
            icon: "calendar.png",
            title: "Smart Attendance Tracking",
            desc:
              "Seamless monitoring for both online and face-to-face classes.",
          },
          {
            icon: "pencil.png",
            title: "Automated Exam & Quiz Generation",
            desc: "Instantly create exams, quizzes, and course content.",
          },
          {
            icon: "statistics.png",
            title: "Intelligent Grading & Analytics",
            desc:
              "Real-time insights to help teachers assess student progress.",
          },
          {
            icon: "globe.png",
            title: "Multi-Language Support",
            desc: "Learn and teach without language barriers.",
          },
        ].map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <img
              src={`/assets/icons/${item.icon}`}
              alt={item.title}
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>
              <p className="text-gray-600 text-sm sm:text-md">{item.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
