import React from 'react';
import ReactDOM from 'react-dom';

const stateInfo = (
    state1, 
    state2, 
    state3,
    state4,
    population1,
    population2,
    population3,
    capital1,
    capital2,
    capital3,
    capital4,
    ) => {
    return (
        <table>
            <tr>
                <th>State</th>
                <th>Population</th>
                <th>Capital</th>
            </tr>
            <tr>
                <td>{state1}</td>
                <td></td>
                <td>{capital1}</td>
            </tr>
             <tr>
                <td>{state2}</td>
                <td>{population1}</td>
                <td>{capital2}</td>
            </tr>
             <tr>
                <td>{state3}</td>
                <td>{population2}</td>
                <td>{capital3}</td>
            </tr>
             <tr>
                <td>{state4}</td>
                <td>{population3}</td>
                <td>{capital4}</td>
            </tr>
        </table>
    )
}

ReactDOM.render(stateInfo(
    "Idaho",
    "Tennessee",
    "Maine",
    "Wisconson",
    "6.651 million",
    "1.331 million",
    "5.779 million", 
    "Boise",
    "Nashville",
    "Agusta",
    "Madison"
    ),
    document.getElementById('root')
);




