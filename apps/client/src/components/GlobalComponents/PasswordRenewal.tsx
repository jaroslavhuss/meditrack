import { useState } from "react";
import HCPImage from "../../assets/rg-girl.png";
import {
  startPasswordReset,
  validateSecurityAnswers,
  resetPassword,
} from "../../APIs/Users";
import { IUser } from "../../Entities/interfaces/user.interface";
import { useDispatch } from "react-redux";
import { setError } from "../../store/gsms/errorSlice";
const PasswordRenewal = () => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [userData, setUserData] = useState<IUser | null>(null);

  const startReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await startPasswordReset(email);
    if (data) {
      setProgress(1);
      setUserData(data);
    } else {
      dispatch(
        setError({
          message: "Nepodařilo se zahájit proces obnovy hesla",
          rawData: JSON.stringify(data),
        })
      );
    }
  };
  return (
    <div className="w-full h-full bg-white bg-opacity-95 z-50 p-10 rounded-lg absolute top-0 left-0">
      <h2 className="text-4xl text-center gradientPurpleFont font-bold">
        Vítejte v procesu obnovy hesla
      </h2>
      <div className="max-w-7xl block mx-auto mt-10 text-xl">
        {progress === 0 && (
          <p>
            V následujících krocích Vás provedeme procesem obnovy hesla. Tento
            proces jsme vymysleli tak, aby se obešel bez vnějšího přístupu na
            internet (kvůli bezpečnosti), proto musíte odpovědět na{" "}
            <strong>dvě bezpečnostní otázky</strong>, na které jsme se Vás ptali
            během registrace. Pokud neznáte odpověď na bezpečnostní otázky,{" "}
            <strong>musíte kontaktovat svého správce sítě.</strong>
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 m-2 justify-center align-middle">
          <div className="col-span-12 md:col-span-4">
            <img
              src={HCPImage}
              alt="HCP"
              className=" rounded-full shadow-2xl"
            />
          </div>
          <div className="col-span-12 md:col-span-8 self-center p-2 rounded-lg bg-gradient-to-br from-red-200 via-red-100 to-purple-300">
            <form className=" form-control p-3" onSubmit={startReset}>
              <label
                htmlFor="email"
                className="text-2xl font-bold text-slate-600"
              >
                Zadejte svůj email
              </label>
              <br />
              <input
                type="email"
                className="form-control shadow-2xl input-success p-2 rounded-xl text-center"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="submit"
                value="Potvrdit svůj registrační email"
                className="end-0 p-2 bg-gradient-to-br from-slate-500 via-slate-500 to-slate-700 rounded-xl font-bold text-white inline-block mx-auto mt-4 cursor-pointer text-center"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordRenewal;
