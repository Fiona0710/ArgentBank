
export default function FormField ({className, id, type, label, onChange, value}) {
    return(
          <div className={className}>
            <label htmlFor={id}>{label}</label>
            <input 
            type={type} 
            id={id}
            onChange={onChange}
            value={value}
             />
          </div>
    )
}

