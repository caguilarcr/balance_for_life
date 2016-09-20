# string :name
# string :image

class RecipeCategory < ActiveRecord::Base
  has_many :recipe
  validates :name, :presence => true

  mount_uploader :image, AttachedImageUploader
end
