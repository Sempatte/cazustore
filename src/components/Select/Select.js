import React from 'react'

function Select({options = [], onSelect, defaultOption}) {
  return (
    <select className="form-select" aria-label="Default select example" onChange={(e) => onSelect(e.target.value)}>
        {options.map(o => <option key={o.value} value={o.value}>{o.text}</option>)}
    </select>
  )
}

export default Select