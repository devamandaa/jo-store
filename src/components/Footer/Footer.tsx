
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="container footer-content">

        <div className="footer-brand">
          <h2>Jô Maison</h2>
          <span>STYLE</span>

          <p>
            Moda que expressa você.
            <br />
            Elegância e estilo em cada detalhe.
          </p>
        </div>

        <div className="footer-links">
          <h3>Links rápidos</h3>

          <a href="#inicio">Início</a>
          <a href="#categorias">Categorias</a>
          <a href="#novidades">Novidades</a>
          <a href="#produtos">Produtos</a>
        </div>

        <div className="footer-contact">
          <h3>Atendimento</h3>

          <p>
            Estamos aqui para ajudar você
            a encontrar o look perfeito.
          </p>

          <p>Instagram e WhatsApp</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Jô Maison Style.
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
