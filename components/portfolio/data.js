// Icon
import { FaHtml5, FaSass, FaBootstrap, FaReact, FaChartArea } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMaterialui, SiSwiper, SiTailwindcss, SiRedux } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

export const portfolioData = [
    {
        img: "https://www.thethemely.com/images/product_feature_images/081122053329_636a3e89ee7ec.jpg",
        title: "Construction Website Template",
        technology: [{ index: 1, icon: <FaHtml5 className='icon html5' /> }, { index: 2, icon: <FaSass className='icon sass' /> }, { index: 3, icon: <FaBootstrap className='icon bootstrap' /> }, { index: 4, icon: <IoLogoJavascript className='icon js' /> }],
        github: "/",
        live: "https://www.thethemely.com/item/deskro-construction-html-website-template/40"
    },
    {
        img: "https://www.thethemely.com/images/product_feature_images/070822062021_62efae05d8a8f.jpg",
        title: "Travel Agency Landing Page",
        technology: [{ index: 1, icon: <FaHtml5 className='icon html5' /> }, { index: 2, icon: <FaSass className='icon sass' /> }, { index: 3, icon: <FaBootstrap className='icon bootstrap' /> }, { index: 4, icon: <IoLogoJavascript className='icon js' /> }],
        github: "/",
        live: "https://www.thethemely.com/item/triphub-tour-and-travel-agency-html-landing-page/34"
    },
    {
        img: "https://www.thethemely.com/images/product_feature_images/020822045058_62e90192c9063.jpg",
        title: "SAAS Website Template",
        technology: [{ index: 1, icon: <FaHtml5 className='icon html5' /> }, { index: 2, icon: <FaSass className='icon sass' /> }, { index: 3, icon: <FaBootstrap className='icon bootstrap' /> }, { index: 4, icon: <IoLogoJavascript className='icon js' /> }],
        github: "/",
        live: "https://www.thethemely.com/item/saastemp-saas-software-website-template/35"
    },
    {
        img: "https://www.thethemely.com/images/product_feature_images/250122111808_61ef8810078cd.jpg",
        title: "E-Commerce HTML Template",
        technology: [{ index: 1, icon: <FaHtml5 className='icon html5' /> }, { index: 2, icon: <FaSass className='icon sass' /> }, { index: 3, icon: <FaBootstrap className='icon bootstrap' /> }, { index: 4, icon: <IoLogoJavascript className='icon js' /> }],

        github: "/",
        live: "https://www.thethemely.com/item/saastemp-saas-software-website-template/35"
    },
    {
        img: "https://i.ibb.co/dPx7Sxx/dsmsm.png",
        title: "Digital SMS System",
        technology: [{ index: 1, icon: <FaHtml5 className='icon html5' /> }, { index: 2, icon: <FaSass className='icon sass' /> }, { index: 3, icon: <FaBootstrap className='icon bootstrap' /> }, { index: 4, icon: <IoLogoJavascript className='icon js' /> }],

        github: "/",
        live: "https://rajbd.com/dsmsweb"
    },
    {
        img: "https://i.ibb.co/4PTtnJ9/dit.png",
        title: "IT Company Website",
        technology: [{ index: 1, icon: <FaHtml5 className='icon html5' /> }, { index: 2, icon: <FaSass className='icon sass' /> }, { index: 3, icon: <FaBootstrap className='icon bootstrap' /> }, { index: 4, icon: <IoLogoJavascript className='icon js' /> }],

        github: "/",
        live: "https://desktopit.net"
    },
    {
        img: "https://i.ibb.co/BLV8GXd/reactmovieapp.jpg",
        title: "React Movie App",
        technology: [{ index: 1, icon: <FaReact className='icon react' /> }, { index: 2, icon: <FaSass className='icon sass' /> }, { index: 3, icon: <SiSwiper className='icon swiper_icon' /> }, { index: 4, icon: <TbApi className='icon api' /> }],

        github: "https://github.com/aminulds/reactmovieapp",
        live: "https://reactmovieapps.netlify.app"
    },
    {
        img: "https://i.ibb.co/7Wm2hnQ/React-Music-Player-with-API.png",
        title: "React Music Player with API",
        technology: [{ index: 1, icon: <FaReact className='icon react' /> }, { index: 2, icon: <SiTailwindcss className='icon tailwindcss' /> }, { index: 3, icon: <SiSwiper className='icon swiper_icon' /> }, { index: 4, icon: <SiRedux className='icon redux' /> }, { index: 5, icon: <TbApi className='icon api' /> }],

        github: "https://github.com/aminulds/reactmusicplayer",
        live: "https://reactjmusicplayerwithapi.netlify.app"
    },
    {
        img: "https://i.ibb.co/q7Bpqzm/reactadmindashboard.jpg",
        title: "React Admin Dashboard",
        technology: [{ index: 1, icon: <FaReact className='icon react' /> }, { index: 2, icon: <FaSass className='icon sass' /> }, { index: 3, icon: <SiMaterialui className='icon mui' /> }, { index: 4, icon: <FaChartArea className='icon rechart' /> },],

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