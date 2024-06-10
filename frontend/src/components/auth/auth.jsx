import React from "react";

function Auth(){
  return(
    <>
    <Header/>
    <SingIn/>
    </>
  )
}

function Header(){
  return(
    <header className="flex flex-row justify-between bg-white py-4 items-center">
      <h1 className="mx-10"><a href="/">YOGA.MOSCOW</a></h1>
    </header>
  )
}

function SingIn(){
  return(
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <form className="w-full md:w-1/3 rounded-lg">
        <h2 className="text-2xl text-center text-black mb-8">Вход/Регистрация</h2>
        <div className="px-12 pb-10">
          <div className="w-full mb-2">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="E-mail"
                className="
                  w-full
                  border
                  rounded
                  px-3
                  py-2
                  text-gray-700
                  focus:outline-none
                "
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <input
                type="password"
                placeholder="Пароль"
                className="
                  w-full
                  border
                  rounded
                  px-3
                  py-2
                  text-gray-700
                  focus:outline-none
                "
              />
            </div>
          </div>
          <button
            type="submit"
            className="
              w-full
              border-1
              py-2
              mt-8
              rounded-full
              bg-gray-200
              text-black
              hover:bg-gray-400
              
            "
          >
            Продолжить
          </button>
          <h3 className="text-center">или</h3>
          <button
            type="submit"
            className="
              w-full
              border-1
              py-2
              mt-1
              rounded-full
              bg-gray-200
              text-black
              hover:bg-gray-400
            "
          >
            Войти через Госуслуги
          </button>
        </div>
      </form>
    </div>
  )
}




export default Auth;