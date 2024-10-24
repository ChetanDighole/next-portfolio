import { useState, useEffect } from "react"

export default function AdminCertification() {

    //hooks
    const [allCertification, setAllCertification] = useState([])
    const [certificationForm, setCertificationForm] = useState(false)
    const [certificationFormData, setcertificationFormData] = useState({
        certificationName: "",
        certificationOrder: "",
        certificationImg: "",
    });

    // below useEffect is for first render
    useEffect(() => {
        fetchCertification();
    }, []);

    //this function is for debouncing so that unnessary api calls be avoided
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchCertification();
        }, 9000);

        return () => {
            clearTimeout(timer);
        };
    }, [certificationFormData]);


    //functions

    async function fetchCertification() {
        const res = await fetch("/api/certification");
        const data = await res.json();
        setAllCertification(data.data);
    }

    //handle change function
    async function handleCertificationChange(e) {
        if (e.target.name === 'certificationImg') {
            setcertificationFormData({
                ...certificationFormData,
                certificationImg: e.target.files[0]
            })
        } else {
            setcertificationFormData({
                ...certificationFormData,
                [e.target.name]: e.target.value
            })
        }
    }

    //submit function
    async function handleCertication() {
        const form = new FormData();
        form.append("title", certificationFormData.certificationName);
        form.append("order", certificationFormData.certificationOrder);
        form.append("image", certificationFormData.certificationImg);

        try {
            const res = await fetch("/api/certification", {
                method: "POST",
                body: form,
            });

            if (res.status === 200) {
                setcertificationFormData({
                    certificationName: "",
                    certificationOrder: "",
                    certificationImg: "",
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    // delete certification function
    async function deleteCertificationFunc(id) {
        try {
            const res = await fetch(`/api/certification/${id}`, {
                method: "DELETE",
            });

            if (res.status === 200) {
                setcertificationFormData({
                    certificationName: certificationFormData.certificationName,
                    certificationOrder: certificationFormData.certificationOrder,
                    certificationImg: certificationFormData.certificationImg,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex justify-between items-center">
                <div id="skills" className="text-xl font-bold">
                    Add Certification
                </div>
                <button
                    className="bg-blue-500 text-white w-max p-2"
                    onClick={() => setCertificationForm(!certificationForm)}
                >
                    add certification
                </button>
            </div>

            {/* form for skills starts */}
            {certificationForm ? (
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="certificationName">Enter certification name</label>
                        <input
                            name="certificationName"
                            type="text"
                            className="w-max p-2 border border-black"
                            placeholder="enter name"
                            onChange={handleCertificationChange}
                            value={certificationFormData.certificationName}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="certificationImg">Add Image</label>
                        <input name="certificationImg" type="file" onChange={handleCertificationChange} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="certificationOrder">Enter Order</label>
                        <input
                            name="certificationOrder"
                            type="number"
                            className="w-max p-2 border border-black"
                            placeholder="enter number"
                            onChange={handleCertificationChange}
                            value={certificationFormData.certificationOrder}
                        />
                    </div>
                    <button
                        className="bg-blue-500 text-white w-max p-2"
                        onClick={() => handleCertication()}
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
                    <div className="font-semibold text-base md:text-lg text-center">
                        ID.
                    </div>
                    <div className="font-semibold text-base md:text-lg text-center">
                        Title
                    </div>
                    <div className="font-semibold text-base md:text-lg text-center">
                        URL
                    </div>
                    <div className="font-semibold text-base md:text-lg text-center">
                        Order
                    </div>
                    <div className="font-semibold text-base md:text-lg text-center">
                        Actions
                    </div>
                </div>
                {allCertification.map((eachEle, index) => (
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
                        <div
                            className="text-red-800 font-semibold text-center cursor-pointer underline"
                            onClick={() => deleteCertificationFunc(eachEle.id)}
                        >
                            Delete
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}