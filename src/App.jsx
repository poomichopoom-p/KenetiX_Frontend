import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import Contact from "./Page/Contact";
import ContactUs from "./Page/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen text-white">
        <ContactUs />
      </div>
    </BrowserRouter>
  );
}

export default App;

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//   },
// ]);

// export default function App() {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },

//       {
//         path: "products",
//         element: <Products />,
//       },

//       {
//         path: "products/:productId",
//         element: <ProductDetail />,
//       },
//       {
//         path: "/navigate",
//         element: <Navbar />,
//       },
//       {
//         path: "/Menu",
//         element: <Menu />,
//       },
//     ],
//   }])
// export default function App() {
//   return <RouterProvider router={router} />;
// }
