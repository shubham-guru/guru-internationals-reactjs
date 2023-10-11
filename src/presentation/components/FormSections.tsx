import React, { useState } from "react";
import Alert from "./Alert";

const FormSections = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleClick = async (e: any) => {
    e.preventDefault();
    if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
      Alert.fire({
        icon: "error",
        title: "Fields cannot be empty dear !",
      });
    } else {
      const { name, email, message } = data;

      const res = await fetch(
        "https://guruinternationals-7f673-default-rtdb.asia-southeast1.firebasedatabase.app/userQuery.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );
      if (res) {
        Alert.fire({
          icon: "success",
          title: "We have received your query, will get back to you soon !",
        });
      } else {
        Alert.fire({
          icon: "error",
          title: "Something went wrong from our end, please try again !",
        });
      }
    }
  };
  return (
    <div className="block p-6 bg-[#101528]">
      <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
        <span className="block mb-2 text-2xl text-white font-semibold text-primary">
          Let's connect
        </span>
        <h2 className="mb-4 text-3xl font-bold text-white text-dark sm:text-4xl md:text-[40px]">
          Ask anything
        </h2>
      </div>
      <form autoComplete="off" autoCorrect="off" onSubmit={handleClick}>
        {/*Name input*/}
        <div className="relative mb-6">
          <input
            type="text"
            className="peer block w-full bg-transparent border rounded placeholder-gray-500 text-white px-3 py-[0.32rem] leading-[1.6] outline-none"
            id="exampleInput7"
            placeholder="Name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        {/*Email input*/}
        <div className="relative mb-6" data-te-input-wrapper-init="">
          <input
            type="email"
            className="peer block placeholder-gray-500 border rounded text-white w-full bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none"
            id="exampleInput8"
            placeholder="Email address"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        {/*Message textarea*/}
        <div className="relative mb-6" data-te-input-wrapper-init="">
          <textarea
            className="peer block w-full placeholder-gray-500 border rounded text-white bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none"
            id="exampleFormControlTextarea13"
            rows={3}
            placeholder="Message"
            defaultValue={""}
            onChange={(e) => setData({ ...data, message: e.target.value })}
          />
        </div>

        {/*Submit button*/}
        <button
          type="submit"
          className="inline-block w-full rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          data-te-ripple-init=""
          data-te-ripple-color="light"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default FormSections;
