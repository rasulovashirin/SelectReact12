import "./Select.css"

import { useState, useEffect, useRef } from "react"

function Select () {

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('Choose the car')

  const selectRef = useRef()

  useEffect(() => {

    selectRef.current.classList.add('select-list')

  },[])

  useEffect(() => {
    if(open) {
      selectRef.current.classList.add('select-open')
    }else {
      selectRef.current.classList.remove('select-open')

    }
  },[open])

  const data = [
    "Tesla",
    "Volvo",
    "Mercedes",
    "Audi",
  ]
  return (
    <>
     <div className="container">
     <div className="select">
      <button className="select-button" onClick={() => setOpen(!open)}>{value}</button>

      <ul ref={selectRef}>
					{
						data.map((f, i) => {

							return (
								<li key={i} className="select-item" onClick={()=> setValue(f)}>
									{f}
								</li>
							)
						})
					}
				</ul>
      </div>
     </div>
    </>
  )
}

export default Select