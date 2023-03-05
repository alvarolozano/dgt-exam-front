import Dexie from "dexie";


const db = new Dexie("examData");

db.version(1).stores({
    exam: "++id,&payload,examId,answerId",
    errors: "++id,payload,exam",
    generatedExam: "++id,superado"
});

export async function saveAnswer(exam, question, answer) {
    try {
        await db.exam.add({
            payload: `${exam}[${question}]`,
            examId: exam,
            answerId: answer
        });
    } catch {}
}

export async function savePreguntaFallada(payload) {
    try {
        await db.errors.add({
            payload,
            exam: -1
        });
    } catch {}
}

export async function getMyExam() {
    try {
        let test;
        const savedTest = localStorage.getItem('currentMyTest')
        if(!savedTest) {
            const testId = await db.generatedExam.add({
                superado: false
            });

            const preguntas = await db.errors.where("exam").equals(-1).toArray();
            
            if(preguntas.length >= 1) {
                db.errors.where("exam").equals(-1).modify({
                    exam: testId
                });

                localStorage.setItem("currentMyTest", testId);

                return ({
                    id: `local-${testId}`,
                    preguntas: (preguntas).map(({id, payload}) => ({
                        ...payload,
                        id: `${id}@${testId}`
                    }))
                })
            } else {
                alert("Nada que repasar! Continúa haciendo tests");
                throw "Nothing";
            }

        } else {

            const preguntas = await db.errors.where("exam").equals(Number(savedTest)).toArray();
            
            test = {
                id: `local-${savedTest}`,
                preguntas: (preguntas).map(({id, payload}) => ({
                    ...payload,
                    id: `${id}@${savedTest}`
                }))
            }
        }

        return test;


    } catch (e) {
        if(e === 'Nothing') throw e;
    }
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