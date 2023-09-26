
export default function FormField ({className, id, type, label}) {
    return(
          <div className={className}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} />
          </div>
    )
}

