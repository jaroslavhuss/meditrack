import { IPatient } from "../Entities/interfaces/patient.interface";
import MainLayout from "../components/Layouts/MainLayout";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
const Settings = () => {
  const hcp = useAuthUser() as { user: IPatient };

  return (
    <MainLayout>
      {hcp && (
        <>
          {" "}
          <h1 className="text-center text-2xl mt-10">
            Nastavení pro {hcp.user.name} {hcp.user.surname}
          </h1>
          <p>Pracujeme na tom! </p>
        </>
      )}
    </MainLayout>
  );
};

export default Settings;
