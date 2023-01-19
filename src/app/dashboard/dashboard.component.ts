import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalData, Tile } from './dashboard.type';

@Component({
  selector: 'lurisan-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public topTiles: Tile[] = [
    {
      hover: {
        image: 'aim',
        title: 'aim',
        linkType: 'modal',
        link: 'aim'
      },
      noHover: {
        image: 'aim',
        title: 'aim',
        description: 'Make my mark in the wide world'
      },
    },
    {
      hover: {
        image: 'vision',
        title: 'vision',
        linkType: 'modal',
        link: 'vision'
      },
      noHover: {
        image: 'vision',
        title: 'vision',
        description: 'Build a world to be a better place'
      },
    },
    {
      hover: {
        image: 'resume',
        title: 'resume',
        linkType: 'link',
        link: 'online-resume'
      },
      noHover: {
        image: 'resume',
        title: 'Resume',
        description: 'View online or download resume for future'
      },
    },
    {
      hover: {
        image: 'blog',
        title: 'blog',
        linkType: 'link',
        link: 'blog'
      },
      noHover: {
        image: 'blog',
        title: 'blog',
        description: 'Read my journey till now'
      },
    },
  ];

  public bottomTiles: Tile[] = [
    {
      hover: {
        image: 'project',
        title: 'projects',
        linkType: 'link',
        link: 'https://github.com/lurisan'
      },
      noHover: {
        image: 'project',
        title: 'projects',
        description: 'Engineers are always building'
      },
    },
    {
      hover: {
        image: 'education',
        title: 'education',
        linkType: 'modal',
        link: 'education'
      },
      noHover: {
        image: 'education',
        title: 'education',
        description: 'Plain graduate with whole lot of industry exposure'
      },
    },
    {
      hover: {
        image: 'work',
        title: 'work experience',
        linkType: 'modal',
        link: 'workExperience'
      },
      noHover: {
        image: 'work',
        title: 'Work Experience',
        description: `Been working for ${((new Date().getMonth() - new Date("2018-7-23").getMonth() +
          (12 * (new Date().getFullYear() - new Date("2018-7-23").getFullYear()))) / 12).toFixed(1)} years now`
      },
    },
    {
      hover: {
        image: 'achievement',
        title: 'achievements',
        linkType: 'modal',
        link: 'achievements'
      },
      noHover: {
        image: 'achievement',
        title: 'achievements',
        description: 'Somethings to show off'
      },
    },
  ];

  public modalData: ModalData[] = [
    {
      link: 'aim',
      title: 'aim',
      body: `I want to utilize my knowledge and skills for the betterment of the company in every possible way and society at large. At the same time, develop my experience and capabilities as an individual and be a part of success in an environment of growth and excellence.`
    },
    {
      link: 'vision',
      title: 'vision',
      body: `I aspire to become an expert in the fields I work. I have my interest in IoT field and I am planning to make my career align with my interest. Till then work for pay and keep hobbies alive.`
    },
    {
      link: 'education',
      title: 'education',
      body: `
      •	<b>Course:</b> Bachelor of Technology (B-Tech)
        <b>Discipline:</b> Computer Science and Engineering
        <b>College:</b> Netaji Subhash Engineering College; Kolkata, West Bengal, India
        <b>Year of Completion:</b> 2018
        <b>DGPA:</b> 7.75 (7.33, 7.14, 7.86, 7.15, 8.04, 7.46, 7.67, 8.95)
        <br />
        <br />
      •	<b>Course:</b> High School Degree (ISC)
        <b>Discipline:</b> Science
        <b>School:</b> St. Augustine's Day School; Kolkata West Bengal, India
        <b>Year of Completion:</b> 2014 
        <b>GPA:</b> 90% (Best of Four) 
        <b>Aggregate Percentage:</b> 87.43%
        <br />
        <br />
      •	<b>Course:</b> Secondary School Degree (ICSE)
        <b>Discipline:</b> Science
        <b>School:</b> St. Augustine's Day School; Kolkata West Bengal, India
        <b>Year of Completion:</b> 2012 
        <b>GPA:</b> 91.6% (Best of Five) 
        <b>Aggregate Percentage:</b> 81.33%`
    },
    {
      link: 'workExperience',
      title: 'work experience',
      body: `• Completed <b>${((new Date().getMonth() - new Date("2018-7-23").getMonth() + (12 * (new Date().getFullYear() - new Date("2018-7-23").getFullYear()))) / 12).toFixed(1)}</b> years in <b>Tata Consultancy Services Pvt Ltd</b>, working as a <b>Software Engineer</b> in BFSI APAC. I am also working bas a <b>Principal Engineer</b> with Team Odyssey which is currently focused on delivering <b>Accessibility for Mobile and Web Application</b> of their product. This features accessibility using <b>Aria Compliance and Certification for the same following the WCAG guidelines</b>. Along with this the team is also working on the <b>Functional and Accessibility Testing Scripts</b> for smooth delivery and compliance of the implementation.
      <br />
      <br />
      • I have worked as an <b>Application Developer</b> and <b>Framework Developer</b> with Team Odyssey which was building a new framework over the existing Angular 7. Apart from this I am also working on UI components and Web Application based on Angular 7, and implementation of new features in the project such as <b>Over the Air Update</b> (using build scripts which can directly deploy the packages, available for download, from the repositories) and scripts for automation of various day to day activities of a developer.
      <br />
      <br />
      •	I am also a part of <b>TCS Interactive Project</b> (under the Research and Innovation Team of BFSI) as a <b>Full Stack Developer (MEAN Stack)</b>. I have working experience in <b>JAVA (JAVA EE or J2EE, JAVA SE)</b>, and have a basic idea of Hibernate. My project was based on MEAN Stack (Mongo DB, ExpressJs, Angular, and NodeJs). Apart from this worked on <b>Python</b> also as an extension to the project I was doing.
      My work here primarily deals with <b>development and deployment of automation tools</b> which ease the life of developers by providing a full-scale generation of projects or accelerating the development of the same.
      I have worked on two tools till now, for the generation of Angular 5+ based web projects from scratch and generation of test cases (JUnit) of JAVA projects by building an eclipse plugin for the same.
      <br />
      <br />
      • Built a community platform (ILP Clan) for solving common queries during training period for the associates who joined the training recently. Worked as the role of Project Manager and Scrum Master leading a team of 50 Associates to deliver the project. The project was implemented on the JAVA JSP Servlet AngularJS and SQLite/Oracle tech stack. The various features included asking questions, Individual Profile Management. Admin Rights, answering of questions, maintaining the category of questions, likes, dislikes and spams, relevant questions to answer suggestion based on the categories and escalation of question to necessary levels as per requirements.`
    },
    {
      link: 'achievements',
      title: 'achievements',
      body: `
      •	<b>Xcelerate Warrior Certificate</b> from TCS Talent Transformation Team.
      <br />
      <br />
      •	<b>Service Commitment Award</b> for completing 3 years in TCS.
      <br />
      <br />
      •	<b>Stood 1st in “The Following”</b>, autonomous robot designing and building competition in Phoenix ’22, tech fest of Future Institute of Engineering and Management.
      <br />
      <br />
      •	<b>Innovation Pride Award</b>, BFSI Hackathon, Runners up in an online coding contest hosted by the BFSI IOU of TCS in field of Open Banking for building the UI based on Angular.
      <br />
      <br />
      •	<b>ILP Kudos Award</b> (Best Performer in the training Batch of TCS Trainees)
      <br />
      <br />
      •	Was awarded the <b>Best Designed Robot</b> in Kshitij '18 the tech fest of IIT Kharagpur.
      <br />
      <br />
      •	<b>Stood 1st in “Battlefield”</b>, manual robot designing and building competition in Avahaan ’16, pre- tech fest of Netaji Subhash Engineering College.
      <br />
      <br />
      •	Was awarded the <b>Best Designed Robot</b> in Avenir '15 the tech fest of Netaji Subhash Engineering College.
      <br />
      <br />
      •	<b>Medha Samman Award</b> of Excellence for outstanding performance in class 12 board exams.
      <br />
      <br />
      •	<b>Certificate of Excellence</b> in A Clue a Day competition held online on a national level by crypticsingh.com.
      <br />
      <br />
      •	<b>Stood 2nd in A Clue a Day</b> competition in 2014, held offline on a national level by crypticsingh.com.
      <br />
      <br />
      •	Certificate of participation and completion in various other events and domains.`
    }
  ];

  public modalTitle: string = 'Disclaimer';
  public modalBody: string = 'How did you open this without clicking anything?';

  constructor(private router: Router) { }

  public cardClicked(status: boolean, link: string) {
    if (status) {
      if (link.indexOf('http') == 0) {
        document.location.href = link;
      }
      else
        this.router.navigateByUrl('/' + link);
    }
    else {
      this.modalTitle = 'Disclaimer';
      this.modalBody = 'Your DEVICE is hacked ...';
      for (let mod of this.modalData) {
        if (mod.link === link) {
          this.modalTitle = mod.title;
          this.modalBody = mod.body;
        }
      }
      let ele = document.getElementById('dashboardModal') || document.createElement('div');
      ele.style.display = 'block';
    }
  }

  public dismissModal() {
    let ele = document.getElementById('dashboardModal') || document.createElement('div');
    ele.style.display = 'none';
  }
}
