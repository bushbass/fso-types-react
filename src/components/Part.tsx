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

            default:
                return assertNever(part);
        }
    });

    return (
        <div>


            {props.courseParts.map(part => {
                switch (part.kind) {
                    case 'basic': { return (<p>Name: {part.name} - Exercise Count: {part.exerciseCount} - Kind: {part.kind}</p>); }
                    case 'group': { return (<p>Name: {part.name} - Exercise Count: {part.exerciseCount} - Kind: {part.kind} - Group Project Count: {part.groupProjectCount}</p>); }
                    case 'background': { return (<p>Name: {part.name} - Exercise Count: {part.exerciseCount} - Kind: {part.kind} - Background Material: {part.backgroundMaterial}</p>); }
                    default: return assertNever(part);
                }
            })}

        </div>
    );
}

export default Part;