import './ContactForm.css';

function ContactForm() {
    return (
        <section className='Contato' id='contato'>
            <h2>Contato</h2>
            <form action="https://api.staticforms.xyz/submit" method="post" className="contact-form">
                <label>Nome</label>
                <input type="text" name="name" placeholder="Digite seu nome" autoComplete="off" required />
                
                <label>Email</label>
                <input type="email" name="email" placeholder="Digite seu email" autoComplete="off" required />
                
                <label>Mensagem</label>
                <textarea name="message" cols="30" rows="10" placeholder="Digite sua mensagem" required></textarea>
                
                <button type="submit">Enviar</button>

                <input type="hidden" name="accessKey" value="042be0d3-84fa-4ae8-aaed-2434cda72cac" />
                <input type="hidden" name="redirectTo" value="http://127.0.0.1:5501/obrigado.html" />
            </form>
        </section>
    );
}
export default ContactForm;
