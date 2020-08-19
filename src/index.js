import Dos from "./js-dos";

const canvas = document.querySelector("#gameBox");

Dos(canvas).ready((fs, main) => {
    fs.extract("../games/doom-box.zip").then(() => {
        main(["-c", "doom.exe"])
    });
});