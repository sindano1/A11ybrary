class RemoveCodeFromCodes < ActiveRecord::Migration[6.1]
  def change
    remove_column :codes, :code
  end
end
