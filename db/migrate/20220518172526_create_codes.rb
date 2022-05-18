class CreateCodes < ActiveRecord::Migration[6.1]
  def change
    create_table :codes do |t|
      t.integer :lesson_id
      t.string :code
      t.string :language

      t.timestamps
    end
  end
end
