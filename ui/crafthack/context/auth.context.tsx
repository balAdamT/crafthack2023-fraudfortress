"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type Session = {
  userName: string;
  role: "user" | "specialist";
};

type ChangeNameAction = {
  type: "CHANGE_NAME";
  name: Session["userName"];
};

type ChangeRoleAction = {
  type: "CHANGE_ROLE";
  role: Session["role"]
}

type ActionType = ChangeNameAction | ChangeRoleAction;

const initialState: Session = {
  userName: "User1",
  role: "user",
};

const reducer = (state: Session, action: ActionType) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, userName: action.name };
    case "CHANGE_ROLE":
      return { ...state, role: action.role };
    default:
      return state;
  }
};

export const SessionContext = createContext<{
  state: Session;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const SessionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SessionContext.Provider value={{ state, dispatch }}>
      {children}
    </SessionContext.Provider>
  );
};
