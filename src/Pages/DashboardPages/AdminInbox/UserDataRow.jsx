const UserDataRow = ({ user, refetch }) => {
  return (
    <>
      <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
        <td className="whitespace-nowrap px-6 py-4">Mark</td>
        <td className="whitespace-nowrap px-6 py-4">Otto</td>
        <td className="whitespace-nowrap px-6 py-4">@mdo</td>
      </tr>
    </>
  );
};

export default UserDataRow;
