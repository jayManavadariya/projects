// "use client"
import React from 'react'
// import Todo from './components/Todo/Todo'
// import String_number from './components/String&Number/String_number'
// import Search_filter from './components/Searcch/Search_filter'
// import Weather from './components/Search/Weather'
// import Quiz from './components/Quiz/Quiz'
// import Expence_Tracker from './components/Expence_Tracker/Expence_Tracker'
import ExpenseMain from './components/Expense/ExpenseMain'
// import Test from './components/Test/Test'

const page = async () => {
  
//   const fetchApi = await fetch("https://opentdb.com/api.php?amount=10")
//   const datas =  await fetchApi.json()
//         const data = datas.results;
//         console.log("Data fetched",data);

  return (
    <div>
      {/* todo */}
      {/* <Todo /> */}

      {/* String & Number Utilities Dashboard */}
      {/* <String_number/> */}

      {/* Search & Filter Challenge */}
      {/* <Search_filter/> */}

      {/* Fetch the api */}
      {/* <Weather/> */}

      {/* Quiz */}
      {/* <Quiz response={data}/> */}

      {/* <Expence_Tracker /> */}
      <ExpenseMain />

      {/* <Test /> */}
    </div>
  )
}

export default page