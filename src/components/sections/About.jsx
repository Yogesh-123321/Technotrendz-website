import { motion } from "framer-motion";
import {
  Factory,
  ShieldCheck,
  Cpu,
  Award,
  ArrowRight,
} from "lucide-react";

import factory1 from "../../assets/gallery/factory1.jpg";
import factory2 from "../../assets/gallery/factory2.jpg";
import factory3 from "../../assets/gallery/factory3.jpg";
import factory4 from "../../assets/gallery/factory4.jpg";

const features = [
  {
    icon: Factory,
    title: "Advanced Manufacturing",
    desc: "Modern production facility equipped with precision machinery and experienced technicians.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Every product undergoes multiple inspection stages before reaching customers.",
  },
  {
    icon: Cpu,
    title: "Innovation",
    desc: "Continuous product development for railway, industrial and electrical infrastructure.",
  },
];

const stats = [
  { value: "2016", label: "Established" },
  { value: "8000+", label: "Products Delivered" },
  { value: "65%", label: "Railway Presence" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#070B12]"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto w-full text-center"
          style={{ marginBottom: "80px" }}
        >
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-cyan-300">
            About Technotrendz
          </span>

          <h2
            className="mx-auto text-center text-5xl font-black leading-tight text-white lg:text-6xl"
            style={{ marginTop: "24px" }}
          >
            Engineering Innovation
            <br />
            Since 2016
          </h2>
        </motion.div>

        {/* Story */}
        <div className="grid items-center lg:grid-cols-2" style={{ gap: "64px" }}>

          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: .4 }}
            className="overflow-hidden rounded-3xl border border-white/10"
          >
            <img
              src={factory1}
              alt=""
              className="h-[800px] w-full object-cover"
            />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white">
              Precision Manufacturing
            </h3>

            <p
  className="text-lg leading-9 text-slate-300"
  style={{ marginTop: "24px" }}
>
  Technotrendz Solutions Pvt. Ltd. is a leading manufacturer of premium
  electrical switchgear, railway electrical products, industrial
  monitoring systems, and mission-critical infrastructure solutions,
  delivering innovative, reliable, and high-quality products trusted by
  industries and Indian Railways across the country.
</p>

<p
  className="text-lg leading-9 text-slate-300"
  style={{ marginTop: "20px" }}
>
  Our state-of-the-art manufacturing facilities, skilled workforce, and
  stringent quality standards enable us to consistently deliver
  dependable solutions while maintaining excellence in performance,
  quality, and customer satisfaction. Our achievements include:
</p>

<ul
  className="list-disc pl-8 space-y-3 text-lg leading-9 text-slate-300"
  style={{ marginTop: "20px" }}
>
  <li>
    Successfully supplied <strong>8,000+ D&amp;ED units</strong> for
    railway applications.
  </li>

  <li>
    Trusted by Railway Panel Manufacturers and multiple Indian Railway
    Zones for consistent quality and reliability.
  </li>

  <li>
    Market leader in its product category with unmatched delivery,
    product quality, and dependable after-sales support.
  </li>

  <li>
    The only approved <strong>MSME</strong> in its specialized product
    category.
  </li>

  <li>
    More than <strong>60%</strong> of total supplies are made directly
    to Indian Railways, reflecting long-term customer trust.
  </li>
</ul>

            {/* Stats */}
            <div
              className="grid grid-cols-3"
              style={{ marginTop: "40px", gap: "24px" }}
            >
              {stats.map((item) => (
                <div key={item.label}>
                  <h4 className="text-5xl font-black text-cyan-400">
                    {item.value}
                  </h4>
                  <p className="text-slate-300" style={{ marginTop: "8px" }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <div
          className="grid md:grid-cols-3"
          style={{ marginTop: "96px", gap: "24px" }}
        >
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-cyan-400/40"
                style={{ padding: "32px" }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/15">
                  <Icon size={30} className="text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white" style={{ marginTop: "24px" }}>
                  {item.title}
                </h3>
                <p className="leading-8 text-slate-300" style={{ marginTop: "16px" }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Gallery */}
        <div style={{ marginTop: "96px" }}>
          <div
            className="flex items-center justify-between"
            style={{ marginBottom: "40px" }}
          >
            <h3 className="text-3xl font-bold text-white">
              Manufacturing Gallery
            </h3>
            <Award size={28} className="text-cyan-400" />
          </div>

          <div className="grid md:grid-cols-3" style={{ gap: "24px" }}>
            {[factory2, factory3, factory4].map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-3xl border border-white/10"
              >
                <img
                  src={img}
                  alt=""
                  className="h-80 w-full object-cover transition duration-700 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}