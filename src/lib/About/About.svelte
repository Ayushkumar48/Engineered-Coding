<script>
  import { scrollRef } from "svelte-scrolling";
</script>

<section use:scrollRef={"about"}>
  <h2>About Me</h2>
  <p>Hi, I'm Ayush Kumar</p>
  <p>
    I am passionate software developer with a love for solving complex problems
    and creating innovative solutions. My journey in technology has been an
    exciting blend of continuous learning and hands-on experience. On my GitHub
    profile, you'll find a variety of projects showcasing my skills in various
    programming languages and frameworks. From C++ and JavaScript to Node.js and
    Svelte, my repositories reflect a commitment to both frontend and backend
    development. I believe in the power of open-source and enjoy collaborating
    with other developers to build impactful projects. I too believe in writing
    clean, maintainable code that can be easily understood and extended by
    others. I am particularly proud of my LeetCode profile, where I have
    maintained an impressive streak of 145 days. This streak is a testament to
    my dedication to mastering data structures and algorithms. Solving 232
    problems (continuously solving), I have honed my problem-solving skills,
    which are crucial for efficient software development.
  </p>
  <p class="subsection">Current Learning</p>
  <p>
    Currently, I am diving deeper into Svelte and Node.js for web development.
    These technologies are at the forefront of modern web applications, and I am
    excited to leverage their power to create dynamic and efficient web
    solutions.
  </p>
  <p class="subsection">Personal Philosophy</p>
  <p>
    I believe in continuous improvement and lifelong learning. The tech industry
    evolves rapidly, and staying updated with the latest trends and technologies
    is essential. I am always eager to take on new challenges and push the
    boundaries of what’s possible.
  </p>
  <p>
    Feel free to reach out to me for collaborations, discussions, or just to
    connect. Let’s build something amazing together!
  </p>
</section>

<style>
  section {
    min-height: 100vh;
    color: lightgray;
    font-weight: 600;
    text-align: justify;
    padding: 12vh 6vw 20vh 5vw;
  }
  h2 {
    color: burlywood;
    font-size: 3.2rem;
    font-weight: bold;
  }
  p {
    color: #f8f7e5;
    font-size: 1.58rem;
  }
  .subsection {
    font-size: 1.9rem;
    color: #ede781;
    font-weight: 700;
  }
</style>
