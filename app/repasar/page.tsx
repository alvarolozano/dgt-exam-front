'use client'

import { use, useCallback, useEffect, useState } from "react";
import { getMyExam } from "../test/lib/database";
import Test from "./../test/components/test";
import { clearDatabase } from "./../test/lib/database";
import TestLayout, { TestContext } from "./../test/lib/examContext";


export default function TestPage() {


    const [data, setData] = useState([]);

    const [loaded, setLoaded] = useState(false);


    const load = useCallback(async (clear?: boolean) => {
        setLoaded(false);

        if(clear) {
            localStorage.removeItem('currentMyTest');
            // await clearDatabase();
        }


        const test = await getMyExam();
        
        setData(test as any);
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