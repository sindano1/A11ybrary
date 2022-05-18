class CreateLessons < ActiveRecord::Migration[6.1]
  def change
    create_table :lessons do |t|
      t.string :title
      t.string :accessibility_features
      t.string :type
      t.boolean :has_transcript
      t.string :transcript
      t.string :content

      t.timestamps
    end
  end
end
