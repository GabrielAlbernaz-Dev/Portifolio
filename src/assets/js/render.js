import { experiencesData,projectsData,personalData } from "./data.js";

class Personal {
    constructor(personal) {
        this.presentationContainer = document.querySelector('.presentation-text p');
        this.personal = personal;
    }

    getContent() {
        const {presentationText,aboutText} = this.personal;
        return {
            presentationText
        }
    }

    render() {
        const { presentationText, aboutText } = this.getContent();
        this.presentationContainer.insertAdjacentText('afterbegin', presentationText)
    }
}

class Experiences {
    constructor(experiences) {
        this.elementContainer = document.querySelector('.container-tabs .tabs ul');
        this.elementContent = document.querySelector('.content-tabs');
        this.experiences = experiences;
    }

    getContent() {
        const tabsHTML = this.experiences.map(experience => {
            return `<li>${experience.company}</li>`
        }).join('').trim('')

        const contentTabsHTML = this.experiences.map(experience => {
            const experienceServicesLis = experience.services.map(service =>
                `<li>
                <i class="fa-solid fa-play"></i>
                ${service}
            </li>`).join('').trim('')
        
            const experienceStackIcons = experience.stackIcons.map(icon => icon).join('').trim('')
        
            return `
            <div class="content">
                <h3>${experience.role}<span><a href="${experience.link}" target="_blank"> ${experience.company}</a></span></h3>
                <p class="date">${experience.date}</p>
                <ul>
                ${experienceServicesLis}
                <li>${experienceStackIcons}</li>
                </ul>
            </div>
            `
        }).join('').trim('')

        return {
            tabs:tabsHTML,
            content:contentTabsHTML
        }
    }

    render() {
        const { tabs, content } = this.getContent();
        this.elementContainer.insertAdjacentHTML('afterbegin', tabs)
        this.elementContent.insertAdjacentHTML('afterbegin', content)
    }
    
}

class Projects {
    constructor(projects) {
        this.container = document.querySelector('#projects .swiper-wrapper');
        this.projects = projects;
    }

    getStack(stack) {
        const stacks = stack.map(stack => `
            <li>${stack}</li>
        `).join('').trim(''); 

        return stacks;
    }

    getContent() {
        const projectsHTML = this.projects.map(project => {
            return `
                <div class="swiper-slide">
                    <div class="project-content">
                        <div class="content">
                            <h2>${project.title}</h2>
                            <p>${project.description}</p>
                            <ul class="stack">
                                ${this.getStack(project.stack)}
                            </ul>
                            <div class="button-group">
                                <a class="button-cta github " href="${project.githubLink}" target="_blank">
                                    <span>
                                        <img class="icon" src="./src/assets/img/github-icon.svg" alt="">
                                    </span>
                                    Github
                                </a>
                                ${project.projectSource ? `<a class="button-cta" href="${project.projectSource}" target="_blank">
                                    <span><img class="icon" src="./src/assets/img/demo-icon.svg"></span>
                                    Demo
                                </a>` : ''}
                            </div>
                        </div>
                        <img src="${project.imageSource}" alt="${project.imageAlt}">
                    </div>
                </div>
            `
        }).join('').trim('')

        return projectsHTML;

    }

    render() {
        this.container.insertAdjacentHTML('afterbegin', this.getContent());
    }
}

const experiences = new Experiences(experiencesData);
const projects = new Projects(projectsData);
const personal = new Personal(personalData);
const components = [experiences,projects,personal];

components.forEach(component => {
    component.render();
});
