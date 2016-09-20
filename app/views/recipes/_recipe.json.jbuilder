json.extract! recipe, :id, :name, :ingredients, :instructions, :nutrition_info, :image, :recipe_category_id, :created_at, :updated_at
json.url recipe_url(recipe, format: :json)