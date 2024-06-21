import React from 'react'

export default function Profile() {
    return (
        <div className='ProfileContainer' id='ProfileContainer'>
            <div className='Taptoview'>
                Tap to view
            </div>
            <div className='ProfileItemLeft'>
                <div>
                    <h5 className='ProfileHead1'>
                        Meat Our Talented Team
                    </h5>
                </div>
                <div className='profileHead2'>
                    <p>
                        At AMA Solutions, our team consists of dedicated professionals that exceed client expectations and leveraging the latest industry trends and technologies.We believe in learn well,work well and live well.
                    </p>

                </div>
                <div>
                    <h1 className='ProfileHead3'>
                        Get Online and Grow Fast
                    </h1>
                </div>
                <div>
                    <button className='ProfileButton2' >
                        Get Yourself Connected
                    </button>
                </div>

            </div>

            <div className='ProfileItemNext'>
                <div className='Taptoview1'>
                    Tap to view
                </div>
                <div>
                    <img className='ImProfile' src='profile.png' />
                </div>
                <div className='PositionConatainer'>
                    <div className='Position1'>
                        Executive Manager
                    </div>
                    <div className='Position2'>
                        Founder/CEO
                    </div>
                    <div className='Position3'>
                        Team Lead
                    </div>
                </div>
            </div>

        </div>
    )
}
