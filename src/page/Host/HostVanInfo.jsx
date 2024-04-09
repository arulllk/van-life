import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const {vanDetail} = useOutletContext();
    return (
        <section>
            <h4>Name: {vanDetail.name}</h4>
            <h4>Category: {vanDetail.type}</h4>
            <h4>Description: {vanDetail.description}</h4>
        </section>
    )
}