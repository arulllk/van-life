import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
    const {vanDetail} = useOutletContext(); 
    return (
        <img src={vanDetail.imageUrl} width="160" />
    )
}