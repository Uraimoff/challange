import AllRate from "../pages/AllRate";
import DailyRate from "../pages/DailyRate";
import Home from "../pages/Home";
import Question from "../pages/Question";
import Registration from "../pages/Registration";

const navbar=[
    {
        element: <Home/>,
        title: "Home",
        path: "/home",
        private: false,
        hidden: false,
    },
    {
        element: <AllRate/>,
        title: "All rating",
        path: "/all",
        private: false,
        hidden: false,
    },
    {
        element: <DailyRate/>,
        title: "Daily rating",
        path: "/daily",
        private: false,
        hidden: false,
    },
    {
        element: <Question/>,
        title: "Question",
        path: "/quest",
        private: false,
        hidden: false,
    },
    {
        element: <Registration/>,
        title: "Registration",
        path: "/auth",
        private: false,
        hidden: false,
    },
]
export {navbar}