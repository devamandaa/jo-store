
import './Categories.css';

const categories = [
  {
    id: 1,
    name: 'Vestidos',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400'
  },
  {
    id: 2,
    name: 'Conjuntos',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400'
  },
  {
    id: 3,
    name: 'Blusas',
    image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=400'
  },
  {
    id: 4,
    name: 'Calças',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400'
  },
  {
    id: 5,
    name: 'Acessórios',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400'
  }
];

export default function Categories() {
  return (
    <section className="categories container" id="categorias">
      <h2 className="section-title">Categorias</h2>

      <div className="categories-grid">
        {categories.map((category) => (
          <a
            href="#produtos"
            className="category-item"
            key={category.id}
          >
            <div className="category-image">
              <img
                src={category.image}
                alt={category.name}
              />
            </div>

            <span>{category.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
