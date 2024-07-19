import { FunctionComponent } from "preact";
import DeleteButton from "../islands/DeleteButton.tsx";

type ContactoProps = {
    name: string;
    email: string;
    dni: string;
    id: string;
};

const Contacto: FunctionComponent<ContactoProps> = ({name, email, dni, id}) => {
    return (
        <div>
            <span>{name}</span>
            <span>{email}</span>
            <DeleteButton dni={dni} id={id}/>
        </div>
    )
}

export default Contacto;