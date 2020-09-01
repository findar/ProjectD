require("js-dos");

const canvas = document.querySelector("#gameBox");

Dos(canvas, {wdosboxUrl: "../dosbox/wdosbox.js"}).ready((fs, main) => {
    fs.extract("../third_party/doom-box.zip").then(() => {
        main(["-c", "DOOM"])
    });
});