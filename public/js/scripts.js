

let app = document.querySelector('.app');
app.innerHTML += `
 <div class="about-me">

            <div class="profile-section">
                <img class="profile" src="img/GeorgeChristopherLopez.jpg" />
                <div id="social">
                    <ul class="contact-info">
                        <li><a href="mailto:georgechristopherlopez@gmail.com" target="_blank"><i class="fa fa-envelope"></i></a></li>


                        <li>
                            <a href="https://www.linkedin.com/in/george-christopher-lopez-b9758337/" target="_blank">
                                <i class="fa fa-linkedin-square"></i>
                            </a>
                        </li>

                        <li><a href="https://github.com/GeorgeChristopherLopez" target="_blank"><i class="fa fa-github"></i></a></li>
                        <li><a href="https://codepen.io/gclopez" target="_blank"><i class="fa fa-codepen"></i></a></li>

                    </ul>
                </div>
            </div>

            <div class="description">
                <h2>
                    Hello, my name's <span class="highlight">
               George Lopez            </span>
                </h2>
                <h4>
                 In 2019, I started spending every second of my free time learning to design/code. In 2020, I began my <span class="highlight">MS in Computer Science </span> at Pace University.
                </h4>
                <h4>I love <span class="highlight">Javascript</span>  and the <span class="highlight">React</span> framework</h4>


            </div>
        </div>

        <div>
            <a href="#" class="project-btn">PROJECTS</a>
        </div>
        <div class="projects hide">
           



            <!----- PROJECTS SECTION ----->

            <div class="projects-section">
                <article class="wow fadeInRight" data-wow-duration="2s">
                    <div class="project">
                        <a href="https://georgechristopherlopez.github.io/Elite-Driving/" class="image fit thumb" target="_blank"><img src="img/elite-driving-thumbnail.png" alt="" /></a>
                    </div>
                    <div class="description">
                        <h3>Elite Driving</h3>
                        <p>Making your driving, Elite.</p>
                        <a href="https://georgechristopherlopez.github.io/Elite-Driving/" class="btn btn-outline-danger" target="_blank">View Project</a>
                        <a href="https://github.com/GeorgeChristopherLopez/Elite-Driving" class="btn btn-danger" target="_blank">View Code</a>
                    </div>
                </article>
                <article>
                    <div class="description">
                        <h3>Fitbody</h3>
                        <p>Fitness programs and meal plans for the extreme.</p>
                        <a href="https://georgechristopherlopez.github.io/fitbody/" class="btn btn-outline-danger" target="_blank">View Project</a>
                        <a href="https://github.com/GeorgeChristopherLopez/fitbody" class="btn btn-danger" target="_blank">View Code</a>


                    </div>
                    <div class="project">
                        <a href="https://georgechristopherlopez.github.io/fitbody/" class="image fit thumb" target="_blank"><img src="img/Fitbody_thumbnail.png" alt="" /></a>


                    </div>

                </article>

                <article class="wow fadeInLeft" data-wow-duration="2s">
                    <div>
                        <a href="https://georgechristopherlopez.github.io/Skyward-Esl/" class="image fit thumb" target="_blank"><img src="img/skyward_thumbnail.png" alt="" /></a>
                    </div>
                    <div>
                        <h3>Skyward ESL</h3>
                        <p>ESL program and U.S Citizenship lessons for Non English speakers.</p>
                        <a href="https://georgechristopherlopez.github.io/Skyward-Esl/" class="btn btn-outline-danger" target="_blank">View Project</a>
                        <a href="https://github.com/GeorgeChristopherLopez/Skyward-Esl" class="btn btn-danger" target="_blank">View Code</a>
                    </div>
                </article>
                <article class="wow fadeInRight" data-wow-duration="2s">
                    <div>
                        <h3>Arch Equipment</h3>
                        <p>Hottest equipment for contractors and enthusiast. New and Used.</p>
                        <a href="https://georgechristopherlopez.github.io/arch-equipment/" class="btn btn-outline-danger" target="_blank">View Project</a>
                        <a href="https://github.com/GeorgeChristopherLopez/arch-equipment" class="btn btn-danger" target="_blank">View Code</a>

                    </div>
<div>
    <a href="https://georgechristopherlopez.github.io/arch-equipment/" class="image fit thumb" target="_blank"><img src="img/archequipment_thumbnail.png" alt="" /></a>

</div>                      </article>
            </div>
        </div>

`;

let bg = document.querySelector('canvas');

let projectBtn = document.querySelector('.project-btn');
let projects = document.querySelector('.projects');
projectBtn.addEventListener('click', e => {
    app.classList.toggle('adjust');

    projects.classList.toggle('hide');
   
   


})



   
      


    