import React from 'react';
import overlayImage from '/Users/camdengear/Documents/GitHub/Commerce_Bank/Master/Commerce_Bank_Front_End__/src/images/overlayImage.png';
import { OverlayImg, OverlayCont } from "/Users/camdengear/Documents/GitHub/Commerce_Bank/Master/Commerce_Bank_Front_End__/src/views/calendar/calendarComponents/styled.js";

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
