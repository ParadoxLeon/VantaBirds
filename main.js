
// Initial general data that may be changed by the user
var generalData = {
    fps: 0
};

// A global object that can listen to property changes
window.wallpaperPropertyListener = {
    applyGeneralProperties: function(properties) {
        var jsonDebugElement = document.getElementById('GeneralJsonDebug');
        jsonDebugElement.textContent = JSON.stringify(properties);

        if (properties.fps) {
            generalData.fps = properties.fps;
        }
    }
};