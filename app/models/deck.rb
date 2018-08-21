class Deck < ApplicationRecord
    has_many :cards 
    belongs_to :user
    belongs_to :format 

    validates :name, presence: true
    
end
