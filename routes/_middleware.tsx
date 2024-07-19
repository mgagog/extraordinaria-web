import { FreshContext } from "$fresh/server.ts";
import {getCookies} from "$std/http/cookie.ts"
import jwt from "npm:jsonwebtoken";

type State = {
    dni: string;
}

export async function handler(req: Request, ctx: FreshContext<State>) {
    if(ctx.destination !== "route"){
        const resp = await ctx.next();
        return resp;
    }

    if(ctx.route === "/"){
        const resp = await ctx.next();
        return resp;
    }

    const {dni} = getCookies(req.headers);

    if(!dni){
        return new Response("", {
            status: 307,
            headers: {
                location: "/"
            }
        })
    }

    ctx.state.dni = dni;
    const resp = await ctx.next();
    return resp;
}