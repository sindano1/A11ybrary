class AddInaccessibleCodeToCodes < ActiveRecord::Migration[6.1]
  def change
    add_column :codes, :inaccessible_code, :string
  end
end
