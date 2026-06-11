import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import Login from "./pages/Login.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import HowItWorksPage from "./pages/HowItWorksPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import ProtectedAdminRoute from "./components/admin/ProtectedAdminRoute.jsx";
import SignupPage from "./components/SignupPage.jsx";
import OrderConfirmation from "./pages/Orderconfirmation.jsx";
=======
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import HowItWorksPage from "./pages/HowItWorksPage";
import ContactPage from "./pages/ContactPage";
import CheckOut from "./pages/CheckOut";
import AdminDashboard from "./pages/AdminDashboard";
import CommunityPage from "./pages/CommunityPage";
import ProtectedAdminRoute from "./components/admin/ProtectedAdminRoute";
import ProtectedUserRoute from "./components/ProtectedUserRoute";
import SignupPage from "./components/SignupPage";
import OrderConfirmation from "./pages/OrderConfirmation";
>>>>>>> 53b044ba8b81b67c043d33f84093e05428009e2f

export default function App() {
    return (
        <Routes>
            <Route path="/"                element={<Home />} />
            <Route path="/catalog"         element={<Catalog />} />
            <Route path="/login"           element={<Login />} />
            <Route path="/signup"          element={<SignupPage />} />
            <Route path="/userdashboard"   element={<ProtectedUserRoute><UserDashboard /></ProtectedUserRoute>} />
            <Route path="/howitworkspage"  element={<HowItWorksPage />} />
            <Route path="/contact"         element={<ContactPage />} />
            <Route path="/community"       element={<CommunityPage />} />
            <Route path="/checkout"        element={<CheckOut />} />
            <Route
                path="/admin"
                element={
                    <ProtectedAdminRoute>
                        <AdminDashboard />
                    </ProtectedAdminRoute>
                }
            />
            <Route path="*" element={<Home />} />
            <Route path="/orderconfirmation/:orderId" element={<OrderConfirmation />} />
        </Routes>
    );
}
