import { HttpStatusCode } from "axios";
import { FormEvent, useState } from "react";
import { User } from "../../types/user";
import AdminDashboard from "../dashboard/AdminDashboard";

export default function Auth() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [responseStatus, setResponseStatus] = useState(false);
  const data: User = {
    username: userName,
    password: password,
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch("/api/auth/login", {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data),
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    //This callback is when the response is received and add a token to local storage
    console.log(response.json().then((data) => console.log(data.login)));

    setResponseStatus(response.status === 200 ? true : false);
  };

  return (
    <div className="h-screen">
      <div className="container mx-auto px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            {responseStatus ? (
              <AdminDashboard />
            ) : (
              <form method="post">
                {/* Username input */}
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Username"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  onClick={onSubmit}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
