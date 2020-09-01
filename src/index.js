require("js-dos");

const canvas = document.querySelector("#gameBox");

Dos(canvas, {wdosboxUrl: "../dosbox/wdosbox.js"}).ready((fs, main) => {
    fs.extract("../games/doom-box.zip").then(() => {
        main(["-c", "DOOM"])
    });
});