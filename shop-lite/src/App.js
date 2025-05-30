import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="container-fluid flex-grow-1 py-3">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <ProductGrid />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
