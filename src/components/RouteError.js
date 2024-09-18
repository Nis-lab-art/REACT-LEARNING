import { useRouteError, Link } from "react-router-dom";

const RouteError = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Opps! Something went wrong</h1>
      <h2>
        {error.status}: {error.statusText}
      </h2>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default RouteError;
