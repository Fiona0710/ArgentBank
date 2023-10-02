
export default function Button ({className, name, type}) {

    return(
    <button 
        type={type} 
        className={className}
    >
        {name}
    </button>
    )
}