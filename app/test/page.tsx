'use client'

import { use, useEffect, useState } from "react";
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

    useEffect(() => {
        getExam().then((dat: any) => setData(dat)).catch(() => null)
    }, []);

    return(
        <>
            <Test data={data} />
        </>
    )
}