import Dexie from "dexie";


const db = new Dexie("examData");

db.version(1).stores({
    exam: "++id,&payload,answerId"
});

export async function saveAnswer(exam, question, answer) {
    try {
        await db.exam.add({
            payload: `${exam}[${question}]`,
            answerId: answer
        });
    } catch {}
}

export async function getAnswer(exam, question) {
    const first = await db.exam.where("payload").equalsIgnoreCase(`${exam}[${question}]`).first();

    if(first) {
        return first.answerId;
    }

    return undefined;
}


export async function clearDatabase() {
    return db.exam.clear();
}