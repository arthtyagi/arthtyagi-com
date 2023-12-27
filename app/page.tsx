import Hero from "@/components/Hero";
export default function MyComponent() {
  return (
    <div className="flex flex-col items-stretch pt-7 pb-12 px-20 max-md:px-5">
      <div className="mt-14 mb-44 max-md:max-w-full max-md:mr-0.5 max-md:my-10">
        <Hero />
      </div>
    </div>
  );
}
