import { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import CreateProductForm from './components/CreateProductForm'
import { getProducts, deleteProduct } from './services/api'
import './index.css'

function App() {
  const [products, setProducts] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)

  const fetchProducts = async () => {
    const productsArray = await getProducts()
    setProducts(productsArray)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleProductCreated = (newProduct) => {
    setProducts([...products, newProduct])
    setShowForm(false)
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id)
      setProducts(products.filter(p => p.id !== id))
    }
  }

  return (
    <div className="dashboard">
      <h1>Solar Shop Dashboard</h1>
      <button onClick={() => setShowForm(true)}>Add New Product</button>

      {showForm && (
        <CreateProductForm
          product={editingProduct}
          onCreated={handleProductCreated}
          onClose={() => {
            setShowForm(false)
            setEditingProduct(null)
          }}
        />
      )}

      <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  )
}

export default App
