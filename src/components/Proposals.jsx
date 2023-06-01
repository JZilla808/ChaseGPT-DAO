import Identicon from "react-identicons";
import { Link } from "react-router-dom";

function Proposals() {
  const active = `bg-blue-600
  px-4 py-2.5 font-medium leading-tight uppercase text-white text-xs shadow-md shadow-gray-400 active:bg-blue-800 dark:shadow-transparent transition duration-150 ease-in-out dark:border border dark:border-blue-500 border-blue-600 hover:text-white`;

  const deactive = `bg-transparent
  px-4 py-2.5 font-medium leading-tight uppercase text-blue-600 text-xs shadow-md shadow-gray-400 active:bg-blue-800 dark:shadow-transparent transition duration-150 ease-in-out dark:border border dark:border-blue-500 border-blue-600 hover:text-white hover:bg-blue-600`;

  return (
    <div className="flex flex-col p-8">
      <div className="flex justify-center items-center" role="group">
        <button className={`rounded-l-full ${active}`}>All</button>
        <button className={`${deactive}`}>Open</button>
        <button className={`rounded-r-full ${deactive}`}>Close</button>
      </div>

      <div className="overflow-x-auto">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="h-[calc(100vh_-_20rem)] overflow-y-auto shadow-md rounded-md">
            <table className="min-w-full">
              <thead className="border-b dark:border-gray-500">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left"
                  >
                    Created By
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left"
                  >
                    Expires
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                    <div className="flex justify-start items-center space-x-2">
                      <Identicon
                        string={"hello"}
                        size={25}
                        className="h-10 w-10 object-contain rounded-full"
                      />
                      <span>0x21...ef24</span>
                    </div>
                  </td>
                  <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                    Invest in the development of new tools and apps
                  </td>
                  <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                    {new Date().getTime()}
                  </td>
                  <td className="text-sm font-light px-6 py-4 whitespace-nowrap space-x-2">
                    <Link
                      to={`/proposal/` + 2}
                      className="bg-blue-600
  px-4 py-2.5 font-medium leading-tight uppercase text-white text-sm shadow-md shadow-gray-400 active:bg-blue-800 dark:shadow-transparent transition duration-150 ease-in-out dark:border border dark:border-blue-500 border-blue-600 hover:text-white rounded-full"
                    >
                      View
                    </Link>

                    {/* <button
                      className="bg-green-600
  px-4 py-2.5 font-medium leading-tight uppercase text-white text-sm shadow-md shadow-gray-400 active:bg-green-800 dark:shadow-transparent transition duration-150 ease-in-out dark:border border dark:border-green-500 border-green-600 hover:text-white rounded-full"
                    >
                      Paid
                    </button>

                    <button
                      className="bg-red-600
  px-4 py-2.5 font-medium leading-tight uppercase text-white text-sm shadow-md shadow-gray-400 active:bg-red-800 dark:shadow-transparent transition duration-150 ease-in-out dark:border border dark:border-red-500 border-red-600 hover:text-white rounded-full"
                    >
                      Payout
                    </button> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proposals;
