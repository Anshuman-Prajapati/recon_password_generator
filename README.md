<h1 align="center" id="title">🔍 RECON PASSWORD GENERATOR 🔐</h1>

<p align="center">
  <img src="https://github.com/user-attachments/assets/4b780101-bb25-40aa-9dbf-8eddbfb8e603" height=400px width=400px >
</p>

<h2>📖 Project Description</h2>

<p>
This project is still under development. Our main objective is to build a smart, efficient tool that generates password combinations based on <strong>reconnaissance information</strong> gathered about a specific target.
</p>

<p>
We have named this project <strong>Recon Password Generator</strong> because it uses recon data like names, dates, locations, and interests to create a large number of password variations using combinatorial logic.
</p>

<h2>🎯 Aim of the Project</h2>

<p>
To create a web-based utility that makes the process of generating target-based password combinations easy and automated. This saves time and manual effort during ethical hacking, CTFs, and penetration testing exercises.
</p>

<h2>🧠 Core Idea</h2>

<p>
Instead of spending hours manually crafting password permutations, our tool will take inputs from the user (based on information they’ve gathered from reconnaissance), and apply <strong>permutation and combination mathematics</strong> to produce a vast number of possible password combinations.
</p>

<h2>⚙️ Technology Stack</h2>

<ul>
  <li>🧪 <strong>Core Language:</strong> JavaScript</li>
  <li>🖥️ <strong>Frontend:</strong> HTML & CSS</li>
  <li>📐 <strong>Math Logic:</strong> Permutation and Combination (P&C)</li>
</ul>

<h2>🔍 What Makes It Unique?</h2>

<ul>
  <li>🔐 Password combinations are based on actual recon info — not random dictionaries</li>
  <li>⏱️ Saves hours of manual wordlist creation</li>
  <li>💡 Fully customizable recon input from the user</li>
  <li>📤 Option to export generated wordlists for use in external tools</li>
</ul>

<h2>📘 How It Works</h2>

<ol>
  <li>🕵️‍♂️ User gathers recon: <code>Name</code>, <code>Birthdate</code>, <code>City</code>, <code>Pet name</code>, etc.</li>
  <li>💻 Inputs this data into the web UI.</li>
  <li>🧮 JavaScript applies permutation & combination logic to generate possible passwords.</li>
  <li>📁 User exports or copies the wordlist for further use.</li>
</ol>

<h2>🚧 Current Limitations</h2>

<ul>
  <li>⚠️ Still in early development phase</li>
</ul>

<h2>🛠 Installation Steps</h2>

<ol>
  <li>📥 Clone the repository:</li>
</ol>

<pre>
git clone https://github.com/yourusername/recon-password-generator.git
cd recon-password-generator
</pre>

<ol start="2">
  <li>🚀 Serve the production-ready static files:</li>
</ol>

<p>The <code>build/</code> folder contains everything needed to run the app offline — including compiled JS and CSS under <code>build/static/</code>.</p>

<pre>
npm install -g serve
serve -s build
</pre>

<ol start="3">
  <li>🌐 Open your browser at:</li>
</ol>

<pre>
http://localhost:3000
</pre>

---

<h3>💻 Optional: Rebuild from Source (if source files are included)</h3>

<pre>
npm install
npm run build
serve -s build
</pre>

---

<p>
✅ You can now run <strong>Recon Password Generator</strong> offline using your browser.<br>
The app is fully bundled — HTML, CSS, and JavaScript are in <code>/build</code> and <code>/build/static</code>.
</p>

<h2>🍰 Contribution Guidelines</h2>

<p>
Pull requests and ideas are always welcome! If you want to improve the logic, add new features, or enhance the UI — feel free to open an issue or a pull request.
</p>

<h2>🙋‍♂️ Author</h2>

<p>
Crafted with ❤️ by <strong>Heisenberg</strong> & <strong>Morningstar</strong> — cybersecurity learners passionate about hacking, math, and automation.  
Feel free to fork, star ⭐, and share!
</p>

---

<p align="center"><i>“Automate the guesswork. Recon your way in.”</i></p>
