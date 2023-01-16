'use client'

import { use, useCallback, useEffect, useState } from "react";
import Test from "./components/test";
import { clearDatabase } from "./lib/database";
import TestLayout, { TestContext } from "./lib/examContext";


async function getExam(): Promise<any> {
    const savedTest = window.localStorage.getItem('currentTest');

    if(savedTest == null) {
        const res = await (await fetch(`/api/test`, {cache: 'no-store'})).json();

        localStorage.setItem('currentTest', JSON.stringify(res));
        
        return res;
    } else {
        return JSON.parse(savedTest);
    }
}

export default function TestPage() {


    const [data, setData] = useState([]);

    const [loaded, setLoaded] = useState(false);


    const load = useCallback(async (clear?: boolean) => {
        setLoaded(false);

        if(clear) {
            localStorage.removeItem('currentTest');
            await clearDatabase();
        }

        let newExam = null;
        do {
            const dat = await getExam();
            newExam = dat;
        } while ((data as any).id && (newExam as any).id != (data as any).id)

        setData(newExam as any);
        setLoaded(true);
    }, [data])

    useEffect(() => {
        load();
    }, []);

    return(
        <>
        <TestLayout>
            <span style={{opacity: loaded ? 1 : 0.5, width: "100%"}}>
                <Test onComplete={() => load(true)} data={data} />
            </span>
        </TestLayout>
        </>
    )
}