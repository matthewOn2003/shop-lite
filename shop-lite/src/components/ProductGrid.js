import products from '../data/products'

function ProductGrid() {


  return (
    <div className="row g-4">
      {products.map((product, idx) => (
        <div className="col-sm-6 col-md-4 col-lg-3" key={idx}>
          <div className="card h-100">
            <img
              src={`https://via.placeholder.com/150?text=${product.name}`}
              className="card-img-top"
              alt={product.name}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">RM {product.price}</p>
              <a href="#" className="btn btn-sm btn-outline-primary">加入购物车</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
