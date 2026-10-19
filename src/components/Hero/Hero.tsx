
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-label">
            JÔ MAISON STYLE
          </span>

          <h1>
            Moda que
            <br />
            expressa você
          </h1>

          <p>
            Peças escolhidas para realçar seu estilo
            em todas as ocasiões.
          </p>

          <a href="#produtos" className="hero-button">
            VER CATÁLOGO →
          </a>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1000"
            alt="Editorial de moda feminina"
          />
        </div>
      </div>
    </section>
  );
}
