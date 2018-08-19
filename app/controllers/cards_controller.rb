class CardsController < ApplicationController
    before_action :set_deck

    def index
      @cards = @deck.cards
  
      respond_to do |format|
        format.html {render 'index.html', :layout => false}
        format.js {render 'index.js', :layout => false}
      end
    end
  
    def create
      @card = @deck.cards.build(cards_params)
      if @card.save
        render 'create.js', :layout => false
      else
        render "decks/show"
      end
    end
  
  
    private
      def set_deck
        @deck = deck.find(params[:deck_id])
      end
  
      def cards_params
        params.require(:card).permit(:name, :quantity, :id, :deck_id)
      end
end
