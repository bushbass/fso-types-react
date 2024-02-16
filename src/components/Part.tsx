import { CoursePart } from "../types";

interface CourseParts {
    courseParts: CoursePart[];
}
/**
 * Helper function for exhaustive type checking
 */
const assertNever = (value: never): never => {
    throw new Error(
        `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
};




function Part(props: CourseParts) {
    console.log(props);
    props.courseParts.forEach(part => {
        switch (part.kind) {
            case 'basic': {
                console.log(part.name, part.exerciseCount, part.kind);
            }
                break;
            case 'group': {
                console.log(part.name, part.exerciseCount, part.kind, part.groupProjectCount);
            }
                break;
            case 'background': {
                console.log(part.name, part.exerciseCount, part.kind, part.backgroundMaterial);
            }
                break;
            case 'special': {
                console.log(part.name, part.exerciseCount, part.kind, part.requirements);
            }
                break;

            default:
                return assertNever(part);
        }
    });

    return (
        <div>


            {props.courseParts.map(part => {
                switch (part.kind) {
                    case 'basic': { return (<><p><strong>Name: {part.name} - {part.exerciseCount}</strong><br/><em>{part.description}</em></p></>); }
                    case 'group': { return (<><p><strong>Name: {part.name} - {part.exerciseCount}</strong><br/>Group Project Count: {part.groupProjectCount}</p></> )};
                    case 'background': { return (<><p><strong>Name: {part.name} - {part.exerciseCount}</strong><br/><em>{part.description}</em><br/>Background Material: {part.backgroundMaterial}</p></>) };
                    case 'special': { return (<><p><strong>Name: {part.name} - {part.exerciseCount}</strong><br/><em>{part.description}</em><br/>Required Skills: {part.requirements}</p></> )};
                    default: return assertNever(part);
                }
            })}

        </div>
    );
}

export default Part;