import React from 'react';
import IconSVG from './IconSVG';

const Aside = () => {
    return (
        <div className="aside active"> {/* <-- Please remove active for "scheme_new copy"*/}
            <h1 className="aside__logo">schooly</h1>
            <p>Class Management</p>
            <div className="aside__side-menu active">
                <IconSVG className="" iconName="icon-attendance" />
                <p>Attendance</p>
            </div>
            <div className="aside__side-menu">
                <IconSVG className="" iconName="icon-schedule" />
                <p>Schedule</p>
            </div>
            <div className="aside__side-menu">
                <IconSVG className="" iconName="icon-groups-students" />
                <p>Groups and Students</p>
            </div>
            <div className="aside__side-menu">
                <IconSVG className="" iconName="icon-messaging" />
                <p>Messaging</p>
            </div>
            <p>Learning Managment</p>
            <div className="aside__side-menu">
                <IconSVG className="" iconName="icon-assignments" />
                <p>Assignments</p>
            </div>
            <div className="aside__side-menu">
                <IconSVG className="" iconName="icon-quizzes" />
                <p>Quizzes</p>
            </div>
            <div className="aside__side-menu">
                <IconSVG className="" iconName="icon-grade-book" />
                <p>Grade Book</p>
            </div>
            <div className="aside__side-menu">
                <IconSVG className="" iconName="icon-materials" />
                <p>Materials</p>
            </div>
            <div className="aside__side-menu">
                <IconSVG className="" iconName="icon-study-plan" />
                <p>Study Plan</p>
            </div>
            <p>Personal</p>
            <div className="aside__side-menu">
                <IconSVG className="" iconName="icon-todos" />
                <p>To-dos</p>
            </div>
            <div className="aside__side-menu">
                <IconSVG className="" iconName="icon-finance" />
                <p>Finance</p>
            </div>
            <div className="aside__side-menu">
                <IconSVG className="" iconName="icon-profile" />
                <p>Profile</p>
            </div>
        </div>
    );
};

export default Aside;