'use client'
import React from 'react'
import moment from 'moment'

const GetDaysInMonth = (month,year) => {
      const today = moment();
      console.log("today", today);
      
      const formattedDate = today.format('MMMM D, YYYY');
      const relativeTime = moment('2024-01-15').fromNow(); // Example for a past date
        
      return (
        <div>
          <p>Today's date: {formattedDate}</p>
          <p>Time since January 15, 2024: {relativeTime}</p>
        </div>
      );
    
//   return moment(
//     \`${month}-${year}\`, 'MM-YYY').startOf('month').weekday()

}

// console.log(GetDaysInMonth(2, 2019))
export default GetDaysInMonth