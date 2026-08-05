"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BANNER_KEY = "katenet_live_v3_alpha";

export default function KatenetBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(BANNER_KEY)) {
      setVisible(true);
      document.documentElement.style.setProperty("--banner-offset", "40px");
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(BANNER_KEY, "1");
    document.documentElement.style.setProperty("--banner-offset", "0px");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "#0a0a0a",
        borderBottom: "1px solid rgba(196, 237, 95, 0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>

        <span style={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#C4ED5F",
        }}>
          Katenet Live
        </span>

        <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.625rem" }}>·</span>

        <span 
          className="kate-desc"
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: "0.8125rem",
            color: "rgba(255,255,255,0.6)",
          }}>
          v3.0.0-alpha is now live - DPoS is active.
        </span>

        <Link
          href="/katenet"
          style={{
            fontFamily: "monospace",
            fontSize: "0.6875rem",
            color: "#C4ED5F",
            textDecoration: "none",
            borderBottom: "1px solid rgba(196,237,95,0.4)",
            paddingBottom: 1,
            whiteSpace: "nowrap",
          }}
        >
          Learn more
        </Link>
      </div>

      <button
        onClick={dismiss}
        aria-label="Dismiss"
        style={{
          position: "absolute",
          right: 16,
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "rgba(255,255,255,0.3)",
          fontSize: "1rem",
          lineHeight: 1,
          padding: "4px 8px",
          transition: "color 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
      >
        ✕
      </button>

      <style>{`
        @keyframes katePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
        @media (max-width: 520px) {
          .kate-desc { display: none !important; }
        }
      `}</style>
    </div>
  );
}
