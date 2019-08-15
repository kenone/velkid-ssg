/** @jsx jsx */
import { useMonth } from "@datepicker-react/hooks"

import { jsx } from "@emotion/core"
import Day from "./Day"
import NavButton from "./NavButton"

function Month({
  year,
  month,
  firstDayOfWeek,
  goToPreviousMonths,
  goToNextMonths,
}) {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
  })

  return (
    <div>
      <div
        css={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          textAlign: "center",
          margin: "0 0 16px",
        }}
      >
        <NavButton onClick={goToPreviousMonths}>Back</NavButton>
        <strong>{monthLabel}</strong>
        <NavButton onClick={goToNextMonths}>Next</NavButton>
      </div>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          justifyContent: "center",
          marginBottom: "10px",
          fontSize: "10px",
        }}
      >
        {weekdayLabels.map(dayLabel => (
          <div css={{ textAlign: "center" }} key={dayLabel}>
            {dayLabel}
          </div>
        ))}
      </div>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          justifyContent: "center",
        }}
      >
        {days.map((day, index) => {
          if (typeof day === "object") {
            return (
              <Day
                date={day.date}
                key={day.date.toString()}
                dayLabel={day.dayLabel}
              />
            )
          }
          return <div key={index} />
        })}
      </div>
    </div>
  )
}
export default Month
