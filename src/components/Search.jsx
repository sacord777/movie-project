import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
      <div>
        <img src="search.svg" alt="busqueda" />

        <input type="text"
        placeholder='Busca a través de miles de películas'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}/>
      </div>
    </div>
  )
}

export default Search