import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Factory,
  MapPin,
} from "lucide-react";

import ded from "../../assets/products/ded-device.png";
import rotary from "../../assets/products/rotary-switch.png";
import cam from "../../assets/products/cam-switch.png";
import fuseBase from "../../assets/products/fuse-base.png";
import hrcFuse from "../../assets/products/hrc-fuse.png";
import pcbLed from "../../assets/products/pcb-led.png";
import imoni from "../../assets/products/imoni.png";
import wires from "../../assets/products/wires.png";

const products = [
  {
    id: 1,
    title: "Disconnecting & Earthing Device",
    category: "Railway Safety",
    image: ded,
    description:
      "RDSO approved disconnecting and earthing devices engineered for safe railway maintenance and dependable electrical isolation.",
    pdf: "/pdfs/disconnecting-earthing-device.pdf",
  },
  {
    id: 2,
    title: "Rotary Switch",
    category: "Switchgear",
    image: rotary,
    description:
      "Industrial rotary switches designed for smooth operation, long service life and high reliability.",
    pdf: "/pdfs/rotary-switch.pdf",
  },
  {
    id: 3,
    title: "Cam Switch Element",
    category: "Switchgear",
    image: cam,
    description:
      "Precision engineered cam switch elements suitable for heavy-duty industrial applications.",
    pdf: "/pdfs/cam-switch-element.pdf",
  },
  {
    id: 4,
    title: "Fuse Base",
    category: "Protection",
    image: fuseBase,
    description:
      "Robust fuse bases offering superior electrical protection and operational safety.",
    pdf: "/pdfs/fuse-base.pdf",
  },
  {
    id: 5,
    title: "High Voltage Fuse",
    category: "Protection",
    image: hrcFuse,
    description:
      "Reliable high voltage fuse solutions for demanding electrical installations.",
    pdf: "/pdfs/high-voltage-fuse.pdf",
  },
  {
    id: 6,
    title: "PCB Mounted LED",
    category: "Electronics",
    image: pcbLed,
    description:
      "High-quality PCB mounted LEDs for industrial control panels and indication systems.",
    pdf: "/pdfs/pcb-mounted-led.pdf",
  },
  {
    id: 7,
    title: "iMONI Monitoring System",
    category: "Smart Monitoring",
    image: imoni,
    description:
      "Intelligent monitoring system for predictive maintenance and real-time equipment supervision.",
    pdf: "/pdfs/imoni-monitoring-system.pdf",
  },
  {
    id: 8,
    title: "Industrial Wires",
    category: "Accessories",
    image: wires,
    description:
      "Premium industrial wiring solutions built for performance, safety and durability.",
    pdf: "/pdfs/industrial-wires.pdf",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative"
      style={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#070B12",
        paddingTop: "100px",
        paddingBottom: "100px",
        boxSizing: "border-box",
      }}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-40 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[170px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[170px]" />

      <div
        className="relative"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          maxWidth: "1280px",
          paddingLeft: "24px",
          paddingRight: "24px",
          boxSizing: "border-box",
        }}
      >

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "800px",
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-cyan-300">
            Our Products
          </span>

          <h2
            className="text-5xl font-black leading-tight text-white lg:text-6xl"
            style={{ marginTop: "24px" }}
          >
            Engineered Solutions
            <br />
            For Every Industry
          </h2>

          <p
            className="text-lg leading-9 text-slate-300"
            style={{
              marginTop: "24px",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "640px",
            }}
          >
            Technotrendz manufactures high-quality electrical products,
            railway safety equipment and industrial monitoring solutions
            trusted across infrastructure and industrial sectors.
          </p>
        </motion.div>

        {/* Product Grid — 8 equal cards */}
        <div
          className="grid md:grid-cols-2 xl:grid-cols-4"
          style={{ gap: "24px" }}
        >
          {products.map((product, index) => (
            <motion.a
              key={product.id}
              href={product.pdf}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .08,
              }}
              whileHover={{ y: -12 }}
              className="group relative block overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:bg-white/[0.08]"
            >

              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Hover arrow */}
              <div
                className="absolute z-10 flex h-10 w-10 -translate-y-2 items-center justify-center rounded-full bg-cyan-500 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                style={{ top: "20px", right: "20px" }}
              >
                <ArrowUpRight size={18} className="text-black" />
              </div>

              {/* Image */}
              <div className="relative flex h-[260px] items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-[#0c1220]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[180px] object-contain transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div style={{ padding: "28px" }}>
                <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                  {product.category}
                </span>

                <h3
                  className="text-2xl font-bold leading-tight text-white transition duration-300 group-hover:text-cyan-300"
                  style={{ marginTop: "20px" }}
                >
                  {product.title}
                </h3>

                <p
                  className="text-[15px] leading-8 text-slate-300"
                  style={{ marginTop: "16px" }}
                >
                  {product.description}
                </p>

                <div
                  className="flex items-center gap-3 text-cyan-300"
                  style={{ marginTop: "24px" }}
                >
                  <ShieldCheck size={16} />
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    View Datasheet
                  </span>
                </div>
              </div>

            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="overflow-hidden rounded-[36px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10"
          style={{ marginTop: "80px", padding: "56px" }}
        >
          <div
            className="flex flex-col items-center justify-between lg:flex-row"
            style={{ gap: "40px" }}
          >
            <div>
              <h3 className="text-4xl font-black text-white">
                Looking for a Custom Solution?
              </h3>

              <p
                className="max-w-2xl text-lg leading-9 text-slate-300"
                style={{ marginTop: "20px" }}
              >
                Our engineering team develops customized electrical
                solutions for railway infrastructure, industrial
                automation and mission-critical applications.
              </p>
            </div>

            <div className="flex flex-col items-center" style={{ gap: "16px" }}>
              <button
                type="button"
                onClick={() => {
                  window.location.href = "mailto:info@technotrendz.co.in";
                }}
                className="group flex items-center gap-3 rounded-full bg-cyan-500 font-semibold text-black transition hover:scale-105"
                style={{ padding: "22px 44px", fontSize: "14px", cursor: "pointer", border: "none" }}
              >
                Contact Sales
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <div
                className="flex items-center gap-2 text-slate-400"
                style={{ fontSize: "13px" }}
              >
                <MapPin size={14} className="text-cyan-400" />
                Visit us at Plot No. 101, HUDA Sector-59, Faridabad, Haryana [121004]
              </div>
            </div>
          </div>
        </motion.div>

        {/* Manufacturing Excellence Banner */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[40px] border border-white/10"
          style={{ marginTop: "96px" }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#08111f] via-[#0b1628] to-[#08111f]" />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-96 bg-cyan-500/10 blur-[140px]" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-full w-96 bg-blue-600/10 blur-[140px]" />

          <div
            className="relative"
            style={{
              paddingTop: "80px",
              paddingBottom: "80px",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
          >
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "800px",
                textAlign: "center",
              }}
            >
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-cyan-300">
                Manufacturing Excellence
              </span>

              <h2
                className="text-5xl font-black leading-tight text-white"
                style={{ marginTop: "24px" }}
              >
                Designed.
                <br />
                Manufactured.
                <br />
                Trusted.
              </h2>

              <p
                className="text-lg leading-9 text-slate-300"
                style={{
                  marginTop: "24px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "720px",
                }}
              >
                Every Technotrendz product undergoes precision
                engineering, rigorous testing and multiple quality
                inspections before reaching customers. Our commitment
                to innovation and reliability has enabled us to become
                one of the trusted partners for railway and industrial
                electrical infrastructure.
              </p>
            </div>

            {/* Achievement Cards */}
            <div
              className="grid md:grid-cols-4"
              style={{ marginTop: "56px", gap: "24px" }}
            >
              {[
                { number: "2016", title: "Established" },
                { number: "6000+", title: "Products Delivered" },
                { number: "65%", title: "Railway Presence" },
                { number: "100%", title: "Quality Tested" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ duration: .3 }}
                  className="rounded-3xl border border-white/10 bg-white/5 text-center backdrop-blur-xl transition-all hover:border-cyan-400/40 hover:bg-white/[0.08]"
                  style={{ padding: "32px" }}
                >
                  <h3 className="text-5xl font-black text-cyan-400">
                    {item.number}
                  </h3>
                  <p
                    className="uppercase tracking-[0.25em] text-sm text-slate-300"
                    style={{ marginTop: "16px" }}
                  >
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}