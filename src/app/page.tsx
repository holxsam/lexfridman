import { SocialMedia } from "@/components/SocialMedia/SocialMedia";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { Research } from "@/components/Research/Research";

export default function Home() {
  return (
    <div className="isolate flex flex-col gap-16 pb-16">
      <HeroSection />
      <SocialMedia />
      <Research />
    </div>
  );
}

const Lorem = ({ num = 10 }: { num?: number }) => {
  return (
    <>
      {[...Array(num).keys()].map((i) => (
        <div key={i}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          assumenda voluptas quis unde eligendi facilis fugiat reprehenderit
          molestiae, praesentium provident porro obcaecati odit nam doloremque,
          fuga distinctio sint laudantium cumque neque enim odio modi. Illum ex
          repudiandae consequatur est facilis et quis non ea. Placeat tempore
          similique cumque, earum mollitia nihil, asperiores dolore dicta ex
          provident culpa doloremque esse ratione accusantium optio cupiditate,
          tempora doloribus sed. Ducimus ipsa dolore maiores quaerat.
          Consectetur eius ut modi perspiciatis, placeat nemo dignissimos omnis
          beatae recusandae cum soluta nam suscipit repellendus alias repellat
          ab temporibus rerum reprehenderit aliquid deserunt maxime sapiente
          voluptatibus natus. Voluptatum?
        </div>
      ))}
    </>
  );
};
