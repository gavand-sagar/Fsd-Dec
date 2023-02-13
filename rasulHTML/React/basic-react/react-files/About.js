import { useContext } from "react";
import MyDataContext from "./dataContext";
import Header from "./Header";

export default function About(){
   const {someValue}  = useContext(MyDataContext)
    return (
        <div>
            <Header/>
            {someValue}
            <h1>This is About</h1>
            <input></input> <button>Click Me</button>
            <p>Jesus nahm zu sich die Zwölfe 
                ('Jesus gathered the Twelve to Himself'),
                 BWV 22, is a church cantata by Johann Sebastian Bach, written for the last Sunday before Lent. 
                 He composed it as an audition piece for the position of director of church music in Leipzig, 
                 and he first performed it there in a church service at the Thomaskirche on 7 February 1723. 
                 The work begins with a scene from the Gospel in which Jesus predicts his suffering in Jerusalem, and is not understood by his disciples. Bach showed, setting the prescribed text of an unknown poet, that he mastered the composition of a dramatic scene, an expressive aria with obbligato oboe, a recitative with strings, an exuberant dance, and a chorale in the style of Johann Kuhnau, his predecessor in Leipzig. According to the Bach scholar Richard D. P. Jones, several elements of the work such as a "frame of biblical text and chorale around the operatic forms of aria and recitative" became standards for Bach's L</p>
        </div>
    )
}