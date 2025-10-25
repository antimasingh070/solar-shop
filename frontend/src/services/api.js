const BASE_URL = "http://localhost:3001/api"

// services/api.js
export async function getProducts() {
  const res = await fetch("http://localhost:3001/api/products")
  const data = await res.json()
  console.log("API response:", data)  // <-- ye console check karo
  return data.products  // <-- make sure ye array return ho
}


export async function createProduct(product) {
  const res = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ product })
  })
  return res.json()
}

export async function updateProduct(id, product) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ product })
  })
  return res.json()
}

export async function deleteProduct(id) {
  await fetch(`${BASE_URL}/products/${id}`, { method: "DELETE" })
}
