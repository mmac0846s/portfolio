//typing Its me, Matt.
var i = 0;
var txt = 'Its me, Matt.';
var speed = 100;

function type() {
  if (i < txt.length) {
    document.getElementById("me").innerHTML += txt.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}
type()
//buttons
function goback() {
    document.getElementById("center").innerHTML = ` \
    <h1 id="button" onclick="aboutme()" class="text">> About Me</h1> 
    <h1 id="button" onclick="projects()" class="text">> My projects</h1> 
    <h1 id="button" onclick="contact()" class="text">> Contact</h1> 
    <h1 id="button" onclick="extra()" class="text">> Extras</h1>`;
}
function aboutme() {
    document.getElementById("center").innerHTML = `
    <p id="button" onclick="goback()" style="text-align: left;" class="text"><-- back</p>
    <h1 style="font-size: 20px; margin-bottom: 10px;" class="text">About Me</h1>
    <pre style="text-align: left; word-wrap: break-word;" class="text">
    Hi im matt
    I know these lanugages:
    - html
    - css
    - js
    - python (kinda)
    </pre>
    `;
}
function projects() {
    document.getElementById("center").innerHTML = `
    <p id="button" onclick="goback()" style="text-align: left;" class="text"><-- back</p>
    <h1 style="font-size: 20px; margin-bottom: 10px; word-wrap: break-word;" class="text">My projects</h1>
    <div onclick="window.open('https://github.com/mmac0846s/portfolio') style="align-items: left;" id="proj">
    <img style="align-self: left;" width="45px" height="45px" src="./media/git.png">
    <h1 style="word-wrap: break-word; font-size: 17px; display: inline-block; vertical-align: top; margin-right: 10px"  class="text">portfolio - Dec. 25, 2024</h1>
    </div>`;
}
function contact() {
    document.getElementById("center").innerHTML = `
    <p id="button" onclick="goback()" style="text-align: left;" class="text"><-- back</p>
    <h1 style="font-size: 20px; margin-bottom: 10px;" class="text">Contact information</h1>
    <div style="align-items: left; word-wrap: break-word;" id="proj">
    <img style="align-self: left; word-wrap: break-word;" width="45px" height="45px" src="./media/gmail.webp">
    <h1 style="word-wrap: break-word; font-size: 15px; display: inline-block; vertical-align: top; margin-right: 10px"  class="text">gmail - mmac0846s@gmail.com</h1>
    </div>
    <div style="margin-top: 10px; align-items: left;" id="proj">
    <img style="align-self: left;" width="45px" height="45px" src="./media/disc.png">
    <h1 style="word-wrap: break-word; font-size: 17px; display: inline-block; vertical-align: top; margin-right: 10px"  class="text">discord - @mat_6</h1>
    </div>`;
}
function extra() {
    document.getElementById("center").innerHTML = `
    <p id="button" onclick="goback()" style="text-align: left; word-wrap: break-word;" class="text"><-- back</p>
    <h1 style="font-size: 20px; margin-bottom: 10px; word-wrap: break-word;" class="text">Extras</h1>
    <pre style="text-align: left; word-wrap: break-word;" class="text">
    First project on github
    Credits:
    - <a color: white; href="https://pajasevi.github.io/CSSnowflakes">CSSnowflakes</a>
    - <a color: white; href="https://www.asciiart.eu/animals/dogs">asciiart</a>

    </pre>
    `;
}
