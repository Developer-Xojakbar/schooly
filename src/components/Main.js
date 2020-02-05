import React from 'react';
import IconSVG from './IconSVG';

const Main = () => {
    return (
        <div className="main">
            <div className="main__panel">
                <div className="main__panel-switch">
                    <div className="class-type">
                        <p>Groups</p>
                        <p className="active">Students</p>
                    </div>
                    <p className="select">Select student</p>
                    <p className="date-time"><IconSVG className="" iconName="icon-schedule" />19 Jan 2020</p>
                    <p className="search"><IconSVG className="" iconName="icon-" />Search by Name, Group...</p>
                </div>
                <div className="main__panel-info">
                    <span type="checkbox">&#10004;</span>
                    <p>Student Name</p>
                    <p>Group Name</p>
                    <p>Status</p>
                </div>
            </div>
            <div className="main__items">
                
            </div>
            <div className="main__chart">

            </div>
        </div>
    );
};

export default Main;