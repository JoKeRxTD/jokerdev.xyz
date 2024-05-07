import { useOrganizationList } from "@clerk/clerk-react";
import React from "react";
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";
import { Button } from "@nextui-org/react";


const JoinedOrganizationList = () => {
  const { isLoaded, setActive, userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!isLoaded) {
    return <>Loading</>;
  }

  return (
    <div className="flex flex-col gap-4">
      <h2>Joined Organizations</h2>
      <ul>
        {userMemberships.data?.map((mem) => (
          <li key={mem.id}>
            <span>{mem.organization.name}</span>
            <Button onClick={() => setActive(mem)}>Switch</Button>
          </li>
        ))}
      </ul>

      <Button
        disabled={!userMemberships.hasNextPage}
        onClick={() => userMemberships.fetchNext()}
      >
        Load more
      </Button>
    </div>
  );
};

export default JoinedOrganizationList;