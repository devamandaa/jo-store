
import './Header.css';

export default function Header() {
  return (
    <>
      <div className="top-bar">
        Moda que expressa você • Atendimento pelo WhatsApp
      </div>

      <header className="header">
        <div className="container header-content">
          <a href="#" className="brand">
            Jô Maison
            <span>STYLE</span>
          </a>

          <nav className="nav">
            <a href="#inicio">Início</a>
            <a href="#categorias">Categorias</a>
            <a href="#novidades">Novidades</a>
            <a href="#produtos">Produtos</a>
          </nav>

          <div className="header-actions">
            <a href="#produtos" aria-label="Ver produtos">
              ♡
            </a>
            <a href="#produtos" aria-label="Ver catálogo">
              🛍
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
