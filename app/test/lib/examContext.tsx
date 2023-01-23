'use client'

import { ExamState, ExamStateActions } from "../../types/reducer";
import React, { createContext, useReducer } from "react";
import { create } from "domain";

const initialState: ExamState = {
    aciertos: 0,
    fallos: 0,
    porcentajeAciertos: 0,
    totalPreguntas: 0
}

function reducer(state: any, {action, payload}: {action: ExamStateActions, payload: any}): any {

    if(action == ExamStateActions.reset) {
        return initialState;
    }

    else if(action == ExamStateActions.saveAcierto) {
        return {
            ...state,
            aciertos: state.aciertos + 1
        }
    }

    else if(action == ExamStateActions.saveError) {
        return {
            ...state,
            fallos: state.fallos + 1
        }
    }

    else {
        throw Error("Acción no soportada");
    }
}

const TestContext = createContext<any>(null);

export default function TestLayout({children}: React.PropsWithChildren) {

    const [ state, dispatch ] = useReducer(reducer as any, initialState as ExamState);

    return (
        <TestContext.Provider value={{state, dispatch}}>
            {children}
        </TestContext.Provider>
    )
}

export { TestContext };
