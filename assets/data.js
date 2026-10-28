// EDIT THIS FILE to update your site. Add a project by copying one block in "projects".
const DATA = {
  marquee: ["Flutter","Next.js","React","Python","Laravel","PHP","WordPress","Shopify","Git","Android Studio"],
  exp: [
    {when:"Nov 2022 - Present", role:"Freelance Mobile and Web Developer", org:"Self-employed", text:"Built cross-platform mobile apps with Flutter and Python backends, and responsive web apps with Next.js. Worked with 3+ clients to turn business requirements into maintainable code."},
    {when:"Jul - Oct 2023", role:"Mobile Development Intern", org:"Satoripop", text:"Built 5+ user-facing features in a production Flutter app and cut load times by 15% through better state management and API integration. Took part in sprint planning and code reviews."},
    {when:"Dec 2021 - Feb 2022", role:"WordPress Developer", org:"Astrolab Agency", text:"Delivered 3+ client websites with custom themes and plugins, and handled support and maintenance to keep them online."},
    {when:"May - Oct 2021", role:"Engineer Intern", org:"Polytech Monastir", text:"Designed and built a full-stack mapping platform for project management with React JS, Laravel and Bootstrap, using geolocation APIs. Documented the architecture for the team."},
    {when:"Feb - May 2021", role:"Engineer Intern", org:"Astrolab Agency", text:"Worked on front-end development with HTML5, CSS3 and PHP, and found and fixed 50+ compatibility and performance issues."}
  ],
  skills: [
    ["Mobile","Flutter, Android Studio"],["Web front end","Next.js, React JS, HTML5, CSS3, Bootstrap"],
    ["Back end","Python, PHP, Laravel"],["CMS","WordPress, Shopify"],["Tools","Git, Visual Studio, Visual Studio Code"],
    ["Design and video","Adobe Photoshop, Illustrator, After Effects, Premiere Pro, Sony Vegas Pro"]
  ],
  edu: [
    {when:"2018 - 2021", role:"National Engineering Diploma, Computer Science", org:"Polytechnic Private High School of Monastir"},
    {when:"2016 - 2018", role:"National Diploma, Preparatory Cycle", org:"Polytechnic Private High School of Monastir"},
    {when:"2021", role:"Certificates", org:"Cisco IoT 2.0; Microsoft Technology Associate (HTML and CSS, Python); TOEIC, AMIDEAST Sousse"}
  ],
  // cat: web | mobile | ai.  links: add {label:"Live demo", url:"https://..."} when you have them.
  projects: [
    {id:"ai", feat:1, cat:"ai", year:"Dec 2026 - Feb 2027", title:"AI projects", status:"In progress", stack:"Python, Next.js, Flutter",
     detail:["An AI chat app with streaming responses.","A \"chat with your documents\" tool that works in Arabic and French.","A mobile app with an AI feature."], links:[]},
    {id:"map", feat:1, cat:"web", year:"2021", title:"Mapping platform for projects and equipment", stack:"React JS, Laravel, Bootstrap",
     detail:["My end-of-studies project, built as a full-stack web app.","Interactive maps and data filtering.","One central place to track projects and equipment."], links:[]},
    {id:"polytech", feat:1, cat:"mobile", year:"2020", title:"Polytech Monastir mobile app", stack:"Android Studio",
     detail:["Academic information, study plans and contact details in one Android app.","Designed for 500+ potential users."], links:[]},
    {id:"shop", cat:"web", year:"2019", title:"Home appliance online store", stack:"Shopify",
     detail:["Product catalog and checkout flow.","Customized storefront theme."], links:[]},
    {id:"wp", cat:"web", year:"2021 - 2022", title:"Client websites: Meiz, RawiAlkotob, Laruche", stack:"WordPress, custom themes and plugins",
     detail:["Meiz: responsive design and cross-browser compatibility.","RawiAlkotob: content structure and user experience for a publisher.","Laruche: plugins, performance and SEO."], links:[]}
  ]
};
