"use client";

import { SessionContext } from "@/context/auth.context";
import { useContext } from "react";

export function ContextTest() {
    const { state } = useContext(SessionContext);

    return <div>{state.userName} ({state.role})</div>;
}