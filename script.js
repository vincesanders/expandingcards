const panels = document.querySelectorAll(".panel");

let activePanel = panels[0];

panels.forEach(panel => {
    panel.addEventListener("click", setActivePanel);
});

function setActivePanel(e) {
    if (activePanel !== e.target) {
        activePanel.classList.remove('active');
        activePanel = e.target;
        activePanel.classList.add('active');
    }
}