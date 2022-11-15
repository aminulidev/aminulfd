// Icon
import { FaHtml5, FaSass, FaBootstrap, FaReact, FaChartArea } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMaterialui, SiSwiper, SiTailwindcss, SiRedux } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

export const portfolioData = [
    {
        img: "https://www.thethemely.com/images/product_feature_images/070822062021_62efae05d8a8f.jpg",
        title: "Travel Agency Landing Page",
        technology: [{ icon: <FaHtml5 className='icon html5' /> }, { icon: <FaSass className='icon sass' /> }, { icon: <FaBootstrap className='icon bootstrap' /> }, { icon: <IoLogoJavascript className='icon js' /> }],
        github: "#",
        live: "https://www.thethemely.com/item/triphub-tour-and-travel-agency-html-landing-page/34"
    },
    {
        img: "https://www.thethemely.com/images/product_feature_images/020822045058_62e90192c9063.jpg",
        title: "SAAS Website Template",
        technology: [{ icon: <FaHtml5 className='icon html5' /> }, { icon: <FaSass className='icon sass' /> }, { icon: <FaBootstrap className='icon bootstrap' /> }, { icon: <IoLogoJavascript className='icon js' /> }],
        github: "#",
        live: "https://www.thethemely.com/item/saastemp-saas-software-website-template/35"
    },
    {
        img: "https://www.thethemely.com/images/product_feature_images/250122111808_61ef8810078cd.jpg",
        title: "E-Commerce HTML Template",
        technology: [{ icon: <FaHtml5 className='icon html5' /> }, { icon: <FaSass className='icon sass' /> }, { icon: <FaBootstrap className='icon bootstrap' /> }, { icon: <IoLogoJavascript className='icon js' /> }],

        github: "#",
        live: "https://www.thethemely.com/item/saastemp-saas-software-website-template/35"
    },
    {
        img: "https://i.ibb.co/BLV8GXd/reactmovieapp.jpg",
        title: "React Movie App",
        technology: [{ icon: <FaReact className='icon react' /> }, { icon: <FaSass className='icon sass' /> }, { icon: <SiSwiper className='icon swiper_icon' /> }, { icon: <TbApi className='icon api' /> }],

        github: "https://github.com/aminulds/reactmovieapp",
        live: "https://reactmovieapps.netlify.app"
    },
    {
        img: "https://i.ibb.co/7Wm2hnQ/React-Music-Player-with-API.png",
        title: "React Music Player with API",
        technology: [{ icon: <FaReact className='icon react' /> }, { icon: <SiTailwindcss className='icon tailwindcss' /> }, { icon: <SiSwiper className='icon swiper_icon' /> }, { icon: <SiRedux className='icon redux' /> }, { icon: <TbApi className='icon api' /> }],

        github: "https://github.com/aminulds/reactmusicplayer",
        live: "https://reactjmusicplayerwithapi.netlify.app"
    },
    {
        img: "https://i.ibb.co/q7Bpqzm/reactadmindashboard.jpg",
        title: "React Admin Dashboard",
        technology: [{ icon: <FaReact className='icon react' /> }, { icon: <FaSass className='icon sass' /> }, { icon: <SiMaterialui className='icon mui' /> }, { icon: <FaChartArea className='icon rechart' /> },],

        github: "https://github.com/aminulds/admindashboard",
        live: "https://reactfadmindashboard.netlify.app/"
    },
    // {
    //     img: "",
    //     title: "",
    //     technology: [{ icon: <FaHtml5 className='icon html5' /> }, { icon: <FaSass className='icon sass' /> }, { icon: <FaBootstrap className='icon bootstrap' /> }, { icon: <IoLogoJavascript className='icon js' /> }],

    //     github: "#",
    //     live: "#"
    // },


].reverse();