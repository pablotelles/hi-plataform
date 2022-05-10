import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.scss'
import { BsCaretDown as DownArrow } from 'react-icons/bs'
import { ChildItem } from '../ChildItem/ChildItem'

export const Item = ({ person, parentIsCheck, parentSetCheck }) => {
  const arrayTransform = (data) => Object.entries(data).map(([index, object]) => object)
  const arrayChildren = arrayTransform(person.children)

  const [showChildren, setShowChildren] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const handleOpenChildren = useCallback(() => {
    setShowChildren(!showChildren)
  })
  const handleCheckBox = () => {
    setIsChecked(!isChecked)
  }
  useEffect(() => {
    if (parentIsCheck === true) {
      setIsChecked(true)
    }
  }, [parentIsCheck])

  useEffect(() => {
    if (isChecked === false) {
      if (parentSetCheck) {
        parentSetCheck(undefined)
      }
    }
  }, [isChecked])

  return (
    <section className={style.container}>
      <div className={style.__father}>
        <article className={style.__item}>
            <input
              checked={isChecked}
              id={person.id}
              onChange={handleCheckBox}
              className={style.__input}
              type='checkbox'>
            </input>
            <label
              className={!showChildren ? style.__name : style.__name__ativo}
            >
            {person.name}</ label>
            <div className={style.content__arrow}>
              <DownArrow
                className={style.__arrow}
                style={arrayChildren.length
                  ? { display: 'block' }
                  : { display: 'none' }} size={28} onClick={handleOpenChildren}
              />
              {arrayChildren.length
                ? <span className={style.__number__childs}>+{arrayChildren.length}</span>
                : <span>-</span>}
            </div>
        </article>
      </div>
      <div>
        {showChildren && (arrayChildren ?? []).map(pessoa => {
          return (
            <ChildItem key={pessoa.id}
            person={pessoa}
            parentIsCheck={isChecked}
            parentSetCheck={setIsChecked} />
          )
        })}
      </div>
    </section>
  )
}
Item.propTypes = {
  person: PropTypes.object,
  parentIsCheck: PropTypes.bool,
  parentSetCheck: PropTypes.any
}
