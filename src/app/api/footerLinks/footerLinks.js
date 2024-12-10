// pages/api/footerLinks.js

export default function handler(req, res) {
    const footerLinks = {
      companyLinks: [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Service", url: "/services" },
        { name: "Contact", url: "/contact" },
      ],
      popularCities: [
        { name: "Pune", url: "/city/Pune" },
        { name: "Mumbai", url: "/city/Mumbai" },
        { name: "Kolhapur", url: "/city/Kolhapur" },
        { name: "Satara", url: "/city/Satara" },
        { name: "Nashik", url: "/city/Nashik" },
        // Add other cities here
      ],
      corporateCabs: [
        { name: "Corporate Cabs in Delhi", url: "/Corporate" },
        { name: "Corporate Cabs in Pune", url: "/Corporate3" },
        { name: "Corporate Cabs in Bangalore", url: "/Corporate2" },
        // Add other corporate cab links here
      ],
      airportCabs: [
        { name: "Airport Cabs in Delhi", url: "/Airport" },
        { name: "Airport Cabs in Pune", url: "/Airport3" },
        { name: "Airport Cabs in Bangalore", url: "/Airport2" },
        // Add other airport cab links here
      ],
      states: [
        { name: "Maharashtra", url: "/state/Maharashtra" },
        { name: "Goa", url: "/state/Goa" },
        { name: "Delhi", url: "/state/Delhi" },
        { name: "Gujarat", url: "/state/Gujarat" },
        // Add other states here
      ],
    };
  
    res.status(200).json(footerLinks);
  }
  