/* eslint-disable @typescript-eslint/no-explicit-any */

import UserInformationForm from "@/components/admin/UserInformationForm";
import { Sheet } from "@/components/ui/sheet";

const Page = () => {
  // const UserData = ;

  return (
    <Sheet>
      <div className="layout  mx-auto flex  flex-col w-full h-full min-h-screen ">
        <UserInformationForm />
      </div>
    </Sheet>
  );
};

export default Page;
