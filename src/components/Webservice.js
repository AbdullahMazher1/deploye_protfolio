
export default function Webservice({ title, subtitle, im, disp }) {
    return (
        <div className='ServiceContainer' id='ServiceContainer'>
            <div className='ServiceItemleft'>
                <div>
                    <h1 className='WebHead'>
                        {title}
                    </h1>
                </div>
                <div>
                    <h3 className='WebSubHead'>
                        {subtitle}
                    </h3>
                </div>
                <div>
                    <p className='WebParaDiscription'>
                        {disp} <br/>

                    </p>
                </div>
            </div>
            <div className='ServiceItemRight'>
                <img className='ImWebService' src={im} alt='' />
            </div>
        </div>
    )
}
