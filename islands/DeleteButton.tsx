import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

type DeleteProps = {
    dni: string;
    id: string;
}

const DeleteButton: FunctionComponent<DeleteProps> = ({dni, id}) => {

    const deleteContact = async (dni: string, id: string) => {
        await fetch(`https://apicontacts.deno.dev/contact/${dni}/${id}`,
            {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "DELETE"
            }
        )
        window.location.href="/contactos";
    }
    return (
        <button className="delete-button" onClick={() => deleteContact(dni, id)}>
            Delete
        </button>
    )
}

export default DeleteButton;