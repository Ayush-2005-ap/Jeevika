import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { supabase } from "../../lib/supabase";
import { useTranslation } from "react-i18next";
import { Play, ExternalLink, Film } from "lucide-react";

const COLORS = {
  saffron: '#E8760A', saffronLight: '#FFA830', saffronMist: '#FFF5E8',
  ink: '#1A1208', inkMid: '#3D2C12', cream: '#FAF6F0',
  stone: '#8C7A60', stoneLight: '#C4B49A',
};

const playlistUrl = "https://youtube.com/playlist?list=PLysF1qZYkiGFu34fjQVi-tcLbIdQDYC-8";

const VideoCard = ({ video, index, inView }) => (
  <motion.a
    href={video.youtube}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 40 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: index * 0.15, duration: 0.65 }}
    whileHover={{ y: -8 }}
    className="group relative block rounded-3xl overflow-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500"
    style={{ boxShadow: "0 8px 40px rgba(26,18,8,0.18)" }}
  >
    {/* Video / poster */}
    <div className="relative h-64 overflow-hidden">
      <video
        src={video.src}
        poster={video.poster}
        muted loop autoPlay playsInline preload="metadata"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
        style={{ transform: "scale(1.02)" }}
      >
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: "linear-gradient(135deg, rgba(232,118,10,0.3), transparent)" }} />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.15 }}
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300"
          style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)" }}
        >
          <Play className="w-6 h-6 ml-1" style={{ color: COLORS.saffron }} />
        </motion.div>
      </div>

      {/* Category badge */}
      <div className="absolute top-4 left-4">
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
          style={{ background: "rgba(232,118,10,0.9)", color: "#fff", backdropFilter: "blur(8px)" }}>
          <Film className="w-3 h-3" /> Documentary
        </span>
      </div>

      {/* External link icon */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-250">
        <div className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}>
          <ExternalLink className="w-3.5 h-3.5 text-white" />
        </div>
      </div>
    </div>

    {/* Card footer */}
    <div className="px-5 py-4" style={{ background: "#fff" }}>
      <h3 className="font-bold text-base leading-tight transition-colors group-hover:text-[#E8760A]"
        style={{ fontFamily: "Georgia, serif", color: COLORS.ink }}>
        {video.title}
      </h3>
      <p className="text-xs mt-1 font-medium" style={{ color: COLORS.stone }}>
        Jeevika Documentary Festival
      </p>
    </div>
  </motion.a>
);

const SkeletonCard = () => (
  <div className="rounded-3xl overflow-hidden animate-pulse" style={{ boxShadow: "0 4px 16px rgba(26,18,8,0.08)" }}>
    <div className="h-64 bg-gray-200" />
    <div className="px-5 py-4 bg-white">
      <div className="h-4 bg-gray-200 rounded-full w-3/4 mb-2" />
      <div className="h-3 bg-gray-100 rounded-full w-1/2" />
    </div>
  </div>
);

const Festival = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useTranslation();

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    supabase.from("festival_videos").select("*").order("order_index", { ascending: true }).then(({ data, error }) => {
      if (error) { setError(error.message); setLoading(false); return; }
      setVideos(data.map((item) => ({
        title: item.title,
        src: item.video_path?.startsWith("http") ? item.video_path : supabase.storage.from("videos").getPublicUrl(item.video_path).data.publicUrl,
        poster: item.poster_path?.startsWith("http") ? item.poster_path : supabase.storage.from("posters").getPublicUrl(item.poster_path).data.publicUrl,
        youtube: item.youtube,
      })));
      setLoading(false);
    });
  }, []);

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: COLORS.cream }}>

      {/* Diagonal accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1"
        style={{ background: `linear-gradient(90deg, ${COLORS.saffron}, ${COLORS.saffronLight}, ${COLORS.saffron})` }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            {/* <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full"
              style={{ background: COLORS.saffronMist, border: `1.5px solid ${COLORS.saffronLight}` }}>
              <Film className="w-3.5 h-3.5" style={{ color: COLORS.saffron }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: COLORS.saffron }}>
                Documentary Festival
              </span>
            </div> */}

            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: COLORS.ink, lineHeight: 1.2, maxWidth: 540 }}>
              {t("festival_title")}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed" style={{ color: COLORS.stone }}>
              {t("festival_desc")}
            </p>
          </div>

          {/* Desktop CTA */}
          <motion.a
            href={playlistUrl} target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(232,118,10,0.35)" }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm whitespace-nowrap flex-shrink-0"
            style={{ background: COLORS.saffron, color: "#fff" }}
          >
            <Play className="w-4 h-4" />
            {t("festival_button")}
          </motion.a>
        </motion.div>

        {/* Video grid */}
        {loading && (
          <div className="grid md:grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {!loading && error && (
          <p className="text-center py-16 text-sm" style={{ color: COLORS.stone }}>
            Unable to load videos. <a href={playlistUrl} target="_blank" rel="noreferrer" className="underline" style={{ color: COLORS.saffron }}>View on YouTube →</a>
          </p>
        )}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, i) => (
              <VideoCard key={i} video={video} index={i} inView={isInView} />
            ))}
          </div>
        )}

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center md:hidden"
        >
          <a href={playlistUrl} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm"
            style={{ background: COLORS.saffron, color: "#fff" }}>
            <Play className="w-4 h-4" /> {t("festival_button")}
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Festival;