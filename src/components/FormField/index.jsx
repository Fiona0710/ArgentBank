
export default function FormField ({className, id, type, label, name}) {
    return(
          <div className={className}>
            <label htmlFor={id}>{label}</label>
            <input 
            type={type} 
            id={id}
            name={name}
             />
          </div>
    )
}

