"use client";

import React, { useContext } from "react";
import { SessionContext } from "../context/auth.context";

import { MdOutlineCastle } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Tooltip } from "./Tooltip";

export function NavBar() {
  const { state, dispatch } = useContext(SessionContext);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE_NAME", name: event.target.value });
  };

  const handleChangeRole = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: "CHANGE_ROLE",
      role: event.target.value as "user" | "specialist",
    });
  };

  return (
    <div className="flex flex-row items-center bg-purple-900 p-4 text-yellow-200">
      <MdOutlineCastle size={64} className="mr-2" />
      <div className="text-3xl font-extrabold underline underline-offset-2">
        FraudFortress
      </div>
      <div className="ml-auto">
        <input
          type="text"
          className="ml-auto rounded-lg border-2 border-purple-200 bg-purple-200 p-2 text-lg text-blue-800 outline-none focus:border-yellow-200"
          value={state.userName}
          onChange={handleChangeName}
          placeholder="Change username"
        />
      </div>
      <div className="ml-4">
        <select
          className="rounded-lg border-2 border-purple-200 bg-purple-200 p-2 text-lg text-blue-800 outline-none focus:border-yellow-200"
          value={state.role}
          onChange={handleChangeRole}
        >
          <option className="focus:text-yellow-200" value="user">
            User
          </option>
          <option value="specialist">Specialist</option>
        </select>
      </div>
      <Tooltip
        text={
          <div>
            <p>This is a prototype project!</p>
            <p>
              As such focus was put on the key features and not the regular
              needs of a project.
            </p>
            <p>
              Here you can enter your username and select your role instead of
              the usual authentication and authorization!
            </p>
          </div>
        }
      >
        <AiOutlineQuestionCircle
          data-tooltip-target="tooltip-help"
          size={32}
          className="ml-4"
        />
      </Tooltip>
    </div>
  );
}
