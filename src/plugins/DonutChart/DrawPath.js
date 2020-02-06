import React from 'react';

const DrawPath = (data) => {
    const CalcToPolygon = (Gradus , direction = "right" , startIs = 90) => {

        // direction -> properties: left , right;

        Gradus -= startIs;

        if(Gradus < 0) {
            Gradus = Gradus + 360;
        }

        if (direction === "right") {
            Gradus = 360 - Gradus;
        }

        let sin , cos , on;
        sin = 50 - parseFloat((Math.sin(Math.PI / (180 / (Gradus))) * 50).toFixed(2));
        cos = parseFloat((Math.cos(Math.PI / (180 / (Gradus))) * 50).toFixed(2)) + 50;        

        if (sin > cos)
        {
            cos = parseFloat(((cos / sin) * 100).toFixed(2));            
        }
        else
        {
            sin = parseFloat(((sin / cos) * 100).toFixed(2));
        }

 
        if (Gradus >= 45 && Gradus <= 135) 
        {
            sin = 0;
            on = "up";
        }
        if (Gradus >= 135 && Gradus <= 225) 
        {
            cos = 0;
            on = "left";
        }
        if (Gradus >= 225 && Gradus <= 315) 
        {
            sin = 100;
            on = "down";
        }
        if ((Gradus >= 0 && Gradus <= 45) || (Gradus >= 315 && Gradus <= 360)) 
        {
            cos = 100;
            on = "right";
        }

        // console.log(Gradus + " X -> " + cos + "%");
        // console.log(Gradus + " Y -> " + sin + "%");  

        return {x: cos , y: sin , on};
    }

    const Polygon = (start , end , direction = "right") => {
        start = CalcToPolygon(start);
        end = CalcToPolygon(end);

        let polygon = `polygon(50% 50% , ${start.x}% ${start.y}% , `;
        let addPath;

        if (direction === "right") {
            if (start.x === end.x && start.y === end.y) {
                addPath = "100% 0% , 100% 100% , 0% 100% , 0% 0%";
            }
            ////////////////////////////////////////////////////// 4 ta burchak
            if(start.on === "up" && end.on === "up" && start.x > end.x) {
                addPath = "100% 0% , 100% 100% , 0% 100% , 0% 0%";
            }
            if(start.on === "right" && end.on === "right" && start.y > end.y) {
                addPath = "100% 100% , 0% 100% , 0% 0% , 100% 0%";
            }
            if(start.on === "down" && end.on === "down" && start.x < end.x) {
                addPath = "0% 100% , 0% 0% , 100% 0% , 100% 100%";
            }
            if(start.on === "left" && end.on === "left" && start.y < end.y) {
                addPath = "0% 0% , 100% 0% , 100% 100% , 0% 100%";
            }
            /////////////////////////////////////////////////////// 3 ta burchak
            if(start.on === "up" && end.on === "left") {
                addPath = "100% 0% , 100% 100% , 0% 100%";
            }
            if(start.on === "right" && end.on === "up") {
                addPath = "100% 100% , 0% 100% , 0% 0%";
            }
            if(start.on === "down" && end.on === "right") {
                addPath = "0% 100% , 0% 0% , 100% 0%";
            }
            if(start.on === "left" && end.on === "down") {
                addPath = "0% 0% , 100% 0% , 100% 100%";
            }
            /////////////////////////////////////////////////////// 2 ta burchak
            if(start.on === "up" && end.on === "down") {
                addPath = "100% 0% , 100% 100%";
            }
            if(start.on === "right" && end.on === "left") {
                addPath = "100% 100% , 0% 100%";
            }
            if(start.on === "down" && end.on === "up") {
                addPath = "0% 100% , 0% 0%";
            }
            if(start.on === "left" && end.on === "right") {
                addPath = "0% 0% , 100% 0%";
            }
            /////////////////////////////////////////////////////// 1 ta burchak
            if(start.on === "up" && end.on === "right") {
                addPath = "100% 0%";
            }
            if(start.on === "right" && end.on === "down") {
                addPath = "100% 100%";
            }
            if(start.on === "down" && end.on === "left") {
                addPath = "0% 100%";
            }
            if(start.on === "left" && end.on === "up") {
                addPath = "0% 0%";
            }
            ///////////////////////////////////////////////////////
        }

        if(addPath !== undefined) {
            addPath += " , ";
        }
        else {
            addPath = "";
        }

        polygon += addPath + `${end.x}% ${end.y}%)`;

        // console.log(`clip-path: polygon(${polygon});`);

        return polygon;
    }

    const summ = data.reduce((summ, item) => {summ += item[0]; return summ;}, 0);
    let DrawStartedIs = 0;

    const charts = data.map((item, index) => {
        const startToDraw = DrawStartedIs;
        const endToDraw = startToDraw + item[0];
        DrawStartedIs = endToDraw;

        return (
            <span
                key={index}
                style={{ backgroundColor: item[1] , clipPath: Polygon((startToDraw / summ) * 360 , (endToDraw / summ) * 360)}}>
            </span>
        )       
    })

    return (
        <React.Fragment>
            {charts}
        </React.Fragment>
    )
}

export default DrawPath;