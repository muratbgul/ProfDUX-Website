import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  return (
    <section
      ref={sectionRef}
      className="container mx-auto flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 relative mt-10"
    >
      {/* Üst Kısım */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10">
        {/* Yazı Kısmı */}
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -150,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            ProfDux: AI-powered learning, answers anytime, any language!{" "}
            <span className="text-[#751944] underline text-xl sm:text-2xl md:text-3xl block mt-2">
              Are you ready to revolutionize education?
            </span>
          </h1>
          <p className="text-gray-500 mt-4 text-sm sm:text-base">
            Ready to revolutionize learning? Start now!
          </p>
          <button className="bg-[#751944] text-white hover:bg-blue-500 px-6 py-3 rounded-full mt-6">
            Get Started
          </button>
        </motion.div>

        {/* Telefon Görseli */}
        <motion.div
          initial={{ x: 150, opacity: 0, rotate: 0 }}
          animate={{
            x: isInView ? 0 : 150,
            opacity: isInView ? 1 : 0,
            rotate: isInView ? [-3, 3, -3] : 0,
          }}
          transition={{
            x: { duration: 1, ease: "easeOut" },
            rotate: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src="/assets/images/phoneprufdux.png"
            alt="Phone"
            className="w-3/4 sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto object-contain relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}

