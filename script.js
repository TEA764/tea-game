let currentScene = "DAY1_HOME";
let currentLine = 0;
const characterLeft = document.getElementById("character-left");
const characterRight = document.getElementById("character-right");
const storyText = document.getElementById("story-text");
const nextBtn = document.getElementById("next-btn");
const choicesDiv = document.getElementById("choices");
const backgroundDiv = document.getElementById("background");

const nameBox = document.getElementById("name-box");

function loadScene(sceneKey) {
    currentScene = sceneKey;
    currentLine = 0;
    const scene = story[sceneKey];
    backgroundDiv.style.backgroundImage = `url(${scene.background})`;
if(scene.characters){

    characterLeft.style.backgroundImage =
    scene.characters.left
    ? `url(${scene.characters.left})`
    : "none";

    characterRight.style.backgroundImage =
    scene.characters.right
    ? `url(${scene.characters.right})`
    : "none";

}
        storyText.textContent = scene.text[currentLine];
       
         if (scene.name) {
                nameBox.textContent = scene.name;
                nameBox.style.display =
       "inline-block";
       } else {
           nameBox.style.display = "none";
      }

    choicesDiv.innerHTML = "";
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    const scene = story[currentScene];
    currentLine++;
    if (currentLine < scene.text.length) {
        storyText.textContent = scene.text[currentLine];
    } else {
        if (scene.choices && scene.choices.length > 0) {
            nextBtn.style.display = "none";
            scene.choices.forEach(choice => {
                const btn = document.createElement("button");
                btn.textContent = choice.text;
                btn.onclick = () => loadScene(choice.next);
                choicesDiv.appendChild(btn);
            });
        }
    }
});

loadScene(currentScene);
const bgm = document.getElementById("bgm");
bgm.volume = 0.3;

document.addEventListener("click", function startMusic() {
    bgm.play();
    document.removeEventListener("click", startMusic);
});
