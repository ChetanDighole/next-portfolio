"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Admin() {
  const [skillForm, setSkillForm] = useState(false);

  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSignout = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  const handleSkill = async () => {};

  if (status === "unauthenticated") {
    router.push("/signin");
    return;
  } else if (status === "loading") {
    return (
      <div className="w-full h-screen flex items-center justify-center dark:text-white dark:bg-gray-800">
        Loading...
      </div>
    );
  }
  return (
    <div className="p-4 md:p-7 flex flex-col gap-10">
      {/* navbar start */}
      <div className="flex justify-between items-center">
        <div>Admin Panel</div>
        <button
          className="p-2 border border-black"
          onClick={() => handleSignout()}
        >
          sign out
        </button>
      </div>
      {/* navbar ends */}

      {/* skills section starts */}
      <div className="flex flex-col gap-2 md:gap-4">
        <div className="flex justify-between items-center">
          <div id="skills" className="text-xl font-bold">
            Add Skills
          </div>
          <button
            className="bg-blue-500 text-white w-max p-2"
            onClick={() => setSkillForm(!skillForm)}
          >
            add skills
          </button>
        </div>

        {/* form for skills starts */}
        {skillForm ? (
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="skillName">Enter skill name</label>
              <input
                name="skillName"
                type="text"
                className="w-max p-2 border border-black"
                placeholder="enter name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="skillImg">Add Image</label>
              <input name="skillImg" type="file" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="skillOrder">Enter Order</label>
              <input
                name="skillOrder"
                type="number"
                className="w-max p-2 border border-black"
                placeholder="enter number"
              />
            </div>
            <button
              className="bg-blue-500 text-white w-max p-2"
              onClick={() => handleSkill()}
            >
              Submit
            </button>
          </div>
        ) : (
          <></>
        )}
        {/* form for skills ends */}
      </div>
      {/* skills section ends */}
    </div>
  );
}
