"use client";

import React, { useContext } from 'react';
import { SessionContext } from '../context/auth.context'; 

export function NavBar() {
    const { state, dispatch } = useContext(SessionContext);

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'CHANGE_NAME', name: event.target.value });
    };

    const handleChangeRole = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: 'CHANGE_ROLE', role: event.target.value as 'user' | 'specialist' });
    };

    return (
        <div className="bg-blue-700 text-yellow-200 p-4">
            <div>Current: {state.userName} ({state.role})</div>
            <div className="mt-4">
                <input
                    type="text"
                    className="bg-blue-200 text-black rounded p-2"
                    value={state.userName}
                    onChange={handleChangeName}
                    placeholder="Change username"
                />
            </div>
            <div className="mt-4">
                <select 
                    className="bg-blue-200 text-black rounded p-2"
                    value={state.role}
                    onChange={handleChangeRole}
                >
                    <option value="user">User</option>
                    <option value="specialist">Specialist</option>
                </select>
            </div>
        </div>
    );
}
