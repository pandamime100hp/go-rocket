const Home = () => {
  return (
    <div className="home">
      <h1>WELCOME TO GO ROCKET</h1>
      <h2>SHOWCASING THE WORLD'S MOST ADVANCED ROCKET COMPANY</h2>
      <div className="home__text">
        <p>
        This site was built to showcase my expertise in web development and 
        passion for space exploration. Over time, I'll be adding exciting new 
        features that will allow you to explore detailed data on SpaceX, including 
        launches, starlinks, ships, and much more.
        </p>
        <p>
          Just a quick note—this site is not affiliated with SpaceX in any way. 
        </p> 
        <p> If you're interested in how the site was made, the source code is 
          available <a href="https://github.com/pandamime100hp/go-rocket">here</a> or by clicking on the small creature icon in the bottom-right corner of 
          the page. Initially built with JavaScript, React, and Vite, this site 
          has undergone a major transformation. Thanks to the power of TypeScript, 
          Next.js, and React, it now operates more efficiently, smoothly, and, 
          most importantly, reliably. 
        </p>
      </div>
    </div>
  )
}

export default Home