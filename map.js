document.addEventListener('DOMContentLoaded', function () {
    // 1. Initialize map with simple coordinate system designed for flat images
    const map = L.map('interactive-map', {
        crs: L.CRS.Simple,
        minZoom: -1.5,
        maxZoom: 2,
        zoomControl: true,
        scrollWheelZoom: true
    });

    // 2. Define Image Bounds
    // Coordinates are set as [[bottom, left], [top, right]]
    // For now we set generic bounds. You can adjust this later depending on the exact dimensions of map.png.
    const bounds = [[0, 0], [1080, 1920]];

    // Path to the provided static map image.
    const imageUrl = 'https://github.com/Wezzeso/Interactive-map-of-Kazakhstan/blob/64cc9dda70b92a32ccec48ae99889530a6e8a583/Map.png';

    // 3. Add Image Overlay
    L.imageOverlay(imageUrl, bounds).addTo(map);
    map.fitBounds(bounds);

    // 4. Define regions/places with POINT markers instead of polygons
    // 
    // YOU WILL NEED TO UPDATE THESE 'point' COORDINATES MANUALLY LATER
    // TO MATCH PRECISE LOCATIONS ON YOUR CUSTOM 'Map.png'.
    // Use the console output when clicking on the map (line 95) to find coordinates.
    //
    const landmarks = [
        {
            id: 'Palace of Peace and Reconciliation',
            name: 'Palace of Peace and Reconciliation',
            description: 'The Palace of Peace and Reconciliation, also translated as the Pyramid of Peace and Accord, is a 62-metre-high pyramid in Astana, the capital of Kazakhstan, that serves as a non-denominational national spiritual centre and event venue.',
            point: [754.5, 1198.0],
            image: 'https://sheftour.kz/wp-content/uploads/2026/02/palace-of-peace-and-reconciliation-the-pyramid.webp',
            tours: [
                { title: 'Astana: 3-Day City Tour', url: 'https://sheftour.kz/astana-3-days' },
                { title: 'Astana & Burabay: 5-Day Tour', url: 'https://sheftour.kz/astana/' },
                { title: 'Astana – Almaty: 7-Day Adventure Tour', url: 'https://sheftour.kz/kazakhstan-dmc/astana-almaty/' }
            ]
        },
        {
            id: 'Nur alemi pavilion EXPO 2017',
            name: 'Nur alemi pavilion EXPO 2017',
            description: 'Expo 2017 Astana was an International Exposition which took place from June 10 to September 10, 2017 in Astana, Kazakhstan.',
            point: [720.5, 1171.8],
            image: 'https://sheftour.kz/wp-content/uploads/2026/02/nur-alem-sphere-expo-2017-museum.webp',
            tours: [
                { title: 'Astana: 3-Day City Tour', url: 'https://sheftour.kz/astana-3-days' },
                { title: 'Astana & Burabay: 5-Day Tour', url: 'https://sheftour.kz/astana/' },
                { title: 'Astana – Almaty: 7-Day Adventure Tour', url: 'https://sheftour.kz/kazakhstan-dmc/astana-almaty/' }
            ]
        },
        {
            id: 'khan-shatyr',
            name: 'Khan Shatyr',
            description: 'A striking transparent tent structure that serves as a major entertainment and shopping center in Astana.',
            point: [798.0, 1050.5],
            image: 'https://sheftour.kz/wp-content/uploads/2026/02/khan-shatyr-entertainment-center.webp',
            tours: [
                { title: 'Astana: 3-Day Express', url: 'https://sheftour.kz/astana-3-days/' },
                { title: 'Astana & Burabay: 5-Day Adventure', url: 'https://sheftour.kz/astana' },
                { title: 'Astana – Burabay', url: 'https://sheftour.kz/kazakhstan-dmc/astana-burabay/' },
                { title: 'Astana – Almaty', url: 'https://sheftour.kz/kazakhstan-dmc/astana-almaty/' }
            ]
        },
        {
            id: 'baiterek',
            name: 'Baiterek',
            description: 'An iconic observation tower in Astana, symbolizing a mythical tree of life and a magic bird.',
            point: [756.5, 1106.5],
            image: 'https://sheftour.kz/wp-content/uploads/2026/02/baiterek-monument.webp',
            tours: [
                { title: 'Astana: 3-Day Express', url: 'https://sheftour.kz/astana-3-days/' },
                { title: 'Astana & Burabay: 5-Day Adventure', url: 'https://sheftour.kz/astana' },
                { title: 'Astana – Burabay', url: 'https://sheftour.kz/kazakhstan-dmc/astana-burabay/' },
                { title: 'Astana – Almaty', url: 'https://sheftour.kz/kazakhstan-dmc/astana-almaty/' }
            ]
        },
        {
            id: 'national-museum',
            name: 'National Museum',
            description: 'The National Museum of the Republic of Kazakhstan, detailing the rich history and culture of the nation.',
            point: [724.0, 1054.5],
            image: 'https://sheftour.kz/wp-content/uploads/2026/02/national-museum-of-the-republic-of-kazakhstan.webp',
            tours: [
                { title: 'Astana: 3-Day Express', url: 'https://sheftour.kz/astana-3-days/' },
                { title: 'Astana & Burabay: 5-Day Adventure', url: 'https://sheftour.kz/astana' },
                { title: 'Astana – Burabay', url: 'https://sheftour.kz/kazakhstan-dmc/astana-burabay/' },
                { title: 'Astana – Almaty', url: 'https://sheftour.kz/kazakhstan-dmc/astana-almaty/' }
            ]
        },
        {
            id: 'ak-orda',
            name: 'Ak Orda',
            description: 'The official workplace of the President of Kazakhstan, located in the capital city.',
            point: [754.5, 1017.5],
            image: 'https://sheftour.kz/wp-content/uploads/2026/02/ak-orda-presidential-palace.webp',
            tours: [
                { title: 'Astana: 3-Day Express', url: 'https://sheftour.kz/astana-3-days/' },
                { title: 'Astana & Burabay: 5-Day Adventure', url: 'https://sheftour.kz/astana' },
                { title: 'Astana – Burabay', url: 'https://sheftour.kz/kazakhstan-dmc/astana-burabay/' },
                { title: 'Astana – Almaty', url: 'https://sheftour.kz/kazakhstan-dmc/astana-almaty/' }
            ]
        },
        {
            id: 'grand-mosque',
            name: 'Grand Mosque',
            description: 'The Grand Mosque of Astana, one of the largest mosques in Central Asia with stunning architecture.',
            point: [803.0, 1176.0],
            image: 'https://sheftour.kz/wp-content/uploads/2026/02/grand-mosque-of-astana.webp',
            tours: [
                { title: 'Astana: 3-Day Express', url: 'https://sheftour.kz/astana-3-days/' },
                { title: 'Astana & Burabay: 5-Day Adventure', url: 'https://sheftour.kz/astana' },
                { title: 'Astana – Burabay', url: 'https://sheftour.kz/kazakhstan-dmc/astana-burabay/' },
                { title: 'Astana – Almaty', url: 'https://sheftour.kz/kazakhstan-dmc/astana-almaty/' }
            ]
        },
        {
            id: 'zhumbaktas',
            name: 'Zhumbaktas',
            description: 'A famous rock formation in the Burabay National Park, rising from the waters of Lake Burabay and resembling a sphinx.',
            point: [916.3, 1058.0],
            color: 'green',
            image: 'https://sheftour.kz/wp-content/uploads/2026/02/zhumbaktas-rock-burabay.webp',
            tours: [
                { title: 'Astana & Burabay: 5-Day Tour', url: 'https://sheftour.kz/astana/' },
                { title: 'Astana – Burabay', url: 'https://sheftour.kz/kazakhstan-dmc/astana-burabay/' }
            ]
        },
        {
            id: 'bolektau',
            name: 'Bolektau Mountain',
            description: 'A scenic mountain in the Burabay resort zone, offering panoramic views of the surrounding lakes and forests.',
            point: [959.3, 1092.3],
            color: 'green',
            image: 'https://sheftour.kz/wp-content/uploads/2026/02/bolektau-mountain-burabay.webp',
            tours: [
                { title: 'Astana & Burabay: 5-Day Tour', url: 'https://sheftour.kz/astana/' },
                { title: 'Astana – Burabay', url: 'https://sheftour.kz/kazakhstan-dmc/astana-burabay/' }
            ]
        },
        {
            id: 'blue-lagoon',
            name: 'Blue Lagoon',
            description: 'A stunning turquoise lake nestled among pine forests in the Burabay National Park.',
            point: [885.5, 1094.3],
            color: 'green',
            image: 'https://sheftour.kz/wp-content/uploads/2026/02/blue-lagoon-burabay.webp',
            tours: [
                { title: 'Astana & Burabay: 5-Day Tour', url: 'https://sheftour.kz/astana/' },
                { title: 'Astana – Burabay', url: 'https://sheftour.kz/kazakhstan-dmc/astana-burabay/' }
            ]
        },
        {
            id: 'burabai-bazar',
            name: 'Burabai Bazar',
            description: 'The local market in Burabay where visitors can find traditional Kazakh souvenirs, crafts, and local delicacies.',
            point: [881.0, 1128.8],
            color: 'green',
            image: 'https://sheftour.kz/wp-content/uploads/2026/02/burabai-bazar.webp',
            tours: [
                { title: 'Astana & Burabay: 5-Day Tour', url: 'https://sheftour.kz/astana/' },
                { title: 'Astana – Burabay', url: 'https://sheftour.kz/kazakhstan-dmc/astana-burabay/' }
            ]
        },
        {
            id: 'kenesary-cave',
            name: 'Kenesary Cave',
            description: 'A historic cave in the Burabay area, named after the Kazakh khan Kenesary Kasymov who once used it as a hideout.',
            point: [930.8, 1145.0],
            color: 'green',
            image: 'https://sheftour.kz/wp-content/uploads/2026/02/kenesary-cave-burabay.webp',
            tours: [
                { title: 'Astana & Burabay: 5-Day Tour', url: 'https://sheftour.kz/astana/' },
                { title: 'Astana – Burabay', url: 'https://sheftour.kz/kazakhstan-dmc/astana-burabay/' }
            ]
        },
        {
            id: 'glory-memorial',
            name: 'Glory Memorial',
            description: 'A memorial complex located in Panfilov Park, dedicated to the heroes of the Panfilov Division.',
            point: [375.0, 1378.0],
            color: 'blue',
            image: '../wp-content/uploads/2026/02/kazakhstan-almaty-tour-4.webp',
            tours: [
                { title: 'Almaty: 4-Day Highlights', url: '../Almaty 4 days/index.html' },
                { title: 'Almaty: 6-Day Grand Tour', url: '../Almaty 6 days/index.html' },
                { title: 'Astana – Almaty', url: '../Astana - Almaty/index.html' }
            ]
        },
        {
            id: 'kaindy-lake',
            name: 'Kaindy Lake',
            description: 'A beautiful alpine lake known for its submerged forest and striking turquoise water.',
            point: [438.0, 1564.5],
            color: 'blue',
            image: '../wp-content/uploads/2026/02/kazakhstan-almaty-tour-4.webp',
            tours: [
                { title: 'Almaty: 4-Day Highlights', url: '../Almaty 4 days/index.html' },
                { title: 'Almaty: 6-Day Grand Tour', url: '../Almaty 6 days/index.html' },
                { title: 'Astana – Almaty', url: '../Astana - Almaty/index.html' }
            ]
        },
        {
            id: 'kok-tobe',
            name: 'Kok-Tobe Hill',
            description: 'A popular mountain and recreation area offering panoramic views of Almaty city.',
            point: [451.5, 1488.5],
            color: 'blue',
            image: '../wp-content/uploads/2026/02/kazakhstan-almaty-tour-4.webp',
            tours: [
                { title: 'Almaty: 4-Day Highlights', url: '../Almaty 4 days/index.html' },
                { title: 'Almaty: 6-Day Grand Tour', url: '../Almaty 6 days/index.html' },
                { title: 'Astana – Almaty', url: '../Astana - Almaty/index.html' }
            ]
        },
        {
            id: 'kurtogay-tract',
            name: 'Kurtogay Tract',
            description: 'A scenic and dramatic part of the Charyn Canyon, offering stunning landscapes.',
            point: [472.5, 1447.5],
            color: 'blue',
            image: '../wp-content/uploads/2026/02/kazakhstan-almaty-tour-4.webp',
            tours: [
                { title: 'Almaty: 4-Day Highlights', url: '../Almaty 4 days/index.html' },
                { title: 'Almaty: 6-Day Grand Tour', url: '../Almaty 6 days/index.html' },
                { title: 'Astana – Almaty', url: '../Astana - Almaty/index.html' }
            ]
        },
        {
            id: 'medeu',
            name: 'Medeu',
            description: 'The highest olympic-sized ice skating rink in the world, located just outside Almaty.',
            point: [406.5, 1575.5],
            color: 'blue',
            image: '../wp-content/uploads/2026/02/kazakhstan-almaty-tour-4.webp',
            tours: [
                { title: 'Almaty: 4-Day Highlights', url: '../Almaty 4 days/index.html' },
                { title: 'Almaty: 6-Day Grand Tour', url: '../Almaty 6 days/index.html' },
                { title: 'Astana – Almaty', url: '../Astana - Almaty/index.html' }
            ]
        },
        {
            id: 'park-28-panfilov',
            name: 'Park of 28 Panfilov Guardsmen',
            description: 'An urban park in central Almaty, featuring the Zenkov Cathedral and Glory Memorial.',
            point: [397.5, 1378.0],
            color: 'blue',
            image: '../wp-content/uploads/2026/02/kazakhstan-almaty-tour-4.webp',
            tours: [
                { title: 'Almaty: 4-Day Highlights', url: '../Almaty 4 days/index.html' },
                { title: 'Almaty: 6-Day Grand Tour', url: '../Almaty 6 days/index.html' },
                { title: 'Astana – Almaty', url: '../Astana - Almaty/index.html' }
            ]
        },
        {
            id: 'republic-square',
            name: 'Republic Square',
            description: 'The central square of Almaty, surrounded by important government buildings and monuments.',
            point: [353.5, 1439.0],
            color: 'blue',
            image: '../wp-content/uploads/2026/02/kazakhstan-almaty-tour-4.webp',
            tours: [
                { title: 'Almaty: 4-Day Highlights', url: '../Almaty 4 days/index.html' },
                { title: 'Almaty: 6-Day Grand Tour', url: '../Almaty 6 days/index.html' },
                { title: 'Astana – Almaty', url: '../Astana - Almaty/index.html' }
            ]
        },
        {
            id: 'shymbulak',
            name: 'Shymbulak Mountain Resort',
            description: 'The largest ski resort in Central Asia, offering fantastic slopes and alpine views.',
            point: [488.5, 1334.0],
            color: 'blue',
            image: '../wp-content/uploads/2026/02/kazakhstan-almaty-tour-4.webp',
            tours: [
                { title: 'Almaty: 4-Day Highlights', url: '../Almaty 4 days/index.html' },
                { title: 'Almaty: 6-Day Grand Tour', url: '../Almaty 6 days/index.html' },
                { title: 'Astana – Almaty', url: '../Astana - Almaty/index.html' }
            ]
        },
        {
            id: 'zenkov-cathedral',
            name: 'Zenkov Cathedral (Ascension Cathedral)',
            description: 'A stunning Russian Orthodox cathedral made entirely of wood without a single nail.',
            point: [408.5, 1435.0],
            color: 'blue',
            image: '../wp-content/uploads/2026/02/kazakhstan-almaty-tour-4.webp',
            tours: [
                { title: 'Almaty: 4-Day Highlights', url: '../Almaty 4 days/index.html' },
                { title: 'Almaty: 6-Day Grand Tour', url: '../Almaty 6 days/index.html' },
                { title: 'Astana – Almaty', url: '../Astana - Almaty/index.html' }
            ]
        },
        {
            id: 'ak-mechet',
            name: 'Ak Mechet Cave',
            description: 'A magnificent limestone cave considered a sacred place with its own internal microclimate.',
            point: [238.8, 1065.8],
            color: 'purple',
            image: '../wp-content/uploads/2026/02/kazakhstan-mahgystau-3.webp',
            tours: [
                { title: 'Astana – Almaty – Turkistan: 7-Day Tour', url: 'https://sheftour.kz/kazakhstan-dmc/astana-almaty-turkistan/' }
            ]
        },
        {
            id: 'arystan-bab',
            name: 'Arystan-Bab Mausoleum',
            description: 'A historic mausoleum dedicated to Arystan-Bab, a prominent mystic and teacher of Khoja Ahmed Yasawi.',
            point: [333.3, 1104.8],
            color: 'purple',
            image: '../wp-content/uploads/2026/02/kazakhstan-mahgystau-3.webp',
            tours: [
                { title: 'Astana – Almaty – Turkistan: 7-Day Tour', url: 'https://sheftour.kz/kazakhstan-dmc/astana-almaty-turkistan/' }
            ]
        },
        {
            id: 'besik-tobe',
            name: 'Besik-Tobe',
            description: 'An archaeological site featuring remnants of ancient settlements in the Turkestan region.',
            point: [319.8, 1132.8],
            color: 'purple',
            image: '../wp-content/uploads/2026/02/kazakhstan-mahgystau-3.webp',
            tours: [
                { title: 'Astana – Almaty – Turkistan: 7-Day Tour', url: 'https://sheftour.kz/kazakhstan-dmc/astana-almaty-turkistan/' }
            ]
        },
        {
            id: 'keruen-saray',
            name: 'Keruen Saray',
            description: 'A modern tourism and entertainment complex styled as an ancient caravan serai.',
            point: [268.8, 1136.0],
            color: 'purple',
            image: '../wp-content/uploads/2026/02/kazakhstan-mahgystau-3.webp',
            tours: [
                { title: 'Astana – Almaty – Turkistan: 7-Day Tour', url: 'https://sheftour.kz/kazakhstan-dmc/astana-almaty-turkistan/' }
            ]
        },
        {
            id: 'khoja-ahmed-yasawi',
            name: 'Khoja Ahmed Yasawi Mausoleum',
            description: 'A UNESCO World Heritage site and an outstanding piece of medieval architecture.',
            point: [300.8, 1051.8],
            color: 'purple',
            image: '../wp-content/uploads/2026/02/kazakhstan-mahgystau-3.webp',
            tours: [
                { title: 'Astana – Almaty – Turkistan: 7-Day Tour', url: 'https://sheftour.kz/kazakhstan-dmc/astana-almaty-turkistan/' }
            ]
        },
        {
            id: 'otrar',
            name: 'Otrar Ancient Settlement',
            description: 'Ruins of an ancient trading city on the Great Silk Road.',
            point: [313.0, 988.8],
            color: 'purple',
            image: '../wp-content/uploads/2026/02/kazakhstan-mahgystau-3.webp',
            tours: [
                { title: 'Astana – Almaty – Turkistan: 7-Day Tour', url: 'https://sheftour.kz/kazakhstan-dmc/astana-almaty-turkistan/' }
            ]
        }
    ];

    // Define a custom icon (divIcon) for the pulsing dots
    const pulsingIcon = L.divIcon({
        className: '', // Clear default leaflet class
        html: '<div class="custom-map-point"></div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12], // center of the icon
        popupAnchor: [0, -15] // opens popup above the point
    });

    // Keep track of all marker DOM elements for resizing
    const markerElements = [];

    // 5. Render Point Markers & Bind Popups
    landmarks.forEach(landmark => {
        // Choose icon dynamically based on the landmark's color configuration
        let currentIcon = pulsingIcon;
        let className = 'custom-map-point';
        if (landmark.color === 'green') {
            className += ' green-point';
            currentIcon = L.divIcon({
                className: '',
                html: `<div class="${className}"></div>`,
                iconSize: [24, 24],
                iconAnchor: [12, 12],
                popupAnchor: [0, -15]
            });
        } else if (landmark.color === 'blue') {
            className += ' blue-point';
            currentIcon = L.divIcon({
                className: '',
                html: `<div class="${className}"></div>`,
                iconSize: [24, 24],
                iconAnchor: [12, 12],
                popupAnchor: [0, -15]
            });
        } else if (landmark.color === 'purple') {
            className += ' purple-point';
            currentIcon = L.divIcon({
                className: '',
                html: `<div class="${className}"></div>`,
                iconSize: [24, 24],
                iconAnchor: [12, 12],
                popupAnchor: [0, -15]
            });
        }

        // Create an interactive marker point
        const marker = L.marker(landmark.point, {
            icon: currentIcon,
            title: landmark.name
        }).addTo(map);

        // Build popup HTML structure. Ensure links open in parent window.
        let toursHtml = '';
        if (landmark.tours && landmark.tours.length > 0) {
            toursHtml = `
                <div class="map-popup-tours">
                    <h4>Available Tours</h4>
                    <ul>
                        ${landmark.tours.map(tour => `<li><a href="${tour.url}" target="_parent">${tour.title}</a></li>`).join('')}
                    </ul>
                </div>
            `;
        }

        let imageHtml = '';
        if (landmark.image) {
            // Using a wrapper div to ensure the image displays well
            imageHtml = `
                <div class="map-popup-image-wrapper">
                    <img src="${landmark.image}" alt="${landmark.name}" class="map-popup-image">
                </div>
            `;
        }

        const popupContent = `
            <div class="map-popup-inner">
                ${imageHtml}
                <div class="map-popup-content-body">
                    <h3 class="map-popup-title">${landmark.name}</h3>
                    <p class="map-popup-desc">${landmark.description}</p>
                    ${toursHtml}
                </div>
            </div>
        `;

        // Bind popup to the marker
        marker.bindPopup(popupContent, {
            maxWidth: 320,
            closeButton: true,
            autoPanPadding: [50, 50]
        });

        // Store the marker so we can adjust it later
        markerElements.push({ marker: marker, baseClass: className });
    });

    // Helper Tool for YOU: Click anywhere on the map to find the Coordinates!
    // Open Developer Tools (F12) -> Console to see the output.
    map.on('click', function (e) {
        console.log("📍 Coordinate point clicked: [" + e.latlng.lat.toFixed(1) + ", " + e.latlng.lng.toFixed(1) + "]");
    });

    // Handle zoom changes to scale markers
    map.on('zoomend', function () {
        const currentZoom = map.getZoom();

        // Define scaling based on zoom levels
        let scale = 1;
        if (currentZoom < 0) {
            scale = 0.5; // Very small when zoomed way out
        } else if (currentZoom === 0) {
            scale = 0.75; // Smaller when zoomed out a bit
        } else if (currentZoom > 0) {
            scale = 1; // Normal size when zoomed in
        }

        // Apply scaling to the HTML property of each marker icon
        markerElements.forEach(item => {
            const scaledIcon = L.divIcon({
                className: '',
                html: `<div class="${item.baseClass}" style="transform: scale(${scale}); transform-origin: center center;"></div>`,
                iconSize: [24, 24],
                iconAnchor: [12, 12],
                popupAnchor: [0, -15]
            });
            item.marker.setIcon(scaledIcon);
        });
    });

    // Trigger initial scale
    map.fireEvent('zoomend');
});
