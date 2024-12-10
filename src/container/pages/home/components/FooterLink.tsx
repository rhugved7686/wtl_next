import React from 'react';

const Footer = () => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h5 className="text-dark" style={{ marginLeft: '15px', color: '#333' }}>Company Links</h5>
        <p style={{ marginLeft: '15px', display: 'flex', alignItems: 'center', marginTop: '5px', gap: '10px',color: '#4B9CD3' }}>
          <a className='underline hover:text-sky-900' href="/">Home</a> | 
          <a className='underline hover:text-sky-900' href="/about">About</a> | 
          <a className='underline hover:text-sky-900' href="/services">Service</a> | 
          <a className='underline hover:text-sky-900' href="/contact">Contact</a>
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
        <div style={{ padding: '10px', borderRadius: '5px', maxWidth: '300px' }}>
          <h5 className="text-dark" style={{ margin: '10px 0', marginLeft: '15px', color: '#333', fontSize: '18px' }}>Popular Cities</h5>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'auto', textAlign: 'left', marginLeft: '15px',color: '#00BFFF' }}>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Pune">Pune</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Mumbai">Mumbai</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Kolhapur">Kolhapur</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Satara">Satara</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Nashik">Nashik</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Ratnagiri">Ratnagiri</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Shirdi">Shirdi</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Ahmednagar">Ahmednagar</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Beed">Beed</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Jalna">Jalna</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Lonavala">Lonavala</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Akola">Akola</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Sindhudurg">Sindhudurg</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Latur">Latur</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Osmanabad">Osmanabad</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Nanded">Nanded</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Washim">Washim</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Wardha">Wardha</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Palghar">Palghar</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Chandarpur">Chandarpur</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Gondia">Gondia</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Gadchiroli">Gadchiroli</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Amravati">Amravati</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/city/Aurangabad">Aurangabad</a></span>
          </div>
        </div>
        <div style={{ padding: '10px', borderRadius: '5px', maxWidth: 'auto' }}>
          <h5 className="text-dark" style={{ margin: '10px 0', color: '#333', fontSize: '18px' }}>Corporate Cabs</h5>
          <p style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left',color: '#00BFFF' }}>
            <span><a className='hover:underline hover:text-blue-500' href="/Corporate">Corporate Cabs in Delhi</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/Corporate3">Corporate Cabs in Pune</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/Corporate2">Corporate Cabs in Bangalore</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/Corporate3">Corporate Cabs in Mumbai</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/Telangana">Corporate Cabs in Telangana</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/Corporate5">Corporate Cabs in Chennai</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/Corporate6">Corporate Cabs in Indore</a></span>
            <span><a className='hover:underline hover:text-blue-500' href="/Corporate7">Corporate Cabs in Surat</a></span>
          </p>
        </div>
        <div style={{ padding: '10px', borderRadius: '5px', maxWidth: 'auto' }}>
          <h5 className="text-dark" style={{ margin: '10px 0', color: '#333', fontSize: '18px' }}>Airport Cabs</h5>
          <p style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left', color: '#00BFFF' }}>
            <a className='hover:underline hover:text-blue-500'  href="/Airport">Airport Cabs in Delhi</a>
            <a className='hover:underline hover:text-blue-500' href="/Airport3">Airport Cabs in Pune</a>
            <a className='hover:underline hover:text-blue-500' href="/Airport2">Airport Cabs in Bangalore</a>
            <a className='hover:underline hover:text-blue-500' href="/Airport3">Airport Cabs in Mumbai</a>
            <a className='hover:underline hover:text-blue-500' href="/Airport4">Airport Cabs in Telangana</a>
            <a className='hover:underline hover:text-blue-500' href="/Airport6">Airport Cabs in Surat</a>
            <a className='hover:underline hover:text-blue-500' href="/Airport5">Airport Cabs in Indore</a>
            <a className='hover:underline hover:text-blue-500' href="/Airport7">Airport Cabs in Chennai</a>
          </p>
        </div>
        <div style={{ padding: '10px', borderRadius: '5px', maxWidth: 'auto' }}>
          <h5 className="text-dark" style={{ margin: '10px 0', color: '#333', fontSize: '18px' }}>States</h5>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'auto', textAlign: 'left', marginLeft: '15px',color: '#00BFFF' }}>
            <span><a className='hover:underline hover:text-blue-500'  href="/state/Maharashtra">Maharashtra</a></span>
            <span><a className='hover:underline hover:text-blue-500'  href="/state/Goa">Goa</a></span>
            <span><a className='hover:underline hover:text-blue-500'  href="/state/Delhi">Delhi</a></span>
            <span><a className='hover:underline hover:text-blue-500'  href="/state/Gujarat">Gujarat</a></span>
            <span><a className='hover:underline hover:text-blue-500'  href="/state/Madhya Pradesh">MP</a></span>
            <span><a className='hover:underline hover:text-blue-500'  href="/state/Karnataka">Karnataka</a></span>
            <span><a className='hover:underline hover:text-blue-500'  href="/state/Telangana">Telangana</a></span>
            <span><a className='hover:underline hover:text-blue-500'  href="/state/Uttar Pradesh">UP</a></span>
            <span><a className='hover:underline hover:text-blue-500'  href="/state/Rajasthan">Rajasthan</a></span>
            <span><a className='hover:underline hover:text-blue-500'  href="/state/West Bengal">West Bengal</a></span>
            <span><a className='hover:underline hover:text-blue-500'  href="/state/HP">HP</a></span>
            <span><a className='hover:underline hover:text-blue-500'  href="/state/Kerala">Kerala</a></span>
            <span><a className='hover:underline hover:text-blue-500'  href="/state/Tamil Nadu">Tamil Nadu</a></span>
            <span><a className='hover:underline hover:text-blue-500'  href="/state/Andhra Pradesh">Andhra Pradesh</a></span>
            <span><a className='hover:underline hover:text-blue-500'  href="/state/Punjab">Punjab</a></span>
            <span><a className='hover:underline hover:text-blue-500'  href="/state/Odisha">Odisha</a></span>
            <span><a className='hover:underline hover:text-blue-500'  href="/state/Chhattisgarh">Chhattisgarh</a></span>
            <span><a className='hover:underline hover:text-blue-500'  href="/state/Arunachal Pradesh">Arunachal Pradesh</a></span>
          </div>
        </div>
      </div>
      <div className="footer-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: '#f5f7fc' }}>
      <div className="col-lg-8" style={{ textAlign: 'center' }}>
        <div className="term-box footer-item" style={{ marginTop: '10px' }}>
          <p className="copy__desc">
            &copy; Copyright WTL 2023 Made with
            <span className="la la-heart" style={{ color: 'red' }}></span> by
            <a href="https://www.cobaztech.com/">cobaztech</a>
          </p>
        </div>
      </div>
      <div className="col-lg-4" style={{ textAlign: 'center', padding: '10px' }}>
        <div className="footer-social-box" style={{ display: 'inline-block' }}>
          <ul className="social-profile" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'inline-flex', gap: '15px' }}>
            <li style={{ display: 'inline' }}>
              <a
                href="https://www.facebook.com/profile.php?id=61554946222967&mibextid=ZbWKwL"
                style={{ textDecoration: 'none', color: '#3b5998', fontSize: '20px', transition: 'color 0.3s ease' }}
              >
                <i className="lab la-facebook-f"></i>
              </a>
            </li>
            <li style={{ display: 'inline' }}>
              <a
                href="https://x.com/world_trip_link"
                style={{ textDecoration: 'none', color: '#1da1f2', fontSize: '20px', transition: 'color 0.3s ease' }}
              >
                <i className="lab la-twitter"></i>
              </a>
            </li>
            <li style={{ display: 'inline' }}>
              <a
                href="https://www.instagram.com/worldtriplink/"
                style={{ textDecoration: 'none', color: '#e1306c', fontSize: '20px', transition: 'color 0.3s ease' }}
              >
                <i className="lab la-instagram"></i>
              </a>
            </li>
            <li style={{ display: 'inline' }}>
              <a
                href="https://www.linkedin.com/in/world-trip-link9562762a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                style={{ textDecoration: 'none', color: '#0077b5', fontSize: '20px', transition: 'color 0.3s ease' }}
              >
                <i className="lab la-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
   </div>
    
  );
};

export default Footer;
