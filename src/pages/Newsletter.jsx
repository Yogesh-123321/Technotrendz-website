"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Satellite,
  Globe,
  Smartphone,
  Cloud,
  ShieldCheck,
  Cpu,
  CircuitBoard,
  Bluetooth,
  Server,
  Atom,
  Database,
} from "lucide-react";

export default function Newsletter() {
  return (
    <div
      className="min-h-screen w-full text-white [overscroll-behavior-y:none]"
      style={{
        backgroundColor: "#02060C",
        backgroundImage: `
          linear-gradient(rgba(6,182,212,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6,182,212,0.07) 1px, transparent 1px),
          radial-gradient(circle at 15% 10%, rgba(37,99,235,0.35), transparent 45%),
          radial-gradient(circle at 85% 30%, rgba(6,182,212,0.25), transparent 40%),
          radial-gradient(circle at 50% 90%, rgba(37,99,235,0.25), transparent 45%)
        `,
        backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%, 100% 100%",
        backgroundAttachment: "fixed",
      }}
    >

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#06b6d420,transparent_60%)]" />

        <div className="mx-auto max-w-7xl px-6" style={{ paddingTop: "10rem", paddingBottom: "8rem" }}>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm uppercase tracking-[0.2em] text-cyan-300">
              July 2026 Edition
            </span>

            <h1 className="mt-8 text-6xl font-bold tracking-tight md:text-8xl">
              iNavix{" "}
              <span className="text-cyan-400">
                Insight
              </span>
            </h1>

            <p className="mt-8 text-2xl text-slate-300 tracking-normal">
              Precision.
              <span className="text-cyan-400"> Innovation.</span>
              <span className="text-white"> Navigation.</span>
            </p>

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-slate-400 tracking-normal">

              The official technology newsletter from
              <span className="text-cyan-400">
                {" "}Technotrendz Solutions Pvt. Ltd.
              </span>

              <br />

              Discover the latest innovations in GNSS,
              RTK positioning, embedded systems,
              Android applications and cloud surveying.

            </p>

            <div className="mt-14 flex justify-center">

              <a
                href="#platform"
                className="group flex items-center gap-3 rounded-full bg-cyan-500 px-10 py-5 text-lg font-semibold text-white transition hover:bg-cyan-400"
              >
                Explore Newsletter

                <ArrowRight
                  size={22}
                  className="transition group-hover:translate-x-1"
                />

              </a>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= PLATFORM ================= */}

      <section
        id="platform"
        className="" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}
      >

        <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            {/* Device image replacing the constellation diagram placeholder */}
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#07111d] p-10">

              {/* Ambient glow behind the device */}
              <div className="absolute h-[70%] w-[70%] rounded-full bg-cyan-500/10 blur-3xl" />

              <img
                src="/images/inavix-device.jpg"
                alt="iNavix RTK GNSS receiver device"
                className="relative z-10 h-full w-full rounded-2xl object-cover"
              />

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="text-sm uppercase tracking-[0.2em] text-cyan-400">
              Built for Modern Surveying
            </span>

            <h2 className="mt-5 text-5xl font-bold leading-tight">

              The future of
              <br />
              precision surveying
              <br />
              starts here.

            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-400 tracking-normal">

              The iNavix RTK ecosystem combines precision GNSS positioning,
              intelligent Android software, cloud dashboards and embedded
              engineering into a complete surveying platform.

            </p>

            <p className="mt-6 text-lg leading-9 text-slate-400 tracking-normal">

              Designed for professionals, government agencies,
              infrastructure developers and GIS engineers,
              iNavix enables centimeter-level positioning from
              field data collection to cloud visualization.

            </p>

          </motion.div>

        </div>

      </section>

      {/* ================= WHAT'S NEW ================= */}

      <section className="" style={{ paddingBottom: "7rem" }}>

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="uppercase tracking-[0.2em] text-cyan-400">

              What's New

            </span>

            <h2 className="mt-5 text-5xl font-bold">

              This Edition's Highlights

            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2" style={{ marginTop: "5rem" }}>

            {/* Card */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <Satellite
                size={42}
                className="text-cyan-400"
              />

              <h3 className="mt-6 text-2xl font-semibold">

                Improved GNSS Accuracy

              </h3>

              <p className="mt-4 text-slate-400 tracking-normal">

                Multi-constellation support delivering
                higher precision using GPS, GLONASS,
                Galileo, BeiDou and NavIC.

              </p>

            </div>

            {/* Card */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <Smartphone
                size={42}
                className="text-cyan-400"
              />

              <h3 className="mt-6 text-2xl font-semibold">

                iNavix Viewer

              </h3>

              <p className="mt-4 text-slate-400 tracking-normal">

                Live GNSS tracking,
                Bluetooth connectivity,
                offline survey logging,
                voice guidance and
                survey history.

              </p>

            </div>

            {/* Card */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <Cloud
                size={42}
                className="text-cyan-400"
              />

              <h3 className="mt-6 text-2xl font-semibold">

                Cloud Dashboard

              </h3>

              <p className="mt-4 text-slate-400 tracking-normal">

                Upload, assign, visualize and export
                survey data in KMZ, GeoJSON,
                CSV and Excel formats.

              </p>

            </div>

            {/* Card */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <ShieldCheck
                size={42}
                className="text-cyan-400"
              />

              <h3 className="mt-6 text-2xl font-semibold">

                Secure Infrastructure

              </h3>

              <p className="mt-4 text-slate-400 tracking-normal">

                AWS hosted,
                SSL secured,
                encrypted communication
                with automatic cloud backups.

              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ================= FEATURED TECHNOLOGY ================= */}

      <section className="border-t border-white/10" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="uppercase tracking-[0.2em] text-cyan-400">
              Featured Technology
            </span>

            <h2 className="mt-5 text-5xl font-bold">
              How RTK Works
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-400 tracking-normal">
              Traditional GPS generally provides meter-level accuracy.
              Real-Time Kinematic (RTK) positioning enhances this by
              using correction data from nearby base stations or
              NTRIP services, enabling centimeter-level positioning
              for mapping, infrastructure development and GIS applications.
            </p>

          </div>

          {/* Architecture */}

          <div className="grid gap-8 lg:grid-cols-5" style={{ marginTop: "5rem" }}>

            {[
              {
                title: "Satellites",
                desc: "GPS • GLONASS • Galileo • BeiDou • NavIC",
              },
              {
                title: "RTK Receiver",
                desc: "Centimeter-Level Positioning",
              },
              {
                title: "Android App",
                desc: "Bluetooth • Live Survey",
              },
              {
                title: "Cloud Platform",
                desc: "Dashboard • Reports",
              },
              {
                title: "GIS Output",
                desc: "KMZ • GeoJSON • Excel",
              },
            ].map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl transition hover:border-cyan-400/40"
              >

                <div className="mb-5 text-5xl font-bold text-cyan-400">

                  {index + 1}

                </div>

                <h3 className="text-xl font-semibold">

                  {item.title}

                </h3>

                <p className="mt-4 text-slate-400 tracking-normal">

                  {item.desc}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= ENGINEERING ================= */}

      <section className="" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="uppercase tracking-[0.2em] text-cyan-400">
              Engineering Behind iNavix
            </span>

            <h2 className="mt-5 text-5xl font-bold">

              Modern Technologies

            </h2>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" style={{ marginTop: "5rem" }}>

            {[
              { name: "ESP32", icon: Cpu },
              { name: "STM32", icon: CircuitBoard },
              { name: "Android", icon: Smartphone },
              { name: "Bluetooth", icon: Bluetooth },
              { name: "Node.js", icon: Server },
              { name: "React", icon: Atom },
              { name: "MongoDB", icon: Database },
              { name: "AWS", icon: Cloud },
            ].map((tech) => (

              <motion.div
                key={tech.name}
                whileHover={{
                  scale: 1.05,
                }}
                className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
              >

                <tech.icon
                  size={36}
                  className="mx-auto text-cyan-400"
                />

                <h3 className="mt-5 text-xl font-semibold">

                  {tech.name}

                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= PRODUCT HIGHLIGHTS ================= */}

      <section className="border-t border-white/10" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="uppercase tracking-[0.2em] text-cyan-400">
              Product Highlights
            </span>

            <h2 className="mt-5 text-5xl font-bold">

              Everything In One System

            </h2>

          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" style={{ marginTop: "5rem" }}>

            {[
              "Centimeter-Level Accuracy",
              "Bluetooth Connectivity",
              "Android Support",
              "Cloud Dashboard",
              "Offline Survey Mode",
              "Live GNSS Tracking",
              "Automatic Report Generation",
              "Role-Based Management",
              "Secure Cloud Storage",
              "Modern Web Interface",
              "Multi-Constellation Support",
              "Fast Deployment",
            ].map((feature) => (

              <motion.div
                key={feature}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-white">

                  ✓

                </div>

                <p className="text-lg tracking-normal">

                  {feature}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE ================= */}

      <section className="" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="uppercase tracking-[0.2em] text-cyan-400">

              Why Choose iNavix

            </span>

            <h2 className="mt-5 text-5xl font-bold">

              Built To Perform In The Field

            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" style={{ marginTop: "5rem" }}>

            {[
              {
                title: "Higher Accuracy",
                text: "Reliable centimeter-level positioning for professional surveying.",
              },
              {
                title: "Cloud Integrated",
                text: "Synchronize projects across mobile devices and dashboards.",
              },
              {
                title: "Enterprise Ready",
                text: "Designed for government, infrastructure and enterprise deployments.",
              },
              {
                title: "Faster Surveys",
                text: "Reduce survey time while improving overall productivity.",
              },
              {
                title: "Built in India",
                text: "Designed and developed by Technotrendz engineering teams.",
              },
              {
                title: "Future Ready",
                text: "Scalable architecture supporting next-generation geospatial technologies.",
              },
            ].map((item) => (

              <motion.div
                key={item.title}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl"
              >

                <h3 className="text-2xl font-semibold text-cyan-400">

                  {item.title}

                </h3>

                <p className="mt-5 leading-8 text-slate-400 tracking-normal">

                  {item.text}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
            {/* ================= LATEST DEVELOPMENT ================= */}

      <section className="border-t border-white/10" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="uppercase tracking-[0.2em] text-cyan-400">
              Latest Development
            </span>

            <h2 className="mt-5 text-5xl font-bold">
              Progress Across The Stack
            </h2>

          </div>

          <div className="grid gap-8 lg:grid-cols-3" style={{ marginTop: "5rem" }}>

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold text-cyan-400">
                Firmware v2.5
              </h3>

              <ul className="mt-6 space-y-3 text-slate-400 tracking-normal">
                <li>✓ Improved Bluetooth Stability</li>
                <li>✓ Better Battery Optimization</li>
                <li>✓ Faster Satellite Acquisition</li>
                <li>✓ Enhanced Logging</li>
                <li>✓ Camera Improvements</li>
              </ul>

            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold text-cyan-400">
                Android Application
              </h3>

              <ul className="mt-6 space-y-3 text-slate-400 tracking-normal">
                <li>✓ Modern UI</li>
                <li>✓ Voice Guidance</li>
                <li>✓ Live GNSS Visualization</li>
                <li>✓ Offline Survey Support</li>
                <li>✓ Improved Mapping</li>
              </ul>

            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold text-cyan-400">
                Cloud Dashboard
              </h3>

              <ul className="mt-6 space-y-3 text-slate-400 tracking-normal">
                <li>✓ Live Monitoring</li>
                <li>✓ KMZ Management</li>
                <li>✓ Survey Assignment</li>
                <li>✓ Excel Reports</li>
                <li>✓ Role Based Access</li>
              </ul>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================= APPLICATIONS ================= */}

      <section className="" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="uppercase tracking-[0.2em] text-cyan-400">
              Applications
            </span>

            <h2 className="mt-5 text-5xl font-bold">
              Where iNavix Goes To Work
            </h2>

          </div>

          <div className="flex flex-wrap justify-center gap-5" style={{ marginTop: "5rem" }}>

            {[
              "Road Construction",
              "Railway Survey",
              "Mining",
              "Agriculture",
              "Smart Cities",
              "Utilities",
              "Pipeline Mapping",
              "GIS",
              "Telecom",
              "Land Survey",
              "Infrastructure",
              "Defence",
            ].map((item) => (

              <motion.div
                key={item}
                whileHover={{
                  scale: 1.08,
                }}
                className="rounded-full border border-cyan-500/20 bg-white/5 px-8 py-4 text-lg backdrop-blur-xl hover:border-cyan-400 transition"
              >
                {item}
              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= QUOTE ================= */}

      <section className="border-y border-white/10" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>

        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="text-4xl leading-relaxed italic font-light tracking-normal">

            &ldquo;Precision is not just about measuring locations —
            it&rsquo;s about enabling confident decisions.&rdquo;

          </p>

          <p className="mt-10 text-cyan-400 text-lg">

            — Technotrendz Engineering Team

          </p>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>

        <div className="mx-auto max-w-5xl px-6 text-center">

          <span className="uppercase tracking-[0.2em] text-cyan-400">

            About Technotrendz

          </span>

          <h2 className="mt-6 text-5xl font-bold">

            Engineering Tomorrow&rsquo;s
            Surveying Technologies

          </h2>

          <p className="mt-10 text-lg leading-9 text-slate-400 tracking-normal">

            Technotrendz Solutions Pvt. Ltd. develops intelligent
            embedded systems, GNSS solutions, IoT platforms,
            cloud software and geospatial technologies that empower
            engineers with reliable, accurate and scalable surveying tools.

          </p>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="" style={{ paddingBottom: "8rem" }}>

        <div className="mx-auto max-w-6xl px-6">

          <div className="rounded-[40px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-white/5 to-blue-500/10 p-20 text-center backdrop-blur-3xl">

            <h2 className="text-5xl font-bold">

              Ready to Experience
              Precision Surveying?

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-400 tracking-normal">

              Join organizations that trust iNavix for
              modern GNSS surveying, RTK positioning,
              intelligent dashboards and cloud-enabled workflows.

            </p>

            <div className="mt-14 flex flex-wrap justify-center gap-6">

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@technotrendz.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-cyan-500 px-12 py-6 text-lg font-semibold transition hover:bg-cyan-400"
              >

                Contact Us

              </a>

              <a
                href="/"
                className="rounded-full border border-cyan-500/30 px-12 py-6 text-lg transition hover:bg-cyan-500/10"
              >

                Back to Website

              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>

        <div className="mx-auto max-w-7xl px-6 text-center">

          <h2 className="text-3xl font-bold">

            iNavix
            <span className="text-cyan-400">
              ™
            </span>

          </h2>

          <p className="mt-5 text-slate-400 tracking-normal">

            Engineering the Future of Surveying

          </p>

          <p className="mt-3 text-slate-500 tracking-normal">

            Technotrendz Solutions Pvt. Ltd.

          </p>

          <p className="mt-2 text-cyan-400 tracking-normal">

            www.technotrendz.co.in

          </p>

        </div>

      </footer>

    </div>
  );
}