// pages/api/cities.js

export default async function handler(req, res) {
    try {
      // You can replace this with a real database or data source
      const data = {
        cities: [
          "Pune",
          "Mumbai",
          "Kolhapur",
          "Satara",
          "Nashik",
          "Ratnagiri",
          "Shirdi",
          "Ahmednagar",
          "Beed",
          "Jalna",
          "Lonavala",
          "Akola",
          "Sindhudurg",
          "Latur",
          "Osmanabad",
          "Nanded",
          "Washim",
          "Wardha",
          "Palghar",
          "Chandarpur",
          "Gondia",
          "Gadchiroli",
          "Amravati",
          "Aurangabad",
          "Bhandara",
          "Buldhana",
          "Dhule",
          "Hingoli",
          "Nagpur",
          "Parbhani",
          "Sangli",
          "Raigad",
          "Solapur",
          "Thane",
          "Yavatmal",
        ],
        states: [
          "Maharashtra", "Goa", "Delhi", "Gujarat", "Madhya Pradesh", "Karnataka",
          "Telangana", "Uttar Pradesh", "Rajasthan", "West Bengal", "Himachal Pradesh",
          "Kerala", "Tamil Nadu", "Andhra Pradesh", "Punjab", "Odisha", "Chhattisgarh",
          "Arunachal Pradesh", "Haryana", "Bihar", "Assam", "Jharkhand", "Manipur", "Uttarakhand",
          "Jammu & Kashmir"
        ],
      };
  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  }
  