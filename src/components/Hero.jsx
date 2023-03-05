import Fade from 'react-reveal/Fade';

function Hero() {
  return (
    <div className="flex flex-col justify-start py-9 gap-2 mx-auto h-screen">
      <Fade left cascade>
      <div>
        <p className="text-accentColor mb-1 mt-8 text-sm tracking-widest">
          Hi, I'm...
        </p>
      </div>
      <div>
        <h1 className="text-6xl text-slate-300 font-bold">Conor Dunne</h1>
      </div>
      <div>
        <h1 className="text-6xl font-bold">I build things...</h1>
      </div>
      <div>
        <p className="max-w-md mt-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          quas!
        </p>
      </div>
      <div>
        <button className="text-accentColor border-accentColor border py-2 px-4 mt-12 rounded hover:bg-accentOpac">
            Check out my work</button>
      </div>
      </Fade>
    </div>
  );
}

export default Hero;
