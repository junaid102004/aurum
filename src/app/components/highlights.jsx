import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function KeyHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: "/uploads/image88.png",
      alt: "Gate Night View",
      title: "Gate Night View",
      description: "A magnificent night view of the Aurum gate, showcasing modern architecture."
    },
    {
      src: "/uploads/high.png",
      alt: "Garden View",
      title: "Garden View",
      description: "A serene garden space perfect for relaxation and family time."
    },
    {
      src: "/uploads/high2.png",
      alt: "Pool View",
      title: "Pool View",
      description: "A luxurious poolside area designed for leisure and comfort."
    },
    {
      src: "/uploads/high3.png",
      alt: "Pool View",
      title: "Pool View",
      description: "A luxurious poolside area designed for leisure and comfort."
    },
    {
      src: "/uploads/high.png",
      alt: "Pool View",
      title: "Pool View",
      description: "A luxurious poolside area designed for leisure and comfort."
    }
  ];

  const handleExpand = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="key-highlights" className="h-auto section-gap bg-[#EFEEEE] py-12 relative">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-semibold uppercase text-gray-800">Key Highlights</h2>
        <p className="text-lg text-gray-600 mt-2">
          Your Dream Home Awaits you to Own Exquisite Site in The Medallion Aurum
        </p>
      </div>

      <div className="flex justify-center items-center gap-5">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden cursor-pointer"
            onClick={() => handleExpand(index)}
            style={{ height: "300px" }}
            animate={{ width: activeIndex === index ? "60%" : "10%" }}
            initial={{ width: "10%" }}
            transition={{ duration: 0.5 }}
          >
            {/* Title displayed on all images with different opacity based on active status */}
            <motion.div
              className="absolute top-0 left-0 w-full text-white p-4 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeIndex === index ? 1 : 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-semibold">{image.title}</h3>
            </motion.div>

            {/* Image with black overlay for dimming effect */}
            <motion.div
              className="absolute inset-0 w-full h-full bg-black bg-opacity-50 z-0"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: activeIndex === index ? 0 : 0.5 }}
              transition={{ opacity: { duration: 0.5 } }}
            />

            <Image
              src={image.src}
              fill
              alt={image.alt}
              quality={100}
              objectFit="cover"
              className="absolute inset-0 w-full h-full bg-black bg-opacity-50 object-cover transition-all duration-500 z-0"
            />

            {/* Show the description when the image is active */}
            {activeIndex === index && (
              <motion.div
                className="absolute bottom-0 left-0 w-full text-white p-4 z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  y: { type: "spring", stiffness: 100, damping: 25 },
                }}
              >
                <p className="text-sm md:text-base">{image.description}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
