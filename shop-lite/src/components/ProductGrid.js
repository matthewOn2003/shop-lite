function ProductGrid({ products }) {
  return (
    <div className="row g-3">
      {products.map((product) => (
        <div className="col-6 col-sm-6 col-md-4 col-lg-3" key={product.id}>
          <div className="card h-100 shadow-sm">
            <div style={{
              width: '100%',
              paddingTop: '100%',  // 高度=宽度，保持1:1比例
              position: 'relative',
              overflow: 'hidden'
            }}>
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',       // 保持图片比例填充盒子，超出的部分裁剪
                  objectPosition: 'center top', // 图片内容对齐居中偏上
                }}
              />
            </div>
            <div className="card-body py-2 px-3">
              <h5 className="card-title fs-6 fs-sm-5 fs-md-4 mb-1">{product.name}</h5>
              <p className="card-text fs-6 fs-sm-6 fs-md-5 mb-2">RM {product.price}</p>
              <a href="#" className="btn btn-sm btn-outline-primary px-3 py-1">Add to Cart</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
