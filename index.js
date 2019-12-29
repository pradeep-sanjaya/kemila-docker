var TextAnimation = require("text-animation");

module.exports = {
    animate: () => {
        // Animate bottom-top
        TextAnimation("Kemila", function (err) {
            if (err) throw err;
            // And then, top-bottom
            TextAnimation({
                text: "Docker"
                , animation: "top-bottom"
            });
        });
    }
}
