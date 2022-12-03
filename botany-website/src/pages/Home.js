import '../App.css';
import NavBar from '../components/navbar/Navbar';
import plant1 from '../images/plant1.jpeg';
import plant2 from '../images/plant2.jpeg';
import plant3 from '../images/plant3.jpeg';
import urbang1 from '../images/urbang1.jpeg';
import urbang2 from '../images/urbang2.jpeg';
import urbang from '../images/urbangreen.jpeg';





export  function Home(){
    
    return(
    <body>
       <div className="App">

        <header><NavBar/></header>

    <div className="section1">
        <h1>Your Garden Isnt Helping But It Could</h1>
        <h5>Find Out How Urban Greening Solutions Positively Imapct The Eniviorment</h5>
        
        <img src={urbang1.jpeg} />
    </div>


    <div className="titles"><h1>What is Urban Greeening?</h1></div>
    <div className="section2">

        <div className="leftdiv">
        <div className="sec2imgs">
            <img src={urbang1.jpeg} />
        </div>
        </div>

        <div className="rightdiv">Biodiversity and Green Spaces
        <div>
            <p>Urban Greening can be defined as “public landscaping and 
            urban forestry projects that create mutually beneficial relationships between 
            city dwellers and their environments”. 
            </p>
        </div>
        </div>

        <div className="middlediv">
        <div className="sec2imgs">
        {/* <img src={require(urbang2)} alt="Logo"/> */}
        </div>
        </div>


        </div>

    <div className="titles"><h1>Benefits of urban greening</h1></div>
    <div className="section3">
        <div className="ben1">
        <p>Offsets carbon emissions in the local area</p>
        <p>lifts morale in the people who see it, with physical and mental health benefits. </p>
        <p>Calming traffic and lessening urban crime.</p>
        </div>
        </div>

    <div className="section32">
        <div className="ben1">
        <p>Combat air and noise pollution.</p>
        <p>Soaks up rainwater that may otherwise create flooding.</p>
        <p>Creates a habitat for local wildlife.</p>
    </div>
    </div>
        



    <div className="titles" ><h1>The 3 Rs of Urban Greening</h1></div>
    <div className="section4" >
    
        <section className="sec4div" >
            {/* <img src={require(plant1)} alt="Logo" /> */}
        <h2>Restore</h2>
        <p className="ben2">the process of halting and reversing degradation, resulting in improved ecosystem services and recovered biodiversity.</p>
        </section>
        <div>
        <p></p>
        </div>



        <section className = "sec4div">
            {/* <img src={require(plant2.jpeg)} alt="Logo"/> */}
        <h2>Reintroduce</h2>
        <p className="ben2">the process of placing native plants back into formerly occupied or suitable habitat within the plants' natural range.</p>
        </section>
        
        
        
        <section className = "sec4div" >
            {/* <img src={require(plant3)} alt="Logo"/> */}
        <h2>Replant</h2>
        <p className="ben2">the process of placing native plants back into formerly occupied or suitable habitat within the plants' natural range.</p>
        </section>
        <div>
        <p></p>
        </div>
        

    </div>








</div>
        </body>
    
    );
}


export default Home;