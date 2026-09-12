"use client";

import "./globals.css";

export default function Home() {
  return (
    <main>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Hundred Islands</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#activities">Activities</a>
          <a href="#gallery">Gallery</a>
          <a href="#location">Location</a>
        </div>
      </nav>

      {/* 1. HOME */}
      <section id="home" className="hero">
        <div className="hero-grid">

          <div className="hero-copy">
            <span className="eyebrow">Pangasinan, Philippines</span>

            <h1>Hundred Islands</h1>

            <p className="hero-text">
              Over a hundred limestone islands scattered across turquoise
              water off Alaminos City — a stretch of coast built for
              island hopping, quiet coves, and long afternoons in the sea.
            </p>

            <a href="#about" className="btn btn-solid">
              Explore the islands
            </a>

            <div className="hero-stats">
              <div>
                <strong>124</strong>
                <span>Islands</span>
              </div>
              <div>
                <strong>Alaminos</strong>
                <span>City, Pangasinan</span>
              </div>
              <div>
                <strong>~40 min</strong>
                <span>Boat from the mainland</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="frame"></div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLby06QeXfWYDWsTq9je1YFl8bCjhBLGDV72cgcW3aKw&s=10"
              alt="Limestone islands rising out of turquoise water"
            />
          </div>

        </div>
      </section>

      {/* 2. ABOUT */}
      <section id="about" className="about section">
        <div className="about-grid">

          <div className="about-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTux5VC4bkcHQWff-TvdmTIOSDahg1zFNeac4wyiHWPMQ&s=10"
              alt="Beautiful tropical island"
            />
            <div className="tag">
              Part of the <strong>Hundred Islands National Park</strong>,
              the Philippines&apos; first national marine park.
            </div>
          </div>

          <div className="about-content">
            <span className="kicker">The park</span>

            <h2>A national park made of islands</h2>

            <p>
              Hundred Islands National Park is one of Pangasinan&apos;s most
              recognizable landmarks — a spread of small limestone islands
              rising out of shallow, clear water, shaped over centuries by
              wind and tide.
            </p>

            <p>
              From Alaminos City, boats reach the main islands in under
              an hour. Visitors move between them for swimming, sightseeing,
              and short hikes to viewpoints looking out over the whole bay.
            </p>

            <a href="#activities" className="btn btn-solid">
              See what to do
            </a>
          </div>

        </div>
      </section>

      {/* 3. ACTIVITIES */}
      <section id="activities" className="activities section">

        <div className="activities-head">
          <div className="section-head">
            <span className="kicker">On the water</span>
            <h2>Things to do</h2>
            <p>
              Three ways to spend a day among the islands, from boat to
              shoreline.
            </p>
          </div>
          <span className="scroll-hint">Scroll to see more →</span>
        </div>

        <div className="cards">

          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjRuWe1gEiclwtD8GlmQtsb_z48c3exg4rzL4f0PEAwA&s=10"
              alt="Island hopping"
            />
            <div className="card-content">
              <h3>Island hopping</h3>
              <p>
                Move between the smaller islands by boat, stopping wherever
                the water looks worth jumping into.
              </p>
              <a href="#gallery">See the islands →</a>
            </div>
          </div>

          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOownj-lZvgsLSr_qwE5CiGJeF05cmoJ_SYXtVF6zB-g&s=10"
              alt="Swimming"
            />
            <div className="card-content">
              <h3>Swimming</h3>
              <p>
                Calm, shallow coves make most of the islands easy places
                to swim, wade, or just sit in the water.
              </p>
              <a href="#gallery">See the coves →</a>
            </div>
          </div>

          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQbc7trtgi4TFHyf8TONIW17GrbjpLP5wMeKD1KIcuVA&s=10"
              alt="Adventure"
            />
            <div className="card-content">
              <h3>Viewpoint hikes</h3>
              <p>
                Short climbs on a few islands lead to lookout points over
                the surrounding bay and neighboring islands.
              </p>
              <a href="#location">Plan a visit →</a>
            </div>
          </div>

        </div>

      </section>

      {/* 4. GALLERY */}
      <section id="gallery" className="gallery section">

        <div className="section-head">
          <span className="kicker">A closer look</span>
          <h2>Gallery</h2>
          <p>
            A glimpse of the water, the coastline, and the islands
            themselves.
          </p>
        </div>

        <div className="gallery-grid">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflTzZQBJfQGQYXbZ5_hv-PO78e9YTVp7jAeVq3FVgMA&s=10"
            alt="Beach"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw143nrUuNk3n-XzDGKW7C2CwbuURWdgVX57WAS2pqfA&s=10"
            alt="Island"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1iLxSYCTy7NPxxfbJ9EE9EzZQt9h2-OLDvhhw_Pov5w&s=10"
            alt="Adventure"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-SXVLmfIkKbeZ572q-tT9sR55lCLA4NL5GR1TNa_02g&s=10"
            alt="Tropical beach"
          />
        </div>

      </section>

      {/* 5. LOCATION */}
      <section id="location" className="location">
        <div className="location-grid">

          <div className="location-panel">
            <span className="kicker">Getting there</span>
            <h2>Visit Hundred Islands</h2>
            <p>
              Hundred Islands National Park sits just off Alaminos City,
              about a four-hour drive from Manila. Boats to the islands
              leave from Lucap Wharf.
            </p>

            <div className="location-box">
              <h3>Hundred Islands National Park</h3>
              <p>Alaminos City, Pangasinan, Philippines</p>
            </div>

            <a
              href="https://www.google.com/maps/search/Hundred+Islands+National+Park+Alaminos+Pangasinan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="location-image">
            <img
              src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=90"
              alt="Coastline near Alaminos City"
            />
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div>
            <h2>Hundred Islands</h2>
            <p className="tagline">Alaminos City, Pangasinan</p>
          </div>
          <p className="copy">© 2026 Hundred Islands Tourism</p>
        </div>
      </footer>

    </main>
  );
}