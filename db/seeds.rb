# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

puts 'seeding lessons'
5.times do
    Lesson.create!(
        title: `headers lesson #{i += 1}`, 
        accessibility_features: "none",
        has_transcript: [true, false].sample,
        transcript: "none",
        content: "lorem ipsum",
        lesson_type: "headers"
    )
end
3.times do
    Lesson.create!(
        title: `contrast lesson #{i += 1}`, 
        accessibility_features: "none",
        has_transcript: [true, false].sample,
        transcript: "none",
        content: "lorem ipsum",
        lesson_type: "contrast"
    )
end
puts 'lessons seeded'


puts 'Seeding users'
5.times do
    User.create!(
        username: Faker::Name.first_name ,
        password: "password",
        email: Faker::Internet.email
    )
end
puts 'users Seeded'


puts "users taking lessons"
User.all.each do |user|
  rand(1..8).times do
    # get a random book
    lesson = Lesson.find(Lesson.pluck(:id).sample)

    UserLesson.create!(
        user_id: user.id, 
        lesson_id: lesson.id, 
        completed: [true, false].sample, 
        notes: "doller sit"
    )
  end
  puts "user_lessons seeded!"


puts "seeding code"
Code.create!(
    # Headers lesson sandbox
    lesson_id: 1,
    language: "ReactJS",
    accessible_code: "https://codesandbox.io/s/headerslesson1-accessible-o8z2fh",
    inaccessible_code: "https://codesandbox.io/s/headerslesson1-inaccessible-5t7j5b"
)
puts "code seeded"
end