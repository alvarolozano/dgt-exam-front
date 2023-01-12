'use client'

import { use, useCallback, useEffect, useState } from "react";
import Test from "./test";

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

    const load = useCallback(async (clear?: boolean) => {

        if(clear) localStorage.removeItem('currentTest');

        let newExam = null;
        do {
            const dat = await getExam();
            newExam = dat;
        } while ((data as any).id && (newExam as any).id != (data as any).id)

        setData(newExam as any);
    }, [data])

    useEffect(() => {
        load();
    }, []);

    return(
        <>
            <Test onComplete={() => load(true)} data={data} />
        </>
    )
}