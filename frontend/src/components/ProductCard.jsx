export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>SKU: {product.sku}</p>
      <p>Price: ₹{product.price}</p>
      <p>Stock: {product.stock}</p>
      <div className="card-buttons">
        <button onClick={() => onEdit(product)}>Edit</button>
        <button onClick={() => onDelete(product.id)} style={{ backgroundColor: '#dc2626' }}>Delete</button>
      </div>
    </div>
  )
}
