import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

// import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

const EternoCalendar = () => {
  return (
    <FullCalendar
      headerToolbar={{
        left: "dayGridMonth,timeGridWeek,timeGridDay",
        center: "title",
        right: "prevYear,prev,next,nextYear",
      }}
      plugins={[dayGridPlugin, timeGridPlugin]}
      initialView="timeGridWeek"
    />
  );
};

export default EternoCalendar;
