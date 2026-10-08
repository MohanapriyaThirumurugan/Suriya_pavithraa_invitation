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
      <div className="hero">
        <img src="/couple.jpg" alt="Bride and groom beside a flower pavilion and lotus pond" />
        <div className="over">
          <motion.p className="names script" {...h(0.5)}>Surya Weds Pavithraa</motion.p>
          <motion.div className="ev" {...h(1.0)}><h2 className="script">Reception</h2><p>Saturday, 31st October 2026</p><p className="t">At 7.00 PM Onwards</p></motion.div>
          <motion.div className="ev" {...h(1.5)}><h2 className="script">Muhurtham</h2><p>Sunday, 1st November 2026</p><p className="t">6.00 AM – 7.30 AM · Viruchiga Lagnam</p></motion.div>
          <motion.p className="ven" {...h(2.0)}><b>- Venue -</b>AGH Palace, Ambattur – Puzhal Road,<br />Surapet, Chennai – 66</motion.p>
        </div>
      </div>

      <section>
        <Reveal><h3 className="script">Counting down to the big day</h3><div className="line" /><Countdown /></Reveal>
      </section>

      <section className="alt">
        <Reveal><h3 className="script">Together with our families</h3><div className="line" />
          <p><b>Mr. T. Ramesh Kumar &amp; Mrs. R. Chithra</b><br />invite you to the marriage of their son</p></Reveal>
        <Reveal delay={0.1}><p className="who script">R. Surya Rajan</p><p className="sub">BCA, MBA · Senior Software Engineer, Agilisium, WTC, Chennai</p></Reveal>
        <Reveal delay={0.1}><p className="with">with</p></Reveal>
        <Reveal delay={0.1}><p className="who script">G. Pavithraa</p><p className="sub">B.Tech · Project Associate, Easy Solutions, Alwarpet, Chennai</p>
          <p className="sub" style={{ marginTop: 6 }}>D/o Mr. K.S. Ganesh &amp; Mrs. G. Bharathi</p></Reveal>
      </section>

      <section>
        <Reveal><h3 className="script">Wedding Programme</h3><div className="line" /></Reveal>
        {W.schedule.map((d) => (
          <Reveal key={d.day}>
            <p className="day">{d.day}</p>
            <ul>{d.items.map(([n, t]) => <li key={n}><b>{n}</b><span>{t}</span></li>)}</ul>
          </Reveal>
        ))}
      </section>

      <section className="alt">
        <Reveal><h3 className="script">Getting There</h3><div className="line" />
          <p><b>{W.venueName}</b><br />{W.venueLines[0]}<br />{W.venueLines[1]}</p>
          <a className="btn" href={W.mapsUrl} target="_blank" rel="noopener noreferrer">Open in Maps</a>
          <p className="sub" style={{ marginTop: 12 }}>{W.bus}</p>
          <p className="contacts">{W.contacts.map((c) => <a key={c.phone} href={`tel:+91${c.phone}`}>{c.name} · {c.phone}</a>)}</p>
          <p className="sub" style={{ marginTop: 14 }}>With best compliments from R. Nirmal Kumar</p></Reveal>
      </section>
      <footer className="foot script">Surya &amp; Pavithraa</footer>
    </main>
  );
}
