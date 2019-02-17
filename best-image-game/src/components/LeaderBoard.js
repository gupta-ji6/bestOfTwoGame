import React, { Component } from 'react';

class LeaderBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return(
            <div>
                <h4>LeaderBoard</h4>
                <table
                style={{
                    borderColor: "white",
                    borderWidth: "1px",
                }}
                >
                <tbody>
                <tr style={{
                    borderColor: "white",
                    borderWidth: "1px",
                }}>
                        <th>Rank</th>
                        <th>Image</th>
                        <th>Points</th>
                        <th>Rounds</th>
                    </tr>
                    <tr>

                    </tr>
                </tbody>
                    
                </table>
            </div>
        );
    }
}

export default LeaderBoard;
