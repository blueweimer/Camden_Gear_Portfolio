import React from 'react';
import overlayImage from '../images/overlayImage.png';
import { OverlayImg, OverlayCont } from "../views/calendar/calendarComponents/styled.js";

function Overlay() {





    return (
        <div>
            <OverlayCont>
                <img transform="rotate(90deg)" disabled="true" src={overlayImage} ></img>
            </OverlayCont>
        </div>

    )
}

export default Overlay;
