import { useState } from "react";
import "./App.css";

function App() {
  const [profile, setProfile] = useState([
    { src: "/thumb1.jpg", name: "Mario", score: 5, bg: "url('/bg1.jpg')" },
    { src: "/thumb2.jpg", name: "Zelda", score: 4, bg: "url('/bg2.jpg')" },
    { src: "/thumb3.jpg", name: "Pokemon", score: 3, bg: "url('/bg3.jpg')" },
  ])

  const handleScoreClick = (i) => {
    let copy = [...profile];
    copy[i].score = copy[i].score + 1;
    const sortedCopy = copy.sort((a, b)=> b.score - a.score);
    setProfile(sortedCopy);
  }

  return (
    <div
      className="flex flex-col w-full h-full bg-cover bg-slate-400 bg-custom"
      style={{ background: process.env.PUBLIC_URL + profile[0].bg }}
    >
      <h2 className="text-[100px] text-white text-center pt-10">
        Nintendo Score
      </h2>
      <div className="flex flex-row items-center justify-around h-full gap-10 px-20">
        {
          profile.map((v, i)=> {
            return (   
              <div className="mx-10 text-center text-white">
                <img
                  className="rounded-3xl"
                  src={process.env.PUBLIC_URL + profile[i].src}
                  alt=""
                />
                <h1 className="text-[80px]">{profile[i].name}</h1>
                <h4 className="text-[40px]" onClick={()=>handleScoreClick(i)}>
                  Score<span className="pl-4">{profile[i].score}</span>
                </h4>
              </div>
            )
          })
        }
        
      </div>
    </div>
  );
}

export default App;