import React, { useState } from 'react';

export default function Analytics() {
    const [Value, setValue] = useState(0);
    const [Value1, setValue1] = useState(0);
    const [Value2, setValue2] = useState(0);
    const [Value3, setValue3] = useState(0);
    const [Value4, setValue4] = useState(0);

    const updateValue1 = () => {
        let i = Value;
        const update = () => {
            if (i <= 11) {
                setTimeout(() => {
                    setValue(i);
                    if (i <= 4) {
                        setValue1(i);
                    }
                    if (i <= 8) {
                        setValue2(i);
                    }
                    if (i <= 2) {
                        setValue3(i);
                    }
                    if (i <= 15) {
                        setValue4(i);
                    }
                    i++;
                    update();
                }, 70);
            }
        };
        update();
    };

    return (
        <div className="AnalyticsContainer" id='AnalyticsContainer' onMouseEnter={updateValue1}>
            <div className='AnalyticsUpperContainer'>
                <div className='AnalyticsLeft'>
                    <div>
                        <h5 className='AnalyticsSubHead'>
                            Here is our progress
                        </h5>
                    </div>
                    <div>
                        <h2 className='AnalyticsHead'>
                            Mega Services Deployed Throughout the Countries
                        </h2>
                    </div>

                </div>
                <div className='AnalyticsNext'>
                    <p className='AnalyticsPara'>
                        At AMA Solutions, We focus on delivering innovative, user-friendly, and efficient applications that drive engagement and streamline operations. Our commitment to excellence ensures that every project we undertake is executed with precision, meeting your specific business requirements and exceeding your expectations.
                    </p>
                </div>
            </div>
            <div className="AnalyticsBottomContainer" onMouseEnter={updateValue1}>
                <div className="AnalyticsColumn AnalyticsC1">
                    <div>
                        <img className='ImWebAnalytics' src='web.png' />
                    </div>
                    <div>
                        <h3 id='A1' className='AnalyticsValue'>
                            {Value}
                        </h3>
                    </div>
                    <div className='AnalyticsTitle'>
                        Web Apps
                    </div>
                </div>
                <div className="AnalyticsColumn AnalyticsC2">
                    <div>
                        <img className='ImWebAnalytics' src='22.png' />
                    </div>
                    <div>
                        <h3 className='AnalyticsValue'>
                            {Value2}
                        </h3>
                    </div>
                    <div className='AnalyticsTitle'>
                        Android Apps
                    </div>
                </div>
                <div className="AnalyticsColumn AnalyticsC3">
                    <div>
                        <img className='ImWebAnalytics' src='25.png' />
                    </div>
                    <div>
                        <h3 className='AnalyticsValue'>
                            {Value3}
                        </h3>
                    </div>
                    <div className='AnalyticsTitle'>
                        Desktop Apps
                    </div>
                </div>
                <div className="AnalyticsColumn AnalyticsC4">
                    <div>
                        <img className='ImWebAnalytics' src='23.png' />
                    </div>
                    <div>
                        <h3 className='AnalyticsValue'>
                            {Value4}
                        </h3>
                    </div>
                    <div className='AnalyticsTitle'>
                        UX/UI Design
                    </div>
                </div>
                <div className="AnalyticsColumn AnalyticsC5">
                    <div>
                        <img className='ImWebAnalytics' src='22.png' />
                    </div>
                    <div>
                        <h3 className='AnalyticsValue'>
                            {Value1}
                        </h3>
                    </div>
                    <div className='AnalyticsTitle'>
                        Other Apps
                    </div>
                </div>
            </div>
        </div>
    )
}
