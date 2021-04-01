import React from "react"
import { Helmet } from "react-helmet"
const css = require ("../components/main.css")

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
      </Helmet>
      <div className="elements gallery">
        <ul id="spc">
          <li><a id="nobg" href={"/"}><img draggable="false" height="20" src="/assets/homepng.png"></img></a></li>
          <li><a id="active" href={"/projects"}>projects</a></li>
          <li><a href={"mailto:hello@coopertsoris.dev"}>contact</a></li>
        </ul><br/>
        <div className="gallery_container">
            <div className="gallery_image">
                <img className="img" height="200" src="/gallery/swatch1.png"></img>
                <h3>Swatch Redesign<a target="_blank" rel="noreferrer" href="https://www.behance.net/gallery/108766199/Swatch-Redesign"><img height="20" id="cnt" src="/assets/continue.png"/></a></h3>
            </div>
            <div className="gallery_image">
                <img className="img" height="200" src="/gallery/noodled.png"></img>
                <h3>Noodled</h3>
            </div>
            <div className="gallery_image">
                <img className="img" height="200" src="/gallery/arcadia.png"></img>
                <h3>Arcadia</h3>
            </div>
            <div className="gallery_image">
                <img className="img" height="200" src="/gallery/dothqdesign.png"></img>
                <h3>dothq.design</h3>
            </div>
        </div>
      </div>
    </body>
  )
}