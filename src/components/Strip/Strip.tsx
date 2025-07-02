import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Strip() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 py-12 bg-[#751944] text-white relative z-20"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: isInView ? 0 : 100,
          opacity: isInView ? 1 : 0,
        }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-0 items-center text-center"
      >
        {[
          { value: "8K", label: "Happy Customers", delay: 0.3 },
          { value: "4.2", label: "Overall Rating", delay: 0.6 },
          { value: "250+", label: "Projects Completed", delay: 0.9 },
          { value: "95%", label: "Customer Satisfaction", delay: 1.2 },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20,
            }}
            transition={{ duration: 1, delay: item.delay }}
            className="px-4"
          >
            <h2 className="text-3xl font-bold">{item.value}</h2>
            <p className="text-sm">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
