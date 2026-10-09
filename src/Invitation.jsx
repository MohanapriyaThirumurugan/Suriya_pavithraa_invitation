import { motion } from "framer-motion";
import { WEDDING as W } from "./data.js";
import Countdown from "./Countdown.jsx";

const rise = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };
const Reveal = ({ children, delay = 0, className }) => (
  <motion.div className={className} variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay, ease: "easeOut" }}>
    {children}
  </motion.div>
);

export default function Invitation() {
  const h = (d) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d } });
  return (
    <main className="card">

       {/* TEXT AFTER THE PHOTO */}
      <section className="wedding-intro">
        <div className="wedding-content">
          <Reveal>
            <img src="/ganesha.png" alt="Lord Ganesha emblem" className="ganesha-emblem" />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="intro">
              As our families unite and a new chapter begins,
              we warmly invite you to share our happiness.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="wedding-heading">
              <span className="ornament">✦ ───── ✦ ───── ✦</span>
              <h2>The Wedding Celebration of</h2>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="names script">
              Surya <span className="ampersand">&amp;</span> Pavithraa
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="wedding-date">
              <span className="date-line"></span>
              <p>1 November 2026</p>
              <span className="date-line"></span>
            </div>
          </Reveal>
        </div>
      </section>
   

      {/* PHOTO ONLY */}
      <div className="hero">
        <img src="/couple.png" alt="Surya and Pavithraa" />
      </div>
         <section>
        <Reveal><h3 className="script">Our Forever Begins Soon</h3><div className="line" /><Countdown /></Reveal>
      </section>

      <section>
        <Reveal><h3 className="script">The Celebration</h3><div className="line" /></Reveal>
        {W.schedule.map((d) => (
          <Reveal key={d.day}>
            <p className="day">{d.day}</p>
            <ul>{d.items.map(([n, t]) => <li key={n}><b>{n}</b><span>{t}</span></li>)}</ul>
          </Reveal>
        ))}
      </section>

      <section className="alt">
        <Reveal><h3 className="script">Where Our Forever Begins</h3><div className="line" />
          <p><b>{W.venueName}</b><br />{W.venueLines[0]}<br />{W.venueLines[1]}</p>
          <a className="btn" href={W.mapsUrl} target="_blank" rel="noopener noreferrer">Open in Maps</a>
        <br></br>
          
          </Reveal>

      </section>

<footer className="foot">
  <div className="footer-ornament">⌁ ✦ ⌁</div>

  <p className="footer-message">
    Your presence and blessings
    <br />
    will make our celebration
    <br />
    truly memorable.
  </p>

  <p className="footer-with-love">With Love</p>

  <p className="footer-names script">
    Surya <span>&amp;</span> Pavithraa
  </p>

  <a
    className="rsvp-button"
    href="https://wa.me/917845414826?text=Hello%20Surya%20%26%20Pavithraa%2C%20thank%20you%20for%20the%20invitation!%20We%20would%20love%20to%20RSVP%20for%20your%20wedding."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="RSVP with love on WhatsApp"
  >
    <span className="rsvp-icon">♡</span>
    RSVP WITH LOVE
    <span className="rsvp-arrow">↗</span>
  </a>
</footer>
    </main>
  );
}
