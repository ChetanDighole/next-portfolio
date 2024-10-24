import { useState } from "react"

export default function AdminCertification() {

    //hooks
    const [allCertification, setAllCertification] = useState([])
    const [certificationForm, setCertificationForm] = useState(false)
    const [certificationFormData, setcertificationFormData] = useState({
        certificationName: "",
        certificationOrder: "",
        certificationImg: "",
    });


    //functions

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

        console.log(certificationFormData)
    }

    //submit function
    async function handleCertication() {
        console.log('submitted')
    }

    // delete certification function
    async function deleteCertificationFunc() {
        console.log('deleted')
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