import { useOutletContext } from "react-router-dom"

export default function HostVanPrice() {
    const {vanDetail} = useOutletContext(); 
    return(
        <h4><span>${vanDetail.price}</span><span>/day</span></h4>
    )
}