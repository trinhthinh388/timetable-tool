import React from 'react';
import Timetable from './TimeTable';
import SubjectPicker from './SubjectPicker';

function Body() {
    return(
        <div className="container-fluid">
            <div className="">
                <SubjectPicker/>
            </div>
        </div>
    );
}

export default Body;