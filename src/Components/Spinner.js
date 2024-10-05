import React from 'react'
import loading from '/home/rguktogole/Downloads/React/newsapp/src/loading.gif'
const Spinner = () => {
    return (
      <div className="text-center">
        <img className="my-1" src={loading} alt="loading..."/>
      </div>
    )
}
export default Spinner