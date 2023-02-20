const name = "Tadima Monama";
const bio = `<p>
I am a solution-driven person who seeks environments that challenge me
to help widen my experience and grow on both personal and professional
levels. My key strengths are my abilities to solve problems and
perform very well under pressure, including carrying out instructions.
I enjoy working within environments that allow collaborative efforts –
you get to learn a lot from people with different experience and skill
sets.
</p>
<br />
<p>
On the technical side, I have practical web development exposure as I
have worked with a couple of web technologies such as the MERN stack,
TypeScript, Firebase and more. Most importantly, a desire to always
want to learn more is one of my attributes.
</p><br />
<a href="./contacts.html">Reach out</a>`;

const projects = [
  {
    src: "../assets/vl.png",
    title: "Vote Or Lose it",
    description: `An e-commerce like web application where users buy items by simply
        voting... yep, voting. Now only support OTT for reaching your voting
        balance! At the end of a 2-week period, the user with most votes
        gets the item. *still in dev mode*`,
    stack: ["React", "Express", "Node", "MongoDB"],
    live: "https://voteorloseit.com",
    repo: "",
  },
  {
    src: "../assets/tadjobs.png",
    title: "TadJobs",
    description: `A job board application for all the latest tech jobs in South
    Africa. The app allows recruitment agencies to be able to manage
    multiple clients/companies with a single account`,
    stack: ["React/NextJS", "Firebase", "TanStack"],
    live: "https://tadjobs.vercel.app",
    repo: "https://github.com/MonamaTV/tadjobs-with-next-firebase",
  },
  {
    src: "../assets/movies.png",
    title: "TadMovies",
    description: ` As the name suggests, the app displays the latest movies & series
    that are currently trending...`,
    stack: ["React", "IMDb API."],
    live: "https://tadmovies.netlify.app/",
    repo: "https://github.com/MonamaTV/movies-app",
  },
  {
    src: "../assets/tadify.png",
    title: "Tadify",
    description: `The app, after being granted access, uses the Spotify Web API to
    show you your favorite artists, songs and your recently played music
    <br />
    <small
      >In dev mode, can only test once your Spotify email gets added to
      the allow-list, as per Spotify Web API policies.</small
    >`,
    stack: ["React", "Spotify Web API"],
    live: "http://tadify.vercel.app",
    repo: "https://github.com/MonamaTV/tadify",
  },
];

function displayProjects() {
  const projectsDiv = document.querySelector("#projects");

  projects.forEach((project, index) => {
    const stacks = project.stack.map((st) => `<p>${st}</p>`);
    const pro = `
        <div class="project">
        <img src=${project.src} alt="" />
        <div class="project-content">
          <h3><span>${++index}.</span> ${project.title}</h3>
          <p class="desc">
            ${project.description}
          </p>
          <div class="stack">
            ${stacks}
          </div>
          <a href=${project.live} target="_blank"
            ><i class="fa-solid fa-globe"></i>Live</a
          >
          ${
            project.repo &&
            ` <a href=${project.repo} target="_blank">
                <i class="fa-brands fa-github"></i>GitHub
              </a>`
          }
        </div>
      </div>
        `;
    projectsDiv.innerHTML += pro;
  });
}

window.addEventListener("load", () => {
  displayProjects();
  document.querySelector(".main .content").innerHTML += bio;
});
