// src/pages/Login.tsx
import { useMutation } from '@tanstack/react-query';
import Voting from '/Voting-amico.svg';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginFn } from '../api/api';
import { UserContext } from '../context/userContext';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [NIS, setNIS] = useState<string>("")
  const [Password, setPassword] = useState<number>(0)
  const user = useContext(UserContext)
  const PostLoginData = useMutation({
    mutationFn: LoginFn,
    onSuccess(data) {
      user?.setUser(data)
      navigate("/landpage")
    },
  })

  const handleLogin = () => {
    PostLoginData.mutate({ NIU: NIS, password: Password })
  };

  const handleOnchanges = (type: "Pass" | "NIS", e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    switch (type) {
      case "NIS":
        setNIS(e.currentTarget.value)
        break;
      case "Pass":
        setPassword(parseInt(e.currentTarget.value))
        break;
    }
  }

  return (
    <main className="flex gap-10 w-screen h-screen items-center justify-center overflow-hidden">
      <section className="w-[70%] h-[80%] flex items-center justify-between">
        <div id="Thumbnail" className="bg-gradient-to-t from-merah-gelap-penus from-60% to-merah-penus rounded-3xl h-[95%] w-1/2 flex items-center justify-center p-6">
          <img src={Voting} alt="Voting Amico" className="w-11/12 h-11/12" />
        </div>
        <div id="Form" className="h-full w-[45%] flex flex-col items-start justify-center">
          <div className="mb-6 w-full grow flex flex-col justify-center gap-3">
            <h1 className="text-6xl text-white font-semibold mb-20 text-left mt-3">
              <span className="text-merah-penus">PENUS</span> E-VOTING
            </h1>

            <h2 className="text-4xl text-white font-bold ml-2 text-left mt-1">Masuk</h2>

            <div className="mb-3">
              <label htmlFor="nisNig" className="block text-putih-putih text-2xl font-medium ml-2 mb-2 text-left">
                NIS/NIG
              </label>
              <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log("nis", NIS)
                handleOnchanges("NIS", e)
              }} id="nisNig" placeholder="Masukkan NIS anda" className="w-full rounded-full px-3 py-2 text-black  focus:outline-none focus:ring-red-700 focus:ring-2 transition duration-300" required />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="block text-putih-putih text-2xl font-medium ml-2 mb-2 text-left">
                Kata Sandi
              </label>
              <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log("pass", Password)
                handleOnchanges("Pass", e)
              }} type="password" id="password" placeholder="Masukkan password anda" className="w-full rounded-full px-3 py-2 text-laut-dalam focus:outline-none focus:ring-red-700 focus:ring-2 transition duration-300" required />
            </div>

            <div className="mt-6">
              <div onClick={() => handleLogin()} className="w-1/2 bg-merah-penus text-center text-white font-bold py-2 px-4 rounded-full hover:drop-shadow-merah-penus-bayangan hover:scale-105 transition-all duration-300">
                {PostLoginData.isPending ? "Logging in" : "Masuk"}
              </div>
            </div>
          </div>

          <h5 className="text-xl font-semibold mb-8 text-putih-putih text-left">
            Powered by <span className="font-bold text-merah-penus">DEVACCTO RPL</span>
          </h5>
        </div>
      </section>
    </main>
  );
};

export default Login;

