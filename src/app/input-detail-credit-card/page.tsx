"use client";
import ReactDatePicker from "react-datepicker";
import { PiEyeLight, PiEyeClosedLight } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import { useEffect, useState } from "react";
import store from "../../../store";
import "react-datepicker/dist/react-datepicker.css";

export default function CreditCardPage() {
  const [isCardNumberMasked, setIsCardNumberMasked] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const creditCard = store((state: any) => state.creditCard);
  const setCreditCard = store((state: any) => state.setCreditCard);
  const [cardNumberMasked, setCardNumberMasked] = useState("");
  const [cardNumberUnmasked, setCardNumberUnmasked] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    const isDisabled =
      cardNumberUnmasked.length !== 16 ||
      !cardNumberMasked ||
      !creditCard.expiry ||
      !creditCard.dob ||
      !checkbox;

    // isDisabled ? setIsButtonDisabled(true) : setIsButtonDisabled(false);
  }, [creditCard, checkbox, cardNumberUnmasked.length, cardNumberMasked]);

  const handleButtonClicked = () => {
    console.log("Button Clicked");
  };

  return (
    <div className="font-primary text-xl font-medium font-montserrat flex flex-col h-screen">
      <h1 className="text-3xl font-medium pt-10 p-4">Hubungkan Kartu Kredit</h1>

      <div className="flex flex-col space-y-2 pt-4 pb-2 p-4">
        <div className="relative grow border-2 border-gray-300 rounded-md">
          <input
            type="text"
            inputMode="numeric"
            id="cardNumber"
            placeholder="Masukan 16 digit nomor Kartu Kredit"
            className="text-base p-2 rounded-md h-[60px] w-full"
            onChange={() => {}}
          />
          <div
            className="absolute right-4 top-[50%] -translate-y-[50%]"
            onClick={() => setIsCardNumberMasked(!isCardNumberMasked)}
          >
            {isCardNumberMasked ? (
              <PiEyeClosedLight className="text-gray-500 cursor-pointer" />
            ) : (
              <PiEyeLight className="text-gray-500 cursor-pointer" />
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-2 py-2 p-4">
        <div className="relative grow border-2 border-gray-300 rounded-md">
          <ReactDatePicker
            selected={creditCard.expiry}
            onChange={(date: any) => setCreditCard({ ...creditCard, expiry: date })}
            autoFocus
            showMonthYearPicker
            dateFormat="MM/yy"
            className="text-base grow h-[60px] w-full p-2"
            wrapperClassName="w-full"
            placeholderText="Tanggal kadaluwarsa kartu (MM/YY)"
            calendarClassName="z-50"
          />
          <div className="absolute right-4 top-[50%] -translate-y-[50%] pointer-events-none">
            <CiCalendar className="text-gray-500" />
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-2 py-2 p-4">
        <div className="relative grow border-2 border-gray-300 rounded-md">
          <ReactDatePicker
            selected={creditCard.dob}
            onChange={(date: any) => setCreditCard({ ...creditCard, dob: date })}
            autoFocus
            showFullMonthYearPicker
            dateFormat="MM/yy"
            className="text-base grow h-[60px] w-full p-2"
            wrapperClassName="w-full"
            placeholderText="Tanggal kadaluwarsa kartu (MM/YY)"
            calendarClassName="z-50"
          />
          <div className="absolute right-4 top-[50%] -translate-y-[50%] pointer-events-none">
            <CiCalendar className="text-gray-500" />
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-2 my-8">
        <div className="bg-gray-200 flex items-start p-4">
          <input
            type="checkbox"
            id="terms"
            className="h-5 w-5 border-3 border-e-black"
            onChange={() => setCheckbox(!checkbox)}
          />
          <label htmlFor="terms" className="pl-2 text-sm text-gray-600 flex-1">
            Dengan ini <span className="text-red-600">Saya Setuju</span> untuk
            melakukan koneksi Kartu Kredit BNI pada MAPCLUB sesuai dengan data
            tersebut di atas.
            <br />
            <br />
            Saya bertanggung jawab sepenuhnya atas koneksi Kartu Kredit BNI saya
            tersebut dan dengan ini saya membebeaskan BNI dari segala
            tuntutan/gugatan dalam bentuk apapun dan siapapun.
          </label>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4">
        <button
          disabled={isButtonDisabled}
          onClick={handleButtonClicked}
          className="w-full text-white bg-black py-3 h-16 rounded-md"
        >
          Selesai
        </button>
      </div>
    </div>
  );
}
