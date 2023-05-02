import { useState } from "react"

function Main(){

    const [dayInput, setDayInput] = useState("")
    const [monthInput, setMonthInput] = useState("")
    const [yearInput, setYearInput] = useState("")

    const [days, setDays] = useState("--")
    const [months, setMonths] = useState("--")
    const [years, setYears] = useState("--")

    function validateDate(){
        const date = new Date(yearInput,monthInput-1,dayInput)
        const today = new Date()
        console.log(date)

        if (date.getFullYear() === parseInt(yearInput) && today.getFullYear() > yearInput){
            console.log('valid year')
        } else {
            console.log('invalid year')
            return
        }

        if (date.getMonth() === monthInput-1){
            console.log('valid month')
        } else {
            console.log('invalid month')
            return
        }

        if (date.getDate() === parseInt(dayInput)){
            console.log('valid date')
        } else{
            console.log('invalid date')
            return
        }

        const delta = today - date;

        
        // convert the difference to days
        const days = Math.floor(delta / (1000 * 60 * 60 * 24));

        // calculate the number of years, months, and days
        const years = Math.floor(days / 365);
        const months = Math.floor((days % 365) / 30);
        const remainingDays = days - (years * 365) - (months * 30);

        setDays(remainingDays)
        setMonths(months)
        setYears(years)

        return
    }

    return(
        <main>
           <div className="container">
           <form>
                <div className="input-control">
                    <label htmlFor="day">day</label>
                    <input type="number" id="day" value={dayInput} onChange={e => setDayInput(e.target.value)}/>
                </div>
                <div className="input-control">
                    <label htmlFor="month">month</label>
                    <input type="number" id="month" value={monthInput} onChange={e => setMonthInput(e.target.value)}/>
                </div>
                <div className="input-control">
                    <label htmlFor="year">year</label>
                    <input type="number" id="year" value={yearInput} onChange={e => setYearInput(e.target.value)}/>
                </div>
            </form>
            <div className="wrapper">
                <div className="line"></div>
                <button className="circle" onClick={()=>validateDate()}>
                    <img src={process.env.PUBLIC_URL + '/icon-arrow.svg'} alt="submit arrow" />
                </button>
            </div>
            <div className="output">
                <p id="year_output"><strong>{years}</strong> years</p>
                <p id="month_output"><strong>{months}</strong> months</p>
                <p id="days_output"><strong>{days}</strong> days</p>
            </div>
           </div>
        </main>
    )

}

export default Main