import Particles from "@/components/Particles";
import Cubes from "@/components/Cubes";
import SplitText from "@/components/SplitText";
import TargetCursor from "@/components/TargetCursor";
import TrueFocus from "@/components/TrueFocus";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      <TargetCursor />
      <Particles
        className="absolute inset-0 z-0"
        quantity={500}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <SplitText text="Stake, Stack!" tag="h1" className="text-6xl font-bold text-white mb-8 cursor-target" />
        <div className="cursor-target">
          <Cubes gridSize={3} cubeSize={50} faceColor={"rgba(255, 255, 255, 0.8)"} shadow={'0 0 10px rgba(255, 255, 255, 0.8)'} />
        </div>
        <div className="mt-16">
          <Link href="/play">
            <TrueFocus sentence="PLAY" manualMode={true} borderColor={"#ffffff"} glowColor={"rgba(255, 255, 255, 0.8)"} />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center">
        <TrueFocus sentence="Stack. Stake. Dominate." manualMode={true} borderColor={"#ffffff"} glowColor={"rgba(255, 255, 255, 0.8)"} fontSize="1.5rem" />
      </div>
    </div>
  );
}