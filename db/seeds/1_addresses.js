exports.seed = (knex) => {
  return knex('addresses').del()
    .then(() => {
      return knex('addresses').insert([
        {
          id: 1,
          line_1: '2400 S. Bobsville Dr.',
          line_2: 'Unit 1',
          city: 'Clarkstead',
          zip: 24590
        },
        {
          id: 2,
          line_1: '5675 W. Moneka Ln.',
          line_2: '',
          city: 'Lakewood',
          zip: 56810
        }
      ])
    }).then(() => {
      return knex.raw(
        "SELECT setval('addresses_id_seq', (SELECT MAX(id) FROM addresses));"
      )
    })
}
