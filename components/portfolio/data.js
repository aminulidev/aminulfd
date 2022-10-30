// Icon
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaChartArea, FaSass } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMaterialui } from 'react-icons/si';

export const portfolioData = [
    {
        id: 1,
        img: "https://www.thethemely.com/images/product_feature_images/070822062021_62efae05d8a8f.jpg",
        title: "Travel Agency Landing Page",
        technology: [{ id: 1, icon: <FaHtml5 className='icon html5' /> }, { id: 2, icon: <FaCss3Alt className='icon css3' /> }, { id: 3, icon: <FaBootstrap className='icon bootstrap' /> }, { id: 4, icon: <IoLogoJavascript className='icon js' /> }],

        github: "#",
        live: "https://www.thethemely.com/item/triphub-tour-and-travel-agency-html-landing-page/34"
    },
    {
        id: 2,
        img: "https://www.thethemely.com/images/product_feature_images/020822045058_62e90192c9063.jpg",
        title: "SAAS Website Template",
        technology: [{ id: 1, icon: <FaHtml5 className='icon html5' /> }, { id: 2, icon: <FaCss3Alt className='icon css3' /> }, { id: 3, icon: <FaBootstrap className='icon bootstrap' /> }, { id: 4, icon: <IoLogoJavascript className='icon js' /> }],

        github: "#",
        live: "https://www.thethemely.com/item/saastemp-saas-software-website-template/35"
    },
    {
        id: 3,
        img: "https://www.thethemely.com/images/product_feature_images/250122111808_61ef8810078cd.jpg",
        title: "E-Commerce HTML Template",
        technology: [{ id: 1, icon: <FaHtml5 className='icon html5' /> }, { id: 2, icon: <FaCss3Alt className='icon css3' /> }, { id: 3, icon: <FaBootstrap className='icon bootstrap' /> }, { id: 4, icon: <IoLogoJavascript className='icon js' /> }],

        github: "#",
        live: "https://www.thethemely.com/item/saastemp-saas-software-website-template/35"
    },
    {
        id: 4,
        img: "https://i.ibb.co/q7Bpqzm/reactadmindashboard.jpg",
        title: "React Admin Dashboard",
        technology: [{ id: 1, icon: <FaReact className='icon react' /> }, { id: 2, icon: <SiMaterialui className='icon mui' /> }, { id: 3, icon: <FaChartArea className='icon rechart' /> }, { id: 4, icon: <FaSass className='icon sass' /> },],

        github: "https://github.com/aminulds/admindashboard",
        live: "https://reactfadmindashboard.netlify.app/"
    },
    // {
    //     id: 3,
    //     img: "",
    //     title: "",
    //     technology: [{ id: 1, icon: <FaHtml5 className='icon html5' /> }, { id: 2, icon: <FaCss3Alt className='icon css3' /> }, { id: 3, icon: <FaBootstrap className='icon bootstrap' /> }, { id: 4, icon: <IoLogoJavascript className='icon js' /> }],

    //     github: "#",
    //     live: "#"
    // },


].reverse();