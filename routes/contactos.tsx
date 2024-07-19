import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Agenda from "../components/Agenda.tsx";
import AuthForm from "../islands/AuthForm.tsx";
import { Contact } from "../types.ts";

type State = {
    dni: string;
}
type Data = {
    contactos: Contact[]
    dni: string;
}
export const handler: Handlers<Data, State> = {
    GET: async(_req: Request, ctx: FreshContext<State, Data>) => {
        const dni = ctx.state.dni;
        const response = await fetch(`https://apicontacts.deno.dev/contacts/${dni}`);

        const contactos: Contact[] = await response.json();
        return ctx.render({dni: dni, contactos: contactos})

    },
    POST: async(req: Request, ctx: FreshContext<State, Data>) => {
        const dni = ctx.state.dni;
        const form = await req.formData();
        const email = form.get("email")?.toString() || "";
        const name = form.get("name")?.toString() || "";
        const responsePOST = await fetch("https://apicontacts.deno.dev/contact",
            {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, dni }),
            },
        );

        const response = await fetch(`https://apicontacts.deno.dev/contacts/${dni}`);

        const contactos: Contact[] = await response.json();
        return ctx.render({dni: dni, contactos: contactos})
        },
}
const Page = (props: PageProps<Data>) => {
  return (
    <div>
      <Agenda dni={props.data.dni} contactos={props.data.contactos}/>
    </div>
  );
}

export default Page;