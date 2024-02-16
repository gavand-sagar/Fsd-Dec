import { useState } from "react"
export default function Rating() {
    const[active, setActive] = useState(false)
    const[result1, setResult1] = useState('☆')
    const[result2, setResult2] = useState('☆')
    const[result3, setResult3] = useState('☆')
    const[result4, setResult4] = useState('☆')
    const[result5, setResult5] = useState('☆')
  

    function firstStar(){ 
        setResult1('★')
        setResult2('☆')
        setResult3('☆')
        setResult4('☆')
        setResult5('☆')
    }
    
    function secondStar(){ 
        setResult1('★')
        setResult2('★')
        setResult3('☆')
        setResult4('☆')
        setResult5('☆')
    }
    
    function thirdStar(){ 
        setResult1('★')
        setResult2('★')
        setResult3('★')
        setResult4('☆')
        setResult5('☆')
    }
    
    function fourthStar(){ 
        setResult1('★')
        setResult2('★')
        setResult3('★')
        setResult4('★')
        setResult5('☆')
    }
    
    function fifthStar(){ 
        setResult1('★')
        setResult2('★')
        setResult3('★')
        setResult4('★')
        setResult5('★')
    }

    return(
        <div className="rating">
            <span onClick={firstStar} className={result1 == '★' ? "purple-star" : "gray-star"}>{result1}</span>
            <span onClick={secondStar} className={result2 == '★' ? "purple-star" : "gray-star"}>{result2}</span>
            <span onClick={thirdStar} className={result3 == '★' ? "purple-star" : "gray-star"}>{result3}</span>
            <span onClick={fourthStar} className={result4 == '★' ? "purple-star" : "gray-star"}>{result4}</span>
            <span onClick={fifthStar} className={result5 == '★' ? "purple-star" : "gray-star"}>{result5}</span>
        </div>

    )

}