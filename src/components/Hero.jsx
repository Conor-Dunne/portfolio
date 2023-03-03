function Hero() {
  return (
    <div className="flex flex-col justify-center px-20 max-w-4xl gap-2 mt-9 mx-auto">
      <div>
        <p className="text-accentColor mb-1 mt-8 text-sm tracking-widest">
          Hi, I'm...
        </p>
      </div>
      <div>
        <h1 className="text-5xl text-slate-300 font-bold">Conor Dunne</h1>
      </div>
      <div>
        <h1 className="text-5xl font-bold">I build things...</h1>
      </div>
      <div>
        <p className="max-w-md mt-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          quas!
        </p>
      </div>
      <div>
        <button className="text-accentColor border-accentColor border p-2 mt-12 rounded hover:bg-accentOpac">
            Check out my work</button>
      </div>
    </div>
  );
}

export default Hero;
