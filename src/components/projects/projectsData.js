import { AiFillGithub } from "react-icons/ai";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiHeroku, SiMongodb, SiRedux } from "react-icons/si";

export const projectData = [
  {
    id: 1,
    project_name: "Twitter Clone",
    image:
      "https://github.com/aadityaneve/Portfolio/blob/master/public/ProjectImages/lifestylestores.png?raw=true",
    project_desc:
      "This is an E-Commerce website which speciaizes in selling clothes and styling products. The website provides 800 brands and 33,000 products of different types of clothes, watches, sunglasses, shoes etc.",
    deploy_link: "https://twitter-clone-five-omega.vercel.app/",
    repo_link: " https://github.com/VyshaliVijaywargi/twitter-clone.git",
    tech_stack: [
      <FaHtml5 className="prj-flx-inner-tech-stk-icon" />,
      <FaCss3 className="prj-flx-inner-tech-stk-icon" />,
      <FaJs className="prj-flx-inner-tech-stk-icon" />,
    ],
  },
  {
    id: 2,
    project_name: "Kanban Project",
    image:
      "https://github.com/aadityaneve/Portfolio/blob/master/public/ProjectImages/pluralsight.png?raw=true",
    project_desc:
      "Pluralsight is an online learning and workforce development platform that helps businesses and individuals adjust to changing technology. Pluralsight provide products to build tech skills & Get insights into your workflow.",
    deploy_link: " https://kanban-project-19tq.vercel.app/",
    repo_link: "https://github.com/VyshaliVijaywargi/Kanban__project.git",
    tech_stack: [
      <FaHtml5 className="prj-flx-inner-tech-stk-icon" />,
      <FaCss3 className="prj-flx-inner-tech-stk-icon" />,
      <FaJs className="prj-flx-inner-tech-stk-icon" />,
      <FaNodeJs className="prj-flx-inner-tech-stk-icon" />,
      <SiMongodb className="prj-flx-inner-tech-stk-icon" />,
      <SiHeroku className="prj-flx-inner-tech-stk-icon" />,
    ],
  },
  {
    id: 3,
    project_name: "Todo List",
    image:
      "https://github.com/aadityaneve/Portfolio/blob/master/public/ProjectImages/movie-app.png?raw=true",
    project_desc:
      "A Movie platform that allows users to search and watch trailers of a wide variety of movies. This is a personal project.",
    deploy_link: " https://todo-list-five-wine.vercel.app/",
    repo_link: "https://github.com/VyshaliVijaywargi/Todo-List.git",
    tech_stack: [
      <FaReact />,
      <FaNodeJs className="prj-flx-inner-tech-stk-icon" />,
      <SiMongodb className="prj-flx-inner-tech-stk-icon" />,
      <FaJs className="prj-flx-inner-tech-stk-icon" />,
      <SiHeroku className="prj-flx-inner-tech-stk-icon" />,
      <FaHtml5 className="prj-flx-inner-tech-stk-icon" />,
      <FaCss3 className="prj-flx-inner-tech-stk-icon" />,
    ],
    codeLink:"",
    demoLink:""
  },
];