import React from 'react'
import data from './data/data.json'
import { Item } from './components/Item'
import './Style/base.css'

function App () {
  const arrayTransform = (data) => Object.entries(data).map(([index, object]) => object)
  const array = arrayTransform(data)

  return (
    <main>
      {array.map(pessoa => (
        <Item key={pessoa.id} data={pessoa} />
      ))}
    </main>
  )
}

export default App
