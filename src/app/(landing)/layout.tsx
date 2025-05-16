import { Navbar } from "@/components";
import { SideBar } from "@/components/navbar/SideBar";

export default function LandingPage({ children }: {
    children: React.ReactNode;
}) {

    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <div className="px-0 sm:px-10">
                    {children}
                </div>
            </main>
        </>
    );
}

