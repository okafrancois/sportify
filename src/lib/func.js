import {useEffect, useState} from "react";


/**
 * Make the first letter of a string uppercase
 * @param {string} str - The string to capitalize.
 * @return {string} - The capitalized string.
 */
const toCapitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Replace the numeric value of the kind in the data by the corresponding string in kinds.
 * @param {{[number]: string}[]} kind - Array of kinds values.
 * @param {{value: number, kind: number}} data - Array of objects.
 * @returns {{value: number, kind: string}[]} - Array of objects with the kind replaced by the corresponding string.
 */
const formatPerformance = ({kind, data}) => {
    return data.map((item) => {

        return {
            value: item.value,
            kind: toCapitalize(translateKindsInFrench(kind[item.kind]))
        }
    })
}

/**
 * Replace the numeric day value by the corresponding first letter of the day in week.
 * @param {{sessionLength: number, day: number}[]} sessions - An array of session object.
 * @return {{sessionLength: number, day: string}[]} - An array of session object with the day replaced by the corresponding first letter of the day in week.
 */
const formatSessions = (sessions) => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return sessions.map((session) => {
        return {
            sessionLength: session.sessionLength,
            day: days[session.day - 1]
        }
    })
}


/**
 * Get the data from the url provide and return data and the states of the request.
 * @param {url: string} url - The url to fetch.
 * @return {{data: unknown, isPending: boolean, error: string}} - The data, the pending state and the error message in a object.
 */
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
