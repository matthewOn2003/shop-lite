import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import products from './data/products';

function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [loading, setLoading] = useState(false);

  const handleFilter = (selectedCategories) => {
    setLoading(true);

    setTimeout(() => {
      if (selectedCategories.length === 0) {
        setFilteredProducts(products);
      } else {
        const filtered = products.filter((product) =>
          selectedCategories.includes(product.category)
        );
        setFilteredProducts(filtered);
      }
      setLoading(false);
    }, 500); // 模拟延迟加载
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="container-fluid flex-grow-1 py-3">
        <div className="row">
          <div className="col-md-2">
            <Sidebar onFilter={handleFilter} />
          </div>
          <div className="col-md-9">
            {loading ? (
              <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <ProductGrid products={filteredProducts} />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
