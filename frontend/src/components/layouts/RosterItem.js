import React from "react";

const RosterItem = ({ appointment }) => {
  const {
    date,
    finish_date,
    customer_name,
    contact_number,
    task,
  } = appointment;

  var getMonthFromDate = () => {
    var d = new Date(date);
    console.log(date);

    switch (d.getMonth()) {
      case 0:
        return "Jan";
      case 1:
        return "Feb";
      case 2:
        return "Mar";
      case 3:
        return "Apr";
      case 4:
        return "May";
      case 5:
        return "Jun";
      case 6:
        return "Jul";
      case 7:
        return "Aug";
      case 8:
        return "Sep";
      case 9:
        return "Oct";
      case 10:
        return "Nov";
      case 11:
        return "Dec";
    }

    return "UNK";
  };

  var getDayFromDate = () => {
    return new Date(date).getDate();
  };

  var getTimeFromDate = (dd) => {
    var d = new Date(dd);
    var hours = d.getHours();
    var minutes = d.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 12) return hours + ":" + minutes + " am";
    return hours - 12 + ":" + minutes + " pm";
  };

  return (
    <div className='roster-item'>
      <div className='date'>
        <span className='month'>{getMonthFromDate()}</span>
        <span className='day'>{getDayFromDate}</span>
      </div>
      <div className='data'>
        <ul>
          <li>
            <span>Customer Name: {customer_name}</span>
          </li>
          <li>
            <span>Contact Number: {contact_number}</span>
          </li>
          <li>
            <span>
              Time: {getTimeFromDate(date)} - {getTimeFromDate(finish_date)}
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <span>Task: {task}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RosterItem;
