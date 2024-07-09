IP Address Tracker

This is a responsive React application that tracks the geolocation of an IP address and displays the location on a map. The application uses the IP-API service to fetch geolocation data and Leaflet for the map display. It is designed to be responsive for screen widths of 375px (mobile devices) and 1440px (desktop).
Features

    Search for an IP address to get its geolocation data.
    Display the IP address, location (country and city), timezone, and ISP.
    Show the location on an interactive map.
    Automatically recenter the map when a new location is fetched.
    Responsive design for 375px and 1440px screen widths.

Installation

    Clone the repository:

    sh

git clone https://github.com/yourusername/ip-address-tracker.git

Navigate to the project directory:

sh

cd ip-address-tracker

Install the dependencies:

sh

    npm install

Usage

    Start the development server:

    sh

npm start

Open your browser and navigate to:

arduino

    http://localhost:3000

    Enter an IP address in the input field and click the search button. The application will fetch the geolocation data and display the location on the map.

Project Structure

    src/
        components/
            MapComponent.js - Contains the main functionality for fetching geolocation data and displaying the map.
        App.js - Main application component.
        index.js - Entry point for the React application.
        MapComponent.css - Styles specific to the MapComponent.
    public/
        index.html - Main HTML file.
        images/ - Contains image assets such as the search button icon.

Dependencies

    React
    Axios
    Leaflet
    react-leaflet
    Tailwind CSS

Configuration

Make sure you have Tailwind CSS configured in your project. You can install and configure Tailwind CSS by following the Tailwind CSS installation guide.
API

This application uses the IP-API service to fetch geolocation data. No API key is required for this service.
Responsiveness

The application is designed to be responsive and works well on both mobile devices and desktops:

    Mobile devices: Optimized for a screen width of 375px.
    Desktops: Optimized for a screen width of 1440px.

Contributing

    Fork the repository.
    Create a new branch:

    sh

git checkout -b feature/your-feature-name

Make your changes and commit them:

sh

git commit -m 'Add some feature'

Push to the branch:

sh

    git push origin feature/your-feature-name

    Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgements

    Leaflet for the interactive map.
    IP-API for the geolocation data.
    Tailwind CSS for the utility-first CSS framework.
