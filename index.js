#!/usr/bin/env node
const link = (text) => "\u001b[34m" + text + "\x1b[0m";

const intro = `
Hi there, 👋
I am Igor J. Santos

Solutions Architect & Full Stack Engineer

Add me to your network:
GitHub: ${link("https://www.github.com/igorjs")}
LinkedIn: ${link("https://www.linkedin.com/in/igorjosesantos")}
`;

console.info(intro);
