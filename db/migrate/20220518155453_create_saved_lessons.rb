class CreateSavedLessons < ActiveRecord::Migration[6.1]
  def change
    create_table :saved_lessons do |t|
      t.integer :user_lesson_id
      t.boolean :on_git
      t.string :code
      t.string :notes

      t.timestamps
    end
  end
end
