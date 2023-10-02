
export default function FormContainer ({children, onSubmit}) {
    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </section>
    );
}
