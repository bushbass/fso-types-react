interface TotalExercises {
    totalExercises: number;
}

function Total(props: TotalExercises) {
    return (
        <p>
            Number of exercises {props.totalExercises}
        </p>);
}

export default Total;