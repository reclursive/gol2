import React from 'react'
import './board-styles.css'
// import wb from '../Assets/wb.svg'
// import bbtiny2 from '../Assets/bbtiny2.svg'

const InitBoard = () =>  {
    return (
<div className="container1">
    <div className="firstBoard" >
        <div className="row row-cols-6 wbrow">
            {/* onClick={invert} for all  */}
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="1,1" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="1,2" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="1,3" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="1,4" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="1,5" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="1,6" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            </div>
        <div className="row row-cols-6 wbrow">
        <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="2,1" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="2,2" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="2,3" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="2,4" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="2,5" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="2,6" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            </div>
            <div className="row row-cols-6 wbrow">
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="3,1" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="3,2" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="3,3" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="3,4" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="3,5" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="3,6" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            </div>
        <div className="row row-cols-6 wbrow">
        <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="4,1" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className= "form-check">
                <input className="form-check-input" type="checkbox" value="4,2" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="4,3" id="flexCheckDefault"/>
                <label className= "form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="4,4" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="4,5" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="4,6" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            </div>
        <div className="row row-cols-6 wbrow">
        <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="5,1" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="5,2" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="5,3" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="5,4" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="5,5" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="5,6" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            </div>
        <div className="row row-cols-6 wbrow">
        <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="6,1" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="6,2" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="6,3" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="6,4" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="6,5" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            <div className="col wbbcol">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="6,6" id="flexCheckDefault"/>
                <label className="form-check-label">
                </label>
                </div>
            </div>
            </div>
        </div>
        {/* <Reset/>         */}
        <button className="reset">Set in motion</button>
        {/* <Pause/>         */}
        <button className="reset">Increase Board</button>

    </div>

    
    )
    
}

export default InitBoard
