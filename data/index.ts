import { link } from "fs/promises";

export const  navItems = [
  { name: "Home", link: "#projects" },
    { name: "Process", link: "#about" },
    { name: "About ", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "QUALITY CHECK ",
      description: "How is Beza Natural Spring Water Quality Check Done? Quality checks for natural spring water involve several processes and tests to ensure the purity and safety of the water. Here is a detailed explanation of the process. Quality checks for natural spring water involve several processes and tests to ensure the purity and safety of the water",
      className: "lg:col-span-1 md:col-span-1 md:row-span-1  ",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "FILTERATION LEVEL",
      description: "In Ethiopia, the filtration level for natural spring water is regulated and should meet certain standards. The specific filtration levels are determined by the Ethiopian Standards Agency (ESA), which sets the guidelines and requirements for water quality. Generally, natural spring water is expected to undergo a series of filtration processes to ensure its safety and quality.",
      className: "lg:col-span-1 md:col-span-1 md:row-span-1",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "COMPOSITION",
      description: "Beza Natural Spring Water contains a balanced mineral composition, including calcium, magnesium, and potassium. These minerals contribute to its crisp taste and make it a healthy hydration choice.",
      className: "lg:col-span-1 md:col-span-1 md:row-span-1",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",

      
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Legese Lelamo",
      des: "General Manager",
      img: "/Legese-Lelamo.jpg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      
    },

    {
      id: 1,
      title: "Ayana Ayele",
      des: "Technique Head",
      img: "/Ayana-Ayele.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      
    },
    {
      id: 1,
      title: "Mengesha Male",
      des: "Quality supervisor",
      img: "/Mengesha-Male.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
     
    },
  
  ];
  
  export const testimonials = [
    {
      quote:
        "Our natural spring water is sourced directly from Sidama Region Highlands, ensuring that it is free from any artificaladditives or contaminats. This means that our water maintains its natural mineral composition and taste, providing a refreshing and healthy drinking experience for our beloved users (customers)",
      name: "",
      title: "",
    },
    {
      quote:
        " we have a rigorous filtration and purification process in place to ensure the highest quality of our water. This includes multiple stages of filtration and sterilization, using the latest technology and equipment. This guarantees that our water is free from any harmful substances and meets the highest standards of purity.",
      name: "",
      title: "",
    },
    {
      quote:
        "we are committed to sustainability and environmental responsibility. We work closely with local communities to ensure the preservation and protection of the natural resources in the Sidama Region Highlands. This not only ensures the continued supply of quality water but also supports the local economy and promotes sustainable practices. With Beza Natural Spring Water, you can trust that you are not only getting the highest quality water but also contributing to a better and healthier environment.",
      name: "",
      title: "",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "",
      title: "",
    },
    {
      quote:
        "We employ a comprehensive filtration and purification process to ensure our water is of the highest quality. This involves multiple stages of filtration and sterilization, utilizing the latest technology and equipment. This process ensures our water is free from harmful substances and meets the highest standards of purity.",
      name: "",
      title: "",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Sidama Regional State",
      img: "/SIDA.png",
      
    },
    {
      id: 2,
      name: "Sidama Bank",
      img: "/SB.png",
      
    },
    {
      id: 3,
      name: "Ministry Of Health, Ethiopia",
      img: "/H.png",
      
    },
    {
      id: 4,
      name: "SouthEthiopia Regional State",
      img: "/South_Ethiopia_Regional_State_emblem.png",
      
    },
    {
      id: 5,
      name: "Hawassa University.",
      img: "/hwu-logo.png",
      
    },
    {
      id: 6,
      name: "Hawassa City Adminstration Mayor's Office.",
      img: "/n.png",
      
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "No Perservatives",
      desc: "Beza water hasn’t been treated or stored with any chemicals or methods to extend its shelf life..",
      className: "md:col-span-2",
      thumbnail: "/no.png",
    },
    {
      id: 2,
      title: "Vitamins",
      desc: "Beza water is a beverage that combines water with added vitamins and minerals, such as vitamins A, B and several C-group vitamins",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/V.png",
    },
    {
      id: 3,
      title: "Include Natural Minerals",
      desc: "Beza water is sourced from natural springs and contains various essential minerals like calcium, magnesium, and potassium.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/minerals.png",
    },
    {
      id: 4,
      title: "Quality",
      desc: "Beza Water is free from harmful contaminants like bacteria, heavy metals and chemicals  making it safe for drinking, cooking and other uses .",
      className: "md:col-span-2",
      thumbnail: "/q.png",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/face.svg",
      href: "https://www.facebook.com/bezawater",
    },
    {
      id: 2,
      img: "/tw.svg",
      link:"https://www.facebook.com/bezawater"
    },
    {
      id: 3,
      img: "/li.svg",
    },
  ];