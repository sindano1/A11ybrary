class ChangeColumnsInLessons < ActiveRecord::Migration[6.1]
  def change
    remove_column :lessons, :type
    add_column :lessons, :lesson_type, :string
    
  end
end
