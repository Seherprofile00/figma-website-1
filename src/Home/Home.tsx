import Image from "next/image";
import myImage from "../public/lady.jpg"



export default function Home() {
  return (<>
  <div>
    <div className="hero-1"><section className="hero">
      <h2>HI,<br></br> I AM SEHAR</h2><br></br>
      <h2> i m here to presnt a topic overwiew</h2>



      <div className="para">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque dignissimos aperiam perspiciatis optio doloremque aliquid repellendus natus earum, necessitatibus sapiente nihil ratione quis. Officia voluptatibus fugiat earum nemo architecto ad.
          Debitis necessitatibus, ,</p></div>
      <button className="buton">DOWNLOAD RESUME</button></section>
      

      
    </div>
    <aside className="my-girl">
        <Image src={myImage} alt="lady" width={434} height={600}/>
      </aside>


      </div>
      
    </>

  );
}
