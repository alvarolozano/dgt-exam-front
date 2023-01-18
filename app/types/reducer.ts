
export type ExamState = {
    aciertos: number,
    fallos: number,
    totalPreguntas: number,
    porcentajeAciertos: number
}

export enum ExamStateActions {
    reset,
    setTotalPregunas,
    saveAcierto,
    saveError
}