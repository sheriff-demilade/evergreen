import Image from "next/image";
import { joinedUsers } from "../lib/constants";
import { bricolageGrotesque } from "./fonts";

const JoinedUsers = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex -space-x-4">
        {joinedUsers.map(({ id, src, width, height }) => (
          <Image
            key={id}
            src={src}
            alt={id}
            width={width}
            height={height}
            className="rounded-full w-10 h-10 border-2 border-white"
          />
        ))}
      </div>
      <div className="">
        <p
          className={`${bricolageGrotesque.className} text-accent-2 text-2xl leading-none tracking-tight font-bold mb-1`}
        >
          50K+
        </p>
        <p className=" text-xs">Joined in already</p>
      </div>
    </div>
  );
};

export default JoinedUsers;
