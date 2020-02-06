import React from 'react';
import DonutChart from '../plugins/DonutChart';
import koala from '../images/koala.jpg';
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
                    <p className="search"><IconSVG className="" iconName="icon-search" />Search by Name, Group...</p>
                </div>
                <div className="main__panel-info">
                    <span type="checkbox">&#10004;</span>
                    <p>Student Name</p>
                    <p>Group Name</p>
                    <p>Status</p>
                </div>
            </div>
            <div className="main__items">
                <div className="item checked">
                    <span type="checkbox">&#10004;</span>
                    <div className="image">
                        <img src={koala} alt="koala" />
                    </div>
                    <p className="context">Abdullayev Alisher aka</p>
                    <p className="context">Advanced English</p>
                    <p className="status absent">Absent</p>
                </div>
                <div className="item">
                    <span type="checkbox">&#10004;</span>
                    <div className="image">
                        <img src={koala} alt="koala" />
                    </div>
                    <p className="context">Abdullayev Alisher aka</p>
                    <p className="context">IELTS</p>
                    <p className="status present">Present</p>
                </div>
                <div className="item">
                    <span type="checkbox">&#10004;</span>
                    <div className="image">
                        <img src={koala} alt="koala" />
                    </div>
                    <p className="context">Abdullayev Alisher aka</p>
                    <p className="context">intermediate english</p>
                    <p className="status absent-excused">Absent Excused</p>
                </div>
            </div>
            <div className="main__chart">
                <DonutChart outerRadius={"200pt"} innerRadius={"180pt"}
                    content={[
                        "23" , "Absent today"
                    ]}
                    chartsData={[
                        [180, "rgb(255 , 197 , 66)"],
                        [40, "rgb(252 , 90 , 90)"],
                        [70, "rgb(61 , 213 , 152)"],
                        [70, "transparent"]
                    ]}
                />
                <p className="present">Present</p>
                <p className="absent">Absent</p>
                <p className="absent-excused">Excused</p>
            </div>
        </div>
    );
};

export default Main;