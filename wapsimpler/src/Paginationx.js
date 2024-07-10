import React from 'react'

export default function Paginationx
({gotoNextPage,gotoprevPage}) {
  return (
    <div>
       {gotoprevPage && <button onClick={gotoprevPage}>Previous</button> }
      {gotoNextPage  &&<button onClick={gotoNextPage}>Next</button>}
    </div>
  )
}
