import './Lucas.css';




export default function SquareButton({active, label}) {
    function getMeClassNAme() {
        if (active == "true") {
            return "square-button orange";
        } else {
            return "square-button";
        }
    }
    return "square-button";
}
