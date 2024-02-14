import { FC, ReactNode } from "react";
import SessionProvider from "./session.context";


const providers: ReadonlyArray<FC<{children:ReactNode}>> = [SessionProvider]
export default function Provider({children}:{children:ReactNode}){
    return providers.reduce((acc,ChildrenProvider)=><ChildrenProvider>{acc}</ChildrenProvider>,children)
}