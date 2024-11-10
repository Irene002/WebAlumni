import React from 'react'

const Tabel = () => {
    const data =[
        {formattedDate: 'Wednesday, 24-07-2024', 
            clockIn: '10:55:49', 
            clockOut: '10:56:5  ', 
            wfhLoc: 'tuyu', 
            logbook: 'Makan Makan'},
        {formattedDate: 'Wednesday, 24-07-2024', 
            clockIn: '10:55:49', 
            clockOut: '10:56:5  ', 
            wfhLoc: 'Kantor', 
            logbook: 'Ba Kabo'},
        {formattedDate: 'Wednesday, 24-07-2024', 
            clockIn: '10:55:49', 
            clockOut: '10:56:5  ', 
            wfhLoc: 'Kamar', 
            logbook: 'Remixer'},
        {formattedDate: 'Wednesday, 24-07-2024', 
            clockIn: '10:55:49', 
            clockOut: '10:56:5  ', 
            wfhLoc: 'tuyu', 
            logbook: 'Makan Makan'},
        {formattedDate: 'Wednesday, 24-07-2024', 
            clockIn: '10:55:49', 
            clockOut: '10:56:5  ', 
            wfhLoc: 'tuyu', 
            logbook: 'Makan Makan'},
    ]
  return (
    <section className='my-32 mx-24 flex justify-center'>
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Location</th>
                <th>Activity</th>
            </tr>
        </thead>
        <tbody>
                {data.map((attendance) =>(
                    <tr key={attendance.id}>
                        <td>{attendance.formattedDate}</td>
                        <td>{attendance.clockIn}</td>
                        <td>{attendance.clockOut}</td>
                        <td>{attendance.wfhLoc}</td>
                        <td>{attendance.logbook}</td>
                    </tr>
                ))}
        </tbody>
    </table>
    </section>
  )
}

export default Tabel