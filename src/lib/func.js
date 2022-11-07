import {useEffect, useState} from "react";

const toCapitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const formatPerformance = ({kind, data}) => {
    return data.map((item) => {

        return {
            value: item.value,
            kind: toCapitalize(translateKindsInFrench(kind[item.kind]))
        }
    })
}

const formatSessions = (sessions) => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return sessions.map((session) => {
        return {
            ...session,
            day: days[session.day - 1]
        }
    })
}

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(async res => {
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }

                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error };
}

const translateKindsInFrench = kind => {
    const kinds = {
        'cardio': 'cardio',
        'strength': 'force',
        'endurance': 'endurance',
        'intensity': 'intensité',
        'energy': 'énergie',
        'speed': 'vitesse',
    }

    return kinds[kind];
}

export {
    formatPerformance,
    useFetch,
    formatSessions,
}
