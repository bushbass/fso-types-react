import Part from "./Part";

import { CoursePart } from "../types";

interface CourseParts {
  courseParts: CoursePart[];
}


function Content(props: CourseParts) {
  return (
    <>

      <Part courseParts={props.courseParts} />
    </>);
}

export default Content;