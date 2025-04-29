 # World Map Quadrant Display

Displays a world map quadrant image based on validated latitude and longitude input.

This script was developed as a requirement for the Graduate Certificate in GIS at the Centre of Geographic Sciences, NSCC, Lawrencetown, Nova Scotia.

For educational purposes only.
© 2025 COGS. Created by Brian Gauthier, February 5, 2025.

## How It Works
- User inputs latitude and longitude.
- Latitude must be between -90 and 90.
- Longitude must be between -180 and 180.
- The program determines the hemisphere:
  - North/South for latitude
  - East/West for longitude
- Based on the hemisphere, it displays the corresponding map image.

## Files

WorldMapQuadDisplay/
├── index.html            # HTML form for input and output
├── CoordImg.js           # JavaScript for handling validation and updating map
├── css/
│   └── CoordImg.css      # Optional: Styles for the page layout
└── images/
    ├── NorthEast.jpg     # Image for North-East quadrant
    ├── NorthWest.jpg     # Image for North-West quadrant
    ├── SouthEast.jpg     # Image for South-East quadrant
    ├── SouthWest.jpg     # Image for South-West quadrant
    ├── World.jpg         # Default world map image
    └── BadWorld.jpg      # Image for invalid coordinates


## Features
- **Latitude and Longitude Input:**
  - Validates if the latitude is between -90 and 90 and longitude between -180 and 180.
  - Displays the corresponding map quadrant.
- **Quadrant Display:**
  - Shows images for the four world quadrants: North-East, North-West, South-East, South-West.
  - Default image: World map.
  - Invalid coordinates display a "Bad World" image.

## How to Use
1. Open `index.html` in a browser.
2. Enter latitude and longitude values.
3. Click the **Find Coordinates** button.
4. The corresponding map quadrant will be displayed, or an error message for invalid coordinates.

## Example
- Input:
  - Latitude: 45
  - Longitude: -70
- Output: Displays the North-West quadrant image.

