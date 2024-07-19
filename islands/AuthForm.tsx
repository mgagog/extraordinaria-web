import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

const AuthForm: FunctionComponent = () => {
    const [dni, setDNI] = useState<string>("");
    const [error, setError] = useState<string>("");

    const sendDNI = async (dni: string) => {
        
        if(dni.length !== 9) {
            setError("El DNI debe tener 9 caracteres");
            return;
        }
        const numbers = dni.slice(0, 8).split('');


        let sonNumeros: boolean = true;
        numbers.map(n => {
            if(Number.isNaN(parseInt(n))){
                sonNumeros = false;
            }
        })
        if(!sonNumeros) {
            ("Los primeros 8 caracteres deben ser números")
            return;
        }

        if(!Number.isNaN(parseInt(dni[8]))){
            setError("El último caracter debe ser una letra mayúscula")
            return;
        }
        document.cookie=`dni=${dni}; path="/`
        window.location.href="/contactos"
    }
    return (
        <div className="dni-input-container">
            <label>Introduce tu DNI</label>
            <input type="text" name="dni" id="dni" placeholder="12345678A" onBlur={(e) => setDNI(e.currentTarget.value)}></input>
            <button onClick={() => sendDNI(dni)}>Ir a mi agenda</button>
            {error !== "" &&<span className="error">{error}</span>}
        </div>
    )
}

export default AuthForm;