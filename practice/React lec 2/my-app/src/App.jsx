import './App.css'
import Part from './components/Part'

function App() {
  const space=[
    {
      "name":"Nirma",
      "month":"September",
      "year":"2021",
      "date":"10"
    },
    {
      "name":"Sirf Excel",
      "month":"March",
      "year":"2021",
      "date":"02"
    },
    {
      "name":"Tide",
      "month":"January",
      "year":"2022",
      "date":"28"
    },
    {
      "name":"Maggi",
      "month":"June",
      "year":"2021",
      "date":"05"
    }
  ]
  return (
    <div className="App">
      <Part name={space[0].name} month={space[0].month} year={space[0].year} date={space[0].date}/>
      <Part name={space[1].name} month={space[1].month} year={space[1].year} date={space[1].date}/>
      <Part name={space[2].name} month={space[2].month} year={space[2].year} date={space[2].date}/>
      <Part name={space[3].name} month={space[3].month} year={space[3].year} date={space[3].date}/>
    </div>
  )
}

export default App
