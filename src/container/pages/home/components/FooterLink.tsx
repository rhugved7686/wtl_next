"use client";
import Link from 'next/link';

const FooterLink = () => {
  return (
    <div className="block bg-gray-100 p-6 ">
      {/* Company Links Section */}
      <h5 className="text-dark mt-2 mb-4 text-center text-xl font-bold text-gray-800">
        Company Links
      </h5>
      <table className="mx-auto w-full mb-6 ml-6">
        <tbody>
          <tr>
            <td><Link href="/">Home</Link></td>
            <td><Link href="/about">About</Link></td>
            <td><Link href="/services">Service</Link></td>
            <td><Link href="/contact">Contact</Link></td>
          </tr>
        </tbody>
      </table>

      {/* Popular Cities Section */}
      <h5 className="text-dark mt-2 mb-4 text-center text-xl font-bold text-gray-800">
        Popular Cities
      </h5>
      <table className="mx-auto w-full mb-6 ml-6">
        <tbody>
          <tr>
            <td><Link href="/city/Pune">Pune</Link></td>
            <td><Link href="/city/Mumbai">Mumbai</Link></td>
            <td><Link href="/city/Kolhapur">Kolhapur</Link></td>
            <td><Link href="/city/Satara">Satara</Link></td>
          </tr>
          <tr>
            <td><Link href="/city/Nashik">Nashik</Link></td>
            <td><Link href="/city/Ratnagiri">Ratnagiri</Link></td>
            <td><Link href="/city/Shirdi">Shirdi</Link></td>
            <td><Link href="/city/Ahmednagar">Ahmednagar</Link></td>
          </tr>
          <tr>
            <td><Link href="/city/Beed">Beed</Link></td>
            <td><Link href="/city/Jalna">Jalna</Link></td>
            <td><Link href="/city/Lonavala">Lonavala</Link></td>
            <td><Link href="/city/Akola">Akola</Link></td>
          </tr>
          <tr>
            <td><Link href="/city/Sindhudurg">Sindhudurg</Link></td>
            <td><Link href="/city/Latur">Latur</Link></td>
            <td><Link href="/city/Osmanabad">Osmanabad</Link></td>
            <td><Link href="/city/Nanded">Nanded</Link></td>
          </tr>
          <tr>
            <td><Link href="/city/Washim">Washim</Link></td>
            <td><Link href="/city/Wardha">Wardha</Link></td>
            <td><Link href="/city/Palghar">Palghar</Link></td>
            <td><Link href="/city/Chandarpur">Chandarpur</Link></td>
          </tr>
          <tr>
            <td><Link href="/city/Gondia">Gondia</Link></td>
            <td><Link href="/city/Gadchiroli">Gadchiroli</Link></td>
            <td><Link href="/city/Amravati">Amravati</Link></td>
            <td><Link href="/city/Aurangabad">Aurangabad</Link></td>
          </tr>
          <tr>
            <td><Link href="/city/Bhandara">Bhandara</Link></td>
            <td><Link href="/city/Buldhana">Buldhana</Link></td>
            <td><Link href="/city/Dhule">Dhule</Link></td>
            <td><Link href="/city/Hingoli">Hingoli</Link></td>
          </tr>
          <tr>
            <td><Link href="/city/Nagpur">Nagpur</Link></td>
            <td><Link href="/city/Parbhani">Parbhani</Link></td>
            <td><Link href="/city/Sangli">Sangli</Link></td>
            <td><Link href="/city/Raigad">Raigad</Link></td>
          </tr>
          <tr>
            <td><Link href="/city/Solapur">Solapur</Link></td>
            <td><Link href="/city/Thane">Thane</Link></td>
            <td><Link href="/city/Yavatmal">Yavatmal</Link></td>
          </tr>
        </tbody>
      </table>

      {/* Corporate Cabs Section */}
      <h5 className="text-dark mt-2 mb-4 text-center text-xl font-bold text-gray-800">
        Corporate Cabs
      </h5>
      <table className="mx-auto w-full mb-6 ml-6">
        <tbody>
          <tr>
            <td><Link href="/Corporate">Corporate Cabs in Delhi</Link></td>
            <td><Link href="/Corporate3">Corporate Cabs in Pune</Link></td>
            <td><Link href="/Corporate2">Corporate Cabs in Bangalore</Link></td>
            <td><Link href="/Corporate3">Corporate Cabs in Mumbai</Link></td>
          </tr>
          <tr>
            <td><Link href="/Telangana">Corporate Cabs in Telangana</Link></td>
            <td><Link href="/Corporate5">Corporate Cabs in Chennai</Link></td>
            <td><Link href="/Corporate6">Corporate Cabs in Indore</Link></td>
            <td><Link href="/Corporate7">Corporate Cabs in Surat</Link></td>
          </tr>
        </tbody>
      </table>

      {/* Airport Cabs Section */}
      <h5 className="text-dark mt-2 mb-4 text-center text-xl font-bold text-gray-800">
        Airport Cabs
      </h5>
      <table className="mx-auto w-full mb-6 ml-6">
        <tbody>
          <tr>
            <td><Link href="/Airport">Airport Cabs in Delhi</Link></td>
            <td><Link href="/Airport3">Airport Cabs in Pune</Link></td>
            <td><Link href="/Airport2">Airport Cabs in Bangalore</Link></td>
            <td><Link href="/Airport3">Airport Cabs in Mumbai</Link></td>
          </tr>
          <tr>
            <td><Link href="/Airport4">Airport Cabs in Telangana</Link></td>
            <td><Link href="/Airport6">Airport Cabs in Surat</Link></td>
            <td><Link href="/Airport5">Airport Cabs in Indore</Link></td>
            <td><Link href="/Airport7">Airport Cabs in Chennai</Link></td>
          </tr>
        </tbody>
      </table>

      {/* States Section */}
      <h5 className="text-dark mt-2 mb-4 text-center text-xl font-bold text-gray-800">
        States
      </h5>
      <table className="mx-auto w-full ml-6">
        <tbody>
          <tr>
            <td><Link href="/state/Maharashtra">Maharashtra</Link></td>
            <td><Link href="/state/Goa">Goa</Link></td>
            <td><Link href="/state/Delhi">Delhi</Link></td>
            <td><Link href="/state/Gujarat">Gujarat</Link></td>
          </tr>
          <tr>
            <td><Link href="/state/Madhya Pradesh">MP</Link></td>
            <td><Link href="/state/Karnataka">Karnataka</Link></td>
            <td><Link href="/state/Telangana">Telangana</Link></td>
            <td><Link href="/state/Uttar pradesh">UP</Link></td>
          </tr>
          <tr>
            <td><Link href="/state/Rajasthan">Rajasthan</Link></td>
            <td><Link href="/state/west Bengal">West Bengal</Link></td>
            <td><Link href="/state/HP">HP</Link></td>
            <td><Link href="/state/Kerala">Kerala</Link></td>
          </tr>
          <tr>
            <td><Link href="/state/Tamil Nadu">Tamil Nadu</Link></td>
            <td><Link href="/state/Andhra Pradesh">Andhra Pradesh</Link></td>
            <td><Link href="/state/Punjab">Punjab</Link></td>
            <td><Link href="/state/Odisha">Odisha</Link></td>
          </tr>
          <tr>
            <td><Link href="/state/Chhattisgarh">Chhattisgarh</Link></td>
            <td><Link href="/state/Arunachal Pradesh">Arunachal Pradesh</Link></td>
            <td><Link href="/state/Haryana">Haryana</Link></td>
            <td><Link href="/state/Bihar">Bihar</Link></td>
          </tr>
          <tr>
            <td><Link href="/state/Assam">Assam</Link></td>
            <td><Link href="/state/Jharkhand">Jharkhand</Link></td>
            <td><Link href="/state/Manipur">Manipur</Link></td>
            <td><Link href="/state/Uttarakhand">Uttarakhand</Link></td>
          </tr>
          <tr>
            <td><Link href="/state/JK">JK</Link></td>
          </tr>
        </tbody>
      </table>

      {/* Footer Section */}
      <div className="bg-gray-200 py-4 mt-6">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="lg:w-8/12 text-center lg:text-left">
            <p className="text-gray-600 text-sm">
              &copy; Copyright WTL 2023 Made with
              <span className="text-red-500"> ♥ </span> by{' '}
              <a href="https://www.cobaztech.com/" className="text-blue-600 hover:underline">
                cobaztech
              </a>
            </p>
          </div>
          <div className="lg:w-4/12 text-center lg:text-right">
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="https://www.facebook.com/Aimcab/" className="text-blue-600 hover:text-blue-800">
                  <i className="lab la-facebook-f text-2xl"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <i className="lab la-twitter text-2xl"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/aimcabs" className="text-pink-600 hover:text-pink-800">
                  <i className="lab la-instagram text-2xl"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/aim-cab-77356b208/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in" className="text-blue-700 hover:text-blue-900">
                  <i className="lab la-linkedin-in text-2xl"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLink;
