
// Initial general data
var generalData = {
    fps: 0
};

// property changes
window.wallpaperPropertyListener = {
    applyGeneralProperties: function(properties) {
        var jsonDebugElement = document.getElementById('GeneralJsonDebug');
        jsonDebugElement.textContent = JSON.stringify(properties);

        if (properties.fps) {
            generalData.fps = properties.fps;
        }
    }
};
