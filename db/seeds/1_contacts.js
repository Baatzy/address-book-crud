exports.seed = (knex) => {
  return knex('contacts').del()
    .then(() => {
      return knex('contacts').insert([
        {
          id: 1,
          address_id: 1,
          first_name: 'Lucas',
          last_name: 'Mitchells',
          phone_number: '956-532-8495',
          email_address: 'luke125@yahoo.com',
          image_url: 'https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg'
        },
        {
          id: 2,
          address_id: 1,
          first_name: 'Marina',
          last_name: 'Vorpal',
          phone_number: '634-854-7245',
          email_address: 'moppy@gmail.com',
          image_url: 'http://weknowyourdreams.com/images/kitten/kitten-05.jpg'
        },
        {
          id: 3,
          address_id: 2,
          first_name: 'Bobus',
          last_name: 'Dudus',
          phone_number: '256-834-5679',
          email_address: 'bobthegob@lemmy.com',
          image_url: 'https://pbs.twimg.com/profile_images/756320100483858432/OX50XkO_.jpg'
        }
      ])
    }).then(() => {
      return knex.raw(
        "SELECT setval('contacts_id_seq', (SELECT MAX(id) FROM contacts));"
      )
    })
}
