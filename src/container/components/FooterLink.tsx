import Link from 'next/link';
import React from 'react';



const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 mt-5 lg:flex-row lg:items-start">
        <h5 className="ml-4 font-bold text-gray-800 lg:mb-0 lg:mr-4" style={{ color: '#333' }}>Company Links</h5>
        <p className="flex flex-wrap items-center gap-2 text-sky-600">
          <Link className="underline hover:text-sky-900" href="/">Home</Link> | 
          <Link className="underline hover:text-sky-900" href="/about">About</Link> | 
          <Link className="underline hover:text-sky-900" href="/services">Service</Link> | 
          <Link className="underline hover:text-sky-900" href="/contact">Contact</Link>
        </p>
      </div>

      <div className="flex flex-col items-center p-4 lg:flex-row lg:items-start lg:justify-between" style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
        <div style={{ padding: '10px', borderRadius: '5px', maxWidth: '300px' }}>
          <h5  className="mb-2 font-bold text-gray-800"style={{ margin: '10px 0', marginLeft: '15px', color: '#333', fontSize: '18px' }}>Popular Cities</h5>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'auto', textAlign: 'left', marginLeft: '15px',color: 'black' }}>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Pune">Pune</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Mumbai">Mumbai</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Kolhapur">Kolhapur</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Satara">Satara</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Nashik">Nashik</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Ratnagiri">Ratnagiri</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Shirdi">Shirdi</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Ahmednagar">Ahmednagar</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Beed">Beed</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Jalna">Jalna</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Lonavala">Lonavala</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Akola">Akola</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Sindhudurg">Sindhudurg</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Latur">Latur</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Osmanabad">Osmanabad</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Nanded">Nanded</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Washim">Washim</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Wardha">Wardha</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Palghar">Palghar</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Chandarpur">Chandarpur</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Gondia">Gondia</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Gadchiroli">Gadchiroli</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Amravati">Amravati</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Aurangabad">Aurangabad</Link></span>
          </div>
        </div>
        <div style={{ padding: '10px', borderRadius: '5px', maxWidth: 'auto' }}>
          <h5 className="mb-2 font-bold text-gray-800"style={{ margin: '10px 0', color: '#333', fontSize: '18px' }}>Corporate Cabs</h5>
          <p style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left',color: 'black' }}>
            <span><Link className='hover:underline hover:text-blue-500' href="/corporate/delhi">Corporate Cabs in Delhi</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Corporate3">Corporate Cabs in Pune</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Corporate2">Corporate Cabs in Bangalore</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Corporate3">Corporate Cabs in Mumbai</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Telangana">Corporate Cabs in Telangana</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Corporate5">Corporate Cabs in Chennai</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Corporate6">Corporate Cabs in Indore</Link></span>
            <span><Link className='hover:underline hover:text-blue-500' href="/city/Corporate7">Corporate Cabs in Surat</Link></span>
          </p>
        </div>
        <div style={{ padding: '10px', borderRadius: '5px', maxWidth: 'auto' }}>
          <h5 className="mb-2 font-bold text-gray-800" style={{ margin: '10px 0', color: '#333', fontSize: '18px' }}>Airport Cabs</h5>
          <p style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left', color: 'black' }}>
            <Link className='hover:underline hover:text-blue-500' href="/city/Airport">Airport Cabs in Delhi</Link>
            <Link className='hover:underline hover:text-blue-500' href="/city/Airport3">Airport Cabs in Pune</Link>
            <Link className='hover:underline hover:text-blue-500' href="/city/Airport2">Airport Cabs in Bangalore</Link>
            <Link className='hover:underline hover:text-blue-500' href="/city/Airport3">Airport Cabs in Mumbai</Link>
            <Link className='hover:underline hover:text-blue-500' href="/city/Airport4">Airport Cabs in Telangana</Link>
            <Link className='hover:underline hover:text-blue-500' href="/city/Surat">Airport Cabs in Surat</Link>
            <Link className='hover:underline hover:text-blue-500' href="/city/Airport5">Airport Cabs in Indore</Link>
            <Link className='hover:underline hover:text-blue-500' href="/city/Airport7">Airport Cabs in Chennai</Link>
          </p>
        </div>
        <div style={{ padding: '10px', borderRadius: '5px', maxWidth: 'auto' }}>
          <h5 className="font-bold text-gray-800 " style={{ margin: '10px 0', color: '#333', fontSize: '18px' }}>States</h5>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'auto', textAlign: 'left', marginLeft: '15px',color: 'black' }}>
            <span><Link className='hover:underline hover:text-blue-500'  href="/state/Goa">Goa</Link></span>
            <span><Link className='hover:underline hover:text-blue-500'  href="/state/Maharashtra">Maharashtra</Link></span>
            <span><Link className='hover:underline hover:text-blue-500'  href="/state/Delhi">Delhi</Link></span>
            <span><Link className='hover:underline hover:text-blue-500'  href="/state/Gujarat">Gujarat</Link></span>
            <span><Link className='hover:underline hover:text-blue-500'  href="/state/Madhya-Pradesh">MP</Link></span>
            <span><Link className='hover:underline hover:text-blue-500'  href="/state/Karnataka">Karnataka</Link></span>
            <span><Link className='hover:underline hover:text-blue-500'  href="/state/Telangana">Telangana</Link></span>
            <span><Link className='hover:underline hover:text-blue-500'  href="/state/Uttar-Pradesh">UP</Link></span>
            <span><Link className='hover:underline hover:text-blue-500'  href="/state/Rajasthan">Rajasthan</Link></span>
            <span><Link className='hover:underline hover:text-blue-500'  href="/state/West-Bengal">West Bengal</Link></span>
            <span><Link className='hover:underline hover:text-blue-500'  href="/state/HP">HP</Link></span>
            <span><Link className='hover:underline hover:text-blue-500'  href="/state/Kerala">Kerala</Link></span>
            <span><Link className='hover:underline hover:text-blue-500'  href="/state/Tamil-Nadu">Tamil Nadu</Link></span>
            <span><Link className='hover:underline hover:text-blue-500'  href="/state/Andhra-Pradesh">Andhra Pradesh</Link></span>
            <span><Link className='hover:underline hover:text-blue-500'  href="/state/Punjab">Punjab</Link></span>
            <span><Link className='hover:underline hover:text-blue-500'  href="/state/Odisha">Odisha</Link></span>
            <span><Link className='hover:underline hover:text-blue-500'  href="/state/Chhattisgarh">Chhattisgarh</Link></span>
            <span><Link className='hover:underline hover:text-blue-500'  href="/state/Arunachal-Pradesh">Arunachal Pradesh</Link></span>
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
                <i className="lab la-facebook-f hover:scale-110"></i>
              </a>
            </li>
            <li style={{ display: 'inline' }}>
              <a
                href="https://x.com/world_trip_link"
                style={{ textDecoration: 'none', color: '#1da1f2', fontSize: '20px', transition: 'color 0.3s ease' }}
              >
                <i className="lab la-twitter hover:scale-110"></i>
              </a>
            </li>
            <li style={{ display: 'inline' }}>
              <a
                href="https://www.instagram.com/worldtriplink/"
                style={{ textDecoration: 'none', color: '#e1306c', fontSize: '20px', transition: 'color 0.3s ease' }}
              >
                <i className="lab la-instagram hover:scale-110"></i>
              </a>
            </li>
            <li style={{ display: 'inline' }}>
              <a
                href="https://www.linkedin.com/in/world-trip-link9562762a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                style={{ textDecoration: 'none', color: '#0077b5', fontSize: '20px', transition: 'color 0.3s ease' }}
              >
                <i className="lab la-linkedin-in hover:scale-110"></i>
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
