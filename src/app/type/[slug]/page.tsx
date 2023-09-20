import { ServiceCard } from "@/components/Card";
import { LuMonitorPlay } from "react-icons/lu";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

export default function Page() {
    return (
        <main className="flex flex-col p-4">
            <div className="flex flex-col text-blue-500 text-center gap-3">
                <div className="flex flex-col items-end p-12">
                    <p className="text-5xl text-blue-500 font-hindi">सरसनियम</p>
                    <p className="tracking-wider text-2xl">HOME TUITIONS</p>
                </div>
            </div>
            <div className="m-auto flex flex-row justify-evenly w-full py-16">
                <ServiceCard
                    icon={
                        <LiaChalkboardTeacherSolid
                            size={250}
                            color={"white"}
                            className="m-auto py-10"
                        />
                    }
                    title="Offline"
                    link=""
                />
                <ServiceCard
                    link=""
                    icon={
                        <LuMonitorPlay
                            size={250}
                            color={"white"}
                            className="m-auto py-10"
                        />
                    }
                    title="Online"
                />
            </div>
        </main>
    );
}
