import Identicon from "react-identicons";

function Voters() {
  const active = `bg-blue-600
  px-4 py-2.5 font-medium leading-tight uppercase text-white text-xs shadow-md shadow-gray-400 active:bg-blue-800 dark:shadow-transparent transition duration-150 ease-in-out dark:border border dark:border-blue-500 border-blue-600 hover:text-white`;

  const deactive = `bg-transparent
  px-4 py-2.5 font-medium leading-tight uppercase text-blue-600 text-xs shadow-md shadow-gray-400 active:bg-blue-800 dark:shadow-transparent transition duration-150 ease-in-out dark:border border dark:border-blue-500 border-blue-600 hover:text-white hover:bg-blue-600`;

  return (
    <div className="flex flex-col p-8">
      <div className="flex justify-center items-center" role="group">
        <button className={`rounded-l-full ${active}`}>All</button>
        <button className={`${deactive}`}>Acceptees</button>
        <button className={`rounded-r-full ${deactive}`}>Rejectees</button>
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
                    Voter
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left"
                  >
                    Voted
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left"
                  >
                    Vote
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
                    {new Date().getTime()}
                  </td>
                  <td className="text-sm font-light px-6 py-4 whitespace-nowrap space-x-2">
                    <button
                      className="bg-blue-600
  px-4 py-2.5 font-medium leading-tight uppercase text-white text-sm shadow-md shadow-gray-400 active:bg-blue-800 dark:shadow-transparent transition duration-150 ease-in-out dark:border border dark:border-blue-500 border-blue-600 hover:text-white rounded-full"
                    >
                      Accepted
                    </button>

                    <button
                      className="bg-red-600
  px-4 py-2.5 font-medium leading-tight uppercase text-white text-sm shadow-md shadow-gray-400 active:bg-red-800 dark:shadow-transparent transition duration-150 ease-in-out dark:border border dark:border-red-500 border-red-600 hover:text-white rounded-full"
                    >
                      Rejected
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="py-2 mt-4 text-center">
          <button
            className="bg-transparent
  px-4 py-2.5 font-medium leading-tight uppercase text-blue-600 text-xs shadow-md shadow-gray-400 active:bg-blue-800 dark:shadow-transparent transition duration-150 ease-in-out dark:border border dark:border-blue-500 border-blue-600 hover:text-white hover:bg-blue-600 rounded-full"
          >
            Load more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Voters;
