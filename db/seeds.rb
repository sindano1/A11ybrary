# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'faker'

puts 'seeding lessons'

    Lesson.create!(
        title: "Headers Lesson", 
        accessibility_features: "none",
        has_transcript: false,
        transcript: "none",
        content: "lorem ipsum",
        lesson_type: "Headers",
    )

    Lesson.create!(
        title: "Contrast Lesson", 
        accessibility_features: "none",
        has_transcript: false,
        transcript: "none",
        content: "lorem ipsum",
        lesson_type: "Contrast"
    )

    Lesson.create!(
        title: "ARIA Lesson", 
        accessibility_features: "none",
        has_transcript: false,
        transcript: "none",
        content: "lorem ipsum",
        lesson_type: "ARIA"
    )

puts 'lessons seeded'


puts 'Seeding users'

    User.create!(
        username: "sarah",
        password: "password",
        email: "email@email.com",
        is_admin: true
    )

    User.create!(
        username: "brian",
        password: "password",
        email: "email@email.com",
        is_admin: false
    )

    User.create!(
        username: "chett",
        password: "password",
        email: "email@email.com",
        is_admin: false
    )

puts 'users Seeded'


puts "users taking lessons"
User.all.each do |user|
#   rand(1..8).times do
#     # get a random book
    # lesson = Lesson.find(Lesson.pluck(:id).sample)
   
        UserLesson.create!(
            user_id: user.id, 
            lesson_id: 1, 
            completed: [true, false].sample, 
            notes: "doller sit"
        )
        UserLesson.create!(
            user_id: user.id, 
            lesson_id: 2, 
            completed: [true, false].sample, 
            notes: "doller sit"
        )
        UserLesson.create!(
            user_id: user.id, 
            lesson_id: 3, 
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
Code.create!(
    # Headers lesson sandbox
    lesson_id: 2,
    language: "ReactJS",
    accessible_code: "https://codesandbox.io/s/headerslesson1-accessible-o8z2fh",
    inaccessible_code: "https://codesandbox.io/s/headerslesson1-inaccessible-5t7j5b"
)
Code.create!(
    # Headers lesson sandbox
    lesson_id: 3,
    language: "ReactJS",
    accessible_code: "https://codesandbox.io/s/headerslesson1-accessible-o8z2fh",
    inaccessible_code: "https://codesandbox.io/s/headerslesson1-inaccessible-5t7j5b"
)
puts "code seeded"
