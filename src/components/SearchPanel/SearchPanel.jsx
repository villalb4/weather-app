import React from 'react'
import './SearchPanel.css'

function SearchPanel() {
  return (
    <div className="SearchPanel">

      <div className='SearchPanel_divX'>
        <div className='SearchPanel_divImgX'>
          <img className='SearchPanel_imgX' src="" alt="" />
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