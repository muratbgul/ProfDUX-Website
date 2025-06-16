"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const AboutProfDux = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(inView);
  }, [inView]);

  return (
    <div
      ref={ref}
      className="w-full bg-white py-12 px-4 sm:py-16 sm:px-8 md:px-16 flex flex-col md:flex-row items-center gap-10 overflow-hidden"
    >
      {/* Görsel */}
      <motion.div
        initial={false}
        animate={showAnimation ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <Image
          src="/assets/images/SS.png"
          alt="Prof Dux Interface"
          width={600}   // Mobilde biraz daha küçük
          height={450}
          className="rounded-xl shadow-xl border max-w-full h-auto"
          priority
        />
      </motion.div>

      {/* Yazılar */}
      <motion.div
        initial={false}
        animate={showAnimation ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full md:w-1/2 space-y-6 text-center md:text-left"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#751944]">
          What is Prof Dux?
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Prof Dux is a platform for personalized smart teaching and learning
          that leverages on artificial intelligence technology (AI) to assist
          students in achieving their academic goal. This Learning management
          system performance outweighs the traditional learning method by
          leveraging on AI technique for adaptive teaching as well as providing
          a personalized tutor for every student.
        </p>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          The main purpose of Prof Dux is to provide an innovative solution to
          improve the quality of education by using AI and also to personalize
          learning by answering students’ questions and providing them
          personalized feedbacks on their exams.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutProfDux;
