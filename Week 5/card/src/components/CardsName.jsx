/* eslint-disable react/prop-types */
import { Card, CardContent, Typography } from '@mui/material';

function CardsName(props) {
    return (
        <div>
        <Card>
            <CardContent>
            <Typography>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <ul>
                    <li>{props.intrests}</li>
                </ul>
                <button>
                    <a href={props.link} target="_blank" rel="noopener noreferrer">
                        {props.linkName}
                    </a>
                </button>
            </Typography>
            </CardContent>
        </Card>
        </div>
    );
}

export default CardsName;
