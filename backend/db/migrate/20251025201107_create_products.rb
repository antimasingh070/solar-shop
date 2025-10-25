class CreateProducts < ActiveRecord::Migration[7.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :sku
      t.decimal :price
      t.integer :stock
      t.text :description

      t.timestamps
    end
  end
end
