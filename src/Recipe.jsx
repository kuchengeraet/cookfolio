import { useParams } from 'react-router'

function Recipe() {
    const { id } = useParams();
    return (
        <div>
            <span>{id}</span>
        </div>
    )
}

export default Recipe