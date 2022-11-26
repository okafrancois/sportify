import {useEffect, useState} from "react";
import * as mockData from "../assets/mockedApiData.js";

/**
 * Make the first letter of a string uppercase
 *
 * @param {string} str - The string to capitalize.
 * @return {string} - The capitalized string.
 */
const toCapitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Replace the numeric value of the kind in the data by the corresponding string in kinds.
 *
 * @param {{[number]: string}[]} kind - Array of kinds values.
 * @param {{value: number, kind: number}[]} data - Array of objects.
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
 *
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
 * Get the data from the mockedApiData.js file and make it look like a real api call.
 *
 * @param {string} route - The route to fetch.
 * @param {number} userId - The user id to fetch.
 * @return {{data: any, isPending: boolean, error: string}} - The data, the pending state and the error message in an object.
 */
function useFetchMockData(route, userId) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mockedData = null;

        switch (route) {
            case 'user-data':
                mockedData =  mockData.USER_MAIN_DATA.find(user => user.id === userId);
                break;
            case 'performance':
                mockedData = mockData.USER_PERFORMANCE.find(user => user.userId === userId);
                break;
            case 'average-sessions':
                mockedData =  mockData.USER_AVERAGE_SESSIONS.find(user => user.userId === userId);
                break;
            case 'activity':
                mockedData =  mockData.USER_ACTIVITY.find(user => user.userId === userId);
                break;
        }

        const timeout = setTimeout(() => {
            if (mockedData) {
                setData(mockedData);
                setIsPending(false);
                setError(null);
            } else {
                setIsPending(false);
                setError('No data found');
            }

            clearTimeout(timeout);
        }, 1000)


        }, [route, userId]);

    return { data, isPending, error };
}

/**
 * Get the data from the url provide and return data and the states of the request.
 *
 * @param {url: string} url - The url to fetch.
 * @return {{data: any, isPending: boolean, error: string}} - The data, the pending state and the error message in an object.
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
                setData(data.data);
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

/**
 * Translate the kind in French.
 *
 * @param {{number?: string}} kind - The kind in english.
 * @return {string} - The kind in french.
 */
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
    useFetchMockData,
    formatSessions,
}
