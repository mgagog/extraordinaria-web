import { FunctionComponent } from "preact";
import { Contact } from "../types.ts";
import Contacto from "./Contacto.tsx";

type ListaProps = {
contactos: Contact[];
}

const ListaContactos: FunctionComponent<ListaProps> = (props) => {
    
    return (
        <ul>
            {props.contactos.map((contacto) => (
                <li><Contacto name={contacto.name} email={contacto.email} dni={contacto.dni} id={contacto._id}/></li>
            ))}
        </ul>
    )
}

export default ListaContactos;