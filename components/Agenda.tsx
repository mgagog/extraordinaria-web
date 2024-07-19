import { FunctionComponent } from "preact";
import ListaContactos from "./ListaContactos.tsx";
import { Contact } from "../types.ts";

type AgendaProps = {
    dni: string;
    contactos: Contact[];
}

const AuthForm: FunctionComponent<AgendaProps> = ({dni, contactos}) => {
    
    return (
        <div className="main-container">
            <div className="contacts-container">
                <h2>Contactos de {dni}</h2>
                <ListaContactos contactos={contactos}/>               
                <div className="add-contact-container">
                    <form method="POST">
                        <h1>Añadir contacto</h1>
                        <label for="name">Nombre</label>
                        <input type="text" id="name" name="name"></input>
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email"></input>
                        <button type="submit">Añadir</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AuthForm;