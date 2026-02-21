import React from "react";
import { Play, Users, BookOpen, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#03594E] via-[#03594E] to-[#1AB69D] min-h-[50vh] md:min-h-screen flex flex-col">
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 h-40 sm:w-72 sm:h-72 bg-[#1AB69D]/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-56 h-56 sm:w-96 sm:h-96 bg-[#F8C62F]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="flex-1 flex items-center relative z-10">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-15">
            <div className="fade-in-animation mb-10 flex flex-col gap-5 sm:gap-6 lg:gap-8 text-center lg:text-left items-center lg:items-start">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Award className="w-3.5 h-3.5 text-[#F8C62F] flex-shrink-0" />
                <span className="text-white/90 text-xs sm:text-sm font-medium whitespace-nowrap">
                  Top-Rated Learning Platform
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Discover, Learn,
                <br />
                and Grow Smarter
                <br />
                with{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#F8C62F]">Graphura</span>
                  <span className="absolute left-0 bottom-1 sm:bottom-2 w-full h-3 sm:h-4 bg-[#F8C62F]/30 -z-0 transform -skew-x-12" />
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-white/80 text-base sm:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
                Graphura offers expert-led courses, modern tools, and a
                supportive environment to help learners grow, achieve success,
                and build a brighter future.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center lg:justify-start">
                <button
                  onClick={() => navigate("/hackathons")}
                  className="group cursor-pointer bg-[#F8C62F] text-[#0C121D] px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold hover:bg-[#e0b429] transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#F8C62F]/40 flex items-center justify-center gap-2"
                >
                  Join Hackathon
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => navigate("/hackathons")}
                  className="bg-white/10 cursor-pointer backdrop-blur-sm text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  Explore Upcoming Battles
                </button>
              </div>
            </div>

            {/* ── RIGHT: Image + Floating Cards ── */}
            {/*
              KEY FIX: This column has an explicit fixed height (520px).
              All absolute children are positioned relative to THIS box only,
              using percentage-based values — so they never drift regardless
              of viewport width (1024px, 1280px, 1440px, etc.)
            */}
            <div
              className="hidden md:block relative mx-auto lg:mx-0"
              style={{ width: "100%", maxWidth: "520px", height: "520px" }}
            >
              {/* Ambient glow behind image */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-72 h-72 lg:w-80 lg:h-80 bg-[#1AB69D]/30 rounded-full blur-3xl animate-pulse" />
              </div>

              {/* Spinning decorative ring */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="border-4 border-white/10 rounded-full spin-slow-animation"
                  style={{ width: "350px", height: "350px" }}
                />
              </div>

              {/* Person image — centred in the fixed box */}
              <div className="absolute inset-0 flex items-end justify-center z-10 pb-0 -mb-10">
                <img
                  src="https://ordainit.com/html/educeet/educeet/assets/img/hero/hero-1-1.png"
                  alt="Student learning"
                  style={{
                    height: "500px",
                    objectFit: "contain",
                  }}
                  className="drop-shadow-2xl"
                />
              </div>

              {/* ── Card 1: Video Courses — top-right corner ── */}
              <div
                className="float-card absolute z-20 bg-white rounded-2xl shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform cursor-default"
                style={{
                  top: "5%",
                  right: "0",
                  padding: "12px 16px",
                  width: "195px",
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#03594E] to-[#1AB69D] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <Play className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-medium block">
                    Video Courses
                  </span>
                  <p className="text-xl font-bold text-[#0C121D]">
                    8<span className="text-[#F8C62F]">+</span>
                  </p>
                </div>
              </div>

              {/* ── Card 2: Success Rate — right-centre ── */}
              <div
                className="float-card-mid absolute z-20 bg-white rounded-2xl shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform cursor-default"
                style={{
                  top: "46%",
                  right: "0",
                  padding: "12px 16px",
                  width: "175px",
                }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#1AB69D] to-[#03594E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">
                    Success Rate
                  </span>
                  <p className="text-lg font-bold text-[#0C121D]">98%</p>
                </div>
              </div>

              {/* ── Card 3: Active Students — bottom-left corner ── */}
              <div
                className="float-card-slow absolute z-20 bg-white rounded-2xl shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform cursor-default"
                style={{
                  bottom: "5%",
                  left: "0",
                  padding: "12px 16px",
                  width: "195px",
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#F8C62F] to-[#FE8235] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <Users className="w-5 h-5 text-[#0C121D]" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-medium block">
                    Active Students
                  </span>
                  <p className="text-xl font-bold text-[#0C121D]">
                    15k<span className="text-[#F8C62F]">+</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 C360,100 720,0 1080,50 C1200,65 1320,80 1440,80 L1440,100 L0,100 Z"
            fill="white"
            fillOpacity="0.1"
          />
          <path
            d="M0,70 C360,30 720,90 1080,60 C1200,50 1320,40 1440,50 L1440,100 L0,100 Z"
            fill="white"
            fillOpacity="0.05"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Three cards with staggered timing so they never sync up */
        .float-card {
          animation: float 3s ease-in-out infinite;
        }
        .float-card-mid {
          animation: float 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .float-card-slow {
          animation: float 3.5s ease-in-out infinite;
          animation-delay: 1s;
        }

        .spin-slow-animation {
          animation: spin-slow 20s linear infinite;
        }
        .fade-in-animation {
          animation: fade-in 1s ease-out both;
        }
      `}</style>
    </section>
  );
}
