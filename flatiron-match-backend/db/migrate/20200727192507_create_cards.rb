class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.belongs_to :deck, null: false, foreign_key: true
      t.string :cardside

      t.timestamps
    end
  end
end
