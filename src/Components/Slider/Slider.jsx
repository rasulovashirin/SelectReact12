import{ useState, useEffect } from "react"

import "./Slider.css"

function Slider () {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    document.documentElement.style.setProperty("--index", index)
  }, [index])

  return (
    <>
    {/* <div className="container"> */}
    <div className="slider">
      <ul className="slider-list">
        <li className="slider-item">One</li>
        <li className="slider-item">Two</li>
        <li className="slider-item">Three</li>
        <li className="slider-item">Four</li>
        <li className="slider-item">Five</li>
        <li className="slider-item">Six</li>
        <li className="slider-item">Seven</li>
        <li className="slider-item">Eight</li>
        <li className="slider-item">Nine</li>
        <li className="slider-item">Ten</li>
        <li className="slider-item">Eleven</li>
      </ul>
    <button onClick={() => setIndex(index - 1)}>Prev</button>
    <button onClick={() => setIndex(index + 1)}>Next</button>
    </div>
    {/* </div> */}
    </>
  )
}

export default Slider