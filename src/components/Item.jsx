import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.scss'
import { BsCaretDown as DownArrow } from 'react-icons/bs'

export const Item = ({ data }) => {
  const arrayTransform = (data) => Object.entries(data).map(([index, object]) => object)
  const NewArray = arrayTransform(data.children)

  const [showChildren, setShowChildren] = useState(false)

  const handleClick = useCallback(() => {
    setShowChildren(!showChildren)
  })

  return (
    <section className={style.container}>
      <div className={style.__father}>
        <article className={style.__item}>
            <input
              style={NewArray.length ? { display: 'block' } : { display: 'none' }}
              className={style.__input}
              onChange={(handleClick)}
              type='checkbox'>
            </input>
            <label
            className={!showChildren ? style.__name : style.__name__ativo}
            > {data.name}</ label>
            <div className={style.content__arrow}>
              <DownArrow
                className={style.__arrow}
                style={NewArray.length
                  ? { display: 'block' }
                  : { display: 'none' }} size={28} onClick={handleClick}
              />
              {NewArray.length
                ? <span className={style.__number__childs}>+{NewArray.length}</span>
                : <span>-</span>}
            </div>
        </article>
      </div>
      <div className={style.children}>
        {showChildren && (NewArray ?? []).map(pessoa => {
          return (
            <Item key={pessoa.id} data={pessoa} />
          )
        })}
      </div>
    </section>
  )
}
Item.propTypes = {
  data: PropTypes.array
}
