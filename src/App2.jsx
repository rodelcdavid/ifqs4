import { ChakraProvider, FormLabel, Text, theme } from "@chakra-ui/react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import PrivateRoutes from "./components/route-wrappers/PrivateRoutes";
import { useSelector } from "react-redux";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Home from "./pages/Home";

import QuizSetup from "./pages/QuizSetup";
import QuizBankList from "./pages/QuizBankList";
import AnswerForm from "./pages/AnswerForm";
import FormList from "./pages/FormList";
import QuizContent from "./pages/QuizContent";
import FormContent from "./pages/FormContent";
import QuizResults from "./pages/QuizResults";
import { MyFormsPage } from "./pages/MyForms";
import { AssessmentPage } from "./pages/Assessment";
import { FormSetupPage } from "./pages/FormSetup";
import { QuizOverviewPage } from "./pages/QuizOverview";
import { AnswerQuizPage } from "./pages/AnswerQuiz";
import { ReviewPage } from "./pages/Review";
import { ReportsPage } from "./pages/Reports";

function App() {
  const { isUserAuthenticated } = useSelector((state) => state.authState);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* Private Routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/" exact element={<Home />}>
              {/* My Forms */}
              <Route path="/my-forms" element={<Outlet />}>
                <Route index element={<MyFormsPage />} />
                <Route path=":title" element={<FormSetupPage />} />
              </Route>

              {/* Assessment */}
              <Route path="/assessment" element={<Outlet />}>
                <Route index element={<AssessmentPage />} />

                {/* Quiz */}
                <Route path=":type/:code" element={<QuizOverviewPage />} />
                <Route path=":type/:code/review" element={<ReviewPage />} />
                <Route path=":type/:code/answer" element={<AnswerQuizPage />} />
                <Route path=":type/:code/results" element={<QuizResults />} />

                {/* Forms */}
                {/* Overview */}
                {/* Review */}
                {/* Answer */}
                {/* Finish */}
              </Route>

              {/* Reports */}
              <Route path="/reports" element={<Outlet />}>
                <Route index element={<ReportsPage />} />
                {/* <Route path=":title" element={<FormSetupPage />} /> */}
              </Route>
            </Route>
          </Route>

          {/* Public Route */}
          <Route
            path="/login"
            element={isUserAuthenticated ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
