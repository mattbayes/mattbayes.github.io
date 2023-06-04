---
layout: page
title: freeCodeCamp <br><span>Projects</span>
header_link: "#projects"
permalink: /projects/freecodecamp

access: 
      web: [tribute_page, survey_form, landing_page, flask_documentation, portfolio_page]
      frameworks: [quote_machine]    
---

{% include components/project_tile.html 
    tech_bar= "HTML5, CSS3, JavaScript"
    id= "projects"
    section_title= "Responsive Web Design"
    file= "projects"
    list= page.access.web
%}

{% include components/project_tile.html
    tech_bar= "Sass, Bootstrap, jQuery, React"
    id= "frameworks"
    section_title= "Front End Libraries"
    file= "projects"
    list= page.access.frameworks
%}