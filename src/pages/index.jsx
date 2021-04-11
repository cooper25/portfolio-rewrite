import React from "react"
import { Helmet } from "react-helmet"
import "../components/main.css"

export default function Home() {
  return (
    <body>
      <Helmet>
        <title>coopertsoris</title>
        <link id="favicon" rel="shortcut icon" type="image/png" href="/assets/favicon.png"></link>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="title" content="coopertsoris"/>
        <meta name="description" content="Cooper Tsoris, a front-end web developer/designer with over a years experience with design."/>
        <meta name="keywords" content="cooper, cooper tsoris, tsoris, Cooper Tsoris, Cooper, cooper dev, cooper developer, developer, dev, design, education, cooper, tsoris, web, designer, front-end, coopertsoris.dev, web developer, graphic designer, student, website, official"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="theme-color" content="#FCE0E3"/>
        <meta name="author" content="Cooper Tsoris"/>
        <meta http-equiv="content-language" content="en-us"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://coopertsoris.dev/"/>
        <meta property="og:title" content="coopertsoris"/>
        <meta property="og:description" content="Cooper Tsoris, a front-end web developer/designer with over a years experience with design."/>
        <meta property="og:image" content="https://coopertsoris.dev/assets/thumbnail.png/"/>
        <meta property="twitter:url" content="https://coopertsoris.dev/"/>
        <meta property="twitter:title" content="coopertsoris"/>
        <meta property="twitter:description" content="Cooper Tsoris, a front-end web developer/designer with over a years experience with design."/>
        <meta property="twitter:image" content="https://coopertsoris.dev/assets/thumbnail.png/"/>
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "1a7b87ab2d484241818047ef8bf2771d"}'></script>
      </Helmet>
      {/*<header id="header"><b>Looking for my social media?</b> You can view the directory by clicking <a target="_blank" rel="noreferrer" href="https://directory.cppr.design/">here</a>.</header>*/}
      <div className="elements">
        <ul id="spc">
          <li><a draggable="false" id="nobg" href={"/"}><img id="active" height="20" src="/assets/homepng.png"></img></a></li>
          <li><a draggable="false" target="_blank" rel="noreferrer" href={"https://directory.cppr.design/"}>directory<div id="tg">NEW</div></a></li>
          <li><a draggable="false" target="_blank" rel="noreferrer" href={"mailto:hello@coopertsoris.dev"}>email</a></li>
        </ul><br/>
        <img draggable="false" height="50" src="./assets/fullname.svg"></img>
        <p id="spc">Web Designer <br/>& Designer based in the US.</p>
        <div className="links">
          <a><img height="25" src="/assets/location.png"/><div id="hvran">milwaukee</div></a>
          <a draggable="false" target="_blank" rel="noreferrer" id="nobg" href="mailto:hello@coopertsoris.dev"><img draggable="false" height="15" src="/assets/mail.png"/><div id="hvran">hello@coopertsoris.dev</div></a>
          <a draggable="false" target="_blank" rel="noreferrer" id="nobg" href="https://discord.com/users/307273393600724994/"><img draggable="false" height="22" src="/assets/discord.png"/><div id="hvran">cooper#0325</div></a>
        </div>
      </div>
    </body>
  )
}