export default function Rating(props){ 

    if(props.value == 5){
        return(

            <div className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>

        )
    }else if(props.value == 4){
        return(

            <div className="rating">&#9733;&#9733;&#9733;&#9733;&#9734;</div>

        )
    }else if(props.value == 3){
        return(

            <div className="rating">&#9733;&#9733;&#9733;&#9734;&#9734;</div>

        )
    }else if(props.value == 2){
        return(

            <div className="rating">&#9733;&#9733;&#9734;&#9734;&#9734;</div>

        )
    }else if(props.value == 1){
        return(

            <div className="rating">&#9733;&#9734;&#9734;&#9734;&#9734;</div>

        )
    }else{
        return(

            <div className="rating">&#9734;&#9734;&#9734;&#9734;&#9734;</div>

        )
    }

}