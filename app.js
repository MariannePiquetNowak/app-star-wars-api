"use strict"
const body = document.body;
body.style = "background-color: black;"

let out = document.getElementById('out');
out.style = "display: flex; justify-content: center;"

let title = document.createElement('img');
title.src = 'star-wars.png';
title.style = 'width: 400px;'

let desc = document.createElement('div');

out.appendChild(title)

