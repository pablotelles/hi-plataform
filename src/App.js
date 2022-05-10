import React from 'react'
import data from './data/data'
import { Item } from './components/Items/Item'
import './Style/base.css'

function App () {
  const arrayTransform = (data) => Object.entries(data).map(([index, object]) => object)
  const newData = arrayTransform(data)

  return (
    <main>
      {newData.map(person => (
        <Item key={person.id} person={person} />
      ))}
    </main>
  )
}

export default App
