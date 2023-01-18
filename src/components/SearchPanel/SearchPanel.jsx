import React from 'react'
import './SearchPanel.css'
import { useDispatch, useSelector } from 'react-redux'
import { openSearch } from '../../redux/slices/weather'
// ---- images ----
import close from '../../assets/icons/close.svg'

function SearchPanel() {

  const dispatch = useDispatch()

  const isOpen = useSelector(e => e.weather.search)

  const handleClose = () => {
    dispatch(openSearch(false))
  }

  return (
    <div className={isOpen === false ? "SearchPanel" : "SearchPanel active"}>

      <div className='SearchPanel_divX'>
        <div onClick={handleClose} className='SearchPanel_divImgX'>
          <img className='SearchPanel_imgX' src={close} alt="" />
        </div>
      </div>

      <form className='SearchPanel_form'>
        <div className='SearchPanel_divInput'>
          <div>
            <img src="" alt="" />
          </div>
          <input className='SearchPanel_input' type="text" placeholder='search location'/>
        </div>
        <input className='SearchPanel_submit' type="submit" value="Search"/>
      </form>

      <div className='SearchPanel_div'></div>
    </div>
  )
}

export default SearchPanel