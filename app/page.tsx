export default function Home() {
  const services = [
    { icon: '🏠', title: 'Garage Floor Epoxy', desc: 'Transform your garage into a showroom-quality space with our premium metallic and flake epoxy systems.' },
    { icon: '🏢', title: 'Commercial Floors', desc: 'High-traffic commercial flooring solutions built to last. Warehouses, showrooms, restaurants, and more.' },
    { icon: '✨', title: 'Decorative Concrete', desc: 'Stamped, stained, and polished concrete surfaces that elevate any space inside or out.' },
    { icon: '⚡', title: 'Metallic Epoxy', desc: 'Stunning metallic effects with unlimited depth and brilliance. No two floors are ever the same.' },
    { icon: '🎨', title: 'Flake Systems', desc: 'Durable color flake broadcast systems — perfect for garages, basements, and utility spaces.' },
  ]

  const reviews = [
    { name: 'Mike T.', stars: 5, text: 'Absolutely stunning work. My garage looks better than my living room now. Highly recommend!' },
    { name: 'Sarah K.', stars: 5, text: 'Professional, clean, and fast. They finished our warehouse floor in two days. Zero issues.' },
    { name: 'Carlos R.', stars: 5, text: 'I got 4 quotes. These guys were the most professional and delivered exactly what they promised.' },
  ]

  const gold = '#f59e0b'
  const dark = '#0a0a0f'
  const surface = '#13131f'
  const border = '#1e2035'

  return (
    <div style={{ background: dark, minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(10,10,15,0.95)', borderBottom: `1px solid ${border}`, backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, background: gold, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 18, color: dark }}>E</div>
            <span style={{ fontWeight: 800, fontSize: 17, color: '#f1f5f9', letterSpacing: '-0.3px' }}>WPB Epoxy Pros</span>
          </div>
          <div style={{ display: 'flex', gap: 32, fontSize: 14, color: '#94a3b8' }}>
            <a href="#services" style={{ color: '#94a3b8', textDecoration: 'none' }}>Services</a>
            <a href="#reviews" style={{ color: '#94a3b8', textDecoration: 'none' }}>Reviews</a>
            <a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact</a>
          </div>
          <a href="tel:5615550100" style={{ background: gold, color: dark, padding: '10px 20px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
            Call Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(https://media.base44.com/images/public/6a459b058362a6c185417592/975b9b014_generated_image.png)`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,10,15,0.95) 40%, rgba(10,10,15,0.4))' }} />
        <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,158,11,0.12)', border: `1px solid rgba(245,158,11,0.3)`, borderRadius: 99, padding: '6px 16px', fontSize: 13, color: gold, fontWeight: 600, marginBottom: 24 }}>
            ⭐ #1 Rated Epoxy Contractor in West Palm Beach
          </div>
          <h1 style={{ fontSize: 'clamp(36px,6vw,72px)', fontWeight: 900, lineHeight: 1.05, margin: '0 0 20px', maxWidth: 700, letterSpacing: '-2px' }}>
            Premium Epoxy<br /><span style={{ color: gold }}>Flooring Solutions</span>
          </h1>
          <p style={{ fontSize: 18, color: '#94a3b8', margin: '0 0 40px', maxWidth: 520, lineHeight: 1.6 }}>
            West Palm Beach&apos;s most trusted epoxy flooring contractor. Professional installation, lifetime results. Garages, commercial spaces, and everything in between.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#contact" style={{ background: gold, color: dark, padding: '16px 32px', borderRadius: 10, fontWeight: 800, fontSize: 16, textDecoration: 'none', display: 'inline-block' }}>
              Get a Free Quote
            </a>
            <a href="tel:5615550100" style={{ background: 'transparent', color: '#f1f5f9', padding: '16px 32px', borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: 'none', border: `1px solid ${border}`, display: 'inline-block' }}>
              📞 (561) 555-0100
            </a>
          </div>
          <div style={{ display: 'flex', gap: 40, marginTop: 56, flexWrap: 'wrap' }}>
            {[['500+', 'Floors Installed'], ['10+', 'Years Experience'], ['100%', 'Satisfaction Rate']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontSize: 36, fontWeight: 900, color: gold }}>{n}</div>
                <div style={{ fontSize: 13, color: '#64748b', marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${border}` }}>
          <img src="https://media.base44.com/images/public/6a459b058362a6c185417592/975b9b014_generated_image.png" alt="Premium epoxy floor transformation" style={{ width: '100%', display: 'block', maxHeight: 480, objectFit: 'cover' }} />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '80px 24px', background: surface }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ color: gold, fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>What We Do</div>
            <h2 style={{ fontSize: 40, fontWeight: 900, margin: 0, letterSpacing: '-1px' }}>Our Services</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {services.map((s) => (
              <div key={s.title} style={{ background: dark, borderRadius: 12, padding: 28, border: `1px solid ${border}` }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ margin: '0 0 10px', fontSize: 18, fontWeight: 700, color: '#f1f5f9' }}>{s.title}</h3>
                <p style={{ margin: 0, color: '#64748b', fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ color: gold, fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Testimonials</div>
            <h2 style={{ fontSize: 40, fontWeight: 900, margin: 0, letterSpacing: '-1px' }}>What Clients Say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {reviews.map((r) => (
              <div key={r.name} style={{ background: surface, borderRadius: 12, padding: 28, border: `1px solid ${border}` }}>
                <div style={{ color: gold, fontSize: 18, marginBottom: 12 }}>{'★'.repeat(r.stars)}</div>
                <p style={{ margin: '0 0 16px', color: '#cbd5e1', lineHeight: 1.6, fontSize: 15 }}>&quot;{r.text}&quot;</p>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#f1f5f9' }}>— {r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '80px 24px', background: surface }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: gold, fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Free Estimate</div>
          <h2 style={{ fontSize: 40, fontWeight: 900, margin: '0 0 12px', letterSpacing: '-1px' }}>Get a Free Quote</h2>
          <p style={{ color: '#64748b', marginBottom: 40, lineHeight: 1.6 }}>Ready to transform your floors? Call us or send a message — we respond within 1 hour.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <a href="tel:5615550100" style={{ background: gold, color: dark, padding: '18px', borderRadius: 10, fontWeight: 800, fontSize: 18, textDecoration: 'none', display: 'block' }}>
              📞 Call (561) 555-0100
            </a>
            <a href="mailto:info@wpbepoxypros.com" style={{ background: dark, color: '#f1f5f9', padding: '16px', borderRadius: 10, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: `1px solid ${border}`, display: 'block' }}>
              ✉️ info@wpbepoxypros.com
            </a>
            <p style={{ color: '#475569', fontSize: 13, margin: 0 }}>Serving West Palm Beach, Boca Raton, Delray Beach, Palm Beach Gardens, and all of Palm Beach County.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${border}`, padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ color: '#334155', fontSize: 13 }}>
          © 2026 West Palm Beach Epoxy Pros · All rights reserved · Built by <span style={{ color: gold }}>Strategic Minds AI</span>
        </div>
      </footer>

    </div>
  )
}
