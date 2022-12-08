// Icon
import { FaHtml5, FaCss3Alt, FaJs, FaSass, FaBootstrap, FaGitAlt, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export const skillData = [
    {
        id: 1,
        icon: <FaHtml5 />,
        iconClass: "html5",
        title: "HTML5"
    },
    {
        id: 2,
        icon: <FaCss3Alt />,
        iconClass: "css3",
        title: "CSS3"
    },
    {
        id: 3,
        icon: <FaJs />,
        iconClass: "js",
        title: "JavaScript"
    },
    {
        id: 4,
        icon: <FaGitAlt />,
        iconClass: "git",
        title: "Git"
    },
    {
        id: 5,
        icon: <FaBootstrap />,
        iconClass: "bootstrap",
        title: "Bootstrap"
    },
    {
        id: 6,
        icon: <FaSass />,
        iconClass: "sass",
        title: "SASS"
    },
    {
        id: 7,
        icon: <SiTailwindcss />,
        iconClass: "tailwindcss",
        title: "Tailwind CSS"
    },
    {
        id: 8,
        icon: <FaReact />,
        iconClass: "react",
        title: "React"
    },
    {
        id: 9,
        icon: <SiNextdotjs />,
        iconClass: "nextjs",
        title: "NextJS"
    },

].reverse();
