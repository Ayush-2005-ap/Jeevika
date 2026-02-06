import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Festival = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const videos = [
    {
      title: "Justice by Jeevika | Episode 1",
      src: "/Youtube/Video1.mp4",
      poster: "/Youtube/poster1.jpg",
      youtube: "https://www.youtube.com/watch?v=6Qq68xPHvUY",
    },
    {
      title: "Justice by Jeevika | Episode 2",
      src: "/Youtube/Video4.mp4",
      poster: "/Youtube/poster2.jpg",
      youtube: "https://www.youtube.com/watch?v=L9fi6xC__ZU",
    },
    {
      title: "Justice by Jeevika | Episode 3",
      src: "/Youtube/Video3.mp4",
      poster: "/Youtube/poster3.jpg",
      youtube: "https://www.youtube.com/watch?v=cTdLVgESqLg",
    },
  ];

  const playlistUrl =
    "https://youtube.com/playlist?list=PLysF1qZYkiGFu34fjQVi-tcLbIdQDYC-8";

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Justice by Jeevika
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Real stories. Real struggles. Real justice — short documentary
            clips highlighting the voices of street vendors across India.
          </p>
        </motion.div>

        {/* Video Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <motion.a
              key={i}
              href={video.youtube}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -6 }}
              className="group relative block rounded-2xl overflow-hidden shadow-xl"
            >
              <video
                src={video.src}
                poster={video.poster}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                controls={false}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              >
                Your browser does not support the video tag.
              </video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-primary-700 text-2xl shadow-lg group-hover:scale-110 transition">
                  ▶
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-semibold text-lg">
                  {video.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-14"
        >
          <a
            href={playlistUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-10 py-4 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            View More on YouTube
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Festival;
