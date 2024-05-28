import Image from "next/image";
import styles from "./page.module.css";

interface Props{
  alternate:boolean
}

export default function Row({alternate}:Props) {
  if(alternate){
    return(
      <div>
        <div className="square white"></div>
        <div className="square black"></div>
        <div className="square white"></div>
        <div className="square black"></div>
        <div className="square white"></div>
        <div className="square black"></div>
        <div className="square white"></div>
        <div className="square black"></div>
      </div>
    )
  }
  else{
    return(
      <div>
        <div className="square black"></div>
        <div className="square white"></div>
        <div className="square black"></div>
        <div className="square white"></div>
        <div className="square black"></div>
        <div className="square white"></div>
        <div className="square black"></div>
        <div className="square white"></div>
      </div>
    )
  }
}
