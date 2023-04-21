//first tab

import {React, useState} from "react";
import {DAYS, MONTHS} from './calendarComponents/conts';
import { CalendarHead, ClenderBody, HeadDay, SevenColGrid, StyledDay, StyledEvent, Wrapper } from "./calendarComponents/styled";
import { IconButton } from "@material-ui/core";
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { range, getDaysInMonth, getSortedDays, areDatesTheSame, getAdditionalDailyBalance, getAdditionalOverUnder, getDateObj } from "./calendarComponents/utils";
import { createTheme, ThemeProvider } from '@mui/material/styles';



const FirstTab = ({startingDate, eventsArr, addEvent}) => {

  const [currentMonth, setCurrentMonth] = useState(startingDate.getMonth());
  const [currentYear, setCurrentYear] = useState(startingDate.getFullYear());
  const DAYSINAMONTH = getDaysInMonth(currentMonth, currentYear);

  const nextMonth = () => {
    if (currentMonth < 11) {
    setCurrentMonth(prev => prev + 1);
    } else {
    setCurrentMonth(0)
    setCurrentYear((prev) => prev + 1);}
  }

  const prevMonth = () => {
      if (currentMonth > 0) {
      setCurrentMonth(prev => prev - 1);
      } else {
      setCurrentMonth(11)
      setCurrentYear((prev) => prev - 1);}
    }


  return (
    <div className="FirstTab">
      <p>Calendar View</p>
      {/* First tab content will go here */}
      <Wrapper>
        <CalendarHead>

            <IconButton onClick={prevMonth} color="default"><ArrowBack/></IconButton>
            {MONTHS[currentMonth]} {currentYear}
            <IconButton onClick={nextMonth}><ArrowForward /></IconButton>
        </CalendarHead>
        <SevenColGrid>
            {getSortedDays(currentMonth, currentYear).map((day) => (
                <HeadDay>{day}</HeadDay>
            ))}
        </SevenColGrid>
        <ClenderBody fourCol={DAYSINAMONTH === 28}>
            {range(DAYSINAMONTH).map((day) => (<StyledDay
                active={
                areDatesTheSame(new Date(), getDateObj(day, currentMonth, currentYear))
            }>
                <div className="calendarDays">{day}</div>

                {eventsArr.map((ev) => (
                        areDatesTheSame(getDateObj(day - 1, currentMonth, currentYear), ev.date) && <StyledEvent>Amount: {ev.amount}<br/>Type: {ev.type} <br/>{getAdditionalDailyBalance(new Date(), getDateObj(day, currentMonth, currentYear))}<br/>{getAdditionalOverUnder(new Date(), getDateObj(day, currentMonth, currentYear))}
                        </StyledEvent>

                ))}
            </StyledDay>))}


        </ClenderBody>
      </Wrapper>
    </div>
  );
};
export default FirstTab;