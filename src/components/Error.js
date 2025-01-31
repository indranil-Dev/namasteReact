import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Error</h1>
            <p>{ error?.statusText }</p>
        </div>
    )
};

export default Error;