class AddAccessibleCodeToCodes < ActiveRecord::Migration[6.1]
  def change
    add_column :codes, :accessible_code, :string
  end
end
