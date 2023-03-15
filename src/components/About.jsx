import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <Fade >

    <div name="about" className='flex flex-col items-center'>
    <div className='title mb-16'>
    <h1 className='text-3xl font-light mb-3'>About me...</h1>
    <hr/>
    </div>
    <div className='flex flex-col gap-4 leading-relaxed max-w-3xl text-center'>
    <p>Hi, I'm Conor, a passionate web developer with a background in business English tutoring and accounting.</p>

<p>I am currently doing The Odin Project and to hone my skills in HTML, CSS, JavaScript, and React. As a developer, I enjoy turning ideas into tangible, useful products that people all over the world can use and enjoy.</p>
    <div className="flex flex-col justify-center items-center">
      <img className="rounded" src="assets\Conor Dunne Profile pic2.jpg" width={"200px"} height={"200px"} />
    </div>
  

<p>I strive to create beautiful, user-friendly websites and applications that are intuitive and accessible to all. Whether it's building a simple calculator or collaborating on a complex web project, I approach each task with enthusiasm and a willingness to learn.</p>

<p>When I'm not coding, I'm spend time with my wife and newborn daughter, or squeezing in some precious Playstation time!</p>

<p>I'm always looking for new challenges and opportunities to grow as a developer, so please don't hesitate to reach out!</p>
</div>
   </div>
   </Fade>
  )
}

export default About
