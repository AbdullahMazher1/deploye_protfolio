import React from 'react'

export default function Desktop() {
  return (
    <div className='MobileServoceContainer' id='MobileServoceContainer'>
            
            <div className='MobileItemRight'>
                <div>
                    <h1 className='MobileServiceHead'>
                        Graphic Design 
                    </h1>
                </div>
                <div>
                    <h3 className='DesktopSubHead'>
                        Technologies & Framworks
                    </h3>
                </div>
                <div>
                    <p className='MobilePara'>
                    We craft visually appealing and user-friendly interfaces that enhance user interaction and satisfaction. Our designs are based on user research and testing to ensure optimal usability. <br/>
                    </p>
                </div>
            </div>
            <div className='MobileItemLeft'>
                <img className='ImDesjtopService' src='desktop.jpg' />
            </div>
        </div>
  )
}
