import React, { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import logo from "./assets/revive-logo.png";
import { FaLinkedin, FaWhatsapp, FaGlobe } from "react-icons/fa";
import WAVES from "vanta/dist/vanta.waves";
import * as THREE from "three";
import { Player as LottiePlayer } from "lottie-react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [lottieData, setLottieData] = useState(null);
  const [imageError, setImageError] = useState(false);
  const vantaRef = useRef(null);
  const vantaInstance = useRef(null);

  // Respect Reduced Motion preferences
  const prefersReducedMotion = useMemo(
    () => (typeof window !== "undefined" && window.matchMedia)
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
    []
  );

  useEffect(() => {
    document.title = "CEO — Dr. Murtaza Najabat Ali";
  }, []);

  useEffect(() => {
    // Splash timing and scroll lock
    document.body.classList.add("no-scroll");
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("no-scroll");
    }, 2000);
    return () => {
      clearTimeout(timer);
      document.body.classList.remove("no-scroll");
    };
  }, []);

  useEffect(() => {
    // Initialize Vanta background when content is visible
    if (!loading && vantaRef.current && !prefersReducedMotion) {
      vantaInstance.current = WAVES({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x1e90ff, // primary wave color
        shininess: 36.0,
        waveHeight: 16.0,
        waveSpeed: 0.35,
        zoom: 0.85,
        backgroundColor: 0xffffff,
      });
    }
    return () => {
      if (vantaInstance.current) {
        vantaInstance.current.destroy();
        vantaInstance.current = null;
      }
    };
  }, [loading, prefersReducedMotion]);

  useEffect(() => {
    // Load optional Lottie animation from public/ceo-animated.json
    const load = async () => {
      try {
        const res = await fetch("/ceo-animated.json", { cache: "no-store" });
        if (!res.ok) return; // silently ignore when file is missing
        const json = await res.json();
        setLottieData(json);
      } catch {
        // ignore
      }
    };
    load();
  }, []);

  return (
    <>
      {loading && (
        <div className="splash-screen">
          <img src={logo} alt="Logo" />
        </div>
      )}

      {!loading && (
        <div className="app-root">
          <div ref={vantaRef} id="vanta-bg" aria-hidden="true" />

          <main className="content">
            <section className="profile-card animate-in">
              <div className="avatar-ring">
                <img
                  src="/ceo.jpg"
                  onError={() => setImageError(true)}
                  alt="CEO Photo"
                  className="avatar"
                />
                {imageError && (
                  <img src={logo} alt="Company Logo" className="avatar fallback" />
                )}
              </div>

              <h1 className="name">Dr. Murtaza Najabat Ali</h1>
              <p className="title">Chief Executive Officer</p>

              <div className="cta-stack">
                <a
                  href="https://www.rmt-usa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-website"
                >
                  <FaGlobe className="icon" /> Company Website
                </a>
                <a
                  href="https://www.linkedin.com/in/prof-dr-murtaza-najabat-ali-ceng-uk-fimeche-pe-55a4469"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-linkedin"
                >
                  <FaLinkedin className="icon" /> LinkedIn Profile
                </a>
                <a
                  href="https://wa.me/923348558828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <FaWhatsapp className="icon" /> WhatsApp Chat
                </a>
              </div>
            </section>

            <section className="message-card animate-in delay-1">
              <header className="message-header">
                <span className="kicker">CEO Message</span>
                <h2 className="headline">Our Vision and Commitment</h2>
              </header>
              <p>
                At RMT USA, we believe in advancing engineering excellence and
                delivering measurable impact for our partners and communities.
                Our teams blend innovation with disciplined execution to create
                solutions that last.
              </p>
              <p>
                We invest in people and technology, uphold uncompromising ethics,
                and execute with accountability. Thank you for being a part of
                our journey.
              </p>

              {lottieData && (
                <div className="lottie-wrapper">
                  <LottiePlayer autoplay loop animationData={lottieData} />
                </div>
              )}
            </section>
          </main>
        </div>
      )}
    </>
  );
}
