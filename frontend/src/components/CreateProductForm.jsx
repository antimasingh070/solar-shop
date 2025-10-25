import { useState } from "react"
import { createProduct } from "../services/api"

export default function CreateProductForm({ onCreated, onClose }) {
  const [form, setForm] = useState({ name: "", sku: "", price: "", stock: "", description: "" })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    const newProduct = await createProduct(form)
    onCreated(newProduct)
    onClose()
  }

  return (
    <div style={{ border: "1px solid #333", padding: 20, margin: 20, borderRadius: 8, width: 300 }}>
      <h3>Create Product</h3>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} /><br />
        <input name="sku" placeholder="SKU" value={form.sku} onChange={handleChange} /><br />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} /><br />
        <input name="stock" placeholder="Stock" value={form.stock} onChange={handleChange} /><br />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} /><br />
        <button type="submit">Create</button>
        <button type="button" onClick={onClose} style={{ marginLeft: 10 }}>Cancel</button>
      </form>
    </div>
  )
}
