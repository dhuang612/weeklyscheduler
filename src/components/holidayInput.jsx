import React from 'react';
import './holidayInput.css';

export default class HolidayInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            holidays: [],
            currentHoliday: ""
        }

        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this)
        this.onChange = this.onChange.bind(this);
    }

    handleRemoveClick (index) {
        let holidayArray = [...this.state.holidays]
            holidayArray.splice(index, 1);
            this.setState({holidays: holidayArray})
    }

    handleAddClick () {
        let holidayArray = [...this.state.holidays]
        let todayDate = new Date
        let inputDate = this.state.currentHoliday
        let dateHasPassed = todayDate >= new Date(inputDate.concat(" 23:59:59"))

        if (!holidayArray.includes(inputDate) && !dateHasPassed  && inputDate) {
            holidayArray.push(inputDate)
            this.setState({
                holidays: holidayArray
            })
        }
       
    }

    onChange (e) {
        this.setState({
            currentHoliday: e.target.value
        })
    }

    render() {
        return (
            <div id="holidayHeaderContainer">
                <div id="dateInputContainer">
                    <input
                    className="holidayDateInput" 
                    type="date"
                    onChange={this.onChange}
                    />
                    <button id="addHolidayBtn" onClick={this.handleAddClick}>
                        Add
                    </button>
                </div>
                <div id="dateShowcaseContainer">
                    <div id="dateShowcaseFlexbox">
                        <h3 className="heading">Holidays</h3>
                        {this.state.holidays.map((day, index) => 
                                
                            <div className="holidayDate" key={index}>
                                <p className="holidayLabel">{day}</p>
                                <div className="closeBtnContainer" onClick={() => this.handleRemoveClick(index)}>
                                    <i className="fa fa-times-square"></i>
                                </div>
                            </div>    
                        )
                        }
                    </div>
                </div>
            </div>
        
        )
    }
}
