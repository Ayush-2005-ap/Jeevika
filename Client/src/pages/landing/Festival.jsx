import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { supabase } from "../../lib/supabase";
import { useTranslation } from "react-i18next";

const Festival = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  async function fetchVideos() {
    try {
      const { data, error } = await supabase
        .from("festival_videos")
        .select("*")
        .order("order_index", { ascending: true });

      if (error) {
        console.error("Supabase fetch error:", error);
        setError(error.message);
        setLoading(false);
        return;
      }

      console.log("Raw Supabase data:", data);

      const mapped = data.map((item) => {
        // Handles both: full https:// URLs already in DB, or just file paths needing conversion
        const videoUrl = item.video_path?.startsWith("http")
          ? item.video_path
          : supabase.storage.from("videos").getPublicUrl(item.video_path).data.publicUrl;

        const posterUrl = item.poster_path?.startsWith("http")
          ? item.poster_path
          : supabase.storage.from("posters").getPublicUrl(item.poster_path).data.publicUrl;

        console.log(`Video "${item.title}":`, { videoUrl, posterUrl });

        return {
          title: item.title,
          src: videoUrl,
          poster: posterUrl,
          youtube: item.youtube,
        };
      });

      setVideos(mapped);
    } catch (err) {
      console.error("Unexpected error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const playlistUrl =
    "https://youtube.com/playlist?list=PLysF1qZYkiGFu34fjQVi-tcLbIdQDYC-8";

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("festival_title")}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t("festival_desc")}
          </p>
        </motion.div>

        {loading && (
          <div className="grid md:grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-xl bg-gray-200 animate-pulse h-64"
              />
            ))}
          </div>
        )}

        {!loading && error && (
          <p className="text-center text-red-500 text-sm mt-4">
            Failed to load videos: {error}
          </p>
        )}

        {!loading && !error && (
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

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-primary-700 text-2xl shadow-lg group-hover:scale-110 transition">
                    ▶
                  </div>
                </div>

                <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-semibold text-lg">
                    {video.title}
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>
        )}

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
            {t("festival_button")}
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Festival;