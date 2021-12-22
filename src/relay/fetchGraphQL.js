async function fetchGraphQL(query, variables) {
  const res = await fetch('https://graphqlzero.almansi.me/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    })
  })

  return await res.json()
}

export default fetchGraphQL
