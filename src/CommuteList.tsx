import axios from 'axios';

import { useEffect, useState, useContext } from 'react';
import CommuteItem from './CommuteItem';
import AuthContext from './AuthContext';

function CommuteList() {
    const { user } = useContext(AuthContext);

    const apiUrl = 'https://us-central1-bike-commutr.cloudfunctions.net/api/commute'

    const [commutes, setCommutes] = useState([]);

    useEffect(() => {
        // getting the commutes from the api 
        axios.get(apiUrl + '/' + user?.uid || '').then((response) => {
            const commutes = response.data;

            // set them to a state 
            setCommutes(commutes);
        })
    }, [user])

    return (
        <div>
            <h2>Results for {user?.displayName || ''} </h2>
            <ul>{
                commutes.map((commute) => {
                    return <CommuteItem commute={commute} />
                })
            }</ul>
        </div>
    )
}

export default CommuteList;