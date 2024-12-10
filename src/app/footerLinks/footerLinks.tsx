"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

const FooterLink = () => {
  const [footerLinks, setFooterLinks] = useState(null);
  const [error, setError] = useState(null);

  // Fetch the footer links from the API
  useEffect(() => {
    const fetchFooterLinks = async () => {
      try {
        const response = await fetch('/api/footerLinks'); // Call the API
        if (!response.ok) {
          throw new Error('Failed to fetch footer links');
        }
        const data = await response.json(); // Parse the JSON response
        setFooterLinks(data); // Store the links in state
      } catch (err) {
        setError(err.message); // Handle any error
      }
    };

    fetchFooterLinks();
  }, []); // Empty array to ensure it runs only once on component mount

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!footerLinks) {
    return <div>Loading...</div>; // Show loading message while fetching
  }

  return (
    <div className="block bg-gray-100 p-6">
      {/* Company Links */}
      <h5 className="text-dark mt-2 mb-4 text-center text-xl font-bold text-gray-800">
        Company Links
      </h5>
      <table className="mx-auto w-full mb-6 ml-6">
        <tbody>
          <tr>
            {footerLinks.companyLinks.map((link, index) => (
              <td key={index}>
                <Link href={link.url}>{link.name}</Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      {/* Popular Cities */}
      <h5 className="text-dark mt-2 mb-4 text-center text-xl font-bold text-gray-800">
        Popular Cities
      </h5>
      <table className="mx-auto w-full mb-6 ml-6">
        <tbody>
          {footerLinks.popularCities.map((link, index) => (
            <tr key={index}>
              <td><Link href={link.url}>{link.name}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Corporate Cabs */}
      <h5 className="text-dark mt-2 mb-4 text-center text-xl font-bold text-gray-800">
        Corporate Cabs
      </h5>
      <table className="mx-auto w-full mb-6 ml-6">
        <tbody>
          {footerLinks.corporateCabs.map((link, index) => (
            <tr key={index}>
              <td><Link href={link.url}>{link.name}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Airport Cabs */}
      <h5 className="text-dark mt-2 mb-4 text-center text-xl font-bold text-gray-800">
        Airport Cabs
      </h5>
      <table className="mx-auto w-full mb-6 ml-6">
        <tbody>
          {footerLinks.airportCabs.map((link, index) => (
            <tr key={index}>
              <td><Link href={link.url}>{link.name}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* States */}
      <h5 className="text-dark mt-2 mb-4 text-center text-xl font-bold text-gray-800">
        States
      </h5>
      <table className="mx-auto w-full ml-6">
        <tbody>
          {footerLinks.states.map((link, index) => (
            <tr key={index}>
              <td><Link href={link.url}>{link.name}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer */}
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
        </div>
      </div>
    </div>
  );
};

export default FooterLink;
