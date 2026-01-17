/* -------------------- Ogólne ustawienia -------------------- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

body {
    background-color: #121212;
    color: #ffffff;
    scroll-behavior: smooth;
}

/* -------------------- Pasek nawigacyjny -------------------- */
.tile-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(90deg, #222, #333);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    z-index: 1000;
}

.tile {
    padding: 12px 25px;
    background-color: #444;
    color: #ffffff;
    font-size: 1em;
    text-align: center;
    border-radius: 25px;
    transition: all 0.3s ease;
    cursor: pointer;
    text-decoration: none;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
}

.tile:hover {
    transform: scale(1.1);
    background-color: #ff9800;
    box-shadow: 0 4px 15px rgba(255,152,0,0.6);
    color: #fff;
}

.tile.active {
    background-color: #ff9800;
    color: #fff;
    box-shadow: 0 4px 15px rgba(255,152,0,0.6);
}

/* -------------------- Sekcje -------------------- */
section {
    padding: 60px 20px;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-bottom: 2px solid #ff9800;
}

section:last-of-type {
    border-bottom: none;
}

section h2 {
    font-size: 2em;
    color: #ff9800;
    margin-bottom: 20px;
}

section ul {
    list-style-type: none;
    padding: 0;
}

section li {
    margin-bottom: 20px;
    padding: 10px;
    background-color: #1e1e1e;
    border-radius: 8px;
}

section li p {
    color: #bbbbbb;
    font-size: 0.9em;
    margin-top: 5px;
}

strong {
    font-size: 1.2em;
    color: #ff9800;
}

em {
    color: #bbbbbb;
    font-style: italic;
    font-size: 0.9em;
}

/* -------------------- Drawing Section -------------------- */
.drawing-section {
    background-color: #f8f8f8; /* jasne, przyjazne tło */
    padding: 20px;
    border-radius: 20px;
    width: 650px;
    max-width: 90vw;
    margin: 0 auto;
    box-shadow: 0 8px 20px rgba(0,0,0,0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

/* Canvas */
#canvas {
    border: 2px solid #333;
    border-radius: 15px;
    background-color: white;
    cursor: crosshair;
    width: 280px;
    height: 280px;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
}

/* -------------------- Przyciski -------------------- */
.button-container {
    display: flex;
    gap: 15px;
}

button {
    padding: 10px 25px;
    border-radius: 25px;
    border: none;
    background-color: #ff9800;
    color: white;
    font-weight: bold;
    font-size: 1em;
    cursor: pointer;
    transition: all 0.3s ease;
}

button:hover {
    background-color: #e68900;
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(255, 152, 0, 0.5);
}

/* -------------------- Wynik -------------------- */
#result {
    font-size: 1.2em;
    font-weight: bold;
    color: #333;
    margin-top: 10px;
    text-align: center;
}

/* -------------------- Responsywność -------------------- */
@media (max-width: 700px) {
    .drawing-section {
        width: 95%;
        padding: 15px;
    }

    #canvas {
        width: 90%;
        height: auto;
    }

    .button-container {
        flex-direction: column;
        width: 100%;
    }

    button {
        width: 100%;
    }
}
