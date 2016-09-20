class Api::RecipeCategoriesController < ApplicationController
  before_action :set_recipe_category, only: [:show, :edit, :update, :destroy]

  # GET /recipe_categories.json
  def index
    render json: RecipeCategory.all
  end

  # GET /recipe_categories/1
  # GET /recipe_categories/1.json
  def show
    render json: @recipe_category
  end

  # # POST /recipe_categories
  # # POST /recipe_categories.json
  # def create
  #   @recipe_category = RecipeCategory.new(recipe_category_params)

  #   if @recipe_category.save
  #     render :show, status: :created, location: @recipe_category
  #   else
  #     render json: @recipe_category.errors, status: :unprocessable_entity
  #   end
  # end

  # # PATCH/PUT /recipe_categories/1
  # # PATCH/PUT /recipe_categories/1.json
  # def update
  #   if @recipe_category.update(recipe_category_params)
  #     render :show, status: :ok, location: @recipe_category
  #   else
  #     render json: @recipe_category.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /recipe_categories/1
  # # DELETE /recipe_categories/1.json
  # def destroy
  #   @recipe_category.destroy
  #   format.json { head :no_content }
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_recipe_category
      @recipe_category = RecipeCategory.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def recipe_category_params
      params.require(:recipe_category).permit(:name, :label)
    end
end
