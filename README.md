# Interactive map of Kazakhstan

Explore Kazakhstan’s landmarks on an illustrated map. Select a marker to discover a place, view its photo, and browse related tour links.

**[Open the live demo](https://interactive-map-of-kazakhstan.vercel.app)**

<img src="Map.png" alt="Illustrated base map of Kazakhstan used by the application" width="100%">

## Explore

- Pan and zoom around the illustrated map.
- Select a landmark to open its description, photo, and available tours.
- Resize the details panel on desktop.
- Expand or dismiss the bottom sheet on mobile.
- Select the map background or close button to dismiss the details.

## Run locally

This is a static HTML, CSS, and JavaScript project. There is no package installation or build step.

Clone the repository:

```sh
git clone https://github.com/Wezzeso/Interactive-map-of-Kazakhstan.git
cd Interactive-map-of-Kazakhstan
```

Serve the directory with any static HTTP server. For example, with Python 3:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open **http://127.0.0.1:8000** in your browser.

An internet connection is needed for the CDN libraries, web fonts, and externally hosted landmark photos.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | Page structure, details panel, and library loading |
| `map.js` | Landmark data, map markers, panel interactions, and zoom behavior |
| `style.css` | Map styling, responsive panels, typography, and animations |
| `Map.png` | Illustrated base map |
| `kazakh_bg.png` | Background texture |

## Make it your own

Edit the `landmarks` array in `map.js` to change names, descriptions, images, tour links, or marker positions.

The map uses Leaflet’s `L.CRS.Simple`: marker positions are coordinates on the illustration, rather than geographic latitude and longitude. Select an empty area of the map and check the browser console for its coordinates.

If you replace `Map.png`, update the image bounds in `map.js` and reposition the landmarks to match the new artwork.

## Built with

- HTML, CSS, and vanilla JavaScript
- [Leaflet 1.9.4](https://leafletjs.com/)
- [Font Awesome](https://fontawesome.com/)
- Inter and Playfair Display from [Google Fonts](https://fonts.google.com/)

## External content and links

Landmark photos and most tour links reference `sheftour.kz`. Some tour links point to adjacent site pages, such as `../Almaty 6 days/index.html`, which are not included in this repository. Update those links when using the map as a standalone site.
