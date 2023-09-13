import { ServiceCard } from "@/components/Card";
import { SlGraduation } from "react-icons/sl";
import { CiDumbbell, CiMusicNote1 } from "react-icons/ci";

export default function Home() {
    return (
        <main className="flex flex-col p-4">
            <div className="flex flex-col text-blue-500 text-center gap-3">
                <div className="flex flex-col">
                    <h1 className="text-8xl text-blue-500 font-hindi py-8">
                        सरसनियम
                    </h1>
                    <h2 className="tracking-wider text-4xl">HOME TUITIONS</h2>
                </div>

                <div className="flex flex-row px-12 gap-14 justify-center py-16 ">
                    <ServiceCard
                        link="/type/Personal Trainer"
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
                        link="/type/Home Tutor"
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
                        link="/type/Music Teacher"
                        title="Music Teacher"
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
