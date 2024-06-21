

export default function Header() {
  const handleWhatsapp = () => {
    const phoneNumber = '+923045678898'; 
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <header className="HeaderContainer">
      <div>
        <img className="logo" src="2.png" alt="Logo" />
      </div>
      <div>
        <button className="HomeButton">
          <a className="HomeButton" href="#carouselExampleIndicators">HOME</a>
        </button>
      </div>
      <div>
        <button className="AboutButton">
          <a className="AboutButton" href="#Container">ABOUT US</a>
        </button>
      </div>
      <div>
        <button className="ServicesButton">
          <a className="ServicesButton" href="#ServicesContainer">SERVICES</a>
        </button>
      </div>
      <div>
        <button className="ProfileButton">
          <a className="ProfileButton" href="#Analyticscontainer">PROFILE</a>
        </button>
      </div>
      <div>
        <button className="ContactButton">CONTACT</button>
      </div>
      <div className="WhatsappContainer">
        <img className="WhatsappIcon" src="1.png" alt="WhatsApp Icon" />
        <button className="WhatsappButton" onClick={handleWhatsapp}>Whatsapp Now</button>
      </div>
    </header>
  );
}
