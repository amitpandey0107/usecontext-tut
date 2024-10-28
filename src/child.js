import React, { useContext } from "react";
import { UserContext } from "./utils/UserContext";
export default function Child(props) {
    const context = useContext(UserContext);
    console.log({
        context
    })
    return (
        <>
            {context?.user &&
                <>
                    <h1 className="text-2xl mb-"><strong className="text-blue-500">Username:</strong> {context?.user?.username}</h1>
                    <h1 className="text-2xl mb-"><strong className="text-blue-500">Password:</strong> {context?.user?.password}</h1>
                </>}
        </>
    )
}