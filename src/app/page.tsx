import { ServiceCard } from "@/components/Card";
import { LuGraduationCap } from "react-icons/lu";
import { SlGraduation } from "react-icons/sl";
import { CiDumbbell, CiMusicNote1 } from "react-icons/ci";
import { HiOutlineMusicNote } from "react-icons/hi";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col p-4">
            <div className="flex flex-col text-blue-500 text-center gap-3">
                <div className="flex flex-col">
                    <h1 className="text-8xl text-blue-500 font-hindi py-8">
                        सरसनियम
                    </h1>
                    <h2 className="tracking-wider text-4xl">HOME TUITIONS</h2>
                </div>

                <div className="flex flex-row px-12 gap-14 justify-center py-16 ">
                    <ServiceCard
                        link=""
                        title="Personal Trainer"
                        icon={
                            <CiDumbbell
                                size={220}
                                fill={"white"}
                                className="m-auto"
                            />
                        }
                    />
                    <ServiceCard
                        link=""
                        title="Home Tutor"
                        icon={
                            <SlGraduation
                                size={220}
                                color={"white"}
                                className="m-auto py-5"
                            />
                        }
                    />
                    <ServiceCard
                        link=""
                        title="Personal Trainer"
                        icon={
                            <CiMusicNote1
                                size={220}
                                color={"white"}
                                className="m-auto py-4"
                            />
                        }
                    />
                </div>
            </div>
        </main>
    );
}
