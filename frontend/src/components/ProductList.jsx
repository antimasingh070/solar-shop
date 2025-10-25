import ProductCard from './ProductCard'

export default function ProductList({ products, onEdit, onDelete }) {
  if (!products || products.length === 0) return <p>No products found</p>

  return (
    <div className="product-grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  )
}
