import Head from 'next/head'
import { useState, useEffect} from 'react'
import Router from 'next/router'
import TimezoneSelect from 'react-select'
import { createSchedule, time } from './api/resource'

function Home() {

const [selectedTimezone, setSelectedTimezone] = useState({});
const [schedule, setSchedule] = useState([
  {id:1,day: "Sun", startTime: "", endTime: "" },
  { id:2, day: "Mon", startTime: "", endTime: "" },
  { id:3,day: "Tue", startTime: "", endTime: "" },
  { id:4, day: "Wed", startTime: "", endTime: "" },
  { id:5, day: "Thu", startTime: "", endTime: "" },
  { id: 6,day: "Fri", startTime: "", endTime: "" },
  { id: 7,day: "Sat", startTime: "", endTime: "" },
]);

//updates the schedule array with the start and end time.
const handleTimechange = (id: number, e:any) => {
  const {value } = e.target;
  if (value === "Select") return;
  const list = [...schedule];
  list[id] = value;
  setSchedule(list);
};

//logs the user's schedule to the console after setting the availability
const handleSaveSchedule = () => {
  if (JSON.stringify(selectedTimezone) !== "{}") {
    createSchedule(selectedTimezone, schedule, navigator);
  } else {
    ("Select your timezone");
  }
};

const handleLogout = () => {
  localStorage.removeItem("_id");
  localStorage.removeItem("_myEmail");
  Router.push("/");
};

// the login or signup process in not finishing up.

// useEffect(() => {
//   if (!localStorage.getItem("_id")) {
//     Router.push("/");
//   }
// }, [Router]);
   
  return (
    <>
      <Head>
        <title>Scheduling App</title>
        <meta name="description" content="An application used to create and view schedules" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div>
      <nav className="dashboard_nav">
        <h2 className="dashboard_title">Book Me</h2>
        <button onClick={handleLogout} className="logout_btn">
          LogOut
        </button>
      </nav>

      <div className="dashboard_main">
        <h2 className="dashboard_heading"> Select your availability</h2>
        <div className="timezone_wrapper">
          <p> Pick your timezone</p>
          <TimezoneSelect
            value={selectedTimezone}
            onChange={(e)=>setSelectedTimezone}
            className="timeZone"
          />

          {schedule.map((sch, id) => (
            <div className="form" key={id}>
              <p>{sch.day}</p>
              <div className="select_wrapper">
                <label htmlFor="startTime">Start Time</label>
                <select
                  name="startTime"
                  className="time"
                  id="starttime"
                  onChange={(e) => handleTimechange(id, e)}
                >
                  {time.map((t) => (
                    <option key={t.id} value={t.t} id={t.id}>
                      {t.t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="select_wrapper">
                <label htmlFor="endTime">End Time</label>
                <select
                  name="endTime"
                  className="time"
                  id="endTime"
                  onChange={(e) => handleTimechange(id, e)}
                >
                  {time.map((t) => (
                    <option key={t.id} value={t.t} id={t.id}>
                      {t.t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>

        <div className="savebtn_container">
          <button onClick={handleSaveSchedule}>SAVE SCHEDULES</button>
        </div>
      </div>
    </div>
      </main>
    </>
  )
}

export default Home(); 