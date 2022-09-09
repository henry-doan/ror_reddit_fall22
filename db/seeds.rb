# seed file is for populating the db
# use active record -> sql to apply to the db

# we need to reset before we create 
Topic.delete_all
Sub.delete_all 

# Sub.create(title: 'Food')
# Sub.create(title: 'Travel')
# Sub.create(title: 'Tech')

5.times do
  @sub = Sub.create(
    # faker helps out with giving fake data
    title: Faker::Games::SuperMario.character
  )

  3.times do
    Topic.create(
      title: Faker::Games::SuperMario.game,
      body: Faker::Games::SuperMario.location,
      sub_id: @sub.id
    )
  end
end