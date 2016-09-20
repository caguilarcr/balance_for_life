class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :name
      t.text :ingredients
      t.text :instructions
      t.text :nutrition_info
      t.string :image
      t.belongs_to :recipe_category, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
