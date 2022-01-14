import axios from 'axios';
import { useState, useContext } from 'react';
import AuthContext from './AuthContext';


const apiUrl = 'https://us-central1-bike-commutr.cloudfunctions.net/api/commute/';

function AddCommuteForm() {
    const { user } = useContext(AuthContext); // get logged in user

    const [commute, setCommute] = useState("");
    const [distance, setDistance] = useState("");

    if (!user) {
        return <div>Log in to add your commutes! </div>
    } else {
        return (
            <form onSubmit={(e) => {
                e.preventDefault(); // preventing the form from refreshing the page

                // submit to our API
                axios.post(apiUrl, {
                    user: user.uid,
                    commute,
                    distance
                })
            }}>
                <p>
                    <label>Commute:
                        <input
                            name="commute"
                            value={commute}
                            onChange={e => setCommute(e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>Distance:
                        <input
                            type="number" name="distance"
                            value={distance}
                            onChange={e => setDistance(e.target.value)}
                        />
                    </label>
                </p>

                <p>
                    <button> Add Commute </button>
                </p>
            </form>
        )
    }

}

export default AddCommuteForm;