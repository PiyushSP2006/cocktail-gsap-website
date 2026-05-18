import React from "react";
import {createRoot} from "react-dom/client";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap"

gsap.registerPlugin(useGSAP);

const root=document.getElementById("root")

createRoot(root).render(
    <div className="container">
        <Greeting />        
        
    </div>
)

function Greeting(props){
    const timeLine=gsap.timeline({
        repeat:-1,yoyo:true
    })

    useGSAP(()=>{
        timeLine.from(`.wrapper .greeting h1`,{
            opacity:0,
            y:200,
            duration:2,
            delay:0.67,
            // rotation:169,
            stagger:0.2,
            ease:"elastic.out(1,0.4)",
        })
    })

    const greeting=["H","e","l","l","o"," ","W","o","r","l","d"]
    return (
        <div className="wrapper">
            <section className="greeting">
                <h1>
                    {greeting.map((element)=>{
                        return <span>{element}</span>
                    })}
                </h1>
            </section>
            
            <section className="box" style={{display:"block",flexDirection:"row",justifyContent:"center",alignItems:"center",
                    
                }}>
                <h1 style={{fontSize:"15vw"}}>aryan subhajit panigrahy</h1>
            </section>
        </div>
    )
}

