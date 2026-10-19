
import type { Product } from '../../types/Product';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {

  // Formata o preço para reais
  const formattedPrice = product.price.toLocaleString(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL',
    }
  );

  return (
    <article className="product-card">

      {/* Imagem do produto */}
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />

        <span className="product-tag">
          Novidade
        </span>
      </div>

      {/* Informações do produto */}
      <div className="product-info">

        <h3>{product.name}</h3>

        <p className="product-color">
          {product.color}
        </p>

        <strong className="product-price">
          {formattedPrice}
        </strong>

        <a
          href="#contato"
          className="product-button"
        >
          Tenho interesse
        </a>

      </div>
    </article>
  );
}
