# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cards = [
    {
       cardside: "https://ca.slack-edge.com/T02MD9XTF-UL8B585HP-14e7e4df1c70-512",
       deck_id: 1,
    },

    {
        cardside: "https://ca.slack-edge.com/T02MD9XTF-U91CXSUN4-3bac0a7f6a08-512",
        deck_id: 1,
    },

        cardside: "https://ca.slack-edge.com/T02MD9XTF-U8H2RA3C1-643c8ce562ef-512",
        deck_id: 1,
    },

    {
        cardside: "https://ca.slack-edge.com/T02MD9XTF-UMC62QVAM-019eb6bf04b1-512",
        deck_id: 1,
    },

    {
        cardside: "https://ca.slack-edge.com/T02MD9XTF-U7PSME4DA-8b811931b3d9-512",
        deck_id: 1,
    },

    {
        cardside: "https://ca.slack-edge.com/T02MD9XTF-ULYFYNXUN-920567a4beb2-512",
        deck_id: 1,
    },

    {
        cardside: "https://ca.slack-edge.com/T02MD9XTF-UHE4WR324-46298770f176-512",
        deck_id: 1,
    },

    {
        cardside: "https://ca.slack-edge.com/T02MD9XTF-ULEG985FD-2be336876c36-512",
        deck_id: 1,
    }

]

cards.each do |card|
    Card.create!(card)
end