class Api::RecipesController < ApplicationController
  before_action :set_recipe, only: [:show]

  # GET /api/recipes
  # GET /api/recipes.json
  def index
    recipes = []

    if params[:category]
      recipes = Recipe.where(recipe_category_id: params[:category])
    else
      recipes = Recipe.all
    end

     # include steps???
    render json: recipes
  end

  # GET /api/recipes/1
  # GET /api/recipes/1.json
  def show
    render json: @recipe
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_recipe
      @recipe = Recipe.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def recipe_params
      params.require(:recipe).permit(:name, :label, :yields, :nutrition_info, :instructions, :has_steps)
    end
end
