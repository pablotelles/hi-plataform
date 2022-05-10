import React from 'react'
import style from './style.module.scss'
import PropTypes from 'prop-types'
import { Item } from '../Items/Item'

export const ChildItem = ({ person, parentIsCheck, parentSetCheck }) => {
  return (
        <section className={style.children}>
                <Item key={person.id} person={person} parentIsCheck={parentIsCheck} parentSetCheck={parentSetCheck}/>
        </section>
  )
}
ChildItem.propTypes = {
  person: PropTypes.object,
  parentIsCheck: PropTypes.bool,
  parentSetCheck: PropTypes.any
}
