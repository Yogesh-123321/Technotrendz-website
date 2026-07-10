import { motion } from "framer-motion";
import { Download } from "lucide-react";
import productShowcase from "../../assets/hero/product-showcase.png";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#070B12]"
      style={{ minHeight: "100vh" }}
    >

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#070B12] via-[#0D1626] to-[#070B12]" />

      {/* Right Glow */}
      <div className="absolute right-[-250px] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div
        className="relative z-10 mx-auto flex items-center"
        style={{
          minHeight: "100vh",
          maxWidth: "1280px",
          paddingLeft: "32px",
          paddingRight: "32px",
          paddingTop: "120px",
          paddingBottom: "120px",
          boxSizing: "border-box",
          gap: "64px",
        }}
      >

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ maxWidth: "680px" }}
        >

          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
            ENGINEERING EXCELLENCE SINCE 2016
          </span>

          <h1
            className="text-5xl font-black leading-tight text-white md:text-7xl"
            style={{ marginTop: "32px" }}
          >
            Engineering the
            <br />
            Future of
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Electrical & Telecom Infrastructure
            </span>
          </h1>

          <p
            className="text-lg leading-9 text-slate-300"
            style={{ marginTop: "32px", maxWidth: "600px" }}
          >
            Technotrendz Solutions Pvt. Ltd. designs and manufactures
            high-quality electrical switchgear, railway safety systems,
            industrial monitoring products and mission-critical electrical
            infrastructure solutions trusted across India.
          </p>

          <div
            className="flex flex-wrap"
            style={{ marginTop: "40px" }}
          >
            <a
              href="/pdfs/technotrendz-catalogue.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-full border border-white/10 bg-white/5 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
              style={{ padding: "22px 44px", fontSize: "17px" }}
            >
              <Download className="mr-3" size={20} />
              View Catalogue
            </a>
          </div>

          <div
            className="grid grid-cols-3"
            style={{ marginTop: "64px", gap: "40px" }}
          >
            <div>
              <h2 className="text-4xl font-bold text-cyan-400">2016</h2>
              <p className="text-slate-400" style={{ marginTop: "8px" }}>
                Established
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">65%</h2>
              <p className="text-slate-400" style={{ marginTop: "8px" }}>
                Railway Market
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">8000+</h2>
              <p className="text-slate-400" style={{ marginTop: "8px" }}>
                Products Delivered
              </p>
            </div>
          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="hidden flex-1 justify-center lg:flex"
        >
          <div
            className="flex items-center justify-center overflow-hidden rounded-full border border-cyan-400/20 bg-white/5 backdrop-blur-3xl"
            style={{ height: "460px", width: "460px" }}
          >
            <img
              src={productShowcase}
              alt="Technotrendz Product Showcase"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

      </div>

    </section>
  );
}