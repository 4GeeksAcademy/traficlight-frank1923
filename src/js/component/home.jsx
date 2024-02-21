import React,{useState} from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [encender,setEncender]=useState("red")

	const cambiarColor =(color)=>{
		setEncender(color);
	}

		
	return (
		<main>
			<div className="palito"></div>
			<div className="caja-luces">
			
			<div className={`red ${encender === "red" ? "light-on" : ""}`}
			onClick={()=> cambiarColor("red")}></div>

			<div className={`yellow ${encender === "yellow" ? "light-on" : ""}`}
			onClick={()=> cambiarColor("yellow")}></div>

			<div className={`green ${encender === "green" ? "light-on" : "" }`}
			onClick={()=> cambiarColor("green")}></div>

			</div>
		</main>
	
		
	)
};

export default Home;
