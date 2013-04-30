class AddAdditionalAttributesToUser < ActiveRecord::Migration
  def change
    add_column :users, :firstname, :string
    add_column :users, :lastname, :string
    add_column :users, :address, :string
    add_column :users, :about_me, :string
    add_column :users, :personal_website, :string
  end
end
