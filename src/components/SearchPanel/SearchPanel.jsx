import React, { useState } from 'react'
import './SearchPanel.css'
import { useDispatch, useSelector } from 'react-redux'
import { openSearch } from '../../redux/slices/weather'
import { searchLocationData, getData } from '../../redux/thunks/getData'
// ---- images ----
import close from '../../assets/icons/close.svg'
import search from '../../assets/icons/search.svg'

function SearchPanel() {

  const dispatch = useDispatch()

  const [searchInput, setSearchInput] = useState('')

  const isOpen = useSelector(e => e.weather.search)

  const handleClose = () => {
    dispatch(openSearch(false))
  }

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(searchLocationData(searchInput))
    setSearchInput('')
  }

  const handleClick = (e) => {
    const city = e.target.id
    dispatch(getData(city))
    dispatch(openSearch(false))
  }

  const results = useSelector(e => e.weather.searchLocation)

  return (
    <div className={isOpen === false ? "SearchPanel" : "SearchPanel active"}>

      <div className='SearchPanel_divX'>
        <div onClick={handleClose} className='SearchPanel_divImgX'>
          <img className='SearchPanel_imgX' src={close} alt="" />
        </div>
      </div>

      <form className='SearchPanel_form'>
        <div className='SearchPanel_divInput'>
          <div className='SearchPanel_divImgSearch'>
            <img src={search} alt="" />
          </div>
          <input 
            onChange={handleChange}
            value={searchInput}
            className='SearchPanel_input' 
            type="text" 
            placeholder='search location'
          />
        </div>
        <input onClick={handleSearch} className='SearchPanel_submit' type="submit" value="Search"/>
      </form>

      <div className='SearchPanel_divResult'>
        {
          results && 
            <div className='SearchPanel_result' onClick={handleClick} id={results.name}>
              <span>{results.display}</span>
            </div>
        }
      </div>
    </div>
  )
}

export default SearchPanel