This repository demonstrates a bug in React Router DOM v6 where nested routes fail to render correctly when the parent route uses parameters. The issue occurs when a child route is nested within a parent route containing parameters in its path.  The solution provides a corrected implementation using the `useParams` hook and ensuring the nested routes are properly defined within the parent route.