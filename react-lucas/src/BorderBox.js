import './Lucas.css';





export default function BorderBox({border,content,rounded}){
    if (border=="true" && rounded=="true"){
        return(<div class="border rounded">{content}</div>)
    } else if (border=="true"){
        return(<div class="border">{content}</div>)
    } else {
        return(<div class="normal">{content}</div>)
    }
}



