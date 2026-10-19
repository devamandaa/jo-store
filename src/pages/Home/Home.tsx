
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';

import './Home.css';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Categories />
      </main>

      <Footer />
    </>
  );
}
