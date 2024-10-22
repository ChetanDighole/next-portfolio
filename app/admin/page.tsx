"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Admin() {
  const [allSkills, setAllSkills] = useState([]);
  const [skillForm, setSkillForm] = useState(false);
  const [skillFormData, setskillFormData] = useState({
    skillName: "",
    skillOrder: "",
    skillImg: "",
  });

  async function fetchSkills() {
    const res = await fetch("/api/skill");
    const data = await res.json();
    setAllSkills(data.data);
  }

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleSkillChange = (e: any) => {
    if (e.target.name === "skillImg") {
      setskillFormData({
        ...skillFormData,
        skillImg: e.target.files[0],
      });
    } else {
      setskillFormData({
        ...skillFormData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSignout = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  const handleSkill = async () => {
    const form = new FormData();
    form.append("title", skillFormData.skillName);
    form.append("order", skillFormData.skillOrder);
    form.append("image", skillFormData.skillImg);

    try {
      const res = await fetch("/api/skill", {
        method: "POST",
        body: form,
      });

      if (res.ok) {
        console.log("submitted");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                onChange={handleSkillChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="skillImg">Add Image</label>
              <input name="skillImg" type="file" onChange={handleSkillChange} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="skillOrder">Enter Order</label>
              <input
                name="skillOrder"
                type="number"
                className="w-max p-2 border border-black"
                placeholder="enter number"
                onChange={handleSkillChange}
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

        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-5 gap-1 items-center">
            <div className="font-semibold text-lg text-center">ID.</div>
            <div className="font-semibold text-lg text-center">Title</div>
            <div className="font-semibold text-lg text-center">Image URL</div>
            <div className="font-semibold text-lg text-center">Order</div>
            <div className="font-semibold text-lg text-center">Actions</div>
          </div>
          {allSkills.map((eachEle, index) => (
            <div
              key={index}
              className="grid grid-cols-5 gap-1 border border-black p-1 items-center"
            >
              <div className="text-center">{eachEle.id}</div>
              <div className="text-center">{eachEle.title}</div>
              <div className="text-center">
                {eachEle.image ? (
                  <a href={eachEle.image} className="underline text-blue-600">
                    Image URL
                  </a>
                ) : (
                  "-"
                )}
              </div>
              <div className="text-center">{eachEle.order}</div>
              <div className="text-red-800 font-semibold text-center cursor-pointer underline">
                Delete
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* skills section ends */}
    </div>
  );
}
