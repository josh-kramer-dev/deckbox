class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :name
      t.integer :quantity
      t.integer :deck_id
      t.integer :format_id
      t.timestamps
    end
  end
end
