class CreateUserLessons < ActiveRecord::Migration[6.1]
  def change
    create_table :user_lessons do |t|
      t.integer :user_id
      t.integer :lesson_id
      t.string :notes
      t.boolean :completed

      t.timestamps
    end
  end
end
