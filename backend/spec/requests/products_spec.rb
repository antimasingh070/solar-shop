require 'rails_helper'

RSpec.describe "Products API", type: :request do
  let!(:products) { Product.create([{name: "Solar Panel", sku: "SP001", price: 5000, stock: 10}]) }
  let(:product_id) { products.first.id }

  describe "GET /api/products" do
    it "returns all products" do
      get '/api/products'
      expect(response).to have_http_status(200)
      expect(JSON.parse(response.body)["products"].size).to eq(1)
    end
  end

  describe "GET /api/products/:id" do
    it "returns a product" do
      get "/api/products/#{product_id}"
      expect(response).to have_http_status(200)
      expect(JSON.parse(response.body)["id"]).to eq(product_id)
    end
  end

  describe "POST /api/products" do
    it "creates a product" do
      post "/api/products", params: { product: { name: "Inverter", sku: "INV01", price: 3500, stock: 5 } }
      expect(response).to have_http_status(201)
      expect(JSON.parse(response.body)["name"]).to eq("Inverter")
    end
  end

  describe "PATCH /api/products/:id" do
    it "updates a product" do
      patch "/api/products/#{product_id}", params: { product: { stock: 20 } }
      expect(response).to have_http_status(200)
      expect(JSON.parse(response.body)["stock"]).to eq(20)
    end
  end

  describe "DELETE /api/products/:id" do
    it "deletes a product" do
      delete "/api/products/#{product_id}"
      expect(response).to have_http_status(204)
    end
  end
end
