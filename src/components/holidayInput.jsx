import React from 'react';

export default class HolidayInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            holidays: [],
            currentHoliday: ""
        }

        this.handleClick = this.handleClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleClick () {
        let holidayArray = [...this.state.holidays]
        let todayDate = new Date
        let inputDate = this.state.currentHoliday
        let dateHasPassed = todayDate >= new Date(inputDate.concat(" 23:59:59"))

        if (!holidayArray.includes(inputDate) && !dateHasPassed ){
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
                    type="date"
                    onChange={this.onChange}
                    />
                    <button onClick={this.handleClick}>
                        add
                    </button>
                </div>
                <div id="dateShowcaseContainer">
                <ul>
                    {this.state.holidays.map((day, index) => 
                            
                           <li key={index}>{day}</li>    
                    )
                    }
                </ul>
                </div>
            </div>
        
        )
    }
}
